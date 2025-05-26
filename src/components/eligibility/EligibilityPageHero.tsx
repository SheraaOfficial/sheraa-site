
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface EligibilityPageHeroProps {
  itemVariants: any;
}

export const EligibilityPageHero: React.FC<EligibilityPageHeroProps> = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="text-center mb-16"
    >
      <motion.div 
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/15 to-sheraa-teal/15 border border-sheraa-primary/30 mb-8 backdrop-blur-sm"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-5 h-5 text-sheraa-primary" />
        </motion.div>
        <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          AI-Powered Program Matcher
        </span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight"
        variants={itemVariants}
      >
        Find Your Perfect
        <br />
        <motion.span
          className="inline-block"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, #003366, #008080, #FF6600, #003366)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Sheraa Program
        </motion.span>
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        Answer a few questions and our intelligent system will recommend the best program 
        to accelerate your entrepreneurial journey in Sharjah's thriving ecosystem.
      </motion.p>
    </motion.div>
  );
};
