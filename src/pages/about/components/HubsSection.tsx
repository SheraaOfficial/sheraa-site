
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

interface Hub {
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  openHours: string;
  googleMapsLink: string;
  foundingDate: Date;
}

const hubsData: Hub[] = [
  {
    name: 'Sheraa HQ',
    location: 'Sharjah, UAE',
    address: 'Sharjah Entrepreneurship Center (Sheraa), University of Sharjah',
    phone: '+971 6 505 8414',
    email: 'info@sharea.ae',
    openHours: 'Sun-Thu, 9 AM - 5 PM',
    googleMapsLink: 'https://maps.app.goo.gl/3jJzB5jBcG9tK9Zb9',
    foundingDate: new Date('2016-01-01')
  },
  {
    name: 'American University of Sharjah',
    location: 'Sharjah, UAE',
    address: 'American University of Sharjah, University City',
    phone: '+971 6 515 2222',
    email: 'info@aus.edu',
    openHours: 'Sun-Thu, 8 AM - 6 PM',
    googleMapsLink: 'https://maps.app.goo.gl/jhYoRD5J4jPTLRyv9',
    foundingDate: new Date('1997-09-01')
  },
  {
    name: 'University of Sharjah',
    location: 'Sharjah, UAE',
    address: 'University of Sharjah, University City',
    phone: '+971 6 505 0000',
    email: 'info@sharjah.ac.ae',
    openHours: 'Sun-Thu, 8 AM - 4 PM',
    googleMapsLink: 'https://maps.app.goo.gl/jUj9V8JmDRbRjV4z7',
    foundingDate: new Date('1997-10-01')
  }
];

const HubsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <motion.section
      id="hubs"
      className="py-16 bg-gray-50 dark:bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge className="bg-sheraa-primary/10 text-sheraa-primary font-bold px-4 py-2 rounded-full mb-4">
            Our Hubs
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Where Innovation Thrives
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Explore our strategic locations fostering entrepreneurship and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubsData.map((hub, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-sheraa-primary transition-colors duration-300">
                    {hub.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {hub.address}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    {hub.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                    <Phone className="w-4 h-4" />
                    {hub.phone}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                    <Clock className="w-4 h-4" />
                    {hub.openHours}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <ExternalLink className="w-4 h-4" />
                    <a href={`mailto:${hub.email}`} className="hover:text-sheraa-primary transition-colors duration-300">
                      {hub.email}
                    </a>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Founded on {formatDate(hub.foundingDate)}
                  </p>
                  <Button asChild variant="secondary" className="w-full mt-4 bg-sheraa-primary/10 hover:bg-sheraa-primary/20 text-sheraa-primary">
                    <a href={hub.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Get Directions
                      <Navigation className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HubsSection;
