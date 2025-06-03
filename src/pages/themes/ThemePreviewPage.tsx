
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { ThemeShowcase } from '@/components/theme/ThemeShowcase';

const ThemePreviewPage: React.FC = () => {
  return (
    <MainLayout
      seoTitle="Homepage Themes - Sheraa"
      seoDescription="Preview and compare different homepage themes designed for various audiences and use cases."
    >
      <div className="bg-white dark:bg-sheraa-dark">
        <ThemeShowcase />
      </div>
    </MainLayout>
  );
};

export default ThemePreviewPage;
