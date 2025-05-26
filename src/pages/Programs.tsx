
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Rocket, Globe, Building, ArrowRight, 
  Target, Users, Lightbulb, Award, Star, Sparkles
} from 'lucide-react';

const Programs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const programs = [
    {
      title: "Start Young",
      subtitle: "Startup Dojo & Dojo+",
      description: "Turn ideas into action. For aspiring student entrepreneurs.",
      icon: GraduationCap,
      color: "text-blue-600 bg-blue-50",
      gradient: "from-blue-500 to-purple-600",
      link: "/programs/start-young"
    },
    {
      title: "Grow Smart",
      subtitle: "S3 Incubator",
      description: "Scale your tech-enabled startup. For ventures with market traction.",
      icon: Rocket,
      color: "text-green-600 bg-green-50",
      gradient: "from-green-500 to-emerald-600",
      link: "/programs/s3-incubator"
    },
    {
      title: "Build Ventures",
      subtitle: "Access Sharjah Challenge",
      description: "Solve industry challenges, win POCs. For growth-stage startups globally.",
      icon: Globe,
      color: "text-purple-600 bg-purple-50",
      gradient: "from-purple-500 to-pink-600",
      link: "/programs/access-sharjah-challenge"
    },
    {
      title: "SME Support",
      subtitle: "Business Growth",
      description: "Innovate and expand your established business. For Sharjah-based SMEs.",
      icon: Building,
      color: "text-orange-600 bg-orange-50",
      gradient: "from-orange-500 to-red-600",
      link: "/programs/sme-support"
    }
  ];

  const benefits = [
    {
      title: "Founder-Focused",
      description: "We prioritize your needs, offering equity-free support and flexible engagement models.",
      icon: Target
    },
    {
      title: "Ecosystem Access",
      description: "Gain access to mentors, investors, corporate partners, and a vibrant community.",
      icon: Users
    },
    {
      title: "Stage-Specific Support",
      description: "Whether you're exploring an idea or scaling globally, we have a program for you.",
      icon: Lightbulb
    },
    {
      title: "Sharjah Advantage",
      description: "Leverage Sharjah's strategic location, business-friendly environment, and innovation clusters.",
      icon: Award
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={floatVariants}
                animate="animate"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <Sparkles className="w-12 h-12 mx-auto text-sheraa-primary mb-4" />
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent"
              >
                Your Entrepreneurial Journey,<br />Empowered by Sheraa
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from ideation to global scaling. Our programs are designed to equip you with the skills, resources, connections, and funding opportunities needed to build a successful and impactful venture.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:shadow-xl transition-all duration-300 shadow-lg">
                    Explore Programs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                    Join Our Community
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Why Choose Sheraa */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Why Choose Sheraa Programs?
              </motion.h2>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-sheraa-dark">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <benefit.icon className="w-12 h-12 text-sheraa-primary mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our Program Pathway
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                From idea to scale, we support entrepreneurs at every stage of their journey.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {programs.map((program, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900">
                    <CardContent className="p-8">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} flex items-center justify-center mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <program.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-sheraa-primary font-semibold mb-4">{program.subtitle}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button asChild className={`bg-gradient-to-r ${program.gradient} hover:shadow-lg transition-all duration-300 w-full`}>
                          <Link to={program.link} className="flex items-center justify-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            >
              Join hundreds of entrepreneurs who have transformed their ideas into successful ventures with Sheraa's support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link to="/community/join" className="flex items-center gap-2">
                    Apply to a Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default Programs;
