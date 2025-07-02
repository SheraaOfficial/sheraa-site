import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Users, Globe, ArrowRight, Sparkles } from 'lucide-react';

const CommunityStartups: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  const stats = [
    { icon: Rocket, number: '180+', label: 'Startups Supported', color: 'text-sheraa-primary' },
    { icon: TrendingUp, number: '$248M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Users, number: '1,900+', label: 'Jobs Created', color: 'text-blue-600' },
    { icon: Globe, number: '71%', label: 'Survival Rate', color: 'text-purple-600' }
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
                Our Portfolio
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-sheraa-secondary to-sheraa-orange bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              >
                from Sharjah
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our dynamic portfolio of innovative startups that are transforming industries and creating impact across the region.
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
                  <Link to="/startups" className="flex items-center gap-2">
                    Explore Full Directory
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

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <Card className="p-6 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                        </motion.div>
                        <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Coming Soon Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              className="bg-gradient-to-r from-sheraa-primary/10 to-purple-500/10 rounded-3xl p-12 text-center border border-sheraa-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Startup Showcase Coming Soon</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We're currently building an interactive showcase of our startup portfolio. 
                Soon you'll be able to explore our startups by sector, stage, and impact.
              </p>
              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-gray-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-sheraa-primary rounded-full flex items-center justify-center text-white font-bold">S</div>
                <span>Sheraa Team</span>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityStartups; 