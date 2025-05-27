import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ExternalLink, Download } from 'lucide-react';
import { format } from 'date-fns';

interface Hub {
  name: string;
  location: string;
  address: string;
  phone: string;
  description: string;
  features: string[];
  image: string;
  mapLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const hubs: Hub[] = [
  {
    name: "Sheraa HQ (SRTIP)",
    location: "Sharjah Research Technology and Innovation Park",
    address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
    phone: "+971 6 509 4000",
    description: "Our headquarters connects startups with cutting-edge research, technology facilities, and a dynamic innovation ecosystem.",
    features: ["Co-working spaces", "Meeting rooms", "Event facilities", "Innovation labs"],
    image: "/lovable-uploads/sheraa-logo.png",
    mapLink: "https://maps.google.com",
    coordinates: { lat: 25.3548, lng: 55.4105 }
  },
  {
    name: "AUS Hub",
    location: "American University of Sharjah",
    address: "Ground Floor, Library Building, American University of Sharjah, University City, Sharjah, UAE",
    phone: "+971 6 509 4000",
    description: "Situated on the ground floor of the Library Building at AUS, this hub engages students and faculty, fostering early-stage innovation.",
    features: ["Student programs", "Academic collaboration", "Research facilities", "Mentorship"],
    image: "/lovable-uploads/sheraa-logo.png",
    mapLink: "https://maps.google.com",
    coordinates: { lat: 25.3548, lng: 55.4105 }
  },
  {
    name: "UOS Hub", 
    location: "University of Sharjah",
    address: "W3 Building, University of Sharjah, University City, Sharjah, UAE",
    phone: "+971 6 509 4010",
    description: "Located in the W3 Building at UOS, this hub connects with another key academic institution, broadening our reach to young talent.",
    features: ["Youth programs", "Innovation workshops", "Startup competitions", "Networking events"],
    image: "/lovable-uploads/sheraa-logo.png",
    mapLink: "https://maps.google.com",
    coordinates: { lat: 25.3548, lng: 55.4105 }
  }
];

const operatingHours = [
  { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "By Appointment" }
];

export const HubsSection: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM dd, yyyy');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Hubs: At the Heart of Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sheraa operates from strategic locations within Sharjah's vibrant academic and research landscape, 
            ensuring accessibility and fostering collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {hubs.map((hub, index) => (
            <motion.div
              key={hub.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sheraa-primary/20" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {hub.name}
                  </h3>
                  <p className="text-sm text-sheraa-primary font-medium mb-3">
                    {hub.location}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {hub.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-sheraa-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{hub.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-sheraa-primary" />
                      <p className="text-sm text-gray-600">{hub.phone}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hub.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-sheraa-primary/10 text-sheraa-primary px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-sheraa-primary hover:bg-sheraa-primary/90"
                      asChild
                    >
                      <a href={hub.mapLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Get Directions
                      </a>
                    </Button>
                    {hub.name === "AUS Hub" && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <a href="#" download>
                          <Download className="w-4 h-4 mr-1" />
                          PDF Map
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Operating Hours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Operating Hours
          </h3>
          <div className="space-y-3">
            {operatingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                <span className="font-medium text-gray-700">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Last updated: {formattedDate}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
