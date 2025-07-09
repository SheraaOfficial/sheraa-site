import { useState, useEffect, useRef } from 'react';

interface InteractionEvent {
  type: 'click' | 'hover' | 'scroll' | 'swipe' | 'pinch' | 'magnetic';
  timestamp: number;
  element?: string;
  duration?: number;
  velocity?: number;
  data?: any;
}

interface InteractionMetrics {
  totalInteractions: number;
  averageSessionTime: number;
  popularElements: { [key: string]: number };
  gestureUsage: { [key: string]: number };
  performanceScore: number;
}

export const useInteractionMetrics = () => {
  const [metrics, setMetrics] = useState<InteractionMetrics>({
    totalInteractions: 0,
    averageSessionTime: 0,
    popularElements: {},
    gestureUsage: {},
    performanceScore: 100
  });

  const [events, setEvents] = useState<InteractionEvent[]>([]);
  const sessionStartRef = useRef(Date.now());
  const performanceTimingsRef = useRef<number[]>([]);

  // Track interaction event
  const trackEvent = (event: Omit<InteractionEvent, 'timestamp'>) => {
    const fullEvent: InteractionEvent = {
      ...event,
      timestamp: Date.now()
    };

    setEvents(prev => [...prev.slice(-99), fullEvent]); // Keep last 100 events
    updateMetrics(fullEvent);
  };

  // Update metrics based on new event
  const updateMetrics = (event: InteractionEvent) => {
    setMetrics(prev => {
      const updated = { ...prev };
      
      // Increment total interactions
      updated.totalInteractions += 1;
      
      // Update session time
      updated.averageSessionTime = (Date.now() - sessionStartRef.current) / 1000;
      
      // Track popular elements
      if (event.element) {
        updated.popularElements[event.element] = (updated.popularElements[event.element] || 0) + 1;
      }
      
      // Track gesture usage
      if (event.type === 'swipe' || event.type === 'pinch') {
        updated.gestureUsage[event.type] = (updated.gestureUsage[event.type] || 0) + 1;
      }
      
      return updated;
    });
  };

  // Track performance timing
  const trackPerformance = (timing: number) => {
    performanceTimingsRef.current.push(timing);
    
    // Calculate performance score (lower is better for timing)
    const avgTiming = performanceTimingsRef.current.reduce((a, b) => a + b, 0) / performanceTimingsRef.current.length;
    const performanceScore = Math.max(0, 100 - (avgTiming / 10)); // Rough calculation
    
    setMetrics(prev => ({ ...prev, performanceScore }));
    
    // Keep only last 20 timings
    if (performanceTimingsRef.current.length > 20) {
      performanceTimingsRef.current = performanceTimingsRef.current.slice(-20);
    }
  };

  // Get interaction patterns
  const getInteractionPatterns = () => {
    if (events.length < 2) return null;

    const patterns = {
      clickFrequency: 0,
      scrollBehavior: 'normal' as 'fast' | 'normal' | 'slow',
      preferredGestures: [] as string[],
      engagementLevel: 'medium' as 'high' | 'medium' | 'low'
    };

    // Calculate click frequency (clicks per minute)
    const sessionDuration = (Date.now() - sessionStartRef.current) / 60000; // minutes
    const clicks = events.filter(e => e.type === 'click').length;
    patterns.clickFrequency = clicks / Math.max(sessionDuration, 1);

    // Analyze scroll behavior
    const scrollEvents = events.filter(e => e.type === 'scroll');
    if (scrollEvents.length > 0) {
      const avgScrollVelocity = scrollEvents.reduce((sum, e) => sum + (e.velocity || 0), 0) / scrollEvents.length;
      patterns.scrollBehavior = avgScrollVelocity > 500 ? 'fast' : avgScrollVelocity < 100 ? 'slow' : 'normal';
    }

    // Identify preferred gestures
    const gestureTypes = Object.entries(metrics.gestureUsage)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([type]) => type);
    patterns.preferredGestures = gestureTypes;

    // Calculate engagement level
    const interactionRate = metrics.totalInteractions / Math.max(sessionDuration, 1);
    patterns.engagementLevel = interactionRate > 10 ? 'high' : interactionRate < 3 ? 'low' : 'medium';

    return patterns;
  };

  // Auto-track common events
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const element = (e.target as HTMLElement)?.tagName?.toLowerCase() || 'unknown';
      trackEvent({ type: 'click', element });
    };

    const handleScroll = () => {
      const now = Date.now();
      const lastScrollTime = performanceTimingsRef.current[performanceTimingsRef.current.length - 1] || now;
      const velocity = Math.abs(window.scrollY - (window as any).lastScrollY || 0) / Math.max(now - lastScrollTime, 1);
      
      trackEvent({ type: 'scroll', velocity });
      (window as any).lastScrollY = window.scrollY;
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    metrics,
    events: events.slice(-20), // Return last 20 events
    trackEvent,
    trackPerformance,
    getInteractionPatterns,
    reset: () => {
      setMetrics({
        totalInteractions: 0,
        averageSessionTime: 0,
        popularElements: {},
        gestureUsage: {},
        performanceScore: 100
      });
      setEvents([]);
      sessionStartRef.current = Date.now();
      performanceTimingsRef.current = [];
    }
  };
};
