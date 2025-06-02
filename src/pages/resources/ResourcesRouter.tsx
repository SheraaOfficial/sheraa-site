
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResourcesPage from './index';
import AdvisoryPage from './AdvisoryPage';
import ArticlesPage from './ArticlesPage';
import ImpactReportsPage from './ImpactReportsPage';
import GuidesPage from './guides';
import { ResourcesGameProvider } from '@/components/resources/ResourcesGameContext';

const ResourcesRouter: React.FC = () => {
  return (
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
  );
};

export default ResourcesRouter;
