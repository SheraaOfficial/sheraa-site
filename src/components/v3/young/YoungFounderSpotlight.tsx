import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface FounderStory {
  id: string;
  name: string;
  age: number;
  company: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  stats: {
    revenue: string;
    users: string;
    team: number;
    funding: string;
  };
  achievements: string[];
  likes: number;
  comments: number;
  shares: number;
  category: string;
  hashtags: string[];
}

const YoungFounderSpotlight = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const founderStories: FounderStory[] = [
    {
      id: "1",
      name: "Amira Al-Zahra",
      age: 19,
      company: "StudyBuddy",
      description: "From failing math to AED 100K revenue 📚💰",
      videoUrl: "/api/placeholder/400/600",
      thumbnailUrl: "https://images.unsplash.com/photo-1494790108755-2616b72ad5b4",
      stats: {
        revenue: "AED 100K",
        users: "2,500+",
        team: 6,
        funding: "Pre-seed"
      },
      achievements: [
        "Started at age 17",
        "Revenue in Year 1: AED 100K",
        "Students helped: 2,500+",
        "Team size: 6 friends"
      ],
      likes: 1247,
      comments: 89,
      shares: 156,
      category: "EdTech",
      hashtags: ["#YoungEntrepreneur", "#EdTech", "#StudentSuccess", "#MadeInSharjah"]
    },
    {
      id: "2",
      name: "Omar Hassan",
      age: 20,
      company: "EcoCase",
      description: "Turning plastic waste into phone cases 📱♻️",
      videoUrl: "/api/placeholder/400/600",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      stats: {
        revenue: "AED 250K",
        users: "3,000",
        team: 8,
        funding: "Seed"
      },
      achievements: [
        "Plastic bottles saved: 10,000+",
        "Products sold: 3,000",
        "Countries shipping to: 12",
        "Awards won: 3"
      ],
      likes: 2156,
      comments: 234,
      shares: 445,
      category: "Sustainability",
      hashtags: ["#Sustainability", "#PhoneCases", "#ClimateAction", "#YoungCEO"]
    },
    {
      id: "3",
      name: "Fatima & Sarah",
      age: 18,
      company: "Period Power",
      description: "How we got 1M views fighting period poverty 🩸",
      videoUrl: "/api/placeholder/400/600",
      thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      stats: {
        revenue: "Non-profit",
        users: "50 schools",
        team: 200,
        funding: "Grants"
      },
      achievements: [
        "Hygiene kits distributed: 5,000",
        "Schools reached: 50",
        "Volunteers recruited: 200+",
        "Media features: 15"
      ],
      likes: 5678,
      comments: 456,
      shares: 1234,
      category: "Social Impact",
      hashtags: ["#PeriodPoverty", "#SocialImpact", "#WomenEmpowerment", "#TwinPower"]
    }
  ];

  const currentFounder = founderStories[currentStory];

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % founderStories.length);
    setIsPlaying(false);
    setLiked(false);
  };

  const handlePrevious = () => {
    setCurrentStory((prev) => (prev - 1 + founderStories.length) % founderStories.length);
    setIsPlaying(false);
    setLiked(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Fallback for when no video element exists
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

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
            {/* Background Image/Video Placeholder */}
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${currentFounder.thumbnailUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              
              {/* Video Element (hidden for now, showing as background image) */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0"
                muted={isMuted}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={currentFounder.videoUrl} type="video/mp4" />
              </video>
              
              {/* Play/Pause Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
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
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="text-xs opacity-75">Young Founders</div>
              <div className="text-sm font-semibold">{currentStory + 1} / {founderStories.length}</div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
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
              {currentFounder.company} • Started in garage after seeing need 
              in community. Now helping thousands! 🚀
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
              liked ? 'bg-red-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Heart className={`w-6 h-6 ${liked ? 'fill-white' : ''}`} />
            </div>
            <span className="text-xs mt-1 font-semibold">
              {(currentFounder.likes + (liked ? 1 : 0)).toLocaleString()}
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
              {currentFounder.comments}
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
              {currentFounder.shares}
            </span>
          </motion.button>

          {/* Profile Picture */}
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
            <img 
              src={currentFounder.thumbnailUrl} 
              alt={currentFounder.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Areas */}
        <div 
          className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
          onClick={handlePrevious}
        />
        <div 
          className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
          onClick={handleNext}
        />

        {/* Bottom Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center z-20">
          Tap to pause • Swipe up for next • Use ↑↓ arrows
        </div>
      </div>
    </div>
  );
};

export default YoungFounderSpotlight;