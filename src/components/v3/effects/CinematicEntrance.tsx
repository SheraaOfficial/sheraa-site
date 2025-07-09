import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

interface CinematicEntranceProps {
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
  onComplete?: () => void;
  duration?: number;
}

export const CinematicEntrance: React.FC<CinematicEntranceProps> = ({
  persona,
  onComplete,
  duration = 4000
}) => {
  const [stage, setStage] = useState<'loading' | 'explosion' | 'complete'>('loading');
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowExplosion(true);
      setStage('explosion');
    }, 2000);

    const timer2 = setTimeout(() => {
      setStage('complete');
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [duration, onComplete]);

  const getPersonaConfig = () => {
    switch (persona) {
      case 'young':
        return {
          emoji: '🚀',
          primaryText: 'Your moment is NOW!',
          secondaryText: 'Stop scrolling. Start building.',
          gradient: 'from-blue-500 via-purple-500 to-pink-500',
          particleColor: 'from-blue-400 to-purple-400'
        };
      case 'stakeholder':
        return {
          emoji: '👑',
          primaryText: 'Excellence Awaits',
          secondaryText: 'Partner with Sharjah\'s Innovation Ecosystem',
          gradient: 'from-amber-600 via-yellow-500 to-orange-500',
          particleColor: 'from-amber-400 to-yellow-400'
        };
      case 'adult':
        return {
          emoji: '🎯',
          primaryText: 'Transform Your Vision',
          secondaryText: 'Professional Growth Starts Here',
          gradient: 'from-gray-600 via-slate-500 to-gray-700',
          particleColor: 'from-gray-400 to-slate-400'
        };
      default:
        return {
          emoji: '✨',
          primaryText: 'Welcome to Innovation',
          secondaryText: 'Discover Your Path Forward',
          gradient: 'from-sheraa-primary via-sheraa-teal to-sheraa-secondary',
          particleColor: 'from-sheraa-primary to-sheraa-teal'
        };
    }
  };

  const config = getPersonaConfig();

  if (stage === 'complete') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 z-50 bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Particle Explosion Background */}
        {showExplosion && (
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${config.particleColor} rounded-full`}
                initial={{
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: Math.random() * 0.5
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="text-center text-white relative z-10">
          {/* Emoji Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ 
              scale: stage === 'explosion' ? [1, 1.5, 1] : 1, 
              opacity: 1, 
              rotate: 0 
            }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8, 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="mb-8"
          >
            <div className="text-6xl md:text-8xl mb-4 relative">
              {config.emoji}
              {showExplosion && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>
          </motion.div>
          
          {/* Primary Text with Cinematic Reveal */}
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.05}
            staggerFrom="center"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 1.2,
            }}
            containerClassName="text-3xl md:text-5xl font-black mb-6"
          >
            {config.primaryText}
          </VerticalCutReveal>
          
          {/* Secondary Text */}
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 2.5,
            }}
            containerClassName="text-lg md:text-xl opacity-90"
          >
            {config.secondaryText}
          </VerticalCutReveal>

          {/* Progress indicator */}
          <motion.div
            className="mt-12 w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 3 }}
            />
          </motion.div>
        </div>

        {/* Persona-specific overlay effects */}
        {persona === 'young' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showExplosion ? 0.3 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/4 left-1/4 text-6xl animate-pulse">⚡</div>
            <div className="absolute top-3/4 right-1/4 text-4xl animate-bounce">🎮</div>
            <div className="absolute bottom-1/4 left-1/3 text-5xl animate-pulse">💡</div>
          </motion.div>
        )}

        {persona === 'stakeholder' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showExplosion ? 0.2 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/3 left-1/5 text-4xl">🏛️</div>
            <div className="absolute bottom-1/3 right-1/5 text-3xl">📊</div>
            <div className="absolute top-2/3 left-2/3 text-4xl">💼</div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};