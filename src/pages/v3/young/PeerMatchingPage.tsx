
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, MessageCircle, Users, Sparkles, Code, Palette, TrendingUp, Globe, Zap } from "lucide-react";

interface Peer {
  id: string;
  name: string;
  age: number;
  university: string;
  major: string;
  skills: string[];
  interests: string[];
  lookingFor: string[];
  bio: string;
  avatar: string;
  matchPercentage: number;
  isOnline: boolean;
  projects: string[];
}

const mockPeers: Peer[] = [
  {
    id: "1",
    name: "Sarah Al-Rashid",
    age: 20,
    university: "American University of Sharjah",
    major: "Computer Science",
    skills: ["React", "Python", "UI/UX", "Data Analysis"],
    interests: ["Sustainability", "EdTech", "AI"],
    lookingFor: ["Co-founder", "Technical Partner", "Mentor"],
    bio: "Passionate about building tech solutions for environmental challenges. Currently working on a carbon tracking app and looking for like-minded co-founders to scale impact.",
    avatar: "👩‍💻",
    matchPercentage: 94,
    isOnline: true,
    projects: ["EcoTracker App", "Campus Sustainability Initiative"]
  },
  {
    id: "2",
    name: "Ahmed Hassan",
    age: 19,
    university: "University of Sharjah",
    major: "Business Administration",
    skills: ["Marketing", "Finance", "Strategy", "Leadership"],
    interests: ["FinTech", "E-commerce", "Social Impact"],
    lookingFor: ["Technical Co-founder", "Investor", "Mentor"],
    bio: "Business-minded entrepreneur with a passion for financial inclusion. Building solutions to make banking more accessible for underserved communities in the MENA region.",
    avatar: "👨‍💼",
    matchPercentage: 87,
    isOnline: false,
    projects: ["Micro-lending Platform", "Financial Literacy App"]
  },
  {
    id: "3",
    name: "Fatima Al-Zahra",
    age: 21,
    university: "American University of Sharjah",
    major: "Graphic Design",
    skills: ["Design", "Branding", "Marketing", "Content Creation"],
    interests: ["Creative Industries", "Fashion", "Social Media"],
    lookingFor: ["Business Partner", "Developer", "Collaborator"],
    bio: "Creative designer passionate about empowering local artists and artisans. Working on a platform to connect traditional craftspeople with global markets.",
    avatar: "🎨",
    matchPercentage: 82,
    isOnline: true,
    projects: ["Artisan Marketplace", "Cultural Heritage App"]
  }
];

const PeerMatchingPage: React.FC = () => {
  const [currentPeerIndex, setCurrentPeerIndex] = useState(0);
  const [matches, setMatches] = useState<Peer[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const currentPeer = mockPeers[currentPeerIndex];

  const handleLike = () => {
    setMatches(prev => [...prev, currentPeer]);
    nextPeer();
  };

  const handlePass = () => {
    nextPeer();
  };

  const nextPeer = () => {
    if (currentPeerIndex < mockPeers.length - 1) {
      setCurrentPeerIndex(prev => prev + 1);
    } else {
      setShowMatches(true);
    }
  };

  const getSkillIcon = (skill: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      "React": Code,
      "Python": Code,
      "UI/UX": Palette,
      "Marketing": TrendingUp,
      "Finance": TrendingUp,
      "Design": Palette,
      "Leadership": Users
    };
    return iconMap[skill] || Zap;
  };

  if (showMatches) {
    return (
      <MainLayout>
        <YoungEntrepreneurNavigation />
        <section className="py-16 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white min-h-screen">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                🎉 Your Matches!
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Congratulations! You've matched with {matches.length} potential co-founders and collaborators.
              </p>
            </motion.div>

            {matches.length === 0 ? (
              <div className="text-center">
                <Card className="bg-white/10 backdrop-blur-sm border-0 max-w-md mx-auto">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">No Matches Yet</h2>
                    <p className="text-gray-300 mb-6">
                      Don't worry! Keep exploring and you'll find your perfect co-founder match.
                    </p>
                    <Button 
                      onClick={() => {
                        setCurrentPeerIndex(0);
                        setShowMatches(false);
                        setMatches([]);
                      }}
                      className="young-gradient-dopamine text-white font-bold"
                    >
                      Try Again
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matches.map((peer, index) => (
                  <motion.div
                    key={peer.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="text-4xl">{peer.avatar}</div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{peer.name}</h3>
                              <p className="text-sm text-gray-300">{peer.age} • {peer.university}</p>
                            </div>
                          </div>
                          <Badge className="bg-green-500 text-white">
                            {peer.matchPercentage}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm mb-4">
                          {peer.bio.substring(0, 100)}...
                        </p>
                        
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-300 mb-2">Skills:</div>
                          <div className="flex flex-wrap gap-1">
                            {peer.skills.slice(0, 3).map(skill => (
                              <span key={skill} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full young-gradient-dopamine text-white font-bold">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Start Conversation
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              💫 Find Your Co-Founder
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Swipe through young entrepreneurs in Sharjah and find your perfect co-founder match. 
              Build your startup team with like-minded innovators!
            </p>
            
            <div className="text-sm text-gray-400 mb-8">
              {currentPeerIndex + 1} of {mockPeers.length} profiles
            </div>
          </motion.div>

          {/* Matching Interface */}
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPeer.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden">
                  {/* Profile Header */}
                  <div className="relative p-6 pb-4">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        {currentPeer.matchPercentage}% Match
                      </Badge>
                    </div>
                    {currentPeer.isOnline && (
                      <div className="absolute top-4 left-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-6xl mb-4">{currentPeer.avatar}</div>
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {currentPeer.name}, {currentPeer.age}
                      </h2>
                      <p className="text-gray-300 mb-2">{currentPeer.major}</p>
                      <p className="text-sm text-gray-400">{currentPeer.university}</p>
                    </div>
                  </div>

                  <CardContent>
                    {/* Bio */}
                    <div className="mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentPeer.bio}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Skills & Expertise</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {currentPeer.skills.map(skill => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <div key={skill} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Icon className="w-4 h-4 text-purple-400" />
                              <span className="text-xs text-gray-300">{skill}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentPeer.interests.map(interest => (
                          <span key={interest} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Looking For */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Looking For</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentPeer.lookingFor.map(item => (
                          <span key={item} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Current Projects</h3>
                      <div className="space-y-2">
                        {currentPeer.projects.map(project => (
                          <div key={project} className="flex items-center gap-2 text-sm text-gray-300">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span>{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePass}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <X className="w-8 h-8" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Heart className="w-8 h-8" />
              </motion.button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-400">
              ← Pass • Like →
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PeerMatchingPage;
