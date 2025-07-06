import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, TrendingUp, Users } from "lucide-react";

interface UserBehavior {
  sessionCount: number;
  preferredPersona?: string;
  timeSpentByPersona: Record<string, number>;
  completedAssessments: string[];
  conversionEvents: number;
  devicePreference: 'mobile' | 'desktop' | 'mixed';
  regionPreference: 'UAE' | 'international';
  lastVisit: Date;
}

interface SmartRoutingProps {
  onPersonaRecommendation: (personaId: string, confidence: number) => void;
  userContext: {
    isUAE: boolean;
    isMobile: boolean;
    isBusinessHours: boolean;
  };
}

const SmartRouting: React.FC<SmartRoutingProps> = ({ onPersonaRecommendation, userContext }) => {
  const [userBehavior, setUserBehavior] = useState<UserBehavior | null>(null);
  const [smartRecommendation, setSmartRecommendation] = useState<{
    personaId: string;
    confidence: number;
    reasons: string[];
  } | null>(null);

  useEffect(() => {
    // Load user behavior data
    const loadUserBehavior = () => {
      try {
        const stored = localStorage.getItem('user_behavior_profile');
        if (stored) {
          const behavior = JSON.parse(stored);
          behavior.lastVisit = new Date(behavior.lastVisit);
          setUserBehavior(behavior);
        } else {
          // Initialize new user behavior
          const newBehavior: UserBehavior = {
            sessionCount: 1,
            timeSpentByPersona: {},
            completedAssessments: [],
            conversionEvents: 0,
            devicePreference: userContext.isMobile ? 'mobile' : 'desktop',
            regionPreference: userContext.isUAE ? 'UAE' : 'international',
            lastVisit: new Date()
          };
          setUserBehavior(newBehavior);
          localStorage.setItem('user_behavior_profile', JSON.stringify(newBehavior));
        }
      } catch (error) {
        console.error('Error loading user behavior:', error);
      }
    };

    loadUserBehavior();
  }, [userContext]);

  useEffect(() => {
    if (!userBehavior) return;

    // Calculate smart recommendation
    const calculateRecommendation = () => {
      const reasons: string[] = [];
      let scores = {
        entrepreneurs: 0,
        students: 0,
        community: 0,
        stakeholders: 0
      };

      // Historical preference (40% weight)
      if (userBehavior.preferredPersona) {
        scores[userBehavior.preferredPersona as keyof typeof scores] += 40;
        reasons.push(`Previous preference for ${userBehavior.preferredPersona}`);
      }

      // Time spent analysis (30% weight)
      const totalTime = Object.values(userBehavior.timeSpentByPersona).reduce((a, b) => a + b, 0);
      if (totalTime > 0) {
        Object.entries(userBehavior.timeSpentByPersona).forEach(([persona, time]) => {
          const percentage = (time / totalTime) * 30;
          scores[persona as keyof typeof scores] += percentage;
          if (percentage > 10) {
            reasons.push(`High engagement with ${persona} content`);
          }
        });
      }

      // Context-based scoring (20% weight)
      if (userContext.isBusinessHours && !userContext.isMobile) {
        scores.stakeholders += 15;
        scores.entrepreneurs += 10;
        reasons.push('Professional context detected');
      } else if (userContext.isMobile) {
        scores.students += 10;
        scores.entrepreneurs += 8;
        reasons.push('Mobile-first user behavior');
      }

      // Regional preferences (10% weight)
      if (userContext.isUAE) {
        scores.stakeholders += 5;
        scores.entrepreneurs += 5;
        reasons.push('UAE-based visitor');
      } else {
        scores.community += 8;
        reasons.push('International visitor exploring opportunities');
      }

      // Find highest scoring persona
      const topPersona = Object.entries(scores).reduce((a, b) => 
        scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
      );

      const confidence = Math.min(topPersona[1], 95); // Cap at 95%

      setSmartRecommendation({
        personaId: topPersona[0],
        confidence,
        reasons: reasons.slice(0, 3) // Top 3 reasons
      });

      onPersonaRecommendation(topPersona[0], confidence);
    };

    calculateRecommendation();
  }, [userBehavior, userContext, onPersonaRecommendation]);

  const updateBehaviorProfile = (personaId: string, action: 'view' | 'interact' | 'convert') => {
    if (!userBehavior) return;

    const updated = { ...userBehavior };
    
    switch (action) {
      case 'view':
        updated.timeSpentByPersona[personaId] = (updated.timeSpentByPersona[personaId] || 0) + 1;
        break;
      case 'interact':
        updated.timeSpentByPersona[personaId] = (updated.timeSpentByPersona[personaId] || 0) + 2;
        break;
      case 'convert':
        updated.conversionEvents += 1;
        updated.preferredPersona = personaId;
        break;
    }

    updated.lastVisit = new Date();
    setUserBehavior(updated);
    localStorage.setItem('user_behavior_profile', JSON.stringify(updated));
  };

  if (!smartRecommendation) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI Recommendation</h3>
                <p className="text-sm text-gray-300">Based on your behavior patterns</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              {smartRecommendation.confidence}% Match
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Personalized for you</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">High success rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Community validated</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm font-medium text-white">Why this recommendation?</p>
            {smartRecommendation.reasons.map((reason, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-sm text-gray-300">{reason}</span>
              </div>
            ))}
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            onClick={() => updateBehaviorProfile(smartRecommendation.personaId, 'convert')}
          >
            Explore Recommended Path
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SmartRouting;