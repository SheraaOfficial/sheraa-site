
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Trophy, Building, Heart, Globe, Network } from 'lucide-react';
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card';
import { AdvancedMotion, StaggerContainer, StaggerChild } from '@/components/ui/advanced-motion';

export const SEFEnhancedZones: React.FC = () => {
  const sefZones = [
    {
      name: "Startup Town",
      description: "Pitch your ideas and connect with early-stage startups",
      icon: Lightbulb,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      name: "Investors Lounge",
      description: "Network with VCs, angels, and corporate investors",
      icon: Trophy,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    },
    {
      name: "Made in Sharjah",
      description: "Discover local talent and innovative solutions",
      icon: Building,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      name: "Creative Zone",
      description: "Explore arts, media, and creative entrepreneurship",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30"
    },
    {
      name: "Sustainability Hub",
      description: "Focus on clean tech and sustainable innovation",
      icon: Globe,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      name: "Tech Valley",
      description: "Latest in AI, blockchain, and emerging technologies",
      icon: Network,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            Explore Dynamic Zones
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SEF features diverse zones catering to every interest and industry, providing targeted experiences for different aspects of entrepreneurship.
          </p>
        </AdvancedMotion>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sefZones.map((zone, idx) => (
            <StaggerChild key={idx}>
              <ModernCard variant="glass" hover className="h-full group">
                <ModernCardContent className="p-8 text-center">
                  <motion.div 
                    className={`w-16 h-16 mx-auto rounded-2xl ${zone.bgColor} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <zone.icon className={`w-8 h-8 ${zone.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{zone.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{zone.description}</p>
                </ModernCardContent>
              </ModernCard>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
