import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Lightbulb, Target } from 'lucide-react';
import heroImage from '@/assets/sheraa-hero-bg.jpg';

const EnhancedHero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const floatingElements = [
    { icon: Lightbulb, delay: 0, x: "10%", y: "20%" },
    { icon: Users, delay: 0.5, x: "85%", y: "15%" },
    { icon: Target, delay: 1, x: "15%", y: "70%" },
    { icon: TrendingUp, delay: 1.5, x: "80%", y: "75%" },
  ];

  const statsData = [
    { label: "Startups Supported", value: "180+" },
    { label: "Revenue Generated", value: "$248M+" },
    { label: "Jobs Created", value: "1,900+" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-muted/50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sheraa Innovation Hub" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/80" />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <element.icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 min-h-screen flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Impact Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Building the Future, Today</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a vibrant community of{' '}
              <motion.span 
                className="text-primary relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                changemakers
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Empowering founders to build impactful businesses through collaboration, 
            innovation, and a founder-first ethos. Welcome to Sheraa - where potential meets opportunity.
          </motion.p>

          {/* Animated Tagline */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-lg text-muted-foreground">We're not waiting for the future to unfold;</p>
            <motion.p 
              className="text-xl font-bold text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              We're actively shaping it.
            </motion.p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">
                Launch Your Startup
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;