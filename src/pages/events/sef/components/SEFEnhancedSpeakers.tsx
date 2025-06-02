
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card';
import { ModernButton } from '@/components/ui/modern-button';
import { AdvancedMotion, StaggerContainer, StaggerChild } from '@/components/ui/advanced-motion';

export const SEFEnhancedSpeakers: React.FC = () => {
  const speakers = [
    {
      name: "H.E. Sheikha Hoor Al Qasimi",
      title: "President, Sharjah Art Foundation",
      topic: "Art & Social Impact",
      image: "/placeholder.svg"
    },
    {
      name: "Thierry Henry",
      title: "Football Legend & Entrepreneur", 
      topic: "Leadership & Performance",
      image: "/placeholder.svg"
    },
    {
      name: "Wim Hof",
      title: "The Iceman",
      topic: "Human Potential & Resilience",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            World-Class Speakers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights across technology, finance, sustainability, and creative industries.
          </p>
        </AdvancedMotion>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {speakers.map((speaker, idx) => (
            <StaggerChild key={idx}>
              <ModernCard variant="glass" hover className="h-full text-center group">
                <ModernCardContent className="p-8">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 overflow-hidden border-2 border-sheraa-sef-primary/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{speaker.name}</h3>
                  <p className="text-sheraa-sef-primary font-semibold text-sm mb-2">{speaker.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{speaker.topic}</p>
                </ModernCardContent>
              </ModernCard>
            </StaggerChild>
          ))}
        </StaggerContainer>
        
        <AdvancedMotion variant="fadeInUp" className="text-center">
          <ModernButton asChild variant="secondary" size="lg">
            <Link to="/events/sef/speakers" className="flex items-center gap-2">
              <span>View Full Speaker Lineup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ModernButton>
        </AdvancedMotion>
      </div>
    </section>
  );
};
