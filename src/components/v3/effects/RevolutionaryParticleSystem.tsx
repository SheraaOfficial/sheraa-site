import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface IntelligentParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  originalSize: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  personality: 'explorer' | 'follower' | 'rebel' | 'leader';
  energy: number;
  targetX?: number;
  targetY?: number;
}

interface RevolutionaryParticleSystemProps {
  mousePosition?: { x: number; y: number };
  activePersona?: string;
  intensity?: 'low' | 'medium' | 'high' | 'revolutionary';
}

const RevolutionaryParticleSystem: React.FC<RevolutionaryParticleSystemProps> = ({ 
  mousePosition,
  activePersona = 'entrepreneurs',
  intensity = 'revolutionary'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<IntelligentParticle[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [performanceMode, setPerformanceMode] = useState<'high' | 'medium' | 'low'>('high');

  const particleCount = {
    low: 50,
    medium: 100,
    high: 200,
    revolutionary: 300
  }[intensity];

  // Persona-specific color palettes
  const colorPalettes = {
    entrepreneurs: [
      'hsl(234, 86%, 48%)', // sheraa-primary
      'hsl(49, 94%, 54%)',  // sheraa-secondary
      'hsl(234, 86%, 68%)', // lighter primary
      'hsl(234, 86%, 38%)'  // darker primary
    ],
    students: [
      'hsl(170, 100%, 40%)', // sheraa-teal
      'hsl(160, 80%, 50%)',  // young-soft-mint variation
      'hsl(180, 100%, 35%)', // deeper teal
      'hsl(170, 100%, 60%)'  // lighter teal
    ],
    community: [
      'hsl(40, 100%, 50%)',  // sheraa-orange
      'hsl(330, 76%, 58%)',  // sheraa-accent
      'hsl(35, 100%, 45%)',  // deeper orange
      'hsl(45, 100%, 55%)'   // lighter orange
    ],
    stakeholders: [
      'hsl(245, 158%, 11%)', // warm-gold (needs fix)
      'hsl(45, 80%, 50%)',   // actual gold
      'hsl(38, 92%, 50%)',   // amber
      'hsl(42, 87%, 55%)'    // light gold
    ]
  };

  const getCurrentColors = useCallback(() => {
    return colorPalettes[activePersona as keyof typeof colorPalettes] || colorPalettes.entrepreneurs;
  }, [activePersona]);

  // Performance monitoring
  useEffect(() => {
    let frameCount = 0;
    let lastTime = Date.now();
    
    const monitorPerformance = () => {
      frameCount++;
      const now = Date.now();
      
      if (now - lastTime > 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = now;
        
        if (fps < 30) {
          setPerformanceMode('low');
        } else if (fps < 45) {
          setPerformanceMode('medium');
        } else {
          setPerformanceMode('high');
        }
      }
    };

    const interval = setInterval(monitorPerformance, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    // High-performance canvas setup
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize intelligent particles
    const initIntelligentParticles = () => {
      particlesRef.current = [];
      const colors = getCurrentColors();
      
      for (let i = 0; i < particleCount; i++) {
        const personalities: IntelligentParticle['personality'][] = ['explorer', 'follower', 'rebel', 'leader'];
        const personality = personalities[Math.floor(Math.random() * personalities.length)];
        
        particlesRef.current.push({
          id: i,
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: (Math.random() - 0.5) * (personality === 'rebel' ? 4 : 2),
          vy: (Math.random() - 0.5) * (personality === 'rebel' ? 4 : 2),
          size: Math.random() * (personality === 'leader' ? 4 : 2) + 1,
          originalSize: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.6 + 0.2,
          life: Math.random() * 200 + 100,
          maxLife: Math.random() * 200 + 100,
          personality,
          energy: Math.random() * 100 + 50
        });
        
        particlesRef.current[i].originalSize = particlesRef.current[i].size;
      }
    };

    initIntelligentParticles();

    // Revolutionary animation loop
    const animate = () => {
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Performance-based particle updates
      const updateStep = performanceMode === 'high' ? 1 : performanceMode === 'medium' ? 2 : 3;

      particlesRef.current.forEach((particle, index) => {
        if (index % updateStep !== 0) return;

        // Personality-based behavior
        switch (particle.personality) {
          case 'explorer':
            // Explores boundaries, moves toward edges occasionally
            if (Math.random() < 0.01) {
              particle.targetX = Math.random() < 0.5 ? 0 : canvasWidth;
              particle.targetY = Math.random() * canvasHeight;
            }
            break;
            
          case 'follower':
            // Follows mouse and other particles
            if (mousePosition && Math.random() < 0.02) {
              particle.targetX = mousePosition.x + (Math.random() - 0.5) * 100;
              particle.targetY = mousePosition.y + (Math.random() - 0.5) * 100;
            }
            break;
            
          case 'rebel':
            // Moves away from clusters and mouse
            if (mousePosition) {
              const dx = mousePosition.x - particle.x;
              const dy = mousePosition.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 150) {
                particle.vx -= (dx / distance) * 0.5;
                particle.vy -= (dy / distance) * 0.5;
              }
            }
            break;
            
          case 'leader':
            // Attracts other particles, moves purposefully
            particle.size = particle.originalSize * (1 + Math.sin(Date.now() * 0.001) * 0.3);
            break;
        }

        // Move toward target if set
        if (particle.targetX !== undefined && particle.targetY !== undefined) {
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 5) {
            particle.vx += (dx / distance) * 0.1;
            particle.vy += (dy / distance) * 0.1;
          } else {
            particle.targetX = undefined;
            particle.targetY = undefined;
          }
        }

        // Update position with personality-based physics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Enhanced boundary collision
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx = Math.abs(particle.vx) * 0.8;
        } else if (particle.x > canvasWidth) {
          particle.x = canvasWidth;
          particle.vx = -Math.abs(particle.vx) * 0.8;
        }

        if (particle.y < 0) {
          particle.y = 0;
          particle.vy = Math.abs(particle.vy) * 0.8;
        } else if (particle.y > canvasHeight) {
          particle.y = canvasHeight;
          particle.vy = -Math.abs(particle.vy) * 0.8;
        }

        // Apply personality-based friction
        const friction = particle.personality === 'rebel' ? 0.98 : 0.99;
        particle.vx *= friction;
        particle.vy *= friction;

        // Update life and energy
        particle.life -= 0.3;
        particle.energy = Math.max(0, particle.energy - 0.1);
        particle.opacity = Math.max(0.1, (particle.life / particle.maxLife) * 0.8);

        // Regenerate particle if needed
        if (particle.life <= 0) {
          const colors = getCurrentColors();
          particle.life = particle.maxLife;
          particle.energy = 100;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
          
          if (Math.random() < 0.1) {
            // Occasionally spawn near mouse
            if (mousePosition) {
              particle.x = mousePosition.x + (Math.random() - 0.5) * 200;
              particle.y = mousePosition.y + (Math.random() - 0.5) * 200;
            }
          }
        }

        // Revolutionary rendering with advanced effects
        ctx.save();
        
        // Persona-specific glow
        const glowSize = particle.personality === 'leader' ? 20 : 10;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = glowSize;
        ctx.globalAlpha = particle.opacity;

        // Draw particle with personality-based styling
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        
        if (particle.personality === 'leader') {
          // Leaders are stars
          const spikes = 6;
          const outerRadius = particle.size;
          const innerRadius = particle.size * 0.5;
          
          ctx.moveTo(particle.x, particle.y - outerRadius);
          
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            ctx.lineTo(
              particle.x + Math.cos(angle - Math.PI / 2) * radius,
              particle.y + Math.sin(angle - Math.PI / 2) * radius
            );
          }
          
          ctx.closePath();
        } else {
          // Others are circles
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        }
        
        ctx.fill();
        ctx.restore();
      });

      // Draw intelligent connections
      if (performanceMode === 'high') {
        particlesRef.current.forEach((particle1, i) => {
          particlesRef.current.slice(i + 1, i + 5).forEach(particle2 => {
            const dx = particle1.x - particle2.x;
            const dy = particle1.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.15;
              ctx.strokeStyle = particle1.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, particleCount, intensity, activePersona, performanceMode, getCurrentColors]);

  // Visibility optimization
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        mixBlendMode: 'screen',
        willChange: 'opacity'
      }}
    />
  );
};

export default RevolutionaryParticleSystem;
