import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FarmerPortal from "./pages/FarmerPortal";
import AdminPortal from "./pages/AdminPortal";
import FarmerDashboard from "./pages/FarmerDashboard";
import PublicInfo from "./pages/PublicInfo";
import Operations from "./pages/Operations";
import Inventory from "./pages/Inventory";
import PriceDisplay from "./pages/PriceDisplay";
import Reports from "./pages/Reports";
import Training from "./pages/Training";
import MobileView from "./pages/MobileView";
import Settings from "./pages/Settings";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import EmployeeProfile from "./pages/EmployeeProfile";
import LeaveManagement from "./pages/LeaveManagement";
import AttendanceOverview from "./pages/AttendanceOverview";
import HRSettings from "./pages/HRSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farmer-portal" element={<FarmerPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/price-display" element={<PriceDisplay />} />
          <Route path="/public-info" element={<PublicInfo />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/training" element={<Training />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
          <Route path="/employee-profile/:id" element={<EmployeeProfile />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/attendance-overview" element={<AttendanceOverview />} />
          <Route path="/hr-settings" element={<HRSettings />} />
          <Route path="/mobile" element={<MobileView />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
