import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ArrowRight, 
  TrendingUp, 
  MessageCircle, 
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Crown
} from "lucide-react";

interface CrossPersonaMatch {
  id: string;
  type: 'investor-startup' | 'mentor-student' | 'partner-startup' | 'peer-collaboration';
  stakeholder: {
    name: string;
    role: string;
    persona: string;
    avatar?: string;
    interests: string[];
  };
  entrepreneur: {
    name: string;
    startup: string;
    sector: string;
    stage: string;
    persona: string;
  };
  matchScore: number;
  commonInterests: string[];
  potentialValue: string;
  nextStep: string;
  timing: 'immediate' | 'this-week' | 'this-month';
}

interface CrossPersonaIntelligenceProps {
  currentPersona: string;
  userProfile?: {
    interests: string[];
    sector?: string;
    stage?: string;
  };
}

const CrossPersonaIntelligence: React.FC<CrossPersonaIntelligenceProps> = ({ 
  currentPersona, 
  userProfile 
}) => {
  const [matches, setMatches] = useState<CrossPersonaMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in real implementation, this would come from AI matching service
  const mockMatches: CrossPersonaMatch[] = [
    {
      id: '1',
      type: 'investor-startup',
      stakeholder: {
        name: 'Fatima Al-Rashid',
        role: 'Managing Partner',
        persona: 'stakeholders',
        interests: ['FinTech', 'Islamic Finance', 'UAE Market'],
      },
      entrepreneur: {
        name: 'Ahmed Hassan',
        startup: 'PayHalal',
        sector: 'FinTech',
        stage: 'Series A',
        persona: 'entrepreneurs'
      },
      matchScore: 94,
      commonInterests: ['Islamic Finance', 'UAE Market', 'Compliance'],
      potentialValue: '$2M Series A Investment',
      nextStep: 'Schedule pitch presentation',
      timing: 'this-week'
    },
    {
      id: '2',
      type: 'mentor-student',
      stakeholder: {
        name: 'Dr. Sarah Mitchell',
        role: 'EdTech Entrepreneur',
        persona: 'entrepreneurs',
        interests: ['EdTech', 'AI in Education', 'Youth Development'],
      },
      entrepreneur: {
        name: 'Layla Mohammed',
        startup: 'StudyBridge',
        sector: 'EdTech',
        stage: 'Idea Stage',
        persona: 'students'
      },
      matchScore: 87,
      commonInterests: ['EdTech', 'Student Engagement', 'AI Tools'],
      potentialValue: 'Mentorship & Market Validation',
      nextStep: 'Intro coffee meeting',
      timing: 'immediate'
    },
    {
      id: '3',
      type: 'partner-startup',
      stakeholder: {
        name: 'Rashid Al-Maktoum',
        role: 'Government Relations',
        persona: 'stakeholders',
        interests: ['Smart Cities', 'Sustainability', 'Public-Private Partnerships'],
      },
      entrepreneur: {
        name: 'Maria Santos',
        startup: 'GreenTech Solutions',
        sector: 'Sustainability',
        stage: 'Growth',
        persona: 'entrepreneurs'
      },
      matchScore: 91,
      commonInterests: ['Sustainability', 'Government Contracts', 'Smart Cities'],
      potentialValue: 'Government pilot program',
      nextStep: 'Policy alignment discussion',
      timing: 'this-month'
    }
  ];

  useEffect(() => {
    // Simulate AI matching process
    const loadMatches = async () => {
      setIsLoading(true);
      
      // Filter matches based on current persona and user profile
      const relevantMatches = mockMatches.filter(match => {
        if (currentPersona === 'stakeholders') {
          return match.type.includes('investor') || match.type.includes('partner');
        } else if (currentPersona === 'entrepreneurs') {
          return match.type.includes('startup') || match.type.includes('partner');
        } else if (currentPersona === 'students') {
          return match.type.includes('mentor') || match.type.includes('peer');
        }
        return true;
      });

      // Simulate API delay
      setTimeout(() => {
        setMatches(relevantMatches);
        setIsLoading(false);
      }, 1500);
    };

    loadMatches();
  }, [currentPersona, userProfile]);

  const getPersonaIcon = (persona: string) => {
    switch (persona) {
      case 'stakeholders': return Crown;
      case 'entrepreneurs': return Briefcase;
      case 'students': return GraduationCap;
      default: return Users;
    }
  };

  const getTimingColor = (timing: string) => {
    switch (timing) {
      case 'immediate': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'this-week': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'this-month': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const handleMatchInteraction = (matchId: string, action: 'view' | 'connect' | 'schedule') => {
    // Track interaction for analytics
    console.log(`Match interaction: ${action} on ${matchId}`);
    
    // In real implementation, this would:
    // 1. Update the match status
    // 2. Send notifications to both parties
    // 3. Schedule meetings/calls
    // 4. Track conversion metrics
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <Card className="border-0 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-600 rounded w-1/3" />
                    <div className="h-3 bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Smart Connections
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-300"
        >
          AI-matched opportunities across the ecosystem
        </motion.p>
      </div>

      <div className="space-y-4">
        {matches.map((match, index) => {
          const StakeholderIcon = getPersonaIcon(match.stakeholder.persona);
          const EntrepreneurIcon = getPersonaIcon(match.entrepreneur.persona);

          return (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                          <StakeholderIcon className="w-4 h-4 text-[#F59E0B]" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <EntrepreneurIcon className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {match.stakeholder.name} ↔ {match.entrepreneur.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {match.stakeholder.role} • {match.entrepreneur.startup}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        {match.matchScore}% Match
                      </Badge>
                      <Badge className={getTimingColor(match.timing)}>
                        {match.timing.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Common Interests</p>
                      <div className="flex flex-wrap gap-1">
                        {match.commonInterests.map((interest) => (
                          <Badge key={interest} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Potential Value</p>
                      <p className="text-sm font-medium text-white">{match.potentialValue}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center text-[#F59E0B]">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{match.nextStep}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => handleMatchInteraction(match.id, 'view')}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-[#F59E0B] hover:bg-[#F59E0B]/90"
                        onClick={() => handleMatchInteraction(match.id, 'connect')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {matches.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Building Your Network
          </h3>
          <p className="text-gray-400 mb-6">
            Complete your profile to unlock personalized connections
          </p>
          <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
            Complete Profile
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default CrossPersonaIntelligence;