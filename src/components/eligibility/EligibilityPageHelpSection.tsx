
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, Zap } from "lucide-react";

interface EligibilityPageHelpSectionProps {
  showResult: boolean;
  itemVariants: any;
}

export const EligibilityPageHelpSection: React.FC<EligibilityPageHelpSectionProps> = ({ 
  showResult, 
  itemVariants 
}) => {
  return (
    <AnimatePresence>
      {!showResult && (
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-lg mx-auto bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-xl border border-sheraa-primary/20 rounded-3xl shadow-2xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 p-8">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-8 h-8 text-sheraa-primary" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Need Personal Guidance?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Our expert team is ready to provide personalized recommendations 
                and answer any questions about our programs.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 text-white border-0 rounded-full px-8 shadow-lg"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Contact Our Team
                    <Zap className="w-3 h-3 opacity-70" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
