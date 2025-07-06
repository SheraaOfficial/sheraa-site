import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  GraduationCap, 
  Users, 
  Crown,
  ArrowRight,
  Globe2,
  Smartphone,
  Clock,
  MapPin
} from "lucide-react";

interface UserContext {
  isUAE: boolean;
  isMobile: boolean;
  isBusinessHours: boolean;
  timestamp: Date;
}

const EcosystemHub: React.FC = () => {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useState<UserContext>({
    isUAE: false,
    isMobile: false,
    isBusinessHours: false,
    timestamp: new Date()
  });
  const [greeting, setGreeting] = useState<string>("");

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
      color: "from-blue-500 to-purple-600",
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
      color: "from-green-500 to-teal-600",
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
      color: "from-orange-500 to-red-600",
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
      color: "from-amber-500 to-yellow-600",
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
    // Store preference for return visits
    localStorage.setItem('preferredPersona', personaId);
    localStorage.setItem('lastVisit', new Date().toISOString());
    navigate(path);
  };

  const recommendedPersona = getSmartRecommendation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#475569]">
      {/* Cultural Header */}
      <div className="text-center pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30 px-4 py-2 mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Under Royal Patronage • Government Backed
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {greeting}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Choose your entrepreneurial journey in Sharjah's thriving innovation ecosystem
          </p>
        </motion.div>
      </div>

      {/* Smart Context Display */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {userContext.isUAE ? "UAE Detected" : "International Visitor"}
          </div>
          <div className="flex items-center">
            <Smartphone className="w-4 h-4 mr-2" />
            {userContext.isMobile ? "Mobile Device" : "Desktop Experience"}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {userContext.isBusinessHours ? "Business Hours" : "After Hours"}
          </div>
        </div>
      </div>

      {/* Persona Selection Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="cursor-pointer"
              onClick={() => handlePersonaSelect(persona.path, persona.id)}
            >
              <Card className={`relative overflow-hidden border-0 shadow-2xl h-full ${
                persona.id === recommendedPersona ? 'ring-4 ring-[#F59E0B]/50' : ''
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-10`} />
                
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  {/* Recommendation Badge */}
                  {persona.id === recommendedPersona && (
                    <Badge className="absolute top-4 right-4 bg-[#F59E0B] text-white">
                      Recommended
                    </Badge>
                  )}

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <persona.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {persona.title}
                    </h3>
                    <p className="text-[#F59E0B] font-medium text-sm mb-4">
                      {persona.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="border-t border-white/20 pt-4 mb-4">
                    <p className="text-white font-semibold text-sm">
                      {persona.stats}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                    variant="outline"
                  >
                    Explore Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Looking for something specific?
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/programs')}
            >
              All Programs
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/events/sef-landing')}
            >
              SEF 2026
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/community')}
            >
              Join Community
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcosystemHub;