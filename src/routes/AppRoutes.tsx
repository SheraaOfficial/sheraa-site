import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MainLayout from '@/components/layouts/MainLayout';
import { ProgramApplicationForm } from '@/components/applications/ProgramApplicationForm';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Community from '@/pages/Community';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';
import Events from '@/pages/Events';
import Login from '@/pages/auth/LoginPage';
import Signup from '@/pages/auth/SignupPage';
import ForgotPassword from '@/pages/auth/ForgotPasswordPage';
import Profile from '@/pages/profile/ProfilePage';
import ProfileSetupPage from '@/pages/profile/ProfileSetupPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import ApplicationsPage from '@/pages/applications/ApplicationsPage';
import S3IncubatorPage from '@/pages/programs/S3IncubatorPage';
import StartupDojoPage from '@/pages/programs/StartupDojoPage';
import AccessSharjahChallengePage from '@/pages/programs/AccessSharjahChallengePage';
import SEFLanding from '@/pages/events/SEFLanding';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
      <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
      <Route path="/programs/access-sharjah" element={<AccessSharjahChallengePage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/sef" element={<SEFLanding />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* Protected Routes */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/profile-setup" element={
        <ProtectedRoute>
          <ProfileSetupPage />
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
      <Route path="/applications" element={
        <ProtectedRoute>
          <ApplicationsPage />
        </ProtectedRoute>
      } />
      
      {/* Program Application Routes */}
      <Route path="/programs/s3-incubator/apply" element={
        <ProtectedRoute>
          <S3IncubatorApplicationPage />
        </ProtectedRoute>
      } />
      <Route path="/programs/startup-dojo/apply" element={
        <ProtectedRoute>
          <StartupDojoApplicationPage />
        </ProtectedRoute>
      } />
      <Route path="/programs/access-sharjah/apply" element={
        <ProtectedRoute>
          <AccessSharjahApplicationPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

// Application Page Components
const S3IncubatorApplicationPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <ProgramApplicationForm programId="s3-incubator" programName="S3 Incubator" />
      </div>
    </MainLayout>
  );
};

const StartupDojoApplicationPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <ProgramApplicationForm programId="startup-dojo" programName="Startup Dojo" />
      </div>
    </MainLayout>
  );
};

const AccessSharjahApplicationPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <ProgramApplicationForm programId="access-sharjah" programName="Access Sharjah Challenge" />
      </div>
    </MainLayout>
  );
};

export default AppRoutes;
