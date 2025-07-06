import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import StakeholderNavigation from "@/components/v3/stakeholders/StakeholderNavigation";
import StakeholderHeroSection from "@/components/v3/stakeholders/StakeholderHeroSection";
import InvestmentDashboard from "@/components/v3/stakeholders/InvestmentDashboard";
import GovernmentPartnership from "@/components/v3/stakeholders/GovernmentPartnership";

const StakeholdersIndex: React.FC = () => {
  return (
    <MainLayout>
      <StakeholderNavigation />
      <StakeholderHeroSection />
      <InvestmentDashboard />
      <GovernmentPartnership />
    </MainLayout>
  );
};

export default StakeholdersIndex;