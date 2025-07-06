import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

interface Persona {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  color: string;
  audience: string;
  stats: string;
}

interface ImmersivePersonaGridProps {
  personas: Persona[];
  recommendedPersona: string;
  onPersonaSelect: (path: string, personaId: string) => void;
}

const ImmersivePersonaGrid: React.FC<ImmersivePersonaGridProps> = ({ 
  personas, 
  recommendedPersona, 
  onPersonaSelect 
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced personas with brand-aligned colors and effects
  const enhancedPersonas = personas.map(persona => ({
    ...persona,
    brandColor: {
      entrepreneurs: 'v3-entrepreneurs-aura',
      students: 'v3-students-aura', 
      community: 'v3-community-aura',
      stakeholders: 'v3-stakeholders-aura'
    }[persona.id] || 'v3-entrepreneurs-aura',
    gradientClass: {
      entrepreneurs: 'v3-gradient-entrepreneurs',
      students: 'v3-gradient-students',
      community: 'v3-gradient-community', 
      stakeholders: 'v3-gradient-stakeholders'
    }[persona.id] || 'v3-gradient-entrepreneurs'
  }));

  const PersonaCard: React.FC<{ persona: typeof enhancedPersonas[0], index: number }> = ({ 
    persona, 
    index 
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const isRecommended = persona.id === recommendedPersona;

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15,
          type: "spring",
          bounce: 0.4
        }}
        className={`v3-cinematic-enter cursor-pointer perspective-1000 ${
          hoveredCard === persona.id ? 'z-20' : 'z-10'
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setHoveredCard(persona.id)}
        onHoverEnd={() => setHoveredCard(null)}
        onClick={() => onPersonaSelect(persona.path, persona.id)}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <Card className={`
          v3-holographic-card v3-interactive-light h-full
          ${hoveredCard === persona.id ? persona.brandColor : ''}
          ${isRecommended ? 'ring-2 ring-[hsl(var(--warm-gold))] ring-opacity-60' : ''}
        `}>
          {/* Dynamic Background Gradient */}
          <div 
            className={`absolute inset-0 opacity-20 rounded-3xl`}
            style={{
              background: `var(--${persona.gradientClass})`
            }}
          />
          
          {/* Particle Field */}
          <div className="v3-particle-field" />
          
          <CardContent className="p-8 relative z-10 flex flex-col h-full">
            {/* Floating Recommendation Badge */}
            {isRecommended && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                className="absolute -top-3 -right-3 z-20"
              >
                <Badge className="bg-[hsl(var(--warm-gold))] text-white px-4 py-2 text-sm font-bold shadow-2xl border-0">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Recommended for You
                </Badge>
              </motion.div>
            )}

            {/* Holographic Icon Container */}
            <motion.div 
              className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8 relative overflow-hidden backdrop-blur-xl"
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="absolute inset-0 opacity-30 rounded-3xl"
                style={{
                  background: `var(--${persona.gradientClass})`
                }}
              />
              <persona.icon className="w-10 h-10 text-white relative z-10" />
              
              {/* Icon Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `var(--${persona.gradientClass})`,
                  filter: 'blur(20px)',
                  opacity: hoveredCard === persona.id ? 0.6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Enhanced Content */}
            <div className="flex-1 space-y-6">
              <div>
                <motion.h3 
                  className="text-2xl font-black text-white mb-3 v3-morphing-text"
                  data-text={persona.title}
                >
                  {persona.title}
                </motion.h3>
                <motion.p 
                  className="font-bold text-sm mb-4"
                  style={{
                    background: `var(--${persona.gradientClass})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {persona.subtitle}
                </motion.p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {persona.description}
                </p>
              </div>

              {/* Enhanced Stats with Animation */}
              <motion.div 
                className="border-t border-white/20 pt-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-white" />
                  <p className="text-white font-bold text-sm">
                    {persona.stats}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Cinematic CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button 
                className="w-full h-14 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl rounded-2xl transition-all duration-300"
                variant="outline"
              >
                <span className="mr-3">Explore Journey</span>
                <ArrowRight className="w-5 h-5" />
                
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `var(--${persona.gradientClass})`,
                    filter: 'blur(10px)',
                    zIndex: -1
                  }}
                />
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
      {enhancedPersonas.map((persona, index) => (
        <PersonaCard 
          key={persona.id} 
          persona={persona} 
          index={index}
        />
      ))}
    </div>
  );
};

export default ImmersivePersonaGrid;