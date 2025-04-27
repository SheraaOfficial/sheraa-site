
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface CommunityPageProps {
  section?: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ section }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Community & Partnerships</h1>
        {/* Content will be implemented based on section prop */}
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
