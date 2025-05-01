
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

interface SEFDescriptionProps {
  isInView: boolean;
}

const SEFDescription: React.FC<SEFDescriptionProps> = ({ isInView }) => {
  return (
    <div className="max-w-xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-indigo-100 leading-relaxed"
      >
        Join thousands of entrepreneurs, investors, and thought leaders at Sharjah's flagship
        innovation event. Two days of inspiration, connection, and opportunity to transform
        your entrepreneurial journey.
      </motion.p>
      
      {/* CTA Buttons - Enhanced with dual options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <GradientButton 
          asChild 
          size="lg" 
          variant="shimmer"
          className="group"
        >
          <Link to="/events/sef/register" className="flex items-center gap-2 my-0 font-medium">
            <span>REGISTER FOR SEF 2026</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </GradientButton>
        
        <Button 
          asChild 
          size="lg" 
          variant="outline" 
          className="border-indigo-400/30 text-indigo-200 hover:bg-indigo-500/10 transition-all"
        >
          <Link to="/events/sef/agenda" className="flex items-center gap-2 my-0">
            <span>EXPLORE THE AGENDA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default SEFDescription;
