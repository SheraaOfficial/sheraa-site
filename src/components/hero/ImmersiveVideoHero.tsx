import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useOptimizedScroll } from '@/hooks/useOptimizedScroll';
import { useIsMobile } from '@/hooks/use-mobile';

interface ImmersiveVideoHeroProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
}

export const ImmersiveVideoHero: React.FC<ImmersiveVideoHeroProps> = ({
  videoId,
  title,
  subtitle,
  showScrollIndicator = true
}) => {
  const { scrollY } = useOptimizedScroll();
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate video opacity based on scroll
  const videoOpacity = Math.max(0, 1 - (scrollY / window.innerHeight));
  const contentOpacity = Math.min(1, scrollY / (window.innerHeight * 0.3));

  useEffect(() => {
    // Preload iframe for better performance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const videoParams = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    controls: '0',
    showinfo: '0',
    rel: '0',
    modestbranding: '1',
    playlist: videoId,
    enablejsapi: '1',
    origin: window.location.origin
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Black background fallback */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* YouTube Video */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ opacity: videoOpacity }}
        animate={{ scale: 1 + (scrollY * 0.0002) }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {isLoaded && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?${videoParams.toString()}`}
            className="w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Deal Dock Introduction Video"
          />
        )}
      </motion.div>

      {/* Gradient overlay for smooth blend */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            transparent 60%, 
            rgba(0,0,0,0.3) 80%, 
            rgba(0,0,0,0.8) 95%, 
            black 100%)`,
          opacity: Math.min(1, scrollY / (window.innerHeight * 0.5))
        }}
      />

      {/* Content overlay */}
      {(title || subtitle) && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center text-center px-4"
          style={{ opacity: videoOpacity }}
        >
          <div className="max-w-4xl">
            {title && (
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: videoOpacity, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {title}
              </motion.h1>
            )}
            {subtitle && (
              <motion.p
                className="text-xl md:text-2xl text-white/90 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: videoOpacity, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
          style={{ opacity: videoOpacity }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm font-medium mb-2 hidden sm:block">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      )}

      {/* Loading state for mobile */}
      {isMobile && !isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg">Loading Experience...</p>
          </div>
        </div>
      )}
    </div>
  );
};