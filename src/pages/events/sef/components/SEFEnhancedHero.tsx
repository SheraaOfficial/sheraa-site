
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';

const SEFEnhancedHero: React.FC = () => {
  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="relative min-h-[100vh] w-full flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r dark:from-[#1A1F2C]/90 dark:to-[#292D3E]/90 from-indigo-900/90 to-purple-900/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000" 
          alt="SEF Event" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [null, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3],
              scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <Sparkles>
              <span className="inline-flex items-center bg-white/10 backdrop-blur-md text-[#9b87f5] rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                SHARJAH ENTREPRENEURSHIP FESTIVAL
              </span>
            </Sparkles>
          </motion.div>
          
          <div className="space-y-4 mb-10">
            <motion.h1 
              custom={0}
              initial="initial"
              animate="animate"
              variants={textAnimation}
              className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter text-white drop-shadow-lg leading-tight"
            >
              THE REGION'S <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5DEFF] via-white to-[#D6BCFA]">
                PREMIER
              </span> FESTIVAL
            </motion.h1>
            
            <motion.h2 
              custom={1}
              initial="initial"
              animate="animate"
              variants={textAnimation}
              className="text-3xl md:text-5xl font-bold text-white/90"
            >
              JANUARY 31 - FEBRUARY 1, 2026
            </motion.h2>
            
            <motion.p 
              custom={2}
              initial="initial"
              animate="animate"
              variants={textAnimation}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto"
            >
              Experience two days of inspiration, connection, and growth at the Sharjah Entrepreneurship Festival.
              Join thousands of innovators, founders, and changemakers.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <GradientButton asChild variant="shimmer" size="lg" className="group shadow-xl hover:shadow-[0_5px_30px_rgba(155,135,245,0.4)] font-bold">
              <Link to="/events/sef/register" className="px-8 py-6 text-lg">
                REGISTER NOW
                <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2">→</span>
              </Link>
            </GradientButton>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 
                backdrop-blur-xl hover:border-white/50 transition-all duration-300 font-medium">
              <Link to="/events/sef/agenda" className="px-8 py-6 text-lg">EXPLORE AGENDA</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFEnhancedHero;
