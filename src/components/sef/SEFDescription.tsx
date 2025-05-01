
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        className="text-lg text-gray-200 leading-relaxed"
      >
        Experience two electrifying days of innovation, inspiration, and meaningful connections 
        at SRTI Park, Sharjah. Join thousands of entrepreneurs, investors, and innovators from across 
        the globe to shape the future of entrepreneurship in the region.
      </motion.p>
      
      {/* CTA Buttons - Enhanced with dual options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button 
          asChild 
          size="lg" 
          className="bg-[#FED700] text-black hover:bg-[#FED700]/90 shadow-lg hover:shadow-xl hover:shadow-[#FED700]/20 transition-all"
        >
          <Link to="/events/sef/register" className="flex items-center gap-2 my-0 font-medium">
            <span>REGISTER YOUR INTEREST</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        
        <Button 
          asChild 
          size="lg" 
          variant="outline" 
          className="border-[#FED700] text-[#FED700] hover:bg-[#FED700]/10 transition-all"
        >
          <Link to="/events/sef/agenda" className="flex items-center gap-2 my-0">
            <span>VIEW AGENDA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default SEFDescription;
