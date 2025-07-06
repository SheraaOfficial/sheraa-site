import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Rocket, 
  GraduationCap, 
  Users, 
  Crown,
  Zap,
  ArrowRight
} from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

interface UserContext {
  isUAE: boolean;
  isMobile: boolean;
  isBusinessHours: boolean;
  timestamp: Date;
}

const EcosystemHub: React.FC = () => {
  console.log("EcosystemHub V3 - Revolutionary Experience Loading...");
  const navigate = useNavigate();
  
  const [userContext, setUserContext] = useState<UserContext>({
    isUAE: false,
    isMobile: false,
    isBusinessHours: false,
    timestamp: new Date()
  });
  const [greeting, setGreeting] = useState<string>("");
  const [activePersona, setActivePersona] = useState<string | null>(null);

  useEffect(() => {
    // Detect user context
    const detectContext = async () => {
      const isMobile = window.innerWidth < 768;
      const hour = new Date().getHours();
      const isBusinessHours = hour >= 8 && hour <= 18;
      
      setUserContext({
        isUAE: false, // Simplified for now
        isMobile,
        isBusinessHours,
        timestamp: new Date()
      });

      setGreeting("Choose Your Entrepreneurial Journey");
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
      stats: "180+ Startups Supported",
      colors: ["hsl(234, 86%, 48%)", "hsl(49, 94%, 54%)", "hsl(234, 86%, 38%)"]
    },
    {
      id: "students",
      title: "I'm a Student Innovator", 
      subtitle: "University Students & Young Founders",
      description: "Transform your ideas into viable businesses through our youth programs",
      icon: GraduationCap,
      path: "/v3/young",
      stats: "18,000+ Youth Upskilled",
      colors: ["hsl(170, 100%, 40%)", "hsl(160, 60%, 75%)", "hsl(170, 100%, 30%)"]
    },
    {
      id: "community",
      title: "I'm Exploring Opportunities",
      subtitle: "Community Members & Professionals",
      description: "Join Sharjah's innovation community and discover collaboration opportunities",
      icon: Users,
      path: "/v3/general",
      stats: "140+ Ecosystem Partners",
      colors: ["hsl(40, 100%, 50%)", "hsl(330, 76%, 58%)", "hsl(40, 100%, 40%)"]
    },
    {
      id: "stakeholders",
      title: "I'm an Investor/Partner",
      subtitle: "VCs, Government & Corporate Partners",
      description: "Access exclusive deal flow, portfolio analytics, and strategic partnerships",
      icon: Crown,
      path: "/v3/stakeholders",
      stats: "$248M+ Portfolio Revenue",
      colors: ["hsl(43, 90%, 49%)", "hsl(240, 10%, 10%)", "hsl(43, 90%, 39%)"]
    }
  ];

  const handlePersonaSelect = (path: string, personaId: string) => {
    console.log(`Navigating to ${personaId}: ${path}`);
    localStorage.setItem('preferredPersona', personaId);
    localStorage.setItem('lastVisit', new Date().toISOString());
    navigate(path);
  };

  const PersonaCard = ({ persona, index }: { persona: typeof personas[0], index: number }) => {
    const Icon = persona.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          type: "spring",
          bounce: 0.4
        }}
        className="relative"
        onMouseEnter={() => setActivePersona(persona.id)}
        onMouseLeave={() => setActivePersona(null)}
      >
        <PinContainer
          title={persona.title}
          href={persona.path}
          onClick={() => handlePersonaSelect(persona.path, persona.id)}
          className="w-full h-full"
        >
          {/* Pixel Canvas Background */}
          <PixelCanvas
            gap={8}
            speed={25}
            colors={persona.colors}
            variant="icon"
          />
          
          {/* Card Content */}
          <div className="relative z-10 w-80 h-96 p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white leading-tight">
                {persona.title}
              </h3>
              
              <p className="text-sm font-semibold" style={{ color: persona.colors[0] }}>
                {persona.subtitle}
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {persona.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <Zap className="w-4 h-4 text-white" />
                <p className="text-white font-bold text-sm">
                  {persona.stats}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-6">
                <span className="text-slate-400 text-xs">
                  Ready to begin?
                </span>
                <div className="flex items-center text-white text-sm font-medium">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </PinContainer>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--v3-entrepreneurs-bg)/0.1,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--v3-students-bg)/0.1,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--v3-community-bg)/0.1,_transparent_50%)]" />
      
      {/* Header */}
      <div className="text-center relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Crown className="w-5 h-5 text-orange-400" />
            <span className="text-white font-semibold">SHERAA • Innovation Ecosystem</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-teal-200 bg-clip-text text-transparent"
        >
          {greeting}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-white/70 max-w-4xl mx-auto px-4 mb-16 leading-relaxed"
        >
          Transform your vision into reality within Sharjah's thriving innovation ecosystem
        </motion.p>
      </div>

      {/* 3D Persona Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {personas.map((persona, index) => (
            <PersonaCard key={persona.id} persona={persona} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemHub;