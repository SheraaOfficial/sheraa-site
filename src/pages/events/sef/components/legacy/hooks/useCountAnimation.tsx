
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export const useCountAnimation = (targetValue: string, duration: number = 2, startOnView: boolean = true) => {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  useEffect(() => {
    if (!startOnView || isInView) {
      let start = 0;
      const end = parseInt(targetValue.replace(/\D/g, ""));
      
      // Ensure we don't try to animate non-numeric values
      if (isNaN(end)) {
        setCount(targetValue);
        return;
      }
      
      // Animation duration
      const totalDuration = duration * 1000;
      const frameDuration = 1000 / 60;
      
      // Calculate increment per frame
      const totalFrames = Math.round(totalDuration / frameDuration);
      const increment = end / totalFrames;
      
      // Start animation
      const timer = setInterval(() => {
        start += increment;
        
        if (start >= end) {
          setCount(targetValue); // Ensure we end with the exact target string
          clearInterval(timer);
        } else {
          setCount(Math.floor(start).toString() + (targetValue.includes("+") ? "+" : ""));
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [targetValue, duration, startOnView, isInView]);
  
  return { count, ref };
};
