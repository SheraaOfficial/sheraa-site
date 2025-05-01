
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SEFQuickLinksProps = {
  hasRevealed: boolean;
};

export const SEFQuickLinks: React.FC<SEFQuickLinksProps> = ({ hasRevealed }) => {
  const links = ["Agenda", "Speakers", "Experience", "Who Should Attend", "Be Part of SEF"];
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate={hasRevealed ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-8"
    >
      <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-glow">Quick Links</h3>
      <motion.div 
        className="flex flex-wrap gap-3"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={`/events/sef/${link.toLowerCase().replace(/\s+/g, '-')}`} 
              className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded-full text-sm transition-all 
                duration-300 hover:shadow-glow flex items-center justify-center border border-white/20
                backdrop-blur-md transform hover:scale-105 hover:shadow-lg"
            >
              {link}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
