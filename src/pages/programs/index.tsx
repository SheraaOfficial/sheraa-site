
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SectionLoading } from "@/components/layout/SectionLoading";

// Lazy load components
const ProgramsPage = lazy(() => import("./ProgramsPage"));
const StartYoungPage = lazy(() => import("./StartYoungPage"));
const StartupDojoPage = lazy(() => import("./StartupDojoPage"));
const StartupDojoPlusPage = lazy(() => import("./StartupDojoPlus"));
const S3IncubatorPage = lazy(() => import("./S3IncubatorPage"));
const S3IncubatorDetailPage = lazy(() => import("./S3IncubatorDetailPage"));
const AccessSharjahChallengePage = lazy(() => import("./AccessSharjahChallengePage"));
const DealDockPage = lazy(() => import("./DealDockPage"));
const SMESupport = lazy(() => import("./SMESupport"));

const ProgramsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<SectionLoading />}><ProgramsPage /></Suspense>} />
      <Route path="/start-young" element={<Suspense fallback={<SectionLoading />}><StartYoungPage /></Suspense>} />
      <Route path="/startup-dojo" element={<Suspense fallback={<SectionLoading />}><StartupDojoPage /></Suspense>} />
      <Route path="/startup-dojo-plus" element={<Suspense fallback={<SectionLoading />}><StartupDojoPlusPage /></Suspense>} />
      <Route path="/s3-incubator" element={<Suspense fallback={<SectionLoading />}><S3IncubatorPage /></Suspense>} />
      <Route path="/s3-incubator/details" element={<Suspense fallback={<SectionLoading />}><S3IncubatorDetailPage /></Suspense>} />
      <Route path="/access-sharjah-challenge" element={<Suspense fallback={<SectionLoading />}><AccessSharjahChallengePage /></Suspense>} />
      <Route path="/deal-dock" element={<Suspense fallback={<SectionLoading />}><DealDockPage /></Suspense>} />
      <Route path="/sme-support" element={<Suspense fallback={<SectionLoading />}><SMESupport /></Suspense>} />
    </Routes>
  );
};

export default ProgramsRouter;
