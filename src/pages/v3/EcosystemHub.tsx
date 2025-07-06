import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Rocket, 
  GraduationCap, 
  Users, 
  Crown
} from "lucide-react";
import { useABTesting } from "@/hooks/useABTesting";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import SmartRouting from "@/components/v3/intelligence/SmartRouting";
import CrossPersonaIntelligence from "@/components/v3/intelligence/CrossPersonaIntelligence";
import RevolutionaryPersonaGrid from "@/components/v3/ecosystem/RevolutionaryPersonaGrid";
import ContextDisplay from "@/components/v3/ecosystem/ContextDisplay";
import QuickAccessLinks from "@/components/v3/ecosystem/QuickAccessLinks";
import RevolutionaryParticleSystem from "@/components/v3/effects/RevolutionaryParticleSystem";
import InteractiveCursor from "@/components/v3/effects/InteractiveCursor";

interface UserContext {
  isUAE: boolean;
  isMobile: boolean;
  isBusinessHours: boolean;
  timestamp: Date;
}

const EcosystemHub: React.FC = () => {
  const navigate = useNavigate();
  const { trackEvent, trackPersonaView, getEngagementScore } = useAnalytics();
  const routingTest = useABTesting('ecosystem-hub-routing');
  
  const [userContext, setUserContext] = useState<UserContext>({
    isUAE: false,
    isMobile: false,
    isBusinessHours: false,
    timestamp: new Date()
  });
  const [greeting, setGreeting] = useState<string>("");
  const [smartRecommendation, setSmartRecommendation] = useState<{
    personaId: string;
    confidence: number;
  } | null>(null);
  const [showCrossPersonaIntelligence, setShowCrossPersonaIntelligence] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePersona, setActivePersona] = useState<string | null>(null);

  // Track mouse position for particle interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Detect user context
    const detectContext = async () => {
      const isMobile = window.innerWidth < 768;
      const hour = new Date().getHours();
      const isBusinessHours = hour >= 8 && hour <= 18;
      
      // IP geolocation detection (simplified)
      let isUAE = false;
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        isUAE = data.country_code === 'AE';
      } catch (error) {
        console.log('Geolocation detection failed, defaulting to international');
      }

      setUserContext({
        isUAE,
        isMobile,
        isBusinessHours,
        timestamp: new Date()
      });

      // Set culturally appropriate greeting
      if (isUAE) {
        setGreeting(isBusinessHours ? "أهلاً وسهلاً - Welcome" : "مرحباً - Hello");
      } else {
        setGreeting(isBusinessHours ? "Welcome to Sharjah's Innovation Ecosystem" : "Discover Innovation Opportunities");
      }
    };

    detectContext();
  }, []);

  const personas = [
    {
      id: "entrepreneurs",
      title: "I'm Building Something",
      subtitle: "Startup Founders & Entrepreneurs",
      description: "Scale your tech-enabled venture with funding, mentorship, and market access",
      icon: Rocket,
      path: "/v3/entrepreneurs",
      color: "v3-gradient-entrepreneurs",
      audience: "mobile",
      stats: "180+ Startups Supported"
    },
    {
      id: "students",
      title: "I'm a Student Innovator", 
      subtitle: "University Students & Young Founders",
      description: "Transform your ideas into viable businesses through our youth programs",
      icon: GraduationCap,
      path: "/v3/young",
      color: "v3-gradient-students",
      audience: "mobile",
      stats: "18,000+ Youth Upskilled"
    },
    {
      id: "community",
      title: "I'm Exploring Opportunities",
      subtitle: "Community Members & Professionals",
      description: "Join Sharjah's innovation community and discover collaboration opportunities",
      icon: Users,
      path: "/v3/general",
      color: "v3-gradient-community",
      audience: "general",
      stats: "140+ Ecosystem Partners"
    },
    {
      id: "stakeholders",
      title: "I'm an Investor/Partner",
      subtitle: "VCs, Government & Corporate Partners",
      description: "Access exclusive deal flow, portfolio analytics, and strategic partnerships",
      icon: Crown,
      path: "/v3/stakeholders",
      color: "v3-gradient-stakeholders",
      audience: "desktop",
      stats: "$248M+ Portfolio Revenue"
    }
  ];

  const getSmartRecommendation = () => {
    if (userContext.isMobile && userContext.isBusinessHours) {
      return "entrepreneurs";
    } else if (!userContext.isMobile && userContext.isBusinessHours) {
      return "stakeholders";
    } else if (userContext.isMobile) {
      return "students";
    }
    return "community";
  };

  const handlePersonaSelect = (path: string, personaId: string) => {
    // Enhanced analytics tracking
    trackPersonaView(personaId);
    trackEvent('persona_selected', { 
      persona_id: personaId,
      variant: routingTest.variant,
      confidence: smartRecommendation?.confidence || 0,
      engagement_score: getEngagementScore()
    });

    // Store advanced preference data
    const advancedPreferences = {
      preferredPersona: personaId,
      lastVisit: new Date().toISOString(),
      selectionMethod: smartRecommendation ? 'ai_recommended' : 'manual_selection',
      confidence: smartRecommendation?.confidence || 0,
      variant: routingTest.variant
    };
    
    localStorage.setItem('preferredPersona', personaId);
    localStorage.setItem('lastVisit', new Date().toISOString());
    localStorage.setItem('advanced_preferences', JSON.stringify(advancedPreferences));

    // Track A/B test conversion
    routingTest.trackConversion('persona_selection', smartRecommendation?.confidence || 50);
    
    navigate(path);
  };

  const recommendedPersona = getSmartRecommendation();

  return (
    <div className="min-h-screen v3-revolutionary-bg relative overflow-hidden">
      {/* Interactive Cursor */}
      <InteractiveCursor />
      
      {/* Revolutionary Particle System */}
      <RevolutionaryParticleSystem 
        mousePosition={mousePosition} 
        activePersona={activePersona || recommendedPersona}
        intensity="revolutionary" 
      />
      
      <ContextDisplay 
        userContext={userContext}
        variant={routingTest.variant}
        smartRecommendation={smartRecommendation}
      />
      
      <div className="text-center relative z-10 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl lg:text-7xl font-black mb-6 v3-revolutionary-heading"
        >
          {greeting}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-white/80 max-w-4xl mx-auto px-4 mb-16 leading-relaxed"
        >
          Choose your entrepreneurial journey in Sharjah's thriving innovation ecosystem
        </motion.p>
      </div>

      {/* Variant B: AI-First Approach */}
      {routingTest.variant === 'B' && (
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <SmartRouting 
            userContext={userContext}
            onPersonaRecommendation={(personaId, confidence) => {
              setSmartRecommendation({ personaId, confidence });
            }}
          />
        </div>
      )}

      {/* Immersive Persona Selection Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
        <RevolutionaryPersonaGrid
          personas={personas}
          recommendedPersona={smartRecommendation?.personaId || recommendedPersona}
          onPersonaSelect={handlePersonaSelect}
          onPersonaHover={setActivePersona}
        />

        {/* Cross-Persona Intelligence */}
        {showCrossPersonaIntelligence && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <CrossPersonaIntelligence 
              currentPersona={smartRecommendation?.personaId || recommendedPersona}
              userProfile={{
                interests: [],
                sector: undefined,
                stage: undefined
              }}
            />
          </motion.div>
        )}

        <QuickAccessLinks
          onTrackEvent={trackEvent}
          onToggleCrossPersona={() => setShowCrossPersonaIntelligence(!showCrossPersonaIntelligence)}
          showCrossPersonaIntelligence={showCrossPersonaIntelligence}
        />
      </div>
    </div>
  );
};

export default EcosystemHub;