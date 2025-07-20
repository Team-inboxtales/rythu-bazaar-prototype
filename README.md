# Agricultural Marketplace Management System

A comprehensive web application for managing agricultural marketplace operations, including farmer portals, admin dashboards, HR management, and inventory control.

## 🌟 Features Overview

This application provides two main portals:
- **Admin Portal**: Complete management system for marketplace operations
- **Farmer Portal**: Dedicated interface for farmers to manage their stalls and sales

## 📱 Application Routes & Pages

### Public Routes
- `/` - **Landing Page**: Main entry point with navigation to different portals
- `/login` - **Login Page**: Authentication for users
- `/public-info` - **Public Information**: General marketplace information
- `/price-display` - **Price Display**: Current market prices for visitors

### Admin Portal Routes
- `/dashboard` - **Admin Dashboard**: Overview of marketplace operations, statistics, and quick actions
- `/employee-directory` - **Employee Directory**: ✅ **FULLY FUNCTIONAL** - Manage all marketplace employees
- `/leave-management` - **Leave Management**: ⚠️ **PARTIALLY FUNCTIONAL** - Employee leave requests and approvals  
- `/training` - **Training Hub**: ⚠️ **PARTIALLY FUNCTIONAL** - Employee training programs and courses
- `/inventory` - **Inventory Management**: ✅ **FULLY FUNCTIONAL** - Stock management and tracking
- `/attendance-overview` - **Attendance**: 🔄 **VIEW ONLY** - Employee attendance tracking
- `/reports` - **Reports**: 🔄 **VIEW ONLY** - Analytics and reporting dashboard
- `/operations` - **Operations**: 🔄 **VIEW ONLY** - Daily operational management
- `/settings` - **Settings**: 🔄 **VIEW ONLY** - System configuration
- `/hr-dashboard` - **HR Dashboard**: 🔄 **VIEW ONLY** - HR-specific metrics and tools
- `/hr-settings` - **HR Settings**: 🔄 **VIEW ONLY** - HR configuration options
- `/admin-portal` - **Admin Portal Hub**: Central admin navigation

### Farmer Portal Routes
- `/farmer` - **Farmer Dashboard**: ✅ **FULLY FUNCTIONAL** - Farmer's main dashboard with sales, prices, and feedback
- `/farmer-portal` - **Farmer Portal Hub**: Central farmer navigation
- `/mobile-view` - **Mobile View**: Mobile-optimized farmer interface

### Error Routes
- `/404` - **Not Found**: Error page for invalid routes

## ✅ Currently Working Features

### Employee Directory (`/employee-directory`)
**FULLY FUNCTIONAL CRUD OPERATIONS:**
- ➕ **Add Employee**: Click "Add Employee" button to create new employee records
- ✏️ **Edit Employee**: Click edit icon on any employee card to modify details
- 🗑️ **Delete Employee**: Click delete icon to remove employees (with confirmation)
- 🔍 **Search & Filter**: Real-time search by name, role, or department
- 📊 **Live Statistics**: Auto-updating counts and department breakdowns
- 💾 **Data Persistence**: All changes saved to browser localStorage

### Inventory Management (`/inventory`)
**FULLY FUNCTIONAL CRUD OPERATIONS:**
- ➕ **Add Items**: Click "Add Item" button to create new inventory entries
- ✏️ **Edit Items**: Click edit icon to modify item details
- 🗑️ **Delete Items**: Click delete icon to remove items (with confirmation)
- 🔍 **Search & Filter**: Real-time search by name, category, or supplier
- 📊 **Live Statistics**: Auto-updating stock levels and category counts
- 📋 **Category Tabs**: Filter by vegetables, fruits, grains
- ⚠️ **Status Tracking**: Automatic in-stock/low-stock/out-of-stock status
- 💾 **Data Persistence**: All changes saved to browser localStorage

### Farmer Dashboard (`/farmer`)
**VIEW FUNCTIONALITY:**
- 📈 Daily market prices with trend indicators
- 💰 Sales tracking and revenue summaries
- ⭐ Customer feedback and ratings
- 📦 Basic inventory overview
- 📱 QR code generation for stall

## ⚠️ Partially Working Features

### Leave Management (`/leave-management`)
**IMPLEMENTED:**
- 📝 Leave request form structure
- 📊 Statistics cards
- 📅 Calendar view layout

**PENDING:**
- ➕ Submit leave requests
- ✅ Approve/reject requests
- 📧 Notification system
- 📊 Leave balance tracking

### Training Hub (`/training`)
**IMPLEMENTED:**
- 📚 Course catalog display
- 📺 Session listings
- 📈 Progress tracking layout

**PENDING:**
- ➕ Add new courses
- 📅 Schedule sessions
- 📊 Completion tracking
- 🎓 Certificate generation

## 🔄 View-Only Pages

These pages display static data and don't have CRUD functionality yet:
- Dashboard statistics and charts
- Reports and analytics
- Attendance tracking
- Operations management
- Settings configuration
- HR dashboards

## 🛠️ Technical Implementation

### Frontend Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components
- **React Router** for navigation
- **Lucide React** for icons

### Data Management
- **localStorage** for data persistence
- **Custom hooks** for CRUD operations
- **Form validation** with proper error handling
- **Toast notifications** for user feedback

### Key Custom Hooks
- `useEmployees()` - Employee CRUD operations
- `useInventory()` - Inventory management  
- `useLeaveRequests()` - Leave management
- `useTraining()` - Training and courses
- `useLocalStorage()` - Data persistence utility

## 🚀 Getting Started

1. Navigate to the home page (`/`)
2. Choose your portal (Admin or Farmer)
3. Use the fully functional Employee Directory to see CRUD operations in action
4. Try the Inventory Management for stock control
5. Explore other pages to see the UI layouts (some buttons are still placeholders)

## 📝 Current Status Summary

| Feature | Status | CRUD Operations |
|---------|--------|-----------------|
| Employee Directory | ✅ Complete | ✅ All working |
| Inventory Management | ✅ Complete | ✅ All working |
| Farmer Dashboard | ✅ Complete | 🔍 Read-only |
| Leave Management | ⚠️ Partial | 📝 Forms only |
| Training | ⚠️ Partial | 📋 Display only |
| Other Pages | 🔄 View-only | ❌ None |

## 🔮 Next Steps

To make all buttons responsive and complete the CRUD operations:

1. **Complete Leave Management**: Implement approval workflow and CRUD operations
2. **Finish Training Hub**: Add course and session management with full CRUD
3. **Add Dashboard Interactions**: Make statistics clickable and actionable
4. **Implement Reports**: Add filtering and export functionality
5. **Add Real-time Features**: Notifications, live updates, etc.

## 💡 Usage Tips

- **Data Persistence**: All data is stored in browser localStorage and persists between sessions
- **Responsive Design**: The application works on desktop, tablet, and mobile devices
- **Search & Filter**: Most list views include real-time search functionality
- **Form Validation**: All forms include proper validation and error messages
- **Toast Notifications**: Success/error messages appear for all operations


### Technologies Used
- Vite
- TypeScript  
- React
- shadcn-ui
- Tailwind CSS


*This is a functional prototype with working CRUD operations for employee and inventory management. Other features show the intended interface and are ready for implementation.*
