import React from 'react';
import { Route } from 'react-router-dom';
import About from "@/pages/about/index";
import AboutLeadershipPage from "@/pages/about/AboutLeadershipPage";
import AboutBoardPage from "@/pages/about/AboutBoardPage";

export const AboutRoutes = () => (
  <>
    <Route path="/about" element={<About />} />
    <Route path="/about/leadership" element={<AboutLeadershipPage />} />
    <Route path="/about/board" element={<AboutBoardPage />} />
  </>
);