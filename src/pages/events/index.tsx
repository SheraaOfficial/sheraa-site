
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, MapPin, Users, Star, ArrowRight,
  Search, Filter, Globe, Sparkles, Ticket, Award,
  PlayCircle, Camera, Mic, Network
} from "lucide-react";

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featuredEvent = {
    title: "Sharjah Entrepreneurship Festival (SEF) 2026",
    subtitle: "Where the Future is Forged",
    date: "January 31 - February 1, 2026",
    location: "SRTIP, Sharjah",
    attendees: "14,000+",
    speakers: "300+",
    activities: "250+",
    description: "The region's largest gathering of entrepreneurial minds, uniting visionaries, investors, and innovators from across the globe.",
    image: "/placeholder.svg?height=400&width=600",
    status: "Registration Open"
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Pitch Night",
      date: "2024-12-15",
      time: "18:00 - 21:00",
      location: "Sheraa HQ, SRTIP",
      category: "Networking",
      attendees: 150,
      price: "Free",
      description: "Monthly pitch competition for early-stage startups seeking feedback and networking opportunities.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "AI & Innovation Workshop",
      date: "2024-12-20",
      time: "14:00 - 17:00",
      location: "AUS Hub",
      category: "Workshop",
      attendees: 80,
      price: "AED 150",
      description: "Hands-on workshop exploring AI applications in business and startup development.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Women in Tech Meetup",
      date: "2024-12-28",
      time: "19:00 - 22:00",
      location: "UOS Hub",
      category: "Community",
      attendees: 120,
      price: "Free",
      description: "Celebrating and supporting women entrepreneurs in the technology sector.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "Investor Connect Session",
      date: "2025-01-05",
      time: "15:00 - 18:00",
      location: "Sheraa HQ, SRTIP",
      category: "Investment",
      attendees: 60,
      price: "AED 200",
      description: "Exclusive networking session connecting startups with regional investors and VCs.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  const eventCategories = [
    { id: "all", label: "All Events", count: upcomingEvents.length },
    { id: "Workshop", label: "Workshops", count: 1 },
    { id: "Networking", label: "Networking", count: 1 },
    { id: "Community", label: "Community", count: 1 },
    { id: "Investment", label: "Investment", count: 1 }
  ];

  const sefHighlights = [
    { icon: Users, label: "Global Attendees", value: "14,000+" },
    { icon: Mic, label: "International Speakers", value: "300+" },
    { icon: Calendar, label: "Activities & Sessions", value: "250+" },
    { icon: Award, label: "Startup Competitions", value: "AED 700k+" },
    { icon: Network, label: "Investor Meetings", value: "320+" },
    { icon: Globe, label: "Countries Represented", value: "45+" }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Calendar className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Connect, Learn, and Be Inspired
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Sheraa Events & Experiences
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From our flagship Sharjah Entrepreneurship Festival to specialized workshops and community meetups, 
              discover opportunities to learn, network, and showcase your venture in Sharjah's vibrant ecosystem.
            </p>
          </motion.div>

          {/* Featured Event - SEF */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Event</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">The region's premier entrepreneurship festival</p>
            </div>
            
            <Card className="bg-gradient-to-r from-sheraa-primary/5 via-white to-sheraa-secondary/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-secondary/10 border border-sheraa-primary/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredEvent.image} 
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white border-none">
                        {featuredEvent.status}
                      </Badge>
                    </div>
                    <Button 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30"
                      size="lg"
                    >
                      <PlayCircle className="w-6 h-6 mr-2" />
                      Watch Highlights
                    </Button>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">{featuredEvent.title}</h3>
                      <p className="text-xl text-sheraa-primary font-medium">{featuredEvent.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{featuredEvent.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-sheraa-primary" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                          <p className="font-medium">{featuredEvent.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-sheraa-primary" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                          <p className="font-medium">{featuredEvent.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {sefHighlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="text-center p-3 bg-sheraa-primary/5 rounded-lg">
                          <highlight.icon className="w-6 h-6 text-sheraa-primary mx-auto mb-2" />
                          <div className="text-lg font-bold text-sheraa-primary">{highlight.value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{highlight.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                        <Link to="/events/sef-landing" className="flex items-center gap-2">
                          <Ticket className="w-5 h-5" />
                          Get Your Pass
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                        <Link to="/events/sef-landing" className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* SEF Quick Stats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sefHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 text-center">
                      <highlight.icon className="w-8 h-8 text-sheraa-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-sheraa-primary mb-1">{highlight.value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{highlight.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Upcoming Events */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events & Workshops</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Join our upcoming sessions designed to enhance your skills and expand your network</p>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {eventCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {category.label} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-sheraa-primary/10 text-sheraa-primary border-sheraa-primary/20">
                          {event.category}
                        </Badge>
                        <span className="text-sm font-medium text-green-600">{event.price}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-sheraa-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-sheraa-primary" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-sheraa-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-sheraa-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-sheraa-primary" />
                          <span>{event.attendees} expected attendees</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-12">
                <Camera className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Stay Connected with Our Events</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Never miss an opportunity to connect, learn, and grow. Subscribe to our newsletter for exclusive event updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsPage;
