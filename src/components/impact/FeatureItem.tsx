
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.15, ...springConfig }}
      whileHover={{ scale: 1.03, transition: { ...springConfig } }} // Reduced scale for better performance
      className={cn(
        "flex flex-col py-6 md:py-10 px-3 md:px-4 relative group/feature",
        "border-b border-gray-100 dark:border-neutral-800 last:border-b-0 md:last:border-b",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "border-gray-100 dark:border-neutral-800"
      )}
    >
      {/* Enhanced hover effect with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-sheraa-primary/5 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 rounded-lg"
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="mb-2 relative z-10 px-4 md:px-6 text-sheraa-primary"
        whileHover={{ 
          rotate: [0, -5, 5, -5, 0], // Reduced rotation for better performance
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 px-4 md:px-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: 0.1 + index * 0.1, ...springConfig } // Faster transition
        }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          {value}
        </span>
      </motion.div>
      
      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-4 md:px-6">
        <motion.div 
          className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-300 ease-out origin-center"
          whileHover={{ height: 28 }} // Reduced height change for better performance
        />
        <motion.span 
          className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-sheraa-dark"
          whileHover={{ x: 4 }} // Reduced movement for better performance
        >
          {title}
        </motion.span>
      </div>
      
      <p className="text-xs md:text-sm text-gray-600 max-w-xs relative z-10 px-4 md:px-6">
        {description}
      </p>
      
      {/* Replaced div with enhanced badge component */}
      <div className="px-4 md:px-6 mt-2">
        <Badge 
          variant="soft-primary"
          className="font-medium text-xs md:text-sm"
        >
          {subtext}
        </Badge>
      </div>
    </motion.div>
  );
});

FeatureItem.displayName = 'FeatureItem';

export default FeatureItem;
