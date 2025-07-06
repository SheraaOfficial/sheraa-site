import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Target } from "lucide-react";

interface UserContext {
  isUAE: boolean;
  isMobile: boolean;
  isBusinessHours: boolean;
  timestamp: Date;
}

interface SmartRoutingProps {
  userContext: UserContext;
  onPersonaRecommendation: (personaId: string, confidence: number) => void;
}

const SmartRouting: React.FC<SmartRoutingProps> = ({ 
  userContext, 
  onPersonaRecommendation 
}) => {
  React.useEffect(() => {
    // Smart persona recommendation logic
    let recommendedPersona = "community";
    let confidence = 75;

    if (userContext.isMobile && userContext.isBusinessHours) {
      recommendedPersona = "entrepreneurs";
      confidence = 85;
    } else if (!userContext.isMobile && userContext.isBusinessHours) {
      recommendedPersona = "stakeholders";
      confidence = 90;
    } else if (userContext.isMobile) {
      recommendedPersona = "students";
      confidence = 80;
    }

    onPersonaRecommendation(recommendedPersona, confidence);
  }, [userContext, onPersonaRecommendation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <Badge className="bg-[hsl(var(--sheraa-teal))/20] text-[hsl(var(--sheraa-teal))] border-[hsl(var(--sheraa-teal))/30] mb-4">
        <Brain className="w-4 h-4 mr-2" />
        AI-Powered Routing
      </Badge>
      <p className="text-white/60 text-sm">
        Analyzing your context to suggest the best journey...
      </p>
    </motion.div>
  );
};

export default SmartRouting;