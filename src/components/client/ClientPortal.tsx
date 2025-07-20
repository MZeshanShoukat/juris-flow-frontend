import { useState } from "react";
import ClientPortalLayout from "./ClientPortalLayout";
import ClientDashboard from "../dashboard/ClientDashboard";
import ProfileManagement from "./ProfileManagement";
import JobPosting from "./JobPosting";
import ChatInterface from "./ChatInterface";
import AppointmentManagement from "./AppointmentManagement";
import CaseOverview from "./CaseOverview";
import BillingPayments from "./BillingPayments";
import DocumentAccess from "./DocumentAccess";

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <ClientDashboard />;
      case "profile":
        return <ProfileManagement />;
      case "post-job":
        return <JobPosting />;
      case "messages":
        return <ChatInterface />;
      case "appointments":
        return <AppointmentManagement />;
      case "cases":
        return <CaseOverview />;
      case "billing":
        return <BillingPayments />;
      case "documents":
        return <DocumentAccess />;
      default:
        return <ClientDashboard />;
    }
  };

  return (
    <ClientPortalLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </ClientPortalLayout>
  );
};

export default ClientPortal;