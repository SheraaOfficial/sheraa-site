
import React from "react";
import { motion } from "framer-motion";

interface MobilePaginationProps {
  activeIndex: number;
  itemCount: number;
  onClick?: (index: number) => void;
}

const MobilePagination: React.FC<MobilePaginationProps> = ({ 
  activeIndex, 
  itemCount,
  onClick 
}) => (
  <div className="flex justify-center mt-6 gap-2">
    {Array.from({ length: itemCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => onClick && onClick(i)}
        className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          i === activeIndex ? 'bg-sheraa-coral' : 'bg-gray-300 hover:bg-gray-400'
        }`}
        aria-label={`Go to slide ${i + 1}`}
        aria-current={i === activeIndex ? "true" : "false"}
      >
        {i === activeIndex && (
          <motion.div
            className="absolute inset-0 rounded-full bg-sheraa-coral/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </button>
    ))}
  </div>
);

export default MobilePagination;
