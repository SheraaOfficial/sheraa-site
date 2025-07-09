import React from 'react';
import { Route } from 'react-router-dom';
import ProgramsPage from "@/pages/programs/index";
import S3IncubatorPage from "@/pages/programs/S3IncubatorPage";
import S3IncubatorApplicationPage from "@/pages/programs/s3-incubator/S3IncubatorApplicationPage";
import StartupDojoPage from "@/pages/programs/StartupDojoPage";
import StartupDojoPlusPage from "@/pages/programs/startup-dojo-plus/index";
import StartYoungPage from "@/pages/programs/start-young/index";
import AccessSharjahChallengePage from "@/pages/programs/AccessSharjahChallengePage";
import DealDockPage from "@/pages/programs/DealDockPage";
import SMESupportPage from "@/pages/programs/SMESupportPage";
import DealDockApplyPage from "@/pages/programs/deal-dock/DealDockApplyPage";
import DealDockInvestorApplyPage from "@/pages/programs/deal-dock/DealDockInvestorApplyPage";
import StartupDojoApplyPage from "@/pages/programs/startup-dojo/StartupDojoApplyPage";
import AccessSharjahChallengeApplyPage from "@/pages/programs/access-sharjah/AccessSharjahChallengeApplyPage";

export const ProgramsRoutes = () => (
  <>
    <Route path="/programs" element={<ProgramsPage />} />
    
    {/* S3 Incubator Routes */}
    <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
    <Route path="/programs/s3-incubator/apply" element={<S3IncubatorApplicationPage />} />
    
    {/* Startup Dojo Routes */}
    <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
    <Route path="/programs/startup-dojo/apply" element={<StartupDojoApplyPage />} />
    
    {/* Other Program Routes */}
    <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlusPage />} />
    <Route path="/programs/start-young" element={<StartYoungPage />} />
    
    {/* Access Sharjah Challenge Routes */}
    <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallengePage />} />
    <Route path="/programs/access-sharjah-challenge/apply" element={<AccessSharjahChallengeApplyPage />} />
    
    {/* Deal Dock Routes */}
    <Route path="/programs/deal-dock" element={<DealDockPage />} />
    <Route path="/programs/deal-dock/apply" element={<DealDockApplyPage />} />
    <Route path="/programs/deal-dock/investor-apply" element={<DealDockInvestorApplyPage />} />
    
    <Route path="/programs/sme-support" element={<SMESupportPage />} />
  </>
);
