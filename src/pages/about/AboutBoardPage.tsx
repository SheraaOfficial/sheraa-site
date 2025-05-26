
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import PageHeader from './components/PageHeader';
import { BoardHeader } from './components/BoardHeader';
import { BoardStats } from './components/BoardStats';
import { BoardMembersGrid } from './components/BoardMembersGrid';

const AboutBoardPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <PageHeader 
            title="About" 
            subtitle="Meet the distinguished leaders guiding Sheraa's strategic direction"
          />
          
          <BoardHeader />
          <BoardStats />
          <BoardMembersGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutBoardPage;
