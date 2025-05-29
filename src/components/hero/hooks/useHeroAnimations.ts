
import { useState, useEffect } from 'react';

export const useHeroAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStage, setAnimationStage] = useState<'arrival' | 'recognition' | 'inspiration' | 'action'>('arrival');

  useEffect(() => {
    // Start animations immediately when component mounts
    setIsVisible(true);
    
    // Stage timing choreography
    const stages = [
      { stage: 'arrival', delay: 0 },
      { stage: 'recognition', delay: 1500 },
      { stage: 'inspiration', delay: 3000 },
      { stage: 'action', delay: 4500 }
    ];

    const timeouts = stages.map(({ stage, delay }) => 
      setTimeout(() => {
        setAnimationStage(stage as typeof animationStage);
      }, delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return {
    isVisible,
    animationStage
  };
};
