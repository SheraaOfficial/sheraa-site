
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/useDeviceDetection";

export interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  subtext: string;
  value: string;
}

// Memoized feature item component for better performance
const FeatureItem = React.memo(({
  title,
  description,
  icon,
  index,
  subtext,
  value
}: FeatureItemProps) => {
  // Create spring config for hover animations
  const springConfig = { type: "spring", stiffness: 300, damping: 20 };
  const isMobile = useIsMobile();
  
  // Simplified animations on mobile for better performance
  const animationConfig = isMobile ? {
    initial: { opacity: 0.8, y: 5 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.05, duration: 0.3 }
  } : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.15, ...springConfig }
  };
  
  return (
    <motion.div
      {...animationConfig}
      viewport={{ once: true, margin: "0px" }}
      whileHover={{ scale: isMobile ? 1.01 : 1.03, transition: { ...springConfig } }}
      className={cn(
        "flex flex-col py-2 md:py-10 px-1 md:px-4 relative group/feature",
        "border-b border-gray-100 dark:border-neutral-800 last:border-b-0 md:last:border-b",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "border-gray-100 dark:border-neutral-800"
      )}
      style={{
        visibility: 'visible',
        display: 'flex'
      }}
    >
      {/* Simplified hover effect with gradient for mobile */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-sheraa-primary/5 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 rounded-lg"
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="mb-1 relative z-10 px-1 text-sheraa-primary"
        whileHover={{ 
          rotate: isMobile ? 0 : [0, -5, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-xl md:text-5xl lg:text-6xl font-bold mb-1 relative z-10 px-1"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: 0.05 + index * 0.05, duration: 0.3 }
        }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          {value}
        </span>
      </motion.div>
      
      <div className="text-sm md:text-lg font-bold mb-1 relative z-10 px-1">
        <motion.div 
          className="absolute left-0 inset-y-0 h-4 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-300 ease-out origin-center"
          whileHover={{ height: isMobile ? 16 : 28 }}
        />
        <motion.span 
          className="group-hover/feature:translate-x-1 transition duration-300 inline-block text-sheraa-dark"
          whileHover={{ x: isMobile ? 2 : 4 }}
        >
          {title}
        </motion.span>
      </div>
      
      <p className="text-xs text-gray-600 max-w-xs relative z-10 px-1 line-clamp-2">
        {description}
      </p>
      
      {/* Simplified badge for mobile */}
      <div className="px-1 mt-1 md:mt-2">
        <Badge 
          variant="soft-primary"
          className="font-medium text-[10px] md:text-sm"
        >
          {subtext}
        </Badge>
      </div>
    </motion.div>
  );
});

FeatureItem.displayName = 'FeatureItem';

export default FeatureItem;
