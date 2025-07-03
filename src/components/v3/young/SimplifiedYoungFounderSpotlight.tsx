
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface MockFounderStory {
  id: string;
  name: string;
  age: number;
  company: string;
  description: string;
  category: string;
  thumbnail_url: string;
  achievements: string[];
  stats: {
    revenue?: string;
    users?: string;
    funding?: string;
    team_size?: string;
  };
  hashtags: string[];
  likes_count: number;
  comments_count: number;
  shares_count: number;
}

const mockFounderStories: MockFounderStory[] = [
  {
    id: "1",
    name: "Sarah Al-Rashid",
    age: 19,
    company: "EcoTech Solutions",
    description: "Building sustainable tech for a greener future",
    category: "Sustainability",
    thumbnail_url: "/lovable-uploads/sheraa-logo.png",
    achievements: ["AED 500K Revenue", "10K+ Users", "3 Awards"],
    stats: {
      revenue: "AED 500K",
      users: "10K+",
      funding: "AED 250K",
      team_size: "8"
    },
    hashtags: ["#sustainability", "#tech", "#startup", "#sharjah"],
    likes_count: 1250,
    comments_count: 89,
    shares_count: 45
  },
  {
    id: "2",
    name: "Ahmed Hassan",
    age: 21,
    company: "EdTech Arabia",
    description: "Revolutionizing education through AI",
    category: "EdTech",
    thumbnail_url: "/lovable-uploads/sheraa-logo.png",
    achievements: ["50K+ Students", "AED 1M Revenue", "Top 10 Startup"],
    stats: {
      revenue: "AED 1M",
      users: "50K+",
      funding: "AED 500K",
      team_size: "12"
    },
    hashtags: ["#edtech", "#ai", "#education", "#innovation"],
    likes_count: 2100,
    comments_count: 156,
    shares_count: 78
  },
  {
    id: "3",
    name: "Fatima Al-Zahra",
    age: 20,
    company: "Creative Hub",
    description: "Connecting artists with opportunities",
    category: "Creative Industries",
    thumbnail_url: "/lovable-uploads/sheraa-logo.png",
    achievements: ["1K+ Artists", "AED 300K Revenue", "Regional Expansion"],
    stats: {
      revenue: "AED 300K",
      users: "1K+",
      funding: "AED 150K",
      team_size: "6"
    },
    hashtags: ["#creative", "#art", "#marketplace", "#community"],
    likes_count: 890,
    comments_count: 67,
    shares_count: 34
  }
];

const SimplifiedYoungFounderSpotlight = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());

  const currentFounder = mockFounderStories[currentStory];

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % mockFounderStories.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentStory((prev) => (prev - 1 + mockFounderStories.length) % mockFounderStories.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleLike = () => {
    const newLikes = new Set(userLikes);
    if (newLikes.has(currentFounder.id)) {
      newLikes.delete(currentFounder.id);
    } else {
      newLikes.add(currentFounder.id);
    }
    setUserLikes(newLikes);
  };

  const hasLiked = userLikes.has(currentFounder.id);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'ArrowUp') {
        e.preventDefault();
        handlePrevious();
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative max-w-md mx-auto h-screen bg-black overflow-hidden">
      {/* Screen reader instructions */}
      <div className="sr-only">
        Use arrow keys up and down to navigate stories, space bar to pause/play, or swipe on touch devices
      </div>
      
      {/* Video Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ 
                backgroundImage: `linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)`,
                backgroundSize: '400% 400%',
                animation: 'young-gradient-shift 8s ease infinite'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
              
              {/* Play/Pause Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-transparent border-0 cursor-pointer"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                type="button"
              >
                {!isPlaying && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="text-xs opacity-75">Young Founders</div>
              <div className="text-sm font-semibold">{currentStory + 1} / {mockFounderStories.length}</div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-white hover:bg-white/20"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Volume2 className="w-4 h-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Main Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
          {/* Stats Overlay */}
          <div className="absolute top-4 left-4 space-y-2">
            {currentFounder.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs"
              >
                {achievement}
              </motion.div>
            ))}
          </div>

          {/* Founder Info */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1">
              {currentFounder.name}, {currentFounder.age}
            </h3>
            <p className="text-lg mb-2">{currentFounder.description}</p>
            <div className="flex items-center gap-4 text-sm opacity-90 mb-3">
              <span>📈 {currentFounder.stats.revenue}</span>
              <span>👥 {currentFounder.stats.users}</span>
              <span>🏆 {currentFounder.category}</span>
            </div>
            
            <p className="text-sm opacity-90 mb-3">
              {currentFounder.company} • Building the future from Sharjah! 🚀
            </p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {currentFounder.hashtags.map((tag, index) => (
                <span key={index} className="text-xs text-blue-300 hover:text-blue-200 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center space-y-6">
          {/* Like Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleLike}
            className="flex flex-col items-center text-white"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              hasLiked ? 'bg-red-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Heart className={`w-6 h-6 ${hasLiked ? 'fill-white' : ''}`} />
            </div>
            <span className="text-xs mt-1 font-semibold">
              {(currentFounder.likes_count + (hasLiked ? 1 : 0)).toLocaleString()}
            </span>
          </motion.button>

          {/* Comment Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center text-white"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1 font-semibold">
              {currentFounder.comments_count}
            </span>
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center text-white"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1 font-semibold">
              {currentFounder.shares_count}
            </span>
          </motion.button>

          {/* Profile Picture */}
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400">
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
              {currentFounder.name.charAt(0)}
            </div>
          </div>
        </div>

        {/* Navigation Areas */}
        <button
          className="absolute left-0 top-0 w-1/2 h-full z-10 bg-transparent border-0 cursor-pointer"
          onClick={handlePrevious}
          aria-label="Previous founder story"
          type="button"
        />
        <button
          className="absolute right-0 top-0 w-1/2 h-full z-10 bg-transparent border-0 cursor-pointer"
          onClick={handleNext}
          aria-label="Next founder story"
          type="button"
        />

        {/* Bottom Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center z-20">
          Tap to pause • Swipe up for next • Use ↑↓ arrows
        </div>
      </div>
    </div>
  );
};

export default SimplifiedYoungFounderSpotlight;
