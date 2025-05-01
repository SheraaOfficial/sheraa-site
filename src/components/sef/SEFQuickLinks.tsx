
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SEFQuickLinksProps = {
  hasRevealed: boolean;
};

export const SEFQuickLinks: React.FC<SEFQuickLinksProps> = ({ hasRevealed }) => {
  const links = [
    { title: "Agenda", path: "/events/sef/agenda" },
    { title: "Speakers", path: "/events/sef/speakers" },
    { title: "Experience", path: "/events/sef/experience" },
    { title: "Who Should Attend", path: "/events/sef/who-should-attend" },
    { title: "Be Part of SEF", path: "/events/sef/be-part-of-sef" },
    { title: "FAQ", path: "/events/sef/faq" },
    { title: "Register", path: "/events/sef/register" }
  ];
  
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
              to={link.path} 
              className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded-full text-sm transition-all 
                duration-300 hover:shadow-glow flex items-center justify-center border border-white/20
                backdrop-blur-md transform hover:scale-105 hover:shadow-lg"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
