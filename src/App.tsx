import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthDemo from "./pages/AuthDemo";

// Lawyer Module Components
import LawyerLayout from "./components/lawyer/LawyerLayout";
import LawyerDashboard from "./components/lawyer/LawyerDashboard";
import ProfileManagement from "./components/lawyer/ProfileManagement";
import JobApplications from "./components/lawyer/JobApplications";
import CaseManagement from "./components/lawyer/CaseManagement";
import ChatInterface from "./components/lawyer/ChatInterface";
import AppointmentManagement from "./components/lawyer/AppointmentManagement";
import ContractManagement from "./components/lawyer/ContractManagement";
import ClientOnboarding from "./components/lawyer/ClientOnboarding";
import DocumentManagement from "./components/lawyer/DocumentManagement";
import BillingInvoicing from "./components/lawyer/BillingInvoicing";
import HRManagement from "./components/lawyer/HRManagement";
import ReportsAnalytics from "./components/lawyer/ReportsAnalytics";
import Settings from "./components/lawyer/Settings";

// SuperAdmin Module Components
import SuperAdminLayout from "./components/superadmin/SuperAdminLayout";
import SuperAdminDashboard from "./components/superadmin/SuperAdminDashboard";
import UserManagement from "./components/superadmin/UserManagement";
import HRManagement from "./components/superadmin/HRManagement";
import SubscriptionManagement from "./components/superadmin/SubscriptionManagement";
import SystemConfiguration from "./components/superadmin/SystemConfiguration";
import DisputeResolution from "./components/superadmin/DisputeResolution";
import PaymentsRevenue from "./components/superadmin/PaymentsRevenue";
import CaseOversight from "./components/superadmin/CaseOversight";
import ContentCMS from "./components/superadmin/ContentCMS";

// Client Module Components
import ClientPortal from "./components/client/ClientPortal";

// Auth Components
import ClientLoginForm from "./components/auth/ClientLoginForm";
import ClientSignupForm from "./components/auth/ClientSignupForm";
import LawyerSignupProcess from "./components/auth/LawyerSignupProcess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth-demo" element={<AuthDemo />} />
          
          {/* Lawyer Module Routes */}
          <Route path="/lawyer" element={<LawyerLayout />}>
            <Route index element={<LawyerDashboard />} />
            <Route path="profile" element={<ProfileManagement />} />
            <Route path="applications" element={<JobApplications />} />
            <Route path="cases" element={<CaseManagement />} />
            <Route path="chat" element={<ChatInterface />} />
            <Route path="appointments" element={<AppointmentManagement />} />
            <Route path="contracts" element={<ContractManagement />} />
            <Route path="onboarding" element={<ClientOnboarding />} />
            <Route path="documents" element={<DocumentManagement />} />
            <Route path="billing" element={<BillingInvoicing />} />
            <Route path="hr" element={<HRManagement />} />
            <Route path="reports" element={<ReportsAnalytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* SuperAdmin Module Routes */}
          <Route path="/superadmin" element={<SuperAdminLayout />}>
            <Route index element={<SuperAdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="hr" element={<HRManagement />} />
            <Route path="subscriptions" element={<SubscriptionManagement />} />
            <Route path="config" element={<SystemConfiguration />} />
            <Route path="disputes" element={<DisputeResolution />} />
            <Route path="payments" element={<PaymentsRevenue />} />
            <Route path="cases" element={<CaseOversight />} />
            <Route path="content" element={<ContentCMS />} />
          </Route>
          
          {/* Client Module Routes */}
          <Route path="/client" element={<ClientPortal />} />
          
          {/* Auth Routes */}
          <Route path="/client/login" element={<ClientLoginForm />} />
          <Route path="/client/signup" element={<ClientSignupForm />} />
          <Route path="/lawyer/signup" element={<LawyerSignupProcess />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
