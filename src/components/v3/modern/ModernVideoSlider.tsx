import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface SlideContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  ctaText: string;
  ctaLink: string;
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
  backgroundColor: string;
  textColor: string;
}

interface ModernVideoSliderProps {
  slides: SlideContent[];
  autoPlayInterval?: number;
  showVideo?: boolean;
  className?: string;
}

export const ModernVideoSlider: React.FC<ModernVideoSliderProps> = ({
  slides,
  autoPlayInterval = 7000,
  showVideo = true,
  className = ""
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState(0);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slides.length, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const handleNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleSlideChange = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? -15 : 15,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  const getPersonaStyles = (persona: string) => {
    switch (persona) {
      case 'young':
        return {
          background: 'linear-gradient(135deg, hsl(var(--young-lavender)), hsl(var(--young-rose-pink)))',
          glowColor: 'hsl(var(--young-lavender) / 0.6)',
          particleColor: 'hsl(var(--young-rose-pink) / 0.4)'
        };
      case 'adult':
        return {
          background: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-secondary)))',
          glowColor: 'hsl(var(--sheraa-primary) / 0.6)',
          particleColor: 'hsl(var(--sheraa-secondary) / 0.4)'
        };
      case 'stakeholder':
        return {
          background: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--mocha-500)))',
          glowColor: 'hsl(var(--warm-gold) / 0.6)',
          particleColor: 'hsl(var(--mocha-500) / 0.4)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-teal)))',
          glowColor: 'hsl(var(--sheraa-primary) / 0.6)',
          particleColor: 'hsl(var(--sheraa-teal) / 0.4)'
        };
    }
  };

  const personaStyles = getPersonaStyles(currentSlideData.persona);

  return (
    <motion.div
      ref={sliderRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
      style={{ background: personaStyles.background }}
    >
      {/* Brutalist Neo-Glassmorphism Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY, scale, opacity }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        
        {/* Dynamic Particle Field */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, ${personaStyles.particleColor} 0%, transparent 70%)`,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 100, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}
        </div>

        {/* Kinetic Typography Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.div
            className="text-[20vw] font-black text-white/5 select-none"
            animate={{
              rotateZ: [0, 5, -3, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SHERAA
          </motion.div>
        </div>
      </motion.div>

      {/* Video Background */}
      {showVideo && currentSlideData.videoUrl && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src={currentSlideData.videoUrl}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      )}

      {/* Main Content Slider */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-4xl mx-auto text-center"
            >
              {/* Brutalist Neo-Glassmorphism Content Card */}
              <motion.div
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12"
                style={{
                  boxShadow: `0 25px 50px -12px ${personaStyles.glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 35px 70px -12px ${personaStyles.glowColor}, 0 0 0 1px rgba(255,255,255,0.2)`
                }}
              >
                {/* Kinetic Typography Title */}
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{
                        scale: 1.1,
                        color: personaStyles.particleColor,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {currentSlideData.subtitle}
                </motion.p>

                <motion.p
                  className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Magnetic CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                    style={{
                      boxShadow: `0 10px 30px ${personaStyles.glowColor}`
                    }}
                  >
                    <motion.a
                      href={currentSlideData.ctaLink}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 15px 40px ${personaStyles.glowColor}`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentSlideData.ctaText}
                    </motion.a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleSlideChange(index)}
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

          {/* Play/Pause Control */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>

          {/* Audio Control */}
          {showVideo && (
            <motion.button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={handlePrevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      <motion.button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
};