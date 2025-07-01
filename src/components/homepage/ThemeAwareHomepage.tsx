
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeSelection } from '@/hooks/useThemeSelection';
import { ThemeSelectionModal } from '@/components/theme/ThemeSelectionModal';
import { ErrorBoundary, ThemeErrorFallback } from '@/components/layout/ErrorBoundary';
import Index from '@/pages/Index';
import NewIndex from '@/pages/NewIndex';
import MainLayout from '@/components/layouts/MainLayout';
import { ImmersiveHero } from '@/components/hero/ImmersiveHero';
import { FloatingHero } from '@/components/hero/FloatingHero';
import { VideoHeroSection } from '@/components/hero/VideoHeroSection';
import { CinematicHero } from '@/components/hero/CinematicHero';
import UltimateHero from '@/components/hero/UltimateHero';
import { ImpactMetricsSection } from '@/components/homepage/redesign/ImpactMetricsSection';
import { ProgramsJourneySection } from '@/components/homepage/redesign/ProgramsJourneySection';
import { StartupEcosystemSection } from '@/components/homepage/redesign/StartupEcosystemSection';
import { SEFHighlightSection } from '@/components/homepage/redesign/SEFHighlightSection';
import { CommunityPartnersSection } from '@/components/homepage/redesign/CommunityPartnersSection';
import { WhySharjahSection } from '@/components/homepage/sections/WhySharjahSection';
import { ReadyToStartSection } from '@/components/homepage/sections/ReadyToStartSection';
import { CyclingStickyCornerCTA } from '@/components/ui/cycling-sticky-cta';
import { ThemeSelector } from '@/components/theme/ThemeSelector';

const ImmersiveHomepage: React.FC = () => (
  <MainLayout>
    <ImmersiveHero />
    <ImpactMetricsSection />
    <ProgramsJourneySection />
    <StartupEcosystemSection />
    <SEFHighlightSection />
    <CommunityPartnersSection />
    <WhySharjahSection />
    <ReadyToStartSection />
    <CyclingStickyCornerCTA />
    <ThemeSelector />
  </MainLayout>
);

const FloatingHomepage: React.FC = () => (
  <MainLayout>
    <div className="min-h-screen">
      <FloatingHero />
    </div>
    <ImpactMetricsSection />
    <ProgramsJourneySection />
    <StartupEcosystemSection />
    <SEFHighlightSection />
    <CommunityPartnersSection />
    <WhySharjahSection />
    <ReadyToStartSection />
    <CyclingStickyCornerCTA />
    <ThemeSelector />
  </MainLayout>
);

const VideoHomepage: React.FC = () => (
  <MainLayout>
    <VideoHeroSection />
    <ImpactMetricsSection />
    <ProgramsJourneySection />
    <StartupEcosystemSection />
    <SEFHighlightSection />
    <CommunityPartnersSection />
    <WhySharjahSection />
    <ReadyToStartSection />
    <CyclingStickyCornerCTA />
    <ThemeSelector />
  </MainLayout>
);

const CinematicHomepage: React.FC = () => (
  <MainLayout>
    <CinematicHero />
    <ImpactMetricsSection />
    <ProgramsJourneySection />
    <StartupEcosystemSection />
    <SEFHighlightSection />
    <CommunityPartnersSection />
    <WhySharjahSection />
    <ReadyToStartSection />
    <CyclingStickyCornerCTA />
    <ThemeSelector />
  </MainLayout>
);

const UltimateHomepage: React.FC = () => (
  <MainLayout className="sheraa-gradient-bg">
    <UltimateHero />
    <div className="bg-white dark:bg-sheraa-dark">
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <StartupEcosystemSection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <WhySharjahSection />
      <ReadyToStartSection />
    </div>
    <CyclingStickyCornerCTA />
    <ThemeSelector />
  </MainLayout>
);

export const ThemeAwareHomepage: React.FC = () => {
  const { currentTheme } = useTheme();
  const { showThemeModal, setShowThemeModal } = useThemeSelection();
  
  const renderHomepage = () => {
    try {
      switch (currentTheme) {
        case 'corporate':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <Index />
            </ErrorBoundary>
          );
        case 'dynamic':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <NewIndex />
            </ErrorBoundary>
          );
        case 'immersive':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <ImmersiveHomepage />
            </ErrorBoundary>
          );
        case 'floating':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <FloatingHomepage />
            </ErrorBoundary>
          );
        case 'video':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <VideoHomepage />
            </ErrorBoundary>
          );
        case 'cinematic':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <CinematicHomepage />
            </ErrorBoundary>
          );
        case 'ultimate':
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <UltimateHomepage />
            </ErrorBoundary>
          );
        default:
          return (
            <ErrorBoundary fallback={ThemeErrorFallback}>
              <UltimateHomepage />
            </ErrorBoundary>
          );
      }
    } catch (error) {
      console.error('Error rendering theme:', error);
      return (
        <ErrorBoundary fallback={ThemeErrorFallback}>
          <UltimateHomepage />
        </ErrorBoundary>
      );
    }
  };

  return (
    <ErrorBoundary fallback={ThemeErrorFallback}>
      {renderHomepage()}
      <ThemeSelectionModal 
        isOpen={showThemeModal} 
        onClose={() => setShowThemeModal(false)} 
      />
    </ErrorBoundary>
  );
};
