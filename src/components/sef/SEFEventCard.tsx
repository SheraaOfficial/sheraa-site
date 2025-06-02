
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { useTheme } from "next-themes";

type SEFEventCardProps = {
  hasRevealed: boolean;
};

export const SEFEventCard: React.FC<SEFEventCardProps> = ({ hasRevealed }) => {
  const { theme } = useTheme();
  
  return (
    <Card 
      className="border-white/30 backdrop-blur-xl bg-white/15 overflow-hidden relative group"
    >
      <div className="absolute -inset-x-2/3 bottom-0 top-10 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#9b87f5] to-[#F97316] blur-3xl" />
      </div>
      
      <CardContent className="p-6 pb-6 relative z-10">
        <motion.div 
          initial={!hasRevealed ? { opacity: 0, y: 20 } : {}}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5"
        >
          <h3 className="text-2xl font-bold text-white mb-4">SEF'26</h3>
          
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#9b87f5]" />
              <span className="text-white/90">January 31 - February 1, 2026</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#9b87f5]" />
              <span className="text-white/90">Sharjah Research, Technology, and Innovation Park (SRTIP)</span>
            </div>
          </div>
          
          <div className="pt-2 space-y-3">
            <GradientButton asChild variant="shimmer" className="w-full justify-center group">
              <Link to="/events/sef/register?source=card" className="flex items-center">
                Register Now
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Link>
            </GradientButton>
            
            <Button asChild variant="outline" className="w-full bg-white/10 text-white border-white/40 hover:bg-white/25 
                hover:border-white/60">
              <Link to="/events/sef/agenda">View Full Agenda</Link>
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
