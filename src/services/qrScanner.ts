import { BarcodeScanner } from '@capacitor-community/barcode-scanner'
import { Capacitor } from '@capacitor/core'

export interface ScanResult {
  text: string
  format: string
}

export class QRScannerService {
  static async requestPermissions(): Promise<boolean> {
    try {
      if (!Capacitor.isNativePlatform()) {
        console.log('Not running on native platform, skipping permissions')
        return false
      }

      const status = await BarcodeScanner.checkPermission({ force: true })
      
      if (status.granted) {
        return true
      }

      if (status.denied) {
        // Permission was denied, show instructions to user
        alert('Camera permission is required to scan QR codes. Please enable it in your device settings.')
        return false
      }

      return false
    } catch (error) {
      console.error('Error requesting camera permissions:', error)
      return false
    }
  }

  static async startScan(): Promise<ScanResult | null> {
    try {
      if (!Capacitor.isNativePlatform()) {
        // For web testing, return mock data
        return {
          text: 'FEEDBACK_QR_12345_STALL_23_FARMER_RAMESH',
          format: 'QR_CODE'
        }
      }

      const hasPermission = await this.requestPermissions()
      if (!hasPermission) {
        return null
      }

      // Hide background to show camera
      document.body.classList.add('scanner-active')
      await BarcodeScanner.hideBackground()

      const result = await BarcodeScanner.startScan()
      
      // Show background again
      document.body.classList.remove('scanner-active')
      await BarcodeScanner.showBackground()

      if (result.hasContent) {
        return {
          text: result.content,
          format: result.format || 'QR_CODE'
        }
      }

      return null
    } catch (error) {
      console.error('Error during QR scan:', error)
      // Ensure background is shown again on error
      document.body.classList.remove('scanner-active')
      await BarcodeScanner.showBackground()
      return null
    }
  }

  static async stopScan(): Promise<void> {
    try {
      document.body.classList.remove('scanner-active')
      await BarcodeScanner.stopScan()
      await BarcodeScanner.showBackground()
    } catch (error) {
      console.error('Error stopping scan:', error)
    }
  }

  static parseFeedbackQR(qrContent: string): {
    type: string
    stallId?: string
    farmerId?: string
    productId?: string
    feedbackId?: string
  } | null {
    try {
      // Parse QR format: FEEDBACK_QR_{ID}_STALL_{STALL_ID}_FARMER_{FARMER_NAME}
      const parts = qrContent.split('_')
      
      if (parts[0] === 'FEEDBACK' && parts[1] === 'QR') {
        return {
          type: 'feedback',
          feedbackId: parts[2],
          stallId: parts[4],
          farmerId: parts[6]
        }
      }

      // Parse QR format: PRODUCT_QR_{PRODUCT_ID}_STALL_{STALL_ID}
      if (parts[0] === 'PRODUCT' && parts[1] === 'QR') {
        return {
          type: 'product',
          productId: parts[2],
          stallId: parts[4]
        }
      }

      // Unknown QR format
      return {
        type: 'unknown'
      }
    } catch (error) {
      console.error('Error parsing QR content:', error)
      return null
    }
  }
}