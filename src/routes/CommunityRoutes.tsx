import React from 'react';
import { Route } from 'react-router-dom';
import CommunityPage from "@/pages/community/index";
import MembershipPage from "@/pages/community/membership/index";
import MembershipApplyPage from "@/pages/community/membership/apply";
import MembershipConfirmationPage from "@/pages/community/membership/confirmation";
import MembershipSuccessStoriesPage from "@/pages/community/membership/success-stories";
import PartnershipsPage from "@/pages/community/partnerships/index";
import StartupDirectory from "@/pages/community/StartupDirectory";
import StartupsMainPage from "@/pages/startups/StartupsPage";

export const CommunityRoutes = () => (
  <>
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/community/join" element={<MembershipPage />} />
    <Route path="/community/membership" element={<MembershipPage />} />
    <Route path="/community/membership/apply" element={<MembershipApplyPage />} />
    <Route path="/community/membership/confirmation" element={<MembershipConfirmationPage />} />
    <Route path="/community/membership/success-stories" element={<MembershipSuccessStoriesPage />} />
    <Route path="/community/partnerships" element={<PartnershipsPage />} />
    <Route path="/community/startups" element={<StartupDirectory />} />
    <Route path="/startups" element={<StartupsMainPage />} />
  </>
);