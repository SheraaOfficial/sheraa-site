
import React, { useEffect, useState } from "react";
import { ConfettiExplosion } from "@/components/ui/confetti-explosion";
import { toast } from "@/components/ui/use-toast";
import { useLocalStorage } from "@/hooks/use-local-storage";

export const WelcomeAnimation = () => {
  const [hasVisitedBefore, setHasVisitedBefore] = useLocalStorage("sheraa-has-visited", false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Only show the welcome animation for first-time visitors
    if (!hasVisitedBefore) {
      // Short delay before showing the animation
      const timer = setTimeout(() => {
        setShowConfetti(true);
        
        // Show the welcome toast
        toast({
          title: "Welcome to Sheraa's New Website! 🎉",
          description: "Discover our resources, programs, and community to support your entrepreneurial journey.",
          duration: 6000,
        });
        
        // Mark that the user has visited before
        setHasVisitedBefore(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [hasVisitedBefore, setHasVisitedBefore]);

  return showConfetti ? (
    <ConfettiExplosion 
      duration={4000}
      particleCount={200}
      spreadRadius={60}
    />
  ) : null;
};
