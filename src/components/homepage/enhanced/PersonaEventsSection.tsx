import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Building, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight,
  Filter,
  Image as ImageIcon,
  Video,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PersonaEventsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const personas = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'founders', label: 'Founders', icon: Rocket },
    { id: 'corporates', label: 'Corporates', icon: Building }
  ];

  const events = [
    {
      id: 1,
      title: 'S3 Incubator Demo Day',
      date: 'May 15, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'SRTIP Auditorium',
      persona: 'founders',
      type: 'pitch',
      description: 'Watch 12 promising startups pitch to investors and ecosystem partners',
      image: '/lovable-uploads/demo-day.jpg',
      attendees: 300,
      status: 'upcoming',
      gallery: [
        '/lovable-uploads/demo-day-1.jpg',
        '/lovable-uploads/demo-day-2.jpg',
        '/lovable-uploads/demo-day-3.jpg'
      ]
    },
    {
      id: 2,
      title: 'Startup Dojo Summer Program',
      date: 'June 1-30, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'AUS & UOS Hubs',
      persona: 'students',
      type: 'program',
      description: 'Intensive 8-week incubation for university students to transform ideas into viable solutions',
      image: '/lovable-uploads/startup-dojo.jpg',
      attendees: 85,
      status: 'applications-open',
      gallery: [
        '/lovable-uploads/dojo-workshop-1.jpg',
        '/lovable-uploads/dojo-mentoring.jpg'
      ]
    },
    {
      id: 3,
      title: 'Corporate Innovation Workshop',
      date: 'April 22, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Sheraa HQ, SRTIP',
      persona: 'corporates',
      type: 'workshop',
      description: 'Learn how to build internal innovation programs and partner with startups',
      image: '/lovable-uploads/corporate-workshop.jpg',
      attendees: 50,
      status: 'registration-open',
      gallery: []
    },
    {
      id: 4,
      title: 'Founder Fridays Networking',
      date: 'Every Friday',
      time: '4:00 PM - 6:00 PM',
      location: 'Sheraa HQ Lounge',
      persona: 'founders',
      type: 'networking',
      description: 'Weekly informal networking for founders, mentors, and ecosystem players',
      image: '/lovable-uploads/founder-fridays.jpg',
      attendees: 40,
      status: 'ongoing',
      gallery: [
        '/lovable-uploads/networking-1.jpg',
        '/lovable-uploads/networking-2.jpg'
      ]
    },
    {
      id: 5,
      title: 'Access Sharjah Challenge 2025',
      date: 'Applications until June 30',
      time: 'Global Competition',
      location: 'Online & Sharjah',
      persona: 'founders',
      type: 'challenge',
      description: 'Solve real industry challenges and win POC contracts worth AED 250K+',
      image: '/lovable-uploads/asc-challenge.jpg',
      attendees: 500,
      status: 'applications-open',
      gallery: [
        '/lovable-uploads/asc-pitch.jpg',
        '/lovable-uploads/asc-winners.jpg'
      ]
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.persona === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'applications-open': return 'bg-green-100 text-green-800';
      case 'registration-open': return 'bg-orange-100 text-orange-800';
      case 'ongoing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What's Currently Happening at Sheraa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover events, workshops, and programs tailored to your entrepreneurial journey. 
            From student ideation to scaling ventures globally.
          </p>
        </motion.div>

        {/* Persona Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
            <Filter className="h-4 w-4 text-gray-500" />
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActiveFilter(persona.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
                  activeFilter === persona.id
                    ? 'bg-sheraa-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <persona.icon className="h-4 w-4" />
                <span>{persona.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                      {event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                    <div className="ml-auto flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Gallery Preview */}
                  {event.gallery.length > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                      <ImageIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {event.gallery.length} photos available
                      </span>
                      <button className="text-sheraa-primary text-sm hover:underline">
                        View Gallery
                      </button>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        <Video className="h-3 w-3 mr-1" />
                        Watch Preview
                      </Button>
                      {event.status === 'applications-open' && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                          Apply Now
                        </Button>
                      )}
                    </div>
                    <Button size="sm" variant="ghost" className="text-sheraa-primary">
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-sheraa-primary/10 to-sheraa-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Miss Out on Upcoming Events
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community to get notified about new events, workshops, and opportunities 
              tailored to your entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90" asChild>
                <Link to="/events">
                  View All Events
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/community/membership">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonaEventsSection;