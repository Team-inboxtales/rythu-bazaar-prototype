import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FarmerDashboard from "./pages/FarmerDashboard";
import PublicInfo from "./pages/PublicInfo";
import Operations from "./pages/Operations";
import PriceDisplay from "./pages/PriceDisplay";
import Reports from "./pages/Reports";
import Training from "./pages/Training";
import MobileView from "./pages/MobileView";
import Settings from "./pages/Settings";
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
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/price-display" element={<PriceDisplay />} />
          <Route path="/public-info" element={<PublicInfo />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/training" element={<Training />} />
          <Route path="/mobile" element={<MobileView />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
