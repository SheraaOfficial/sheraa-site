
import { useState, useCallback } from 'react';

export const useSuccessMetrics = () => {
  const [metrics, setMetrics] = useState({
    startups: '0',
    revenue: '$0',
    jobs: '0'
  });

  const animateCounter = useCallback((
    target: number, 
    suffix: string = '', 
    prefix: string = '',
    duration: number = 2000
  ): Promise<string[]> => {
    return new Promise((resolve) => {
      const steps: string[] = [];
      const increment = target / (duration / 50);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          steps.push(`${prefix}${Math.round(current)}${suffix}`);
          resolve(steps);
        } else {
          steps.push(`${prefix}${Math.round(current)}${suffix}`);
        }
      }, 50);
    });
  };

  const startCountUp = useCallback(async () => {
    // Animate startups count
    const startupsSteps = await animateCounter(180, '+');
    
    // Animate revenue
    const revenueSteps = await animateCounter(248, 'M+', '$');
    
    // Animate jobs
    const jobsSteps = await animateCounter(1900, '+');

    // Update final values
    setMetrics({
      startups: '180+',
      revenue: '$248M+',
      jobs: '1,900+'
    });
  }, []);

  return {
    metrics,
    startCountUp
  };
};
