
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Play, Users, Award, TrendingUp, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const entrepreneurVideos = [
  '/lovable-uploads/entrepreneur-story-1.mp4',
  '/lovable-uploads/entrepreneur-story-2.mp4',
  '/lovable-uploads/entrepreneur-story-3.mp4',
];

export const VideoHeroSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isStoryDialogOpen, setIsStoryDialogOpen] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % entrepreneurVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {entrepreneurVideos.map((video, index) => (
            <video
              key={video}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/90 via-sheraa-teal/80 to-sheraa-orange/90" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 text-center lg:text-left ${language === 'ar' ? 'lg:text-right' : ''}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-sheraa-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-sheraa-primary">{t('hero.badge')}</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <span className="block mb-2">{t('hero.title.line1')}</span>
                  <span className="block bg-gradient-to-r from-sheraa-orange via-sheraa-secondary to-sheraa-teal bg-clip-text text-transparent">
                    {t('hero.title.line2')}
                  </span>
                </h1>
                
                <p className={`text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed ${language === 'ar' ? 'font-arabic text-right lg:text-right' : ''}`}>
                  {t('hero.description')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${language === 'ar' ? 'lg:justify-end' : ''}`}>
                <GradientButton asChild size="xl" className="group">
                  <Link to="/programs" className="flex items-center gap-3">
                    {language === 'ar' && <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />}
                    <span>{t('hero.cta.primary')}</span>
                    {language === 'en' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </Link>
                </GradientButton>
                
                <Button 
                  onClick={() => setIsStoryDialogOpen(true)}
                  size="xl" 
                  variant="outline" 
                  className="border-2 border-white/40 text-white hover:bg-white/10 group backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  <span>{t('hero.cta.secondary')}</span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {[
                  { icon: Users, number: "180+", labelKey: "hero.stats.startups" },
                  { icon: TrendingUp, number: "$248M+", labelKey: "hero.stats.revenue" },
                  { icon: Award, number: "1,900+", labelKey: "hero.stats.jobs" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
                      <IconComponent className="w-8 h-8 text-sheraa-orange mx-auto mb-2 group-hover:text-white transition-colors" />
                      <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                      <div className={`text-sm font-medium text-white/80 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {t(stat.labelKey)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video indicators */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="flex flex-col gap-4">
                {entrepreneurVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-3 h-12 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Watch Our Story Dialog */}
      <Dialog open={isStoryDialogOpen} onOpenChange={setIsStoryDialogOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black border-none">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 text-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="w-full h-full">
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source src="/lovable-uploads/sheraa-story-video.mp4" type="video/mp4" />
              <div className="flex items-center justify-center h-full text-white">
                <p>Video not available</p>
              </div>
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
