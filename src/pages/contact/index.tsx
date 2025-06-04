
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContactForm from './ContactForm';
import CalendarBookingModal from '@/components/contact/CalendarBookingModal';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, 
  Calendar, Users, Building, Globe, Star,
  Coffee, Video, ArrowRight
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedBookingType, setSelectedBookingType] = useState('general');
  
  // Get URL parameters for pre-filling forms
  const inquiryType = searchParams.get('type') || '';
  const audience = searchParams.get('audience') || '';

  useEffect(() => {
    // Set default booking type based on URL params
    if (inquiryType === 'deal-dock') {
      setSelectedBookingType(audience === 'investor' ? 'investment' : 'investment');
    } else if (inquiryType === 'partnership') {
      setSelectedBookingType('partnership');
    } else if (inquiryType.includes('program')) {
      setSelectedBookingType('program');
    }
  }, [inquiryType, audience]);

  const officeLocations = [
    {
      name: 'Sheraa HQ (SRTIP)',
      address: 'Sharjah Research Technology and Innovation Park, Sharjah, UAE',
      phone: '+971 6 509 4000',
      email: 'info@sheraa.ae',
      hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      description: 'Our main headquarters with state-of-the-art facilities',
      icon: Building,
      mapLink: '#'
    },
    {
      name: 'AUS Hub',
      address: 'Ground Floor, Library Building, American University of Sharjah',
      phone: '+971 6 509 4000',
      email: 'info@sheraa.ae',
      hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      description: 'University-based hub fostering student entrepreneurship',
      icon: Users,
      mapLink: '#'
    },
    {
      name: 'UOS Hub',
      address: 'W3 Building, University of Sharjah',
      phone: '+971 6 509 4010',
      email: 'info@sheraa.ae',
      hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      description: 'Academic collaboration and innovation center',
      icon: Globe,
      mapLink: '#'
    }
  ];

  const contactMethods = [
    {
      icon: Calendar,
      title: 'Book a Consultation',
      description: 'Schedule a personalized meeting with our team',
      action: 'Book Now',
      color: 'from-blue-500 to-cyan-500',
      onClick: () => setIsCalendarOpen(true)
    },
    {
      icon: MessageSquare,
      title: 'Send a Message',
      description: 'Fill out our contact form for detailed inquiries',
      action: 'Contact Form',
      color: 'from-purple-500 to-pink-500',
      onClick: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: '+971 6 509 4000',
      color: 'from-green-500 to-emerald-500',
      onClick: () => window.open('tel:+97165094000')
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email for general inquiries',
      action: 'info@sheraa.ae',
      color: 'from-orange-500 to-red-500',
      onClick: () => window.open('mailto:info@sheraa.ae')
    }
  ];

  const quickActions = [
    {
      title: 'Program Information',
      description: 'Learn about our incubation and acceleration programs',
      bookingType: 'program',
      icon: Users
    },
    {
      title: 'Investment Discussion',
      description: 'Explore funding opportunities and investor connections',
      bookingType: 'investment',
      icon: Star
    },
    {
      title: 'Partnership Exploration',
      description: 'Discuss collaboration and strategic partnerships',
      bookingType: 'partnership',
      icon: Building
    },
    {
      title: 'General Consultation',
      description: 'Get guidance on your entrepreneurial journey',
      bookingType: 'general',
      icon: MessageSquare
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5">
        {/* Hero Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                Whether you're an aspiring entrepreneur, seasoned founder, investor, or potential partner, 
                we're here to help you navigate Sharjah's thriving entrepreneurship ecosystem.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group cursor-pointer"
                    onClick={method.onClick}
                  >
                    <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all group-hover:border-sheraa-primary/30">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-sheraa-primary transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                        <Button variant="outline" size="sm" className="group-hover:bg-sheraa-primary group-hover:text-white transition-colors">
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Booking Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Schedule a Consultation</h2>
              <p className="text-lg text-gray-600 mb-8">Choose the type of meeting that best fits your needs</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-lg transition-all border hover:border-sheraa-primary/30"
                      onClick={() => {
                        setSelectedBookingType(action.bookingType);
                        setIsCalendarOpen(true);
                      }}
                    >
                      <CardContent className="p-4 text-center">
                        <IconComponent className="w-8 h-8 mx-auto mb-3 text-sheraa-primary" />
                        <h4 className="font-semibold mb-2">{action.title}</h4>
                        <p className="text-xs text-gray-600">{action.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Hubs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sheraa operates from strategic locations across Sharjah's innovation ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {officeLocations.map((location, index) => {
                const IconComponent = location.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-sheraa-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-sheraa-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{location.name}</h3>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">{location.description}</p>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span>{location.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{location.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{location.email}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span>{location.hours}</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="w-full mt-4">
                          Get Directions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>

        {/* Calendar Booking Modal */}
        <CalendarBookingModal
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
          defaultType={selectedBookingType}
          defaultLocation="virtual"
        />
      </div>
    </MainLayout>
  );
};

export default ContactPage;
