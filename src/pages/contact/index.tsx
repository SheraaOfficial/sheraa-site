
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, 
  Building2, GraduationCap, Users, Send, CheckCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const locations = [
    {
      name: 'Sheraa HQ (SRTIP)',
      address: 'Sharjah Research Technology and Innovation Park, Sharjah, UAE',
      phone: '+971 6 509 4000',
      email: 'info@sheraa.ae',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      icon: Building2,
      color: 'from-sheraa-primary to-blue-600'
    },
    {
      name: 'AUS Hub',
      address: 'Ground Floor, Library Building, American University of Sharjah',
      phone: '+971 6 509 4000',
      email: 'aus@sheraa.ae',
      hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'UOS Hub',
      address: 'W3 Building, University of Sharjah',
      phone: '+971 6 509 4010',
      email: 'uos@sheraa.ae',
      hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      icon: Users,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const inquiryTypes = [
    'General Information',
    'Program Applications',
    'Partnership Opportunities',
    'Membership Inquiries',
    'SEF Event Questions',
    'Media Inquiries',
    'Investor Relations',
    'Technical Support'
  ];

  return (
    <MainLayout
      seoTitle="Contact Sheraa - Get in Touch with Our Team"
      seoDescription="Connect with Sheraa's entrepreneurship team. Visit our hubs in SRTIP, AUS, or UOS. Get support for programs, partnerships, and startup growth."
      seoKeywords="contact Sheraa, Sharjah entrepreneurship, startup support, business incubator contact, SRTIP"
    >
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <MessageSquare className="w-5 h-5 text-sheraa-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
                Get in Touch with<br />Sheraa
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Whether you're ready to start your entrepreneurial journey, explore partnerships, 
                or simply have questions about our ecosystem, we're here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 shadow-2xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
                    
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 dark:text-green-400 font-medium">
                          Message sent successfully! We'll get back to you within 24 hours.
                        </span>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-xl"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Visit Our Locations</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Sheraa operates from strategic locations within Sharjah's vibrant academic 
                    and research landscape, ensuring accessibility and fostering collaboration.
                  </p>
                </div>

                <div className="space-y-6">
                  {locations.map((location, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${location.color} flex items-center justify-center shadow-lg`}>
                              <location.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold mb-2">{location.name}</h3>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-400">{location.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-600 dark:text-gray-400">{location.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-600 dark:text-gray-400">{location.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-600 dark:text-gray-400">{location.hours}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Emergency Contact */}
                <Card className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 border border-sheraa-primary/30">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      For urgent inquiries, reach out directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+97165094000" className="flex items-center gap-2 text-sheraa-primary font-medium">
                        <Phone className="w-4 h-4" />
                        +971 6 509 4000
                      </a>
                      <a href="mailto:info@sheraa.ae" className="flex items-center gap-2 text-sheraa-primary font-medium">
                        <Mail className="w-4 h-4" />
                        info@sheraa.ae
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Find Us on the Map</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Located in the heart of Sharjah's innovation ecosystem, our hubs are easily accessible 
                and strategically positioned to serve entrepreneurs across the UAE.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-sheraa-dark rounded-2xl shadow-2xl overflow-hidden border border-sheraa-primary/20"
            >
              <div className="h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto text-sheraa-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed location map will be integrated here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
