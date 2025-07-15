import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Sparkles } from 'lucide-react';
import sharjahImage from '@/assets/sharjah-innovation-park.jpg';

const InnovationCapitalSection: React.FC = () => {
  const benefits = [
    {
      icon: Building2,
      title: 'Thriving Business Hub',
      description: 'Strategic location connecting East and West markets with world-class infrastructure'
    },
    {
      icon: Shield,
      title: 'Favorable Regulatory Environment',
      description: 'Business-friendly policies and government support for innovation and entrepreneurship'
    },
    {
      icon: Globe,
      title: 'World-Class Infrastructure',
      description: 'State-of-the-art facilities, research parks, and technology centers'
    },
    {
      icon: Sparkles,
      title: 'Cultural Capital of the UAE',
      description: 'Rich heritage meeting modern innovation in a diverse, creative environment'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const benefitVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Headlines */}
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Discover the region's next{' '}
                <span className="text-primary relative">
                  innovation capital
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Welcome to Sharjah.
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With its business-friendly environment, connectivity to markets in the East and West, 
              exceptional quality of life and world-class educational institutions, it's no wonder 
              Sharjah is fast becoming the region's leading technology and innovation hotspot.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={benefitVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="flex flex-wrap gap-8 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { label: "Global Startup Rank", value: "#7 MENA" },
                { label: "Universities", value: "15+" },
                { label: "Free Zones", value: "8+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={sharjahImage} 
                alt="Sharjah Research Technology and Innovation Park" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              
              {/* Floating Info Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Sharjah Research Technology and Innovation Park
                </h4>
                <p className="text-sm text-muted-foreground">
                  Home to Sheraa and a thriving ecosystem of innovation, research, and technology companies.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCapitalSection;