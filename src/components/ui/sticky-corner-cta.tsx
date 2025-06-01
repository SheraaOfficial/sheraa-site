
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

interface StickyCornerCTAProps {
  href: string;
  text: string;
  subtext?: string;
}

export const StickyCornerCTA: React.FC<StickyCornerCTAProps> = ({
  href,
  text,
  subtext
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 max-w-xs"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 relative">
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="mb-3">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                {text}
              </h3>
              {subtext && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {subtext}
                </p>
              )}
            </div>
            
            <Button 
              asChild 
              size="sm" 
              className="w-full bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-lg"
            >
              <Link to={href} className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold">Get Started</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
