import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, Building2, Users, Globe, ArrowRight, Sparkles } from 'lucide-react';

const CommunityPartnerships: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  const partnershipTypes = [
    {
      title: 'Corporate Innovation',
      description: 'Partner with us to drive innovation within your organization and access cutting-edge solutions.',
      icon: Building2,
      features: [
        'Innovation workshops',
        'Startup scouting',
        'Proof of concept programs',
        'Corporate venture opportunities'
      ]
    },
    {
      title: 'Government Collaboration',
      description: 'Work with us to shape policies and initiatives that support entrepreneurship and innovation.',
      icon: Globe,
      features: [
        'Policy development',
        'Program co-creation',
        'Research partnerships',
        'Public-private initiatives'
      ]
    },
    {
      title: 'Mentorship Network',
      description: 'Share your expertise and guide the next generation of entrepreneurs.',
      icon: Users,
      features: [
        'One-on-one mentoring',
        'Workshop facilitation',
        'Industry insights',
        'Network access'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <MainLayout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sheraa-light/30 via-white to-purple-50/30 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-sheraa-teal/10 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-sheraa-primary" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Partnership Opportunities
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Shape the Future
              </span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-sheraa-secondary to-sheraa-orange bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              >
                Together
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Join forces with Sheraa to drive innovation, foster entrepreneurship, and create lasting impact in Sharjah's ecosystem.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 px-8 py-6 text-lg shadow-xl">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get in Touch
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Partnership Types */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{type.description}</p>
                        
                        <ul className="space-y-2 mb-8">
                          {type.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-sheraa-primary rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                          <Link to="/contact" className="flex items-center justify-center gap-2">
                            Get in Touch
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              className="text-center bg-gradient-to-r from-sheraa-primary to-purple-600 rounded-3xl p-12 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Ready to Partner with Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              >
                Let's discuss how we can work together to create meaningful impact in Sharjah's innovation ecosystem.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-white/90">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Our Team
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPartnerships; 