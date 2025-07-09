import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import DashboardPage from "@/pages/dashboard/DashboardPage";
import InsightsRouter from "@/pages/insights/InsightsRouter";
import ProfilePage from "@/pages/profile/ProfilePage";
import ProfileSetupPage from "@/pages/profile/ProfileSetupPage";
import BlogPage from "@/pages/blog/index";
import PodcastPage from "@/pages/podcast/index";
import ReportsPage from "@/pages/reports/index";
import ImpactReportPage from "@/pages/impact-report/index";
import CommunityFeedPage from "@/pages/feed/index";
import Contact from "@/pages/contact/index";
import CareersPage from "@/pages/careers/index";
import EligibilityPage from "@/pages/eligibility/EligibilityCheckerPage";
import PrivacyPolicyPage from "@/pages/privacy-policy/index";
import TermsOfUsePage from "@/pages/terms-of-use/index";
import PerfumePage from "@/pages/perfume/index";
import PerfumeAboutPage from "@/pages/perfume/about/index";
import PerfumeBuyPage from "@/pages/perfume/buy/index";
import PerfumeGalleryPage from "@/pages/perfume/gallery/index";
import PerfumePricingPage from "@/pages/perfume/pricing/index";

export const CoreRoutes = () => (
  <>
    {/* Dashboard Route */}
    <Route path="/dashboard" element={<DashboardPage />} />
    
    {/* Insights Routes (renamed from Resources) */}
    <Route path="/insights/*" element={<InsightsRouter />} />
    
    {/* Legacy Resources redirects */}
    <Route path="/resources" element={<Navigate to="/insights" replace />} />
    <Route path="/resources/*" element={<Navigate to="/insights" replace />} />
    <Route path="/resources/impact-reports" element={<Navigate to="/insights/impact-reports" replace />} />
    
    {/* Profile Routes */}
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/profile/setup" element={<ProfileSetupPage />} />
    
    {/* Content & Media Routes */}
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/podcast" element={<PodcastPage />} />
    <Route path="/reports" element={<ReportsPage />} />
    <Route path="/feed" element={<CommunityFeedPage />} />
    
    {/* Impact Report Route */}
    <Route path="/impact-report" element={<ImpactReportPage />} />
    
    {/* Core Pages */}
    <Route path="/contact" element={<Contact />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/eligibility" element={<EligibilityPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
    
    {/* Perfume Routes */}
    <Route path="/perfume" element={<PerfumePage />} />
    <Route path="/perfume/about" element={<PerfumeAboutPage />} />
    <Route path="/perfume/buy" element={<PerfumeBuyPage />} />
    <Route path="/perfume/gallery" element={<PerfumeGalleryPage />} />
    <Route path="/perfume/pricing" element={<PerfumePricingPage />} />
    
    {/* Legacy redirects for backwards compatibility */}
    <Route path="/profile-setup" element={<Navigate to="/profile/setup" replace />} />
    <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
    <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
  </>
);