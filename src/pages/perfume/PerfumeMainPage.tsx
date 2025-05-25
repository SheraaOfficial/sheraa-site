
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { PerfumeHero } from './components/PerfumeHero';
import { PerfumeCollection } from './components/PerfumeCollection';
import { Section } from '@/components/ui/design-system/Section';
import { HeadingLG, BodyBase } from '@/components/ui/design-system/Typography';
import { SlideUp } from '@/components/ui/design-system/MotionProvider';

const PerfumeMainPage: React.FC = () => {
  return (
    <MainLayout>
      <PerfumeHero />
      <PerfumeCollection />
      
      {/* About Section */}
      <Section spacing="lg" background="muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideUp>
            <HeadingLG className="mb-6">
              Crafted with Passion, Inspired by Sharjah
            </HeadingLG>
            <BodyBase className="text-gray-600 dark:text-gray-300 mb-6">
              Our perfume collection celebrates the essence of Sharjah - a place where tradition 
              meets innovation, where entrepreneurs dare to dream, and where every scent tells 
              a story of ambition and success.
            </BodyBase>
            <BodyBase className="text-gray-600 dark:text-gray-300">
              Each fragrance is carefully crafted using the finest ingredients, blending 
              traditional Middle Eastern notes with contemporary accents that reflect 
              the dynamic spirit of our entrepreneurial community.
            </BodyBase>
          </SlideUp>
          
          <SlideUp delay={0.2}>
            <div className="relative">
              <img 
                src="/lovable-uploads/sheraa-logo.png" 
                alt="Perfume crafting process"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </SlideUp>
        </div>
      </Section>
    </MainLayout>
  );
};

export default PerfumeMainPage;
