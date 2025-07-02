import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';
import { useOptimizedScroll } from '@/hooks/useOptimizedScroll';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface CinematicVideoHeroProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
  overlay?: 'gradient' | 'particles' | 'none';
  interactive?: boolean;
}

export const CinematicVideoHero: React.FC<CinematicVideoHeroProps> = ({
  videoId,
  title,
  subtitle,
  showScrollIndicator = true,
  overlay = 'gradient',
  interactive = true
}) => {
  const { scrollY } = useOptimizedScroll();
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Enhanced scroll calculations with cinematic effects
  const videoOpacity = Math.max(0, 1 - (scrollY / (window.innerHeight * 0.8)));
  const videoScale = Math.min(1.3, 1 + (scrollY * 0.0003));
  const contentOpacity = Math.min(1, Math.max(0, 1 - (scrollY / (window.innerHeight * 0.4))));
  
  // Parallax transforms
  const parallaxY = useTransform(
    useMotionValue(scrollY),
    [0, window.innerHeight],
    [0, -100]
  );

  // Mouse movement parallax for desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || isMobile) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  useEffect(() => {
    // Enhanced preload with loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const videoParams = new URLSearchParams({
    autoplay: '1',
    mute: isMuted ? '1' : '0',
    loop: '1',
    controls: '0',
    showinfo: '0',
    rel: '0',
    modestbranding: '1',
    playlist: videoId,
    enablejsapi: '1',
    origin: window.location.origin,
    iv_load_policy: '3'
  });

  const ParticleOverlay = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Loading Sequence */}
      {!isLoaded && (
        <motion.div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-center text-white">
            <motion.div 
              className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Cinematic Experience...
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Black background fallback */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* YouTube Video with enhanced effects */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ 
          opacity: videoOpacity,
          scale: videoScale,
          x: interactive ? mouseX : 0,
          y: interactive ? mouseY : 0
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        {isLoaded && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?${videoParams.toString()}`}
            className="w-full h-full object-cover scale-110"
            style={{
              width: '110vw',
              height: '110vh',
              marginLeft: '-5vw',
              marginTop: '-5vh',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Cinematic Video Background"
          />
        )}
      </motion.div>

      {/* Particle Overlay */}
      {overlay === 'particles' && <ParticleOverlay />}

      {/* Enhanced gradient overlay */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background: overlay === 'gradient' ? `
            radial-gradient(circle at 30% 30%, rgba(0,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%),
            linear-gradient(to bottom, 
              transparent 0%, 
              transparent 40%, 
              rgba(0,0,0,0.1) 60%, 
              rgba(0,0,0,0.4) 80%, 
              rgba(0,0,0,0.8) 95%, 
              black 100%)
          ` : 'transparent',
          opacity: Math.min(1, scrollY / (window.innerHeight * 0.3))
        }}
      />

      {/* Video Controls */}
      {interactive && (
        <motion.div
          className="absolute top-8 right-8 z-40 flex gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="bg-black/30 backdrop-blur-md text-white hover:bg-black/50 border border-white/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </motion.div>
      )}

      {/* Enhanced content overlay */}
      {(title || subtitle) && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center text-center px-4"
          style={{ opacity: contentOpacity }}
        >
          <div className="max-w-5xl">
            {title && (
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: contentOpacity, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)',
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
                }}
              >
                {title}
              </motion.h1>
            )}
            {subtitle && (
              <motion.p
                className="text-xl md:text-3xl text-white/95 font-light leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: contentOpacity, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(2px)'
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}

      {/* Enhanced scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40"
          style={{ opacity: contentOpacity }}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center text-white/90">
            <motion.span 
              className="text-sm font-medium mb-3 hidden sm:block tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Scroll to Explore
            </motion.span>
            <motion.div
              className="p-3 rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10"
              whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.6)' }}
              transition={{ type: "spring", damping: 20 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Cinematic vignette effect */}
      <div 
        className="absolute inset-0 z-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
          opacity: videoOpacity * 0.6
        }}
      />
    </div>
  );
};