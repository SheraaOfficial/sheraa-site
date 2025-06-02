
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card';
import { AdvancedMotion, StaggerContainer, StaggerChild } from '@/components/ui/advanced-motion';

export const SEFEnhancedEventDetails: React.FC = () => {
  const eventDetails = [
    { 
      icon: Calendar, 
      title: "When", 
      content: "January 31 - February 1, 2026", 
      subtitle: "Two Days of Innovation",
      gradient: "from-sheraa-sef-primary to-sheraa-sef-secondary"
    },
    { 
      icon: MapPin, 
      title: "Where", 
      content: "Sharjah Research, Technology and Innovation Park (SRTIP)", 
      subtitle: "Heart of Innovation",
      gradient: "from-sheraa-sef-secondary to-sheraa-sef-accent"
    },
    { 
      icon: Users, 
      title: "Who", 
      content: "Entrepreneurs, Investors, Innovators from 45+ Countries", 
      subtitle: "Global Community",
      gradient: "from-sheraa-sef-accent to-sheraa-sef-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50/50 dark:from-sheraa-dark dark:to-sheraa-dark/80">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            Event Details
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about SEF 2026
          </p>
        </AdvancedMotion>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eventDetails.map((item, idx) => (
            <StaggerChild key={idx}>
              <ModernCard variant="glass" hover className="text-center h-full group">
                <ModernCardContent className="p-8">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: idx * 0.2, type: "spring" }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.content}</p>
                  <p className="text-sm text-sheraa-sef-primary font-semibold">{item.subtitle}</p>
                </ModernCardContent>
              </ModernCard>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
