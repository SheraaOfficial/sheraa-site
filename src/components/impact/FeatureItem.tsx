
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  subtext: string;
  value: string;
}

const FeatureItem = ({
  title,
  description,
  icon,
  index,
  subtext,
  value
}: FeatureItemProps) => {
  // Create spring config for hover animations
  const springConfig = { type: "spring", stiffness: 300, damping: 20 };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, ...springConfig }}
      whileHover={{ scale: 1.05, transition: { ...springConfig } }}
      className={cn(
        "flex flex-col lg:border-r py-10 px-4 relative group/feature",
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
        className="mb-2 relative z-10 px-6 text-sheraa-primary"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 px-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: 0.2 + index * 0.15, ...springConfig } 
        }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          {value}
        </span>
      </motion.div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <motion.div 
          className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-300 ease-out origin-center"
          whileHover={{ height: 32 }}
        />
        <motion.span 
          className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-sheraa-dark"
          whileHover={{ x: 8 }}
        >
          {title}
        </motion.span>
      </div>
      
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-6">
        {description}
      </p>
      
      <motion.div 
        className="inline-flex items-center text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mt-2 mx-6"
        whileHover={{ 
          scale: 1.05,
          background: "rgba(0, 51, 102, 0.2)",
        }}
        transition={{ ...springConfig }}
      >
        <span>{subtext}</span>
      </motion.div>
    </motion.div>
  );
};

export default FeatureItem;
