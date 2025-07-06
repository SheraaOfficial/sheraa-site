import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface QuickAccessLinksProps {
  onTrackEvent: (event: string, data: any) => void;
  onToggleCrossPersona: () => void;
  showCrossPersonaIntelligence: boolean;
}

const QuickAccessLinks: React.FC<QuickAccessLinksProps> = ({ 
  onTrackEvent, 
  onToggleCrossPersona, 
  showCrossPersonaIntelligence 
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-center mt-12"
    >
      <p className="text-gray-400 mb-4">
        Looking for something specific?
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() => {
            onTrackEvent('quick_access_click', { target: 'programs' });
            navigate('/programs');
          }}
        >
          All Programs
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() => {
            onTrackEvent('quick_access_click', { target: 'sef' });
            navigate('/events/sef-landing');
          }}
        >
          SEF 2026
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() => {
            onTrackEvent('quick_access_click', { target: 'community' });
            navigate('/community');
          }}
        >
          Join Community
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={onToggleCrossPersona}
        >
          {showCrossPersonaIntelligence ? 'Hide' : 'Show'} Smart Connections
        </Button>
      </div>
    </motion.div>
  );
};

export default QuickAccessLinks;