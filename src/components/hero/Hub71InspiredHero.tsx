import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Building2, Rocket } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  metrics: {
    startups: string;
    partners: string;
    jobs: string;
  };
  ctaText: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryLink?: string;
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
  backgroundColor: string;
  visualElement: React.ReactNode;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'young-entrepreneurs',
    title: "Sharjah's Innovation Ecosystem",
    subtitle: "is nurturing young innovators",
    focus: "Student entrepreneurs turning ideas into startups",
    metrics: {
      startups: "85+",
      partners: "13+",
      jobs: "350+"
    },
    ctaText: "I Am A Student",
    ctaLink: "/v3/young",
    secondaryCta: "I Want To Mentor",
    secondaryLink: "/community/partnerships",
    persona: 'young',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--young-lavender)), hsl(var(--young-rose-pink)))',
    visualElement: (
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center"
        >
          <Rocket className="w-12 h-12 text-white" />
        </motion.div>
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">18K+</span>
        </div>
      </div>
    )
  },
  {
    id: 'growth-stage',
    title: "Sharjah's Innovation Ecosystem",
    subtitle: "is scaling tech ventures",
    focus: "Market-ready startups achieving growth milestones",
    metrics: {
      startups: "180+",
      partners: "140+",
      jobs: "1900+"
    },
    ctaText: "I Am A Startup",
    ctaLink: "/programs/s3-incubator",
    secondaryCta: "I Want To Invest",
    secondaryLink: "/v3/stakeholders",
    persona: 'adult',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-secondary)))',
    visualElement: (
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center"
        >
          <TrendingUp className="w-12 h-12 text-white" />
        </motion.div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">$248M</span>
        </div>
      </div>
    )
  },
  {
    id: 'partnerships',
    title: "Sharjah's Innovation Ecosystem",
    subtitle: "is connecting global partners",
    focus: "Strategic alliances driving economic diversification",
    metrics: {
      startups: "170+",
      partners: "140+",
      jobs: "1900+"
    },
    ctaText: "I Want To Partner",
    ctaLink: "/community/partnerships",
    secondaryCta: "View Impact Report",
    secondaryLink: "/about/impact",
    persona: 'stakeholder',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--mocha-500)))',
    visualElement: (
      <div className="relative">
        <motion.div
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center"
        >
          <Building2 className="w-12 h-12 text-white" />
        </motion.div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">71%</span>
        </div>
      </div>
    )
  },
  {
    id: 'community',
    title: "Sharjah's Innovation Ecosystem",
    subtitle: "is building tomorrow's economy",
    focus: "Join the region's fastest-growing startup hub",
    metrics: {
      startups: "180+",
      partners: "140+",
      jobs: "1900+"
    },
    ctaText: "Join Community",
    ctaLink: "/community/membership",
    secondaryCta: "Explore Programs",
    secondaryLink: "/programs",
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-teal)))',
    visualElement: (
      <div className="relative">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
        >
          <Users className="w-12 h-12 text-white" />
        </motion.div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">7th</span>
        </div>
      </div>
    )
  }
];

export const Hub71InspiredHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ background: currentSlideData.backgroundColor }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full border border-white/20" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/20 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Main Title */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {currentSlideData.title}
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.h2>
                </div>

                {/* Focus Description */}
                <motion.p 
                  className="text-xl md:text-2xl text-white/80 max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {currentSlideData.focus}
                </motion.p>

                {/* Metrics */}
                <motion.div 
                  className="flex gap-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white">
                      {currentSlideData.metrics.startups}
                    </div>
                    <div className="text-sm text-white/70 font-medium">Startups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white">
                      {currentSlideData.metrics.partners}
                    </div>
                    <div className="text-sm text-white/70 font-medium">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white">
                      {currentSlideData.metrics.jobs}
                    </div>
                    <div className="text-sm text-white/70 font-medium">Jobs created</div>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl"
                  >
                    <motion.a 
                      href={currentSlideData.ctaLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2"
                    >
                      {currentSlideData.ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </Button>
                  
                  {currentSlideData.secondaryCta && (
                    <Button 
                      asChild
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl"
                    >
                      <motion.a 
                        href={currentSlideData.secondaryLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentSlideData.secondaryCta}
                      </motion.a>
                    </Button>
                  )}
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex justify-center items-center"
              >
                {currentSlideData.visualElement}
              </motion.div>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};