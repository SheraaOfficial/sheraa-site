
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { ProgramsHeroSection } from "@/components/programs/ProgramsHeroSection";
import { ProgramsOverviewSection } from "@/components/programs/ProgramsOverviewSection";
import { ProgramsPathwaySection } from "@/components/programs/ProgramsPathwaySection";
import { ProgramsTestimonialsSection } from "@/components/programs/ProgramsTestimonialsSection";
import { ProgramsCTASection } from "@/components/programs/ProgramsCTASection";

const ProgramsPage: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      <ProgramsHeroSection />
      <ProgramsOverviewSection />
      <ProgramsPathwaySection />
      <ProgramsTestimonialsSection />
      <ProgramsCTASection />
    </MainLayout>
  );
};

export default ProgramsPage;
