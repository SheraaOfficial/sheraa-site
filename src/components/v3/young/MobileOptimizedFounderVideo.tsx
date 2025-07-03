
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Play, Pause, Volume2, VolumeX, ArrowUp, ArrowDown } from "lucide-react";

interface FounderVideo {
  id: string;
  name: string;
  age: number;
  company: string;
  story: string;
  achievements: string[];
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
  videoUrl?: string;
  thumbnail: string;
}

const mockVideos: FounderVideo[] = [
  {
    id: "1",
    name: "Sarah Al-Rashid",
    age: 19,
    company: "EcoTech Solutions",
    story: "Started with a broken AC in my dorm room. Now we're making sustainable cooling systems for the whole UAE! 🌿❄️",
    achievements: ["AED 500K Revenue", "10K+ Users", "Featured in Gulf News"],
    hashtags: ["#sustainability", "#tech", "#startup", "#dorm2empire"],
    likes: 1250,
    comments: 89,
    shares: 45,
    thumbnail: "/lovable-uploads/sheraa-logo.png"
  },
  {
    id: "2", 
    name: "Ahmed Hassan",
    age: 21,
    company: "StudyBuddy AI",
    story: "Failed my first year, built an AI tutor to help me study. Now 50K+ students use it across MENA! 🤖📚",
    achievements: ["50K+ Students", "AED 1M Revenue", "Raised Series A"],
    hashtags: ["#edtech", "#ai", "#failure2success", "#students"],
    likes: 2100,
    comments: 156,
    shares: 78,
    thumbnail: "/lovable-uploads/sheraa-logo.png"
  },
  {
    id: "3",
    name: "Fatima Al-Zahra", 
    age: 20,
    company: "CreativeHub",
    story: "Couldn't afford art supplies as a student. Built a platform where artists share resources. Now we're in 15 cities! 🎨✨",
    achievements: ["1K+ Artists", "15 Cities", "Regional Expansion"],
    hashtags: ["#creative", "#art", "#community", "#resourcesharing"],
    likes: 890,
    comments: 67,
    shares: 34,
    thumbnail: "/lovable-uploads/sheraa-logo.png"
  }
];

const MobileOptimizedFounderVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentFounder = mockVideos[currentVideo];

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % mockVideos.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentVideo((prev) => (prev - 1 + mockVideos.length) % mockVideos.length);
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

  // Touch gesture handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe) {
      handleNext();
    } else if (isDownSwipe) {
      handlePrevious();
    }
  };

  // Auto-hide controls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const showControlsTemporarily = () => {
    setShowControls(true);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-md mx-auto h-screen bg-black overflow-hidden rounded-2xl young-mobile-optimized"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={showControlsTemporarily}
    >
      {/* Video Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Gradient Background (simulating video) */}
          <div 
            className="w-full h-full young-gradient-animated relative"
            style={{
              background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            
            {/* Floating achievement badges */}
            <div className="absolute top-20 left-4 space-y-2 z-10">
              {currentFounder.achievements.slice(0, 2).map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="young-glass-card px-3 py-1 text-xs text-white font-medium"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Navigation & Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center"
          >
            <div className="young-glass-card px-3 py-1 text-white text-sm">
              {currentVideo + 1}/{mockVideos.length}
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="text-white hover:bg-white/20 w-10 h-10 rounded-full"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause Control */}
      <button
        className="absolute inset-0 flex items-center justify-center bg-transparent border-0 cursor-pointer z-20"
        onClick={togglePlay}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 young-glass-card rounded-full flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Swipe Indicators */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 space-y-4 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-center"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
          <div className="text-xs mt-1">Next</div>
        </motion.div>
        <motion.div
          animate={{ y: [10, 0, 10] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="text-white/60 text-center"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
          <div className="text-xs mt-1">Previous</div>
        </motion.div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-32 z-30 flex flex-col items-center space-y-6">
        {/* Profile Picture */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full border-2 border-white overflow-hidden young-gradient-dopamine"
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
            {currentFounder.name.charAt(0)}
          </div>
        </motion.div>

        {/* Like Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleLike}
          className="flex flex-col items-center text-white"
        >
          <motion.div 
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              hasLiked ? 'bg-red-500' : 'young-glass-card'
            }`}
            animate={hasLiked ? { scale: [1, 1.2, 1] } : {}}
          >
            <Heart className={`w-6 h-6 ${hasLiked ? 'fill-white' : ''}`} />
          </motion.div>
          <span className="text-xs mt-1 font-semibold">
            {(currentFounder.likes + (hasLiked ? 1 : 0)).toLocaleString()}
          </span>
        </motion.button>

        {/* Comment Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="flex flex-col items-center text-white"
        >
          <div className="w-12 h-12 young-glass-card rounded-full flex items-center justify-center">
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
          <div className="w-12 h-12 young-glass-card rounded-full flex items-center justify-center">
            <Share2 className="w-6 h-6" />
          </div>
          <span className="text-xs mt-1 font-semibold">
            {currentFounder.shares}
          </span>
        </motion.button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-2">
            {currentFounder.name}, {currentFounder.age}
          </h3>
          <p className="text-base mb-3 leading-relaxed">
            {currentFounder.story}
          </p>
          <div className="flex flex-wrap gap-1 mb-4">
            {currentFounder.hashtags.map((tag, index) => (
              <span key={index} className="text-sm text-blue-300 hover:text-blue-200">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileOptimizedFounderVideo;
