import React, { createContext, useContext, useEffect, useState } from "react";

interface AnalyticsData {
  sessionId: string;
  userId?: string;
  startTime: Date;
  pageViews: number;
  interactions: number;
  timeSpent: number;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  country: string;
  personaViewed: string[];
  conversionEvents: Array<{
    type: 'application_started' | 'contact_form' | 'investment_inquiry' | 'program_interest';
    timestamp: Date;
    metadata?: Record<string, any>;
  }>;
}

interface AnalyticsContextType {
  analytics: AnalyticsData;
  trackEvent: (eventType: string, metadata?: Record<string, any>) => void;
  trackPersonaView: (personaId: string) => void;
  trackConversion: (type: AnalyticsData['conversionEvents'][0]['type'], metadata?: Record<string, any>) => void;
  updateTimeSpent: () => void;
  getEngagementScore: () => number;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [analytics, setAnalytics] = useState<AnalyticsData>(() => ({
    sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    startTime: new Date(),
    pageViews: 1,
    interactions: 0,
    timeSpent: 0,
    deviceType: 'desktop', // Default value, will be updated in useEffect
    country: 'unknown',
    personaViewed: [],
    conversionEvents: []
  }));

  useEffect(() => {
    // Set device type safely on client side only
    if (typeof window !== 'undefined') {
      setAnalytics(prev => ({
        ...prev,
        deviceType: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
      }));
    }
  }, []);

  useEffect(() => {
    // Detect country on mount
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setAnalytics(prev => ({ ...prev, country: data.country_code || 'unknown' }));
      } catch (error) {
        console.log('Country detection failed');
      }
    };

    detectCountry();

    // Update time spent every 30 seconds
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - prev.startTime.getTime()) / 1000)
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const trackEvent = (eventType: string, metadata?: Record<string, any>) => {
    setAnalytics(prev => ({
      ...prev,
      interactions: prev.interactions + 1
    }));

    // Send to analytics service (GA4, Mixpanel, etc.)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventType, {
        custom_parameter: metadata,
        session_id: analytics.sessionId
      });
    }
  };

  const trackPersonaView = (personaId: string) => {
    setAnalytics(prev => ({
      ...prev,
      personaViewed: prev.personaViewed.includes(personaId) 
        ? prev.personaViewed 
        : [...prev.personaViewed, personaId]
    }));
    trackEvent('persona_viewed', { persona_id: personaId });
  };

  const trackConversion = (type: AnalyticsData['conversionEvents'][0]['type'], metadata?: Record<string, any>) => {
    const conversionEvent = {
      type,
      timestamp: new Date(),
      metadata
    };

    setAnalytics(prev => ({
      ...prev,
      conversionEvents: [...prev.conversionEvents, conversionEvent]
    }));

    trackEvent('conversion', { conversion_type: type, ...metadata });
  };

  const updateTimeSpent = () => {
    const currentTime = Math.floor((Date.now() - analytics.startTime.getTime()) / 1000);
    setAnalytics(prev => ({ ...prev, timeSpent: currentTime }));
  };

  const getEngagementScore = (): number => {
    const timeWeight = Math.min(analytics.timeSpent / 300, 1) * 40; // Max 40 points for 5+ minutes
    const interactionWeight = Math.min(analytics.interactions / 10, 1) * 30; // Max 30 points for 10+ interactions
    const personaWeight = analytics.personaViewed.length * 10; // 10 points per persona viewed
    const conversionWeight = analytics.conversionEvents.length * 20; // 20 points per conversion

    return Math.min(timeWeight + interactionWeight + personaWeight + conversionWeight, 100);
  };

  return (
    <AnalyticsContext.Provider value={{
      analytics,
      trackEvent,
      trackPersonaView,
      trackConversion,
      updateTimeSpent,
      getEngagementScore
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};