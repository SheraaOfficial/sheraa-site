
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, Globe, Star, 
  ArrowRight, Mic, Network, Trophy
} from 'lucide-react';

const Events: React.FC = () => {
  const eventTypes = [
    {
      title: "Sharjah Entrepreneurship Festival (SEF)",
      description: "The region's largest celebration of entrepreneurship featuring global speakers and networking",
      icon: Star,
      link: "/events/sef-landing",
      color: "text-yellow-600 bg-yellow-50",
      stats: "14,000+ Attendees"
    },
    {
      title: "Upcoming Events",
      description: "Join our workshops, webinars, pitch nights, and community events",
      icon: Calendar,
      link: "/events/upcoming", 
      color: "text-blue-600 bg-blue-50",
      stats: "Monthly Events"
    },
    {
      title: "Past Events",
      description: "Browse highlights and insights from our previous events and programs",
      icon: Trophy,
      link: "/events/past",
      color: "text-green-600 bg-green-50", 
      stats: "Archive Access"
    }
  ];

  const featuredEvents = [
    {
      title: "SEF 2025: The Future of Innovation",
      date: "January 31 - February 1, 2025",
      location: "SRTIP, Sharjah",
      description: "Join 14,000+ entrepreneurs, investors, and innovators for two days of inspiration and networking",
      type: "Festival",
      status: "Registration Open"
    },
    {
      title: "Startup Pitch Night",
      date: "December 28, 2024", 
      location: "Sheraa HQ",
      description: "Early-stage startups pitch to investors and ecosystem partners",
      type: "Networking",
      status: "Upcoming"
    },
    {
      title: "Women in Entrepreneurship Panel",
      date: "January 15, 2025",
      location: "AUS Hub",
      description: "Celebrating and supporting women-led innovation in the region",
      type: "Panel Discussion",
      status: "Registration Soon"
    }
  ];

  const stats = [
    { number: "14,000+", label: "SEF Attendees" },
    { number: "300+", label: "Global Speakers" },
    { number: "45", label: "Countries Represented" },
    { number: "250+", label: "Activities & Sessions" }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Connect, Learn & Be Inspired<br />Sheraa Events & News
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Sheraa is a hub of activity, hosting and participating in events that bring the ecosystem together. From our flagship SEF to targeted workshops and community meetups, discover opportunities to grow your network and skills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/events/sef-landing" className="flex items-center gap-2">
                    Explore SEF 2025
                    <Star className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Link to="/events/upcoming">View Upcoming Events</Link>
                </Button>
              </div>
            </motion.div>

            {/* Event Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-primary/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Our Events</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From flagship festivals to intimate workshops, we create diverse opportunities for learning, networking, and growth within the entrepreneurship ecosystem.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{type.description}</p>
                      <div className="text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mb-4">
                        {type.stats}
                      </div>
                      <Button asChild variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        <Link to={type.link} className="flex items-center justify-center gap-2">
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Events</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Don't miss these upcoming highlights from our event calendar.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-sheraa-dark">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium px-3 py-1 bg-sheraa-primary/10 text-sheraa-primary rounded-full">
                          {event.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.status === 'Registration Open' ? 'bg-green-100 text-green-600' :
                          event.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{event.description}</p>
                      
                      <div className="space-y-2 mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-12">
                  <Network className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Attend Sheraa Events?</h2>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <Mic className="w-8 h-8 mx-auto text-sheraa-primary mb-4" />
                      <h4 className="font-semibold mb-2">World-Class Content</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Learn from industry leaders and successful entrepreneurs</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto text-sheraa-primary mb-4" />
                      <h4 className="font-semibold mb-2">High-Impact Networking</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Connect with investors, mentors, and fellow founders</p>
                    </div>
                    <div className="text-center">
                      <Trophy className="w-8 h-8 mx-auto text-sheraa-primary mb-4" />
                      <h4 className="font-semibold mb-2">Growth Opportunities</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Discover funding, partnerships, and business opportunities</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our events are designed to provide maximum value through curated content, meaningful connections, and actionable insights that help you accelerate your entrepreneurial journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Events;
