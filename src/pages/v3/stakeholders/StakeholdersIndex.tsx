import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import StakeholderNavigation from "@/components/v3/stakeholders/StakeholderNavigation";
import { EnhancedHeroSystem } from "@/components/v3/enhanced/EnhancedHeroSystems";
import InvestmentDashboard from "@/components/v3/stakeholders/InvestmentDashboard";
import AdvancedStakeholderFeatures from "@/components/v3/stakeholders/AdvancedStakeholderFeatures";
import GovernmentPartnership from "@/components/v3/stakeholders/GovernmentPartnership";
import { MagneticCursor } from "@/components/v3/modern/MagneticCursor";
import { BrutalistGlassmorphism } from "@/components/v3/modern/BrutalistGlassmorphism";
import { EnhancedMobileOptimizations } from "@/components/v3/mobile/EnhancedMobileOptimizations";

const StakeholdersIndex: React.FC = () => {
  return (
    <EnhancedMobileOptimizations>
      <MagneticCursor>
        <MainLayout>
          <StakeholderNavigation />
          <EnhancedHeroSystem persona="stakeholder" />
          <BrutalistGlassmorphism>
            <InvestmentDashboard />
            <AdvancedStakeholderFeatures />
            <GovernmentPartnership />
          </BrutalistGlassmorphism>
        </MainLayout>
      </MagneticCursor>
    </EnhancedMobileOptimizations>
  );
};

export default StakeholdersIndex;