
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Calendar, MessageSquare,
  Building, Users, Rocket, TrendingUp, Globe, 
  CheckCircle, ArrowRight, Zap, Crown, Briefcase,
  Coffee, Video, User, ChevronRight
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('srtip');
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiryType: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  // Parse URL parameters to pre-fill form
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.get('type');
    const program = urlParams.get('program');
    const audience = urlParams.get('audience');
    
    if (type) {
      setSelectedInquiryType(type);
      setFormData(prev => ({ 
        ...prev, 
        inquiryType: type,
        message: generatePrefilledMessage(type, program, audience)
      }));
    }
  }, [location]);

  const generatePrefilledMessage = (type: string, program: string | null, audience: string | null) => {
    switch (type) {
      case 'program-inquiry':
        return `I'm interested in learning more about ${program || 'your programs'}. Could we schedule a call to discuss eligibility and next steps?`;
      case 'deal-dock':
        return `I'm interested in Deal Dock as a ${audience || 'startup'}. Could we schedule a demo to discuss how it works?`;
      case 'partnership':
        return `I'd like to explore partnership opportunities with Sheraa. Could we schedule a meeting to discuss collaboration?`;
      case 'investment':
        return `I'm interested in investment opportunities within the Sheraa ecosystem. Could we schedule a call?`;
      default:
        return '';
    }
  };

  const inquiryTypes = [
    {
      id: 'program-inquiry',
      title: 'Program Information',
      description: 'Learn about our incubation and acceleration programs',
      icon: Rocket,
      color: 'text-blue-600',
      calendar: true
    },
    {
      id: 'membership',
      title: 'Community Membership',
      description: 'Join our exclusive founder and investor community',
      icon: Users,
      color: 'text-sheraa-primary',
      calendar: true
    },
    {
      id: 'deal-dock',
      title: 'Deal Dock Platform',
      description: 'Investment platform for startups and investors',
      icon: TrendingUp,
      color: 'text-green-600',
      calendar: true
    },
    {
      id: 'partnership',
      title: 'Partnership Opportunities',
      description: 'Corporate partnerships and collaboration',
      icon: Building,
      color: 'text-purple-600',
      calendar: true
    },
    {
      id: 'investment',
      title: 'Investment Inquiries',
      description: 'Investment opportunities and fund information',
      icon: Crown,
      color: 'text-orange-600',
      calendar: true
    },
    {
      id: 'media',
      title: 'Media & Press',
      description: 'Press inquiries and media requests',
      icon: Globe,
      color: 'text-pink-600',
      calendar: false
    },
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Other questions and support requests',
      icon: MessageSquare,
      color: 'text-gray-600',
      calendar: false
    }
  ];

  const locations = [
    {
      id: 'srtip',
      name: 'Sheraa HQ (SRTIP)',
      address: 'Sharjah Research Technology and Innovation Park',
      city: 'Sharjah, UAE',
      phone: '+971 6 509 4000',
      email: 'info@sheraa.ae',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM',
      services: ['Main Office', 'Co-working Space', 'Meeting Rooms', 'Event Space']
    },
    {
      id: 'aus',
      name: 'AUS Hub',
      address: 'Ground Floor, Library Building',
      city: 'American University of Sharjah',
      phone: '+971 6 509 4000',
      email: 'aus@sheraa.ae',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM',
      services: ['Student Programs', 'Co-working', 'Workshops', 'Mentoring']
    },
    {
      id: 'uos',
      name: 'UOS Hub',
      address: 'W3 Building',
      city: 'University of Sharjah',
      phone: '+971 6 509 4010',
      email: 'uos@sheraa.ae',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM',
      services: ['Student Programs', 'Innovation Lab', 'Startup Support']
    }
  ];

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);
  const selectedInquiryData = inquiryTypes.find(type => type.id === selectedInquiryType);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'inquiryType', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please complete all required fields",
        description: `Missing: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    try {
      console.log('Submitting contact form:', formData);
      
      // Here you would typically send to your backend
      // For now, we'll just show a success message
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        inquiryType: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
      setSelectedInquiryType('');
      
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const openCalendar = (type: string) => {
    // In a real implementation, this would open Calendly or similar
    const calendlyLinks = {
      'program-inquiry': 'https://calendly.com/sheraa/program-consultation',
      'membership': 'https://calendly.com/sheraa/membership-consultation',
      'deal-dock': 'https://calendly.com/sheraa/deal-dock-demo',
      'partnership': 'https://calendly.com/sheraa/partnership-discussion',
      'investment': 'https://calendly.com/sheraa/investment-consultation'
    };
    
    const link = calendlyLinks[type as keyof typeof calendlyLinks];
    if (link) {
      window.open(link, '_blank');
    } else {
      toast({
        title: "Calendar booking",
        description: "Calendar booking will be available soon. Please fill out the form for now.",
      });
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-sheraa-primary/10 text-sheraa-primary hover:bg-sheraa-primary/20">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                Whether you're an aspiring founder, established entrepreneur, or ecosystem partner, 
                we're here to support your journey. Choose how you'd like to connect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <Calendar className="w-16 h-16 mx-auto mb-6 text-sheraa-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-4">Book a Call</h3>
                    <p className="text-gray-600 mb-6">
                      Schedule a personalized consultation to discuss your needs and explore opportunities.
                    </p>
                    <Button 
                      className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90"
                      onClick={() => setShowCalendar(true)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center group"
              >
                <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <MessageSquare className="w-16 h-16 mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                    <p className="text-gray-600 mb-6">
                      Fill out our contact form and we'll get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact Form
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center group"
              >
                <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <Coffee className="w-16 h-16 mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-4">Visit Our Hubs</h3>
                    <p className="text-gray-600 mb-6">
                      Drop by one of our locations for an informal chat and to see our community in action.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Our Locations
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">How Can We Help You?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tell us about your inquiry and we'll connect you with the right team member.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Inquiry Type Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">What brings you to Sheraa?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inquiryTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    const isSelected = selectedInquiryType === type.id;
                    
                    return (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index }}
                        className="group cursor-pointer"
                        onClick={() => {
                          setSelectedInquiryType(type.id);
                          handleInputChange('inquiryType', type.id);
                        }}
                      >
                        <Card className={`border-2 transition-all duration-300 ${
                          isSelected 
                            ? 'border-sheraa-primary shadow-lg bg-sheraa-primary/5' 
                            : 'border-gray-200 hover:border-sheraa-primary/50 hover:shadow-md'
                        }`}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <IconComponent className={`w-8 h-8 ${type.color} flex-shrink-0 ${isSelected ? 'scale-110' : 'group-hover:scale-105'} transition-transform`} />
                              <div className="flex-1">
                                <h4 className={`font-bold mb-2 ${isSelected ? 'text-sheraa-primary' : ''}`}>
                                  {type.title}
                                </h4>
                                <p className="text-sm text-gray-600">{type.description}</p>
                              </div>
                              <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                                isSelected 
                                  ? 'bg-sheraa-primary border-sheraa-primary' 
                                  : 'bg-white border-gray-300'
                              }`}>
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-white" />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Calendar Option */}
              {selectedInquiryData?.calendar && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12 text-center"
                >
                  <Card className="border-sheraa-primary/20 bg-sheraa-primary/5">
                    <CardContent className="p-6">
                      <Zap className="w-10 h-10 mx-auto mb-4 text-sheraa-primary" />
                      <h3 className="text-xl font-bold mb-2">Need a faster response?</h3>
                      <p className="text-gray-600 mb-4">
                        Schedule a direct call with a {selectedInquiryData.title.toLowerCase()} specialist for a quick response.
                      </p>
                      <Button 
                        onClick={() => openCalendar(selectedInquiryType)}
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book {selectedInquiryData.title} Call
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
              
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Your Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="+971 XX XXX XXXX"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company">Company/Organization</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="role">Your Role</Label>
                            <Input
                              id="role"
                              value={formData.role}
                              onChange={(e) => handleInputChange('role', e.target.value)}
                              placeholder="Founder, Investor, Student, etc."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Your Message</h3>
                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            rows={5}
                            required
                          />
                        </div>
                      </div>

                      {/* Preferences */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Preferences</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                            <select
                              id="preferredContact"
                              className="w-full border rounded-md p-2"
                              value={formData.preferredContact}
                              onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            >
                              <option value="email">Email</option>
                              <option value="phone">Phone</option>
                              <option value="whatsapp">WhatsApp</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="urgency">Urgency</Label>
                            <select
                              id="urgency"
                              className="w-full border rounded-md p-2"
                              value={formData.urgency}
                              onChange={(e) => handleInputChange('urgency', e.target.value)}
                            >
                              <option value="low">Not Urgent</option>
                              <option value="normal">Normal</option>
                              <option value="high">Urgent (24-48 hours)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Hubs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stop by one of our locations to experience our vibrant community firsthand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <Card className={`h-full ${selectedLocation === location.id ? 'border-sheraa-primary shadow-lg' : 'hover:shadow-md'}`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-xl font-bold ${selectedLocation === location.id ? 'text-sheraa-primary' : ''}`}>
                          {location.name}
                        </h3>
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                          selectedLocation === location.id 
                            ? 'bg-sheraa-primary border-sheraa-primary' 
                            : 'bg-white border-gray-300'
                        }`}></div>
                      </div>
                      <div className="space-y-3">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-600">
                            {location.address}<br />{location.city}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-600">{location.phone}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-600">{location.email}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-600">{location.hours}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Location Details */}
            {selectedLocationData && (
              <motion.div
                key={selectedLocation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="bg-sheraa-primary/5 border border-sheraa-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-6 h-6 text-sheraa-primary" />
                      {selectedLocationData.name} Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Available Services</h3>
                          <div className="space-y-2">
                            {selectedLocationData.services.map((service, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Schedule a Tour</h3>
                          <p className="text-gray-600 mb-4">
                            See our space and meet the community in person.
                          </p>
                          <Button 
                            onClick={() => openCalendar('tour')}
                            className="flex items-center gap-2 bg-sheraa-primary hover:bg-sheraa-primary/90"
                          >
                            <Calendar className="w-4 h-4" />
                            Book Hub Tour
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Location Map</h3>
                        <div className="border rounded-md bg-gray-100 h-64 flex items-center justify-center">
                          {/* In a real implementation, we would embed a Google Map here */}
                          <div className="text-center">
                            <MapPin className="w-16 h-16 mx-auto text-sheraa-primary mb-2" />
                            <p>{selectedLocationData.name}</p>
                            <p className="text-sm text-gray-500">{selectedLocationData.address}</p>
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocationData.name)}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-sheraa-primary flex items-center justify-center gap-1 mt-2"
                            >
                              Open in Google Maps
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>

        {/* Direct Contact Information */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-xl mb-12">
                Our team is available to help you during business hours through these direct channels:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Call Us</h3>
                  <p>+971 6 509 4000</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <p>info@sheraa.ae</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                  <p>+971 5X XXX XXXX</p>
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
