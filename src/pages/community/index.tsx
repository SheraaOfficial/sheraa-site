
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { AnimatedHero } from "./components/AnimatedHero";
import { AnimatedStats } from "./components/AnimatedStats";
import { CommunityOptions } from "./components/CommunityOptions";
import { EnhancedCTA } from "./components/EnhancedCTA";

const CommunityPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative bg-white dark:bg-sheraa-dark min-h-screen">
        <AnimatedHero />
        <AnimatedStats />
        <CommunityOptions />
        <EnhancedCTA />
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
