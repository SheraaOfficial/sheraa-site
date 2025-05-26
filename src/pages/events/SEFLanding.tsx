
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, MapPin, Users, Globe, 
  ArrowRight, Star, Trophy, Mic, 
  Building, Heart, Lightbulb, Network,
  ChevronDown
} from 'lucide-react';

const SEFLanding: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleInHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const sefStats = [
    { number: "14,000+", label: "Attendees" },
    { number: "300+", label: "Global Speakers" },
    { number: "45", label: "Countries" },
    { number: "250+", label: "Activities" }
  ];

  const sefZones = [
    {
      name: "Startup Town",
      description: "Pitch your ideas and connect with early-stage startups",
      icon: Lightbulb,
      color: "text-blue-600 bg-blue-50"
    },
    {
      name: "Investors Lounge",
      description: "Network with VCs, angels, and corporate investors",
      icon: Trophy,
      color: "text-green-600 bg-green-50"
    },
    {
      name: "Made in Sharjah",
      description: "Discover local talent and innovative solutions",
      icon: Building,
      color: "text-purple-600 bg-purple-50"
    },
    {
      name: "Creative Zone",
      description: "Explore arts, media, and creative entrepreneurship",
      icon: Heart,
      color: "text-pink-600 bg-pink-50"
    },
    {
      name: "Sustainability Hub",
      description: "Focus on clean tech and sustainable innovation",
      icon: Globe,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      name: "Tech Valley",
      description: "Latest in AI, blockchain, and emerging technologies",
      icon: Network,
      color: "text-orange-600 bg-orange-50"
    }
  ];

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
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-sef-primary/10 via-sheraa-sef-secondary/5 to-transparent relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-sheraa-sef-primary/20 rounded-full"
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${10 + (i % 4) * 25}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary text-white text-sm font-bold">
                  January 31 - February 1, 2026
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary bg-clip-text text-transparent leading-tight"
              >
                SEF 2026<br />Where the Future is Forged
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                The region's largest gathering of entrepreneurial minds. For two electrifying days at SRTIP, experience a convergence of ideas, opportunities, and community spirit designed to fuel the next wave of impactful entrepreneurship.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <motion.div whileHover={scaleInHover}>
                  <Button size="lg" className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary hover:shadow-xl transition-all duration-300 shadow-lg">
                    Get Your Pass for SEF 2026
                    <Star className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={scaleInHover}>
                  <Button variant="outline" size="lg" className="border-sheraa-sef-primary/30 text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10">
                    View 2025 Highlights
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced SEF Stats */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {sefStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={scaleInHover}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-sef-primary/20 shadow-lg"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    className="text-2xl md:text-3xl font-bold text-sheraa-sef-primary mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 text-sheraa-sef-primary" />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to know about SEF 2026</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Calendar, title: "When", content: "January 31 - February 1, 2026", subtitle: "Two Days of Innovation" },
                  { icon: MapPin, title: "Where", content: "Sharjah Research, Technology and Innovation Park (SRTIP)", subtitle: "Heart of Innovation" },
                  { icon: Users, title: "Who", content: "Entrepreneurs, Investors, Innovators from 45+ Countries", subtitle: "Global Community" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={scaleInHover}
                  >
                    <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: idx * 0.2, type: "spring" }}
                        >
                          <item.icon className="w-12 h-12 mx-auto text-sheraa-sef-primary mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{item.content}</p>
                        <p className="text-sm text-sheraa-sef-primary font-semibold">{item.subtitle}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced SEF Zones */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Dynamic Zones</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  SEF features diverse zones catering to every interest and industry, providing targeted experiences for different aspects of entrepreneurship.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sefZones.map((zone, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group perspective-1000"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-sheraa-dark transform-gpu">
                      <CardContent className="p-8 text-center">
                        <motion.div 
                          className={`w-16 h-16 mx-auto rounded-2xl ${zone.color} flex items-center justify-center mb-6`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <zone.icon className="w-8 h-8" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4">{zone.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{zone.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Featured Speakers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">World-Class Speakers</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights across technology, finance, sustainability, and creative industries.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {speakers.map((speaker, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 text-center">
                      <CardContent className="p-8">
                        <motion.div 
                          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
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
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeInUp} className="text-center mt-12">
                <motion.div whileHover={scaleInHover}>
                  <Button variant="outline" size="lg" className="border-sheraa-sef-primary/30 text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10">
                    View Full Speaker Lineup
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Registration CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${2 + i * 6}%`,
                  top: `${10 + (i % 5) * 20}%`,
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

          <div className="container mx-auto px-4 relative z-10 text-center">
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
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Shape the Future?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Join 14,000+ changemakers from around the world. Experience two days of inspiration, learning, and high-impact connections that will accelerate your entrepreneurial journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={scaleInHover}>
                <Button size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Calendar className="mr-2 w-5 h-5" />
                  Register for SEF 2026
                </Button>
              </motion.div>
              <motion.div whileHover={scaleInHover}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Mic className="mr-2 w-5 h-5" />
                  Become a Speaker
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Early Bird Notice */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-white/80 text-sm"
            >
              <motion.p
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎟️ Early Bird Pricing Available | 🎯 Limited Seats | 🌟 Register Now
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default SEFLanding;
