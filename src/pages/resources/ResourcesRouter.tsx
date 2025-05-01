
import React from 'react';
import { Navigate } from 'react-router-dom';
import ResourcesPage from './index';
import GuidesPage from './GuidesPage';
import AdvisoryPage from './AdvisoryPage';
import ArticlesPage from './ArticlesPage';
import ImpactReportsPage from './ImpactReportsPage';

interface ResourcesRouterProps {
  section?: string;
}

const ResourcesRouter: React.FC<ResourcesRouterProps> = ({ section }) => {
  switch(section) {
    case 'guides':
      return <GuidesPage />;
    case 'advisory':
      return <AdvisoryPage />;
    case 'articles':
      return <ArticlesPage />;
    case 'impact-reports':
      return <ImpactReportsPage />;
    case undefined:
      return <ResourcesPage />;
    default:
      return <Navigate to="/resources" replace />;
  }
};

export default ResourcesRouter;
