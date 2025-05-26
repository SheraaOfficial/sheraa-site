
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, MapPin, Users, Globe, 
  ArrowRight, Star, Trophy, Mic, 
  Building, Heart, Lightbulb, Network
} from 'lucide-react';

const SEFLanding: React.FC = () => {
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
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-sef-primary/10 via-sheraa-sef-secondary/5 to-transparent relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-sheraa-sef-primary/20 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary text-white text-sm font-bold">
                January 31 - February 1, 2025
              </Badge>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary bg-clip-text text-transparent leading-tight">
                SEF 2025<br />Where the Future is Forged
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                The region's largest gathering of entrepreneurial minds. For two electrifying days at SRTIP, experience a convergence of ideas, opportunities, and community spirit designed to fuel the next wave of impactful entrepreneurship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary hover:shadow-xl transition-all duration-300 shadow-lg">
                  Get Your Pass for SEF 2025
                  <Star className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-sef-primary/30 text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10">
                  View 2024 Highlights
                </Button>
              </div>
            </motion.div>

            {/* SEF Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {sefStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-sef-primary/20 shadow-lg"
                >
                  <div className="text-2xl md:text-3xl font-bold text-sheraa-sef-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Calendar className="w-12 h-12 mx-auto text-sheraa-sef-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">When</h3>
                    <p className="text-gray-600 dark:text-gray-300">January 31 - February 1, 2025</p>
                    <p className="text-sm text-sheraa-sef-primary font-semibold">Two Days of Innovation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <MapPin className="w-12 h-12 mx-auto text-sheraa-sef-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Where</h3>
                    <p className="text-gray-600 dark:text-gray-300">Sharjah Research, Technology and Innovation Park (SRTIP)</p>
                    <p className="text-sm text-sheraa-sef-primary font-semibold">Heart of Innovation</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 mx-auto text-sheraa-sef-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Who</h3>
                    <p className="text-gray-600 dark:text-gray-300">Entrepreneurs, Investors, Innovators from 45+ Countries</p>
                    <p className="text-sm text-sheraa-sef-primary font-semibold">Global Community</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEF Zones */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Dynamic Zones</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                SEF features diverse zones catering to every interest and industry, providing targeted experiences for different aspects of entrepreneurship.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sefZones.map((zone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-sheraa-dark">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${zone.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <zone.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{zone.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{zone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">World-Class Speakers</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights across technology, finance, sustainability, and creative industries.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {speakers.map((speaker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                    <CardContent className="p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{speaker.name}</h3>
                      <p className="text-sheraa-sef-primary font-semibold text-sm mb-2">{speaker.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">{speaker.topic}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="border-sheraa-sef-primary/30 text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10">
                View Full Speaker Lineup
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Registration CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${5 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <Star className="w-16 h-16 mx-auto mb-6 opacity-90 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join 14,000+ changemakers from around the world. Experience two days of inspiration, learning, and high-impact connections that will accelerate your entrepreneurial journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Calendar className="mr-2 w-5 h-5" />
                Register for SEF 2025
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Mic className="mr-2 w-5 h-5" />
                Become a Speaker
              </Button>
            </div>

            {/* Early Bird Notice */}
            <div className="mt-8 text-white/80 text-sm">
              <p>🎟️ Early Bird Pricing Available | 🎯 Limited Seats | 🌟 Register Now</p>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default SEFLanding;
