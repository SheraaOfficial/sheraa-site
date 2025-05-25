
import React, { createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface MotionContextType {
  fadeIn: Variants;
  slideUp: Variants;
  scaleIn: Variants;
  staggerContainer: Variants;
  staggerChild: Variants;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

// Standardized animation variants
const motionVariants: MotionContextType = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  staggerChild: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
};

interface MotionProviderProps {
  children: ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  return (
    <MotionContext.Provider value={motionVariants}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

// Pre-built motion components
export const FadeIn: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className 
}) => {
  const { fadeIn } = useMotion();
  
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className 
}) => {
  const { slideUp } = useMotion();
  
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className 
}) => {
  const { scaleIn } = useMotion();
  
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  const { staggerContainer } = useMotion();
  
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  const { staggerChild } = useMotion();
  
  return (
    <motion.div
      variants={staggerChild}
      transition={{ duration: 0.5, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
