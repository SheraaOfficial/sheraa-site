import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Crown, MapPin, Smartphone, Clock, Brain, Target } from "lucide-react";

interface UserContext {
  isUAE: boolean;
  isMobile: boolean;
  isBusinessHours: boolean;
  timestamp: Date;
}

interface ContextDisplayProps {
  userContext: UserContext;
  variant: string;
  smartRecommendation?: {
    personaId: string;
    confidence: number;
  };
}

const ContextDisplay: React.FC<ContextDisplayProps> = ({ 
  userContext, 
  variant, 
  smartRecommendation 
}) => {
  return (
    <>
      {/* Cultural Header */}
      <div className="text-center pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-[hsl(var(--sheraa-primary))/20] text-[hsl(var(--sheraa-primary))] border-[hsl(var(--sheraa-primary))/30] px-4 py-2 mb-4">
            <Crown className="w-4 h-4 mr-2" />
            SHERAA • Innovation Ecosystem
          </Badge>
        </motion.div>
      </div>

      {/* Smart Context Display */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {userContext.isUAE ? "UAE Detected" : "International Visitor"}
          </div>
          <div className="flex items-center">
            <Smartphone className="w-4 h-4 mr-2" />
            {userContext.isMobile ? "Mobile Device" : "Desktop Experience"}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {userContext.isBusinessHours ? "Business Hours" : "After Hours"}
          </div>
          <div className="flex items-center">
            <Brain className="w-4 h-4 mr-2" />
            A/B Variant: {variant}
          </div>
        </div>
      </div>

      {/* A/B Testing Variants */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        {/* Variant A: Direct Selection */}
        {variant === 'A' && (
          <div className="text-center mb-4">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Classic Experience
            </Badge>
          </div>
        )}

        {/* Variant C: Hybrid Smart Recommendations */}
        {variant === 'C' && smartRecommendation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2">
              <Target className="w-3 h-3 mr-1" />
              Smart Recommendation: {smartRecommendation.confidence}% match
            </Badge>
            <p className="text-gray-300 text-sm">
              Based on your profile, we recommend starting with the highlighted persona
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContextDisplay;