export interface ScanResult {
  text: string
  format: string
}

export class QRScannerService {
  static async requestPermissions(): Promise<boolean> {
    // Web-only implementation - always return true for mock functionality
    console.log('Web platform detected, using mock QR scanner')
    return true
  }

  static async startScan(): Promise<ScanResult | null> {
    try {
      // Web-only mock implementation
      console.log('Starting mock QR scan...')
      
      // Simulate scanning delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Return mock QR data for testing
      return {
        text: 'FEEDBACK_QR_12345_STALL_23_FARMER_RAMESH',
        format: 'QR_CODE'
      }
    } catch (error) {
      console.error('Error during mock QR scan:', error)
      return null
    }
  }

  static async stopScan(): Promise<void> {
    // Web-only implementation - no action needed
    console.log('Mock QR scan stopped')
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