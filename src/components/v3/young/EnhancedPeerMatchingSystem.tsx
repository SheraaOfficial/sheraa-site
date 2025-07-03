import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { 
  Heart, 
  X, 
  MessageCircle, 
  MapPin, 
  Trophy, 
  Users, 
  Lightbulb,
  Code,
  Palette,
  TrendingUp,
  Settings,
  Send,
  Video,
  Phone
} from "lucide-react";

interface PeerProfile {
  id: string;
  name: string;
  age: number;
  photo: string;
  university: string;
  location: string;
  idea: string;
  strengths: string[];
  lookingFor: string[];
  level: number;
  levelName: string;
  matchPercentage: number;
  bio: string;
  achievements: string[];
  interests: string[];
}

const PeerMatchingSystem = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [connections, setConnections] = useState<string[]>([]);
  const [showMatches, setShowMatches] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const profiles: PeerProfile[] = [
    {
      id: "1",
      name: "Khalid Al-Rashid",
      age: 20,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      university: "AUS",
      location: "Sharjah (15 min from you)",
      idea: "Food delivery optimization using AI",
      strengths: ["Mobile development", "Data analysis", "Arabic fluency"],
      lookingFor: ["Creative partner", "Marketing expert", "UI/UX designer"],
      level: 2,
      levelName: "Prototype Builder",
      matchPercentage: 94,
      bio: "Love building apps that solve real problems! Currently working on making food delivery smarter and faster.",
      achievements: ["Won AUS Hackathon 2024", "Built 3 mobile apps", "500+ GitHub commits"],
      interests: ["AI/ML", "Mobile Tech", "Food Industry", "Gaming"]
    },
    {
      id: "2",
      name: "Sara Abdulla",
      age: 19,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b72ad5b4",
      university: "UoS",
      location: "Abu Dhabi (Virtual collaboration OK)",
      idea: "Mental health app for university students",
      strengths: ["Psychology background", "User research", "Arabic/English content"],
      lookingFor: ["Technical co-founder", "Growth hacker", "App developer"],
      level: 3,
      levelName: "Business Launcher",
      matchPercentage: 87,
      bio: "Psychology student passionate about mental health awareness. Want to make therapy accessible for all UAE students.",
      achievements: ["Published research paper", "500+ Instagram followers", "Mental health advocate"],
      interests: ["Psychology", "Mental Health", "Social Impact", "Content Creation"]
    },
    {
      id: "3",
      name: "Ahmed Al-Mansoori",
      age: 21,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      university: "Virtual Hub",
      location: "Dubai (Flexible meetings)",
      idea: "Sustainable packaging for e-commerce",
      strengths: ["Business strategy", "Sustainability expertise", "Industry connections"],
      lookingFor: ["Product designer", "Tech developer", "Marketing specialist"],
      level: 2,
      levelName: "Prototype Builder",
      matchPercentage: 82,
      bio: "Environmental engineering student. Building the future of sustainable packaging with innovative materials.",
      achievements: ["Sustainability award winner", "3 patents pending", "Industry partnerships"],
      interests: ["Sustainability", "Environment", "Innovation", "Business"]
    }
  ];

  const currentPeer = profiles[currentProfile];

  // Add swipe gesture support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handleSwipe('left');
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleSwipe('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentProfile]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isDragging) return;
    
    setSwipeDirection(direction);
    setIsDragging(true);
    
    if (direction === 'right') {
      handleConnect();
    } else {
      handlePass();
    }
    
    setTimeout(() => {
      setSwipeDirection(null);
      setIsDragging(false);
    }, 300);
  };

  const handleConnect = () => {
    setConnections(prev => [...prev, currentPeer.id]);
    toast({
      title: "🎉 Perfect Match!",
      description: `You connected with ${currentPeer.name}! They'll be notified.`,
      duration: 3000,
    });
    nextProfile();
  };

  const handlePass = () => {
    toast({
      title: "Next founder coming up!",
      description: "Keep swiping to find your perfect co-founder match.",
      duration: 2000,
    });
    nextProfile();
  };

  const nextProfile = () => {
    if (currentProfile < profiles.length - 1) {
      setCurrentProfile(currentProfile + 1);
    } else {
      setShowMatches(true);
    }
  };

  const sendMessage = (profileId: string) => {
    toast({
      title: "Message sent! 📨",
      description: "Your introduction message has been sent. They'll get back to you soon!",
      duration: 3000,
    });
  };

  const startVideoCall = (profileId: string) => {
    toast({
      title: "Video call initiated! 📹",
      description: "Setting up a secure video call...",
      duration: 3000,
    });
  };

  const getStrengthIcon = (strength: string) => {
    if (strength.toLowerCase().includes('develop') || strength.toLowerCase().includes('tech')) return Code;
    if (strength.toLowerCase().includes('design') || strength.toLowerCase().includes('creative')) return Palette;
    if (strength.toLowerCase().includes('market') || strength.toLowerCase().includes('business')) return TrendingUp;
    return Lightbulb;
  };

  if (showMatches) {
    const connectedProfiles = profiles.filter(p => connections.includes(p.id));
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl font-black mb-4 young-gradient-text">
            Amazing! You've Made {connections.length} Connection{connections.length !== 1 ? 's' : ''}!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your new entrepreneurial squad is ready to build something incredible together!
          </p>
        </motion.div>

        <div className="grid gap-6 mb-8">
          {connectedProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg young-dopamine-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={profile.photo} 
                      alt={profile.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{profile.name}</h3>
                        <Badge className="young-gradient-success text-white">
                          {profile.matchPercentage}% Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{profile.idea}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {profile.strengths.slice(0, 3).map((strength, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => sendMessage(profile.id)}
                          className="young-gradient-dopamine text-white"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                        <Button 
                          onClick={() => startVideoCall(profile.id)}
                          variant="outline"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Video Chat
                        </Button>
                        <Button variant="outline">
                          <Users className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => {
              setCurrentProfile(0);
              setConnections([]);
              setShowMatches(false);
            }}
            variant="outline" 
            className="mr-4"
          >
            Find More Matches
          </Button>
          <Button 
            onClick={() => toast({
              title: "Group chat started! 💬",
              description: "Creating a group chat with all your connections...",
              duration: 3000,
            })}
            className="young-gradient-dopamine text-white"
          >
            Start Group Chat
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black mb-4 young-gradient-text">
          🤝 Find Your Squad
        </h1>
        <p className="text-gray-600">
          Swipe to connect with founders who complement your skills!
        </p>
        <div className="mt-4 bg-gray-100 rounded-full px-4 py-2 inline-block">
          <span className="text-sm font-semibold">
            {currentProfile + 1} / {profiles.length}
          </span>
        </div>
      </div>

      {/* Profile Card */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={cardRef}
          key={currentProfile}
          initial={{ opacity: 0, x: 300 }}
          animate={{ 
            opacity: 1, 
            x: swipeDirection === 'left' ? -300 : swipeDirection === 'right' ? 300 : 0,
            rotate: swipeDirection === 'left' ? -15 : swipeDirection === 'right' ? 15 : 0
          }}
          exit={{ 
            opacity: 0, 
            x: swipeDirection === 'left' ? -300 : 300,
            rotate: swipeDirection === 'left' ? -15 : 15
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(event, info) => {
            setIsDragging(false);
            if (Math.abs(info.offset.x) > 100) {
              handleSwipe(info.offset.x > 0 ? 'right' : 'left');
            }
          }}
        >
          <Card className="border-0 shadow-2xl young-dopamine-shadow overflow-hidden cursor-grab active:cursor-grabbing">
            {/* Profile Image */}
            <div className="relative h-80">
              <img 
                src={currentPeer.photo} 
                alt={currentPeer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Match Percentage */}
              <div className="absolute top-4 right-4">
                <Badge className="young-gradient-success text-white font-bold text-lg px-3 py-2">
                  {currentPeer.matchPercentage}% Match
                </Badge>
              </div>

              {/* Basic Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold mb-1">{currentPeer.name}, {currentPeer.age}</h2>
                <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
                  <Trophy className="w-4 h-4" />
                  <span>Level {currentPeer.level}: {currentPeer.levelName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <MapPin className="w-4 h-4" />
                  <span>{currentPeer.location}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              {/* ... existing content ... */}
              {/* Idea */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Startup Idea:
                </div>
                <p className="text-lg font-semibold">{currentPeer.idea}</p>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-gray-600">{currentPeer.bio}</p>
              </div>

              {/* Strengths */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">💪 Strengths:</div>
                <div className="flex flex-wrap gap-2">
                  {currentPeer.strengths.map((strength, index) => {
                    const IconComponent = getStrengthIcon(strength);
                    return (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <IconComponent className="w-3 h-3" />
                        {strength}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Looking For */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">🔍 Looking for:</div>
                <div className="flex flex-wrap gap-2">
                  {currentPeer.lookingFor.map((need, index) => (
                    <Badge key={index} className="young-gradient-energy text-white">
                      {need}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-2">🏆 Achievements:</div>
                <ul className="space-y-1">
                  {currentPeer.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Match */}
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-sm font-semibold text-purple-700 mb-2">Why you match:</div>
                <p className="text-sm text-purple-600">
                  ✅ Complementary skills<br />
                  ✅ Similar commitment level<br />
                  ✅ Geographic compatibility<br />
                  ✅ Program stage alignment
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('left')}
          disabled={isDragging}
          className="w-16 h-16 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg transition-colors disabled:opacity-50"
        >
          <X className="w-8 h-8 text-gray-600" />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('right')}
          disabled={isDragging}
          className="w-16 h-16 young-gradient-dopamine rounded-full flex items-center justify-center shadow-lg text-white disabled:opacity-50"
        >
          <Heart className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 text-sm text-gray-500">
        <p>💚 Connect • ✖️ Pass • ← → Arrow keys • Drag to swipe</p>
      </div>
    </div>
  );
};

export default PeerMatchingSystem;
