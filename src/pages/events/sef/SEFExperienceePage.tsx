
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Users, Lightbulb, TrendingUp, Globe, 
  Mic, Coffee, ShoppingBag, Heart, Palette, ArrowRight 
} from 'lucide-react';

const SEFExperiencePage: React.FC = () => {
  const zones = [
    {
      name: "Startup Town",
      description: "The heart of innovation where early-stage startups pitch their ideas and connect with mentors.",
      icon: Lightbulb,
      color: "bg-blue-500",
      features: ["Pitch Competitions", "Mentor Meetups", "Demo Stations", "Feedback Sessions"],
      highlight: "Win up to AED 100,000 in funding"
    },
    {
      name: "Investors Lounge",
      description: "Exclusive networking space for investors, VCs, and angel investors to discover the next big thing.",
      icon: TrendingUp,
      color: "bg-green-500",
      features: ["Curated Meetings", "Deal Flow Presentations", "Private Networking", "Investment Panels"],
      highlight: "320+ scheduled investor meetings"
    },
    {
      name: "Made in Sharjah",
      description: "Showcase of local talent and homegrown businesses representing Sharjah's entrepreneurial spirit.",
      icon: Globe,
      color: "bg-purple-500",
      features: ["Local Showcases", "Cultural Exhibitions", "Artisan Markets", "Heritage Displays"],
      highlight: "Discover authentic Sharjah innovation"
    },
    {
      name: "Creative Zone",
      description: "A vibrant space celebrating creativity, design, and artistic entrepreneurship.",
      icon: Palette,
      color: "bg-pink-500",
      features: ["Art Installations", "Design Workshops", "Creative Showcases", "Interactive Exhibits"],
      highlight: "Immersive creative experiences"
    },
    {
      name: "Main Stage",
      description: "World-class speakers sharing insights, inspiration, and groundbreaking ideas.",
      icon: Mic,
      color: "bg-red-500",
      features: ["Keynote Speeches", "Panel Discussions", "Fireside Chats", "Awards Ceremony"],
      highlight: "300+ global speakers from 45+ countries"
    },
    {
      name: "Sustainability & Wellness Zone",
      description: "Focus on sustainable business practices and entrepreneur wellbeing.",
      icon: Heart,
      color: "bg-teal-500",
      features: ["Wellness Sessions", "Sustainability Talks", "Green Tech Demos", "Mindfulness Corners"],
      highlight: "Balance growth with purpose"
    },
    {
      name: "SEF Eats",
      description: "Culinary experiences featuring local and international cuisines.",
      icon: Coffee,
      color: "bg-orange-500",
      features: ["Food Trucks", "Pop-up Restaurants", "Cultural Cuisines", "Networking Cafes"],
      highlight: "Taste the flavors of innovation"
    },
    {
      name: "SEF Souq",
      description: "Traditional marketplace showcasing local artisans and entrepreneurs.",
      icon: ShoppingBag,
      color: "bg-yellow-500",
      features: ["Artisan Crafts", "Local Products", "Traditional Arts", "Cultural Experiences"],
      highlight: "Shop local, support entrepreneurs"
    }
  ];

  const experiences = [
    {
      title: "Immersive Workshops",
      description: "60+ hands-on workshops and masterclasses at SEF Academy",
      count: "60+"
    },
    {
      title: "Global Networking",
      description: "Connect with entrepreneurs from 45+ countries",
      count: "45+"
    },
    {
      title: "Startup Showcases",
      description: "Discover cutting-edge startups and innovations",
      count: "370+"
    },
    {
      title: "Cultural Performances",
      description: "Live entertainment celebrating regional talent",
      count: "25+"
    }
  ];

  return (
    <MainLayout
      seoTitle="SEF Experience - Sharjah Entrepreneurship Festival"
      seoDescription="Explore the diverse zones and experiences at SEF, the region's largest entrepreneurship festival."
    >
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-sef-primary/10 via-sheraa-sef-secondary/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-secondary/20 border border-sheraa-sef-primary/30 mb-8">
                <Sparkles className="w-5 h-5 text-sheraa-sef-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent">
                  The SEF Experience
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-secondary to-sheraa-sef-primary bg-clip-text text-transparent">
                Where Innovation Comes Alive
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Step into a world of endless possibilities across 10+ dynamic zones, each designed to inspire, 
                connect, and accelerate your entrepreneurial journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Stats */}
        <section className="py-16 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-sheraa-sef-primary mb-2">
                    {experience.count}
                  </div>
                  <h3 className="font-semibold mb-2">{experience.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Zones */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Explore Our <span className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent">Dynamic Zones</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Each zone offers unique experiences, networking opportunities, and insights tailored to different aspects of entrepreneurship.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {zones.map((zone, index) => {
                const IconComponent = zone.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl ${zone.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 group-hover:text-sheraa-sef-primary transition-colors">
                          {zone.name}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {zone.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {zone.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-sheraa-sef-primary rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Badge className="bg-sheraa-sef-primary/10 text-sheraa-sef-primary border-sheraa-sef-primary/20">
                          {zone.highlight}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-sheraa-sef-primary/5 to-sheraa-sef-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Experience SEF?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs, investors, and innovators at the region's most impactful entrepreneurship festival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-sef-primary hover:bg-sheraa-sef-primary/90">
                  <Link to="/events/sef/register" className="flex items-center gap-2">
                    Get Your Pass
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/events/sef/agenda">View Full Agenda</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SEFExperiencePage;
