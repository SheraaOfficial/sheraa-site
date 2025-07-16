import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StickyChallengeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Application deadline - June 30, 2025
  const deadline = new Date('2025-06-30T23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold text-sm sm:text-base">
                  Access Sharjah Challenge 2025
                </span>
              </div>
              
              <div className="hidden sm:flex items-center space-x-1 text-sm">
                <span>Limited spots available!</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4" />
                <span>Applications close:</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Countdown Timer */}
              <div className="flex items-center space-x-2 text-sm font-mono">
                <div className="text-center">
                  <div className="font-bold">{timeLeft.days}</div>
                  <div className="text-xs opacity-90">days</div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <div className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">hrs</div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <div className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">min</div>
                </div>
                <span className="hidden sm:inline">:</span>
                <div className="text-center hidden sm:block">
                  <div className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">sec</div>
                </div>
              </div>

              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link to="/programs/asc" className="flex items-center space-x-1">
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors ml-2"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyChallengeBanner;