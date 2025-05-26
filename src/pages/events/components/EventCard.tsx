
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Star, ExternalLink } from 'lucide-react';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  type: string;
  featured: boolean;
  registrationOpen: boolean;
}

interface EventCardProps {
  event: Event;
  index: number;
  typeColors: Record<string, string>;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index, typeColors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="group"
    >
      <Card className={`border bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        event.featured ? 'border-sheraa-sef-primary/30 bg-gradient-to-r from-sheraa-sef-primary/5 to-sheraa-sef-secondary/5' : 'border-gray-100'
      }`}>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={typeColors[event.type]}>
                      {event.type}
                    </Badge>
                    {event.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-sheraa-sef-primary/10 border border-sheraa-sef-primary/20 rounded-full">
                        <Star className="w-3 h-3 text-sheraa-sef-primary" />
                        <span className="text-xs font-medium text-sheraa-sef-primary">Featured</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-sheraa-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-sheraa-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-sheraa-primary" />
                  {event.time}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-sheraa-primary" />
                  {event.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-sheraa-primary" />
                  {event.attendees}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              {event.registrationOpen ? (
                <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white">
                  Register Now
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  Registration Opens Soon
                </Button>
              )}
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
