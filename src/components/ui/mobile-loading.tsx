
import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileLoadingProps {
  message?: string;
  className?: string;
}

export const MobileLoading: React.FC<MobileLoadingProps> = ({ 
  message = "Loading...", 
  className = "" 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-sheraa-primary" />
        <p className="text-gray-600 text-sm">{message}</p>
      </motion.div>
    </div>
  );
};
