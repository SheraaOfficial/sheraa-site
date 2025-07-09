import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthPage from "@/pages/auth/AuthPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";

export const AuthRoutes = () => (
  <>
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="/auth/signup" element={<SignupPage />} />
    <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
    
    {/* Legacy redirects */}
    <Route path="/login" element={<Navigate to="/auth/login" replace />} />
    <Route path="/signup" element={<Navigate to="/auth/signup" replace />} />
    <Route path="/forgot-password" element={<Navigate to="/auth/forgot-password" replace />} />
  </>
);