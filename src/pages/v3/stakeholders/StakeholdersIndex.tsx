import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import StakeholderNavigation from "@/components/v3/stakeholders/StakeholderNavigation";
import StakeholderHeroSection from "@/components/v3/stakeholders/StakeholderHeroSection";
import InvestmentDashboard from "@/components/v3/stakeholders/InvestmentDashboard";
import AdvancedStakeholderFeatures from "@/components/v3/stakeholders/AdvancedStakeholderFeatures";
import GovernmentPartnership from "@/components/v3/stakeholders/GovernmentPartnership";

const StakeholdersIndex: React.FC = () => {
  return (
    <MainLayout>
      <StakeholderNavigation />
      <StakeholderHeroSection />
      <InvestmentDashboard />
      <AdvancedStakeholderFeatures />
      <GovernmentPartnership />
    </MainLayout>
  );
};

export default StakeholdersIndex;