import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useFounderStories, useStoryInteractions } from "@/hooks/useFounderStories";
import type { FounderStory } from "@/hooks/useFounderStories";

const YoungFounderSpotlight = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { stories, loading } = useFounderStories();
  const { toggleLike, hasLiked } = useStoryInteractions();

  const currentFounder = stories[currentStory];

  if (loading || !stories.length) {
    return (
      <div className="relative max-w-md mx-auto h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading founder stories...</div>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setIsPlaying(false);
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
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = async () => {
    if (currentFounder) {
      try {
        await toggleLike(currentFounder.id);
      } catch (error) {
        console.error('Error toggling like:', error);
      }
    }
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
    <div className="relative max-w-md mx-auto h-screen bg-black overflow-hidden young-mobile-optimized">
      {/* Screen reader instructions */}
      <div className="sr-only">
        Use arrow keys up and down to navigate stories, space bar to pause/play, or swipe on touch devices
      </div>
      
      {/* Video Container */}
      <div 
        className="relative w-full h-full young-video-container" 
        role="main"
        aria-label="Young founder video stories"
      >
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
              style={{ backgroundImage: `url(${currentFounder.thumbnail_url || ''})` }}
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
                aria-label={`Video story of ${currentFounder.name}, founder of ${currentFounder.company}`}
                preload="metadata"
              >
                <source src={currentFounder.video_url || ''} type="video/mp4" />
                <track kind="captions" src={`${currentFounder.video_url || ''}.vtt`} srcLang="en" label="English" default />
              </video>
              
              {/* Play/Pause Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-transparent border-0 cursor-pointer tap-target"
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
              <div className="text-sm font-semibold">{currentStory + 1} / {founderStories.length}</div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-white hover:bg-white/20 tap-target young-accessible-focus"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Volume2 className="w-4 h-4" aria-hidden="true" />
              )}
              <span className="sr-only">{isMuted ? "Unmuted" : "Muted"}</span>
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
        <button
          className="absolute left-0 top-0 w-1/2 h-full z-10 bg-transparent border-0 cursor-pointer tap-target"
          onClick={handlePrevious}
          aria-label="Previous founder story"
          type="button"
        />
        <button
          className="absolute right-0 top-0 w-1/2 h-full z-10 bg-transparent border-0 cursor-pointer tap-target"
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

export default YoungFounderSpotlight;