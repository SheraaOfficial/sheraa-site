
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/design-system/Section';
import { DisplayLG, BodyLG } from '@/components/ui/design-system/Typography';
import { FadeIn, SlideUp } from '@/components/ui/design-system/MotionProvider';

export const PerfumeHero: React.FC = () => {
  return (
    <Section spacing="xl" background="gradient" className="relative min-h-screen flex items-center">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sheraa-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-sheraa-orange/20 mb-8">
            <Sparkles className="w-5 h-5 text-sheraa-orange" />
            <span className="text-sm font-medium text-sheraa-orange">Sharjah Signature Collection</span>
          </div>
        </FadeIn>

        <SlideUp delay={0.2}>
          <DisplayLG className="mb-6 text-gradient-sheraa">
            The Essence of Sharjah
          </DisplayLG>
        </SlideUp>

        <SlideUp delay={0.4}>
          <BodyLG className="max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
            Experience the captivating fragrances inspired by Sharjah's rich heritage and modern innovation. 
            Each scent tells a story of tradition, creativity, and the entrepreneurial spirit that defines our emirate.
          </BodyLG>
        </SlideUp>

        <SlideUp delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-primary">
              Explore Collection
            </Button>
            <Button variant="outline" size="lg" className="button-secondary">
              Learn Our Story
            </Button>
          </div>
        </SlideUp>

        {/* Rating stars */}
        <SlideUp delay={0.8}>
          <div className="flex items-center justify-center gap-2 mt-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-sheraa-orange fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              Rated 4.9/5 by 1,000+ customers
            </span>
          </div>
        </SlideUp>
      </div>
    </Section>
  );
};
