import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { 
  Target, 
  Clock, 
  Users, 
  Trophy, 
  Zap, 
  Calendar, 
  TrendingUp,
  Star,
  Medal,
  Crown,
  CheckCircle,
  Eye,
  Share2
} from "lucide-react";

interface Challenge {
  id: string;
  type: "weekly" | "daily" | "monthly";
  title: string;
  description: string;
  goal: string;
  timeLeft: string;
  participants: number;
  prize: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  progress?: number;
  status: "active" | "completed" | "upcoming";
  icon: any;
}

interface RecentWin {
  id: string;
  username: string;
  challenge: string;
  achievement: string;
  timeAgo: string;
  points: number;
}

const ChallengeFeed = () => {
  const [activeTab, setActiveTab] = useState<"active" | "completed" | "upcoming">("active");
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>([]);

  const challenges: Challenge[] = [
    {
      id: "1",
      type: "weekly",
      title: "Validate Your Idea",
      description: "Interview 10 potential customers about your startup idea",
      goal: "Interview 10 potential customers",
      timeLeft: "4 days, 12 hours",
      participants: 127,
      prize: "AED 1,000 + Mentorship session",
      difficulty: "intermediate",
      category: "Market Research",
      progress: 30,
      status: "active",
      icon: Target
    },
    {
      id: "2",
      type: "daily",
      title: "Social Media Audit",
      description: "Analyze 3 successful young entrepreneurs' Instagram strategies",
      goal: "Analyze 3 entrepreneur Instagram accounts",
      timeLeft: "18 hours",
      participants: 89,
      prize: "Advanced marketing workshop access",
      difficulty: "beginner",
      category: "Marketing",
      status: "active",
      icon: TrendingUp
    },
    {
      id: "3",
      type: "monthly",
      title: "Pitch Your Impact",
      description: "Create a 2-minute video pitch for your social impact startup idea",
      goal: "2-minute video pitch for social impact startup",
      timeLeft: "15 days",
      participants: 34,
      prize: "AED 10,000 + 3-month mentorship",
      difficulty: "advanced",
      category: "Pitching",
      status: "active",
      icon: Medal
    },
    {
      id: "4",
      type: "weekly",
      title: "Build Your MVP",
      description: "Create a working prototype of your app or service",
      goal: "Build and demo a working prototype",
      timeLeft: "Starting in 2 days",
      participants: 0,
      prize: "AED 2,000 + Prototype Lab access",
      difficulty: "advanced",
      category: "Development",
      status: "upcoming",
      icon: Zap
    }
  ];

  const recentWins: RecentWin[] = [
    {
      id: "1",
      username: "@amira_codes",
      challenge: "App Prototype Challenge",
      achievement: "Built working EdTech app",
      timeAgo: "2 hours ago",
      points: 500
    },
    {
      id: "2",
      username: "@green_omar",
      challenge: "Sustainability Pitch Competition",
      achievement: "Won best environmental solution",
      timeAgo: "5 hours ago",
      points: 750
    },
    {
      id: "3",
      username: "@twin_entrepreneurs",
      challenge: "Social Impact Assessment",
      achievement: "Completed community impact study",
      timeAgo: "1 day ago",
      points: 300
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-500";
      case "intermediate": return "bg-yellow-500";
      case "advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "daily": return <Calendar className="w-4 h-4" />;
      case "weekly": return <Clock className="w-4 h-4" />;
      case "monthly": return <Crown className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const joinChallenge = (challengeId: string) => {
    setJoinedChallenges(prev => [...prev, challengeId]);
    toast({
      title: "🎉 Challenge joined!",
      description: "You're now part of this exciting challenge. Good luck!",
      duration: 3000,
    });
  };

  const viewChallengeDetails = (challengeId: string) => {
    toast({
      title: "Challenge details",
      description: "Opening detailed challenge information...",
      duration: 2000,
    });
  };

  const shareChallenge = (challengeId: string) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge) {
      const shareText = `Check out this challenge: ${challenge.title}! Join me at Sheraa's Challenge Feed 🔥`;
      if (navigator.share) {
        navigator.share({
          title: challenge.title,
          text: shareText,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Challenge shared! 📋",
          description: "Link copied to clipboard!",
          duration: 2000,
        });
      }
    }
  };

  const filteredChallenges = challenges.filter(challenge => challenge.status === activeTab);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-4 young-gradient-text">
          🔥 Live Challenges
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join exciting challenges, compete with peers, and win amazing prizes while building real entrepreneurial skills!
        </p>
      </div>

      {/* Trending Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="border-0 young-gradient-dopamine text-white shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6" />
              <span className="font-bold text-lg">TRENDING NOW</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black">127</div>
                <div className="text-sm opacity-90">Active Participants</div>
              </div>
              <div>
                <div className="text-2xl font-black">AED 13,000</div>
                <div className="text-sm opacity-90">Total Prize Pool</div>
              </div>
              <div>
                <div className="text-2xl font-black">72%</div>
                <div className="text-sm opacity-90">Challenge Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-full p-1">
          {["active", "completed", "upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                activeTab === tab
                  ? "young-gradient-dopamine text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid gap-6 mb-8">
        <AnimatePresence>
          {filteredChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 young-dopamine-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 young-gradient-energy rounded-full flex items-center justify-center text-white">
                        <challenge.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="capitalize">
                            {getTypeIcon(challenge.type)}
                            <span className="ml-1">{challenge.type}</span>
                          </Badge>
                          <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white text-xs`}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                    {challenge.status === "active" && (
                      <div className="text-right">
                        <div className="text-2xl">🔥</div>
                        <div className="text-xs text-gray-500 mt-1">Hot</div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-orange-600 mb-1">
                        <Target className="w-4 h-4" />
                        <span className="text-xs font-semibold">GOAL</span>
                      </div>
                      <div className="text-sm font-medium">{challenge.goal}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-semibold">TIME LEFT</span>
                      </div>
                      <div className="text-sm font-medium">{challenge.timeLeft}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold">PARTICIPANTS</span>
                      </div>
                      <div className="text-sm font-medium">{challenge.participants} students</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                        <Trophy className="w-4 h-4" />
                        <span className="text-xs font-semibold">PRIZE</span>
                      </div>
                      <div className="text-sm font-medium">{challenge.prize}</div>
                    </div>
                  </div>

                  {challenge.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Your Progress</span>
                        <span className="text-sm text-gray-600">{challenge.progress}% complete</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    {joinedChallenges.includes(challenge.id) ? (
                      <Button disabled className="flex-1 bg-green-500 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Joined
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => joinChallenge(challenge.id)}
                        className="flex-1 young-gradient-dopamine text-white font-bold"
                      >
                        Join Challenge
                      </Button>
                    )}
                    <Button 
                      variant="outline"
                      onClick={() => viewChallengeDetails(challenge.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => shareChallenge(challenge.id)}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Recent Wins */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Recent Wins 🎉
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentWins.map((win, index) => (
                <motion.div
                  key={win.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        <span className="text-purple-600">{win.username}</span> completed "{win.challenge}"
                      </div>
                      <div className="text-sm text-gray-600">{win.achievement}</div>
                      <div className="text-xs text-gray-500">{win.timeAgo}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+{win.points} pts</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="w-full">
                View All Winners
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ChallengeFeed;