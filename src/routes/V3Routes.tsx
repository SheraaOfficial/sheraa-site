import React from 'react';
import { Route } from 'react-router-dom';
import EcosystemHub from "@/pages/v3/EcosystemHub";
import AdvancedEcosystemDashboard from "@/pages/v3/AdvancedEcosystemDashboard";
import LaunchDashboard from "@/pages/v5/LaunchDashboard";
import AdultEntrepreneurIndex from "@/pages/v3/AdultEntrepreneurIndex";
import ProgramMatchPage from "@/pages/v3/ProgramMatchPage";
import YoungEntrepreneurIndex from "@/pages/v3/young/YoungEntrepreneurIndex";
import YoungGamifiedDashboard from "@/pages/v3/young/YoungGamifiedDashboard";
import IdeaValidatorPage from "@/pages/v3/young/IdeaValidatorPage";
import FoundersPage from "@/pages/v3/young/FoundersPage";
import ChallengesPage from "@/pages/v3/young/ChallengesPage";
import HubFinderPage from "@/pages/v3/young/HubFinderPage";
import PeerMatchingPage from "@/pages/v3/young/PeerMatchingPage";
import GeneralEntrepreneurIndex from "@/pages/v3/general/GeneralEntrepreneurIndex";
import StakeholdersIndex from "@/pages/v3/stakeholders/StakeholdersIndex";

export const V3Routes = () => (
  <>
    {/* V3 Ecosystem Hub - Intelligent Persona Routing */}
    <Route path="/v3" element={<EcosystemHub />} />
    <Route path="/v3/advanced-dashboard" element={<AdvancedEcosystemDashboard />} />
    <Route path="/v5/launch-dashboard" element={<LaunchDashboard />} />
    
    {/* V3 Adult Entrepreneur Persona Routes */}
    <Route path="/v3/entrepreneurs" element={<AdultEntrepreneurIndex />} />
    <Route path="/v3/program-match" element={<ProgramMatchPage />} />
    
    {/* V3 Young Entrepreneur Persona Routes */}
    <Route path="/v3/young" element={<YoungEntrepreneurIndex />} />
    <Route path="/v3/young/dashboard" element={
      <React.Suspense fallback={<div className="p-8 text-center">Loading Gamified Dashboard...</div>}>
        <YoungGamifiedDashboard />
      </React.Suspense>
    } />
    <Route path="/v3/young/idea-validator" element={<IdeaValidatorPage />} />
    <Route path="/v3/young/founders" element={<FoundersPage />} />
    <Route path="/v3/young/challenges" element={<ChallengesPage />} />
    <Route path="/v3/young/hubs" element={<HubFinderPage />} />
    <Route path="/v3/young/peer-matching" element={<PeerMatchingPage />} />

    {/* V3 General Entrepreneur Persona Routes */}
    <Route path="/v3/general" element={<GeneralEntrepreneurIndex />} />

    {/* V3 Stakeholder Persona Routes */}
    <Route path="/v3/stakeholders" element={<StakeholdersIndex />} />
  </>
);