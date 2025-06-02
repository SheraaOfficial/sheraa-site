
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ResourcesPage from './index';
import AdvisoryPage from './AdvisoryPage';
import ArticlesPage from './ArticlesPage';
import ImpactReportsPage from './ImpactReportsPage';
import GuidesPage from './guides';
import { ResourcesGameProvider } from '@/components/resources/ResourcesGameContext';

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-sheraa-primary text-white rounded hover:bg-sheraa-primary/90"
      >
        Reload Page
      </button>
    </div>
  </div>
);

const ResourcesRouter: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ResourcesGameProvider>
        <Routes>
          <Route path="/" element={<ResourcesPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/impact-reports" element={<ImpactReportsPage />} />
          <Route path="*" element={<Navigate to="/resources" replace />} />
        </Routes>
      </ResourcesGameProvider>
    </ErrorBoundary>
  );
};

export default ResourcesRouter;
