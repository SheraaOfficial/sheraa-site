import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown, Zap } from "lucide-react";

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

interface RevolutionaryPersonaGridProps {
  personas: Persona[];
  recommendedPersona: string;
  onPersonaSelect: (path: string, personaId: string) => void;
  onPersonaHover?: (personaId: string | null) => void;
}

const RevolutionaryPersonaGrid: React.FC<RevolutionaryPersonaGridProps> = ({ 
  personas, 
  recommendedPersona, 
  onPersonaSelect,
  onPersonaHover
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [handleGlobalMouseMove]);

  const RevolutionaryPersonaCard: React.FC<{ 
    persona: Persona; 
    index: number;
  }> = ({ persona, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Advanced 3D transforms with liquid-like physics
    const rotateX = useSpring(useTransform(mouseY, [-400, 400], [15, -15]), {
      stiffness: 400,
      damping: 30
    });
    const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-15, 15]), {
      stiffness: 400,
      damping: 30
    });
    
    const scale = useSpring(1, {
      stiffness: 300,
      damping: 20
    });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }, [mouseX, mouseY]);

    const handleMouseEnter = useCallback(() => {
      setHoveredCard(persona.id);
      onPersonaHover?.(persona.id);
      scale.set(1.05);
    }, [persona.id, onPersonaHover, scale]);

    const handleMouseLeave = useCallback(() => {
      mouseX.set(0);
      mouseY.set(0);
      setHoveredCard(null);
      onPersonaHover?.(null);
      scale.set(1);
    }, [mouseX, mouseY, onPersonaHover, scale]);

    const isRecommended = persona.id === recommendedPersona;
    const isHovered = hoveredCard === persona.id;

    // Signature entrance animation with staggered timing
    const entranceVariants = {
      hidden: { 
        opacity: 0, 
        y: 120, 
        scale: 0.8, 
        rotateX: 20,
        filter: "blur(20px)"
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          delay: i * 0.2,
          ease: "easeOut" as const,
          type: "spring" as const,
          bounce: 0.3
        }
      })
    };

    return (
      <motion.div
        ref={cardRef}
        custom={index}
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
        className={`cursor-pointer perspective-1000 v3-performance-optimized ${
          isHovered ? 'z-30' : isRecommended ? 'z-20' : 'z-10'
        }`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onPersonaSelect(persona.path, persona.id)}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
          transformStyle: "preserve-3d"
        }}
      >
        <Card className={`
          v3-liquid-metal-card h-full relative
          ${persona.id}-signature
          ${isRecommended ? 'ring-2 ring-[hsl(var(--warm-gold))] ring-opacity-80' : ''}
        `}>
          
          {/* Revolutionary Background with Persona Signature */}
          <div 
            className="absolute inset-0 opacity-10 rounded-[32px] transition-opacity duration-700"
            style={{
              background: `var(--v3-${persona.id}-gradient)`,
              opacity: isHovered ? 0.25 : 0.1
            }}
          />
          
          {/* Intelligent Particle Field */}
          <div className={`v3-intelligent-particles ${isHovered ? 'active' : ''}`} />
          
          <CardContent className="p-10 relative z-10 flex flex-col h-full">
            
            {/* Premium Recommendation Badge */}
            {isRecommended && (
              <motion.div
                initial={{ scale: 0, rotate: -360, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  delay: 1 + index * 0.2, 
                  type: "spring", 
                  bounce: 0.8,
                  duration: 1.2
                }}
                className="absolute -top-4 -right-4 z-30"
              >
                <Badge className="bg-gradient-to-r from-[hsl(var(--warm-gold))] to-[hsl(var(--sheraa-accent))] text-white px-6 py-3 text-sm font-black shadow-2xl border-0 rounded-2xl">
                  <Crown className="w-4 h-4 mr-2" />
                  SHERAA's Choice
                </Badge>
              </motion.div>
            )}

            {/* Revolutionary Icon Container */}
            <motion.div 
              className="w-24 h-24 rounded-[24px] bg-white/10 flex items-center justify-center mb-10 relative overflow-hidden backdrop-blur-xl"
              whileHover={{ 
                scale: 1.2, 
                rotateY: 360,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              style={{
                background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                boxShadow: isHovered ? `var(--v3-${persona.id}-aura)` : 'none'
              }}
            >
              <div 
                className="absolute inset-0 opacity-30 rounded-[24px] transition-all duration-500"
                style={{
                  background: `var(--v3-${persona.id}-gradient)`,
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <persona.icon className="w-12 h-12 text-white relative z-10 drop-shadow-2xl" />
            </motion.div>

            {/* Premium Content */}
            <div className="flex-1 space-y-8">
              <div>
                <motion.h3 
                  className="text-3xl font-black text-white mb-4 v3-liquid-text"
                  data-text={persona.title}
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {persona.title}
                </motion.h3>
                
                <motion.p 
                  className="font-bold text-base mb-6 transition-all duration-500"
                  style={{
                    background: `var(--v3-${persona.id}-gradient)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  {persona.subtitle}
                </motion.p>
                
                <p className="text-gray-300 leading-relaxed text-lg font-medium">
                  {persona.description}
                </p>
              </div>

              {/* Revolutionary Stats */}
              <motion.div 
                className="border-t border-white/20 pt-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5 + index * 0.15, duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-white" />
                  <p className="text-white font-bold text-lg">
                    {persona.stats}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Premium CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10"
            >
              <Button 
                className={`
                  w-full h-16 text-xl font-black rounded-3xl relative overflow-hidden
                  bg-white/5 hover:bg-white/10 text-white border border-white/20 
                  backdrop-blur-xl transition-all duration-500 group
                `}
                variant="outline"
              >
                <span className="mr-4 relative z-10">Begin Journey</span>
                <ArrowRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
                
                {/* Button Revolutionary Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `var(--v3-${persona.id}-gradient)`,
                    filter: 'blur(20px)',
                    zIndex: 0
                  }}
                />
                
                {/* Liquid Metal Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, var(--v3-${persona.id}-primary), transparent)`,
                    opacity: isHovered ? 0.2 : 0
                  }}
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <motion.div 
      ref={containerRef} 
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 perspective-1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {personas.map((persona, index) => (
        <RevolutionaryPersonaCard 
          key={persona.id} 
          persona={persona} 
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default RevolutionaryPersonaGrid;