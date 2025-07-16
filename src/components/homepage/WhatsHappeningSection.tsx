import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'program' | 'networking' | 'competition';
  date: string;
  time: string;
  location: string;
  description: string;
  persona: 'student' | 'founder' | 'investor' | 'general';
  image: string;
  registrationLink: string;
  spots?: number;
  featured?: boolean;
}

const WhatsHappeningSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'student' | 'founder' | 'investor'>('all');

  const events: Event[] = [
    {
      id: '1',
      title: 'Startup Innovation Workshop',
      type: 'workshop',
      date: 'April 30, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Sheraa HQ, SRTIP',
      description: 'Learn the fundamentals of startup innovation with hands-on activities and expert mentorship.',
      persona: 'student',
      image: '/placeholder.svg',
      registrationLink: '#',
      spots: 25,
      featured: true
    },
    {
      id: '2',
      title: 'S3 Incubator Demo Day',
      type: 'program',
      date: 'May 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'SRTIP Auditorium',
      description: 'Watch our latest S3 cohort present their ventures to investors and ecosystem partners.',
      persona: 'founder',
      image: '/placeholder.svg',
      registrationLink: '#',
      featured: true
    },
    {
      id: '3',
      title: 'Founder Fridays Networking',
      type: 'networking',
      date: 'Every Friday',
      time: '4:00 PM - 6:00 PM',
      location: 'Sheraa AUS Hub',
      description: 'Weekly networking session connecting founders, mentors, and industry experts.',
      persona: 'general',
      image: '/placeholder.svg',
      registrationLink: '#'
    },
    {
      id: '4',
      title: 'Access Sharjah Challenge 2025',
      type: 'competition',
      date: 'June 1 - August 31, 2025',
      time: 'Applications Open',
      location: 'Global (Remote + On-site)',
      description: 'Global competition for startups to solve real challenges with Sharjah partners.',
      persona: 'founder',
      image: '/placeholder.svg',
      registrationLink: '#',
      featured: true
    },
    {
      id: '5',
      title: 'Investor Connect Session',
      type: 'networking',
      date: 'May 20, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Sheraa HQ, SRTIP',
      description: 'Connect with regional VCs and angel investors for funding opportunities.',
      persona: 'founder',
      image: '/placeholder.svg',
      registrationLink: '#'
    },
    {
      id: '6',
      title: 'Startup Dojo Graduation',
      type: 'program',
      date: 'May 25, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'University of Sharjah',
      description: 'Celebrating the achievements of our young entrepreneurs from Startup Dojo program.',
      persona: 'student',
      image: '/placeholder.svg',
      registrationLink: '#'
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.persona === filter || event.persona === 'general');

  const featuredEvents = events.filter(event => event.featured);

  const typeColors = {
    workshop: 'bg-blue-100 text-blue-800',
    program: 'bg-green-100 text-green-800',
    networking: 'bg-purple-100 text-purple-800',
    competition: 'bg-orange-100 text-orange-800'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's Currently Happening at{' '}
            <span className="text-primary">Sheraa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover upcoming workshops, programs, and networking events designed to accelerate your entrepreneurial journey.
          </p>
        </motion.div>

        {/* Featured Events Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            Featured Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute top-4 left-4">
                      <Badge className={typeColors[event.type]}>{event.type}</Badge>
                    </div>
                    {event.spots && (
                      <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                        {event.spots} spots left
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <Button className="w-full group/btn">
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {[
            { id: 'all', label: 'All Events' },
            { id: 'student', label: 'For Students' },
            { id: 'founder', label: 'For Founders' },
            { id: 'investor', label: 'For Investors' }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={filter === tab.id ? 'default' : 'outline'}
              onClick={() => setFilter(tab.id as any)}
              className="transition-all duration-200"
            >
              <Filter className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* All Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Badge className={typeColors[event.type]}>{event.type}</Badge>
                {event.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
              <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.location}
                </div>
              </div>
              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="px-8">
            View All Events & Programs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsHappeningSection;