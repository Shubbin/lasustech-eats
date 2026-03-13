import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import MainLayout from "@/components/layout/MainLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";

import HomePage from "@/pages/HomePage";
import VendorListPage from "@/pages/VendorListPage";
import VendorMenuPage from "@/pages/VendorMenuPage";
import FoodDetailPage from "@/pages/FoodDetailPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderTrackingPage from "@/pages/OrderTrackingPage";
import OrderHistoryPage from "@/pages/OrderHistoryPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProfilePage from "@/pages/ProfilePage";

import StudentDashboard from "@/pages/dashboards/StudentDashboard";
import VendorDashboard from "@/pages/dashboards/VendorDashboard";
import VendorMenuManagement from "@/pages/dashboards/VendorMenuManagement";
import VendorOrdersPage from "@/pages/dashboards/VendorOrdersPage";
import VendorReviewsPage from "@/pages/dashboards/VendorReviewsPage";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import AdminVendorManagement from "@/pages/dashboards/AdminVendorManagement";
import AdminOrderMonitoring from "@/pages/dashboards/AdminOrderMonitoring";
import AdminReportsPage from "@/pages/dashboards/AdminReportsPage";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth pages (no layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Main layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vendors" element={<VendorListPage />} />
            <Route path="/vendors/:id" element={<VendorMenuPage />} />
            <Route path="/food/:foodId" element={<FoodDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/:orderId/tracking" element={<OrderTrackingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Dashboard layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/dashboard/vendor" element={<VendorDashboard />} />
            <Route path="/dashboard/vendor/menu" element={<VendorMenuManagement />} />
            <Route path="/dashboard/vendor/orders" element={<VendorOrdersPage />} />
            <Route path="/dashboard/vendor/reviews" element={<VendorReviewsPage />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/vendors" element={<AdminVendorManagement />} />
            <Route path="/dashboard/admin/orders" element={<AdminOrderMonitoring />} />
            <Route path="/dashboard/admin/reports" element={<AdminReportsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
