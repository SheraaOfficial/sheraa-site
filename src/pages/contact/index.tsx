
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Phone, Mail, Clock, Calendar, Users,
  MessageSquare, Sparkles, ArrowRight, ExternalLink,
  Building2, Globe, Send, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: ""
  });

  const [showBooking, setShowBooking] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");

  const contactInfo = {
    general: {
      email: "info@sheraa.ae",
      phone: "+971 6 509 4000",
      hours: "Sunday - Thursday, 9:00 AM - 6:00 PM"
    }
  };

  const locations = [
    {
      name: "Sheraa HQ (SRTIP)",
      address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
      phone: "+971 6 509 4000",
      description: "Our headquarters connecting startups with cutting-edge research and technology facilities",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Research Access", "Technology Labs", "Innovation Hub", "Co-working Spaces"],
      coordinates: { lat: 25.3125, lng: 55.4603 }
    },
    {
      name: "AUS Hub", 
      address: "Ground Floor, Library Building, American University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4000",
      description: "Engaging students and faculty to foster early-stage innovation",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Student Programs", "Academic Integration", "Workshop Spaces", "Mentorship"],
      coordinates: { lat: 25.3158, lng: 55.4803 }
    },
    {
      name: "UOS Hub",
      address: "W3 Building, University of Sharjah, University City, Sharjah, UAE", 
      phone: "+971 6 509 4010",
      description: "Connecting with key academic institutions to broaden our reach",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Youth Engagement", "Skill Development", "Network Access", "Resources"],
      coordinates: { lat: 25.2985, lng: 55.4721 }
    }
  ];

  const inquiryTypes = [
    { id: "programs", label: "Program Information", icon: Building2 },
    { id: "partnership", label: "Partnership Opportunities", icon: Users },
    { id: "membership", label: "Community Membership", icon: Globe },
    { id: "media", label: "Media Inquiries", icon: MessageSquare },
    { id: "general", label: "General Questions", icon: Mail },
    { id: "booking", label: "Schedule a Meeting", icon: Calendar }
  ];

  const availableSlots = [
    "9:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM", 
    "2:00 PM - 3:00 PM",
    "3:30 PM - 4:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. Our team will get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleInquiryTypeSelect = (type: string) => {
    setFormData({ ...formData, inquiryType: type });
    if (type === "booking") {
      setShowBooking(true);
    } else {
      setShowBooking(false);
    }
  };

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
              <MessageSquare className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Get in Touch with Sheraa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're here to help you connect with Sharjah's entrepreneurship ecosystem. Whether you have questions 
              about our programs, want to explore partnerships, or simply learn more, please reach out.
            </p>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-sheraa-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-sheraa-primary font-medium mb-2">{contactInfo.general.email}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">General inquiries and support</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-secondary/10 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-sheraa-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-sheraa-primary font-medium mb-2">{contactInfo.general.phone}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Speak directly with our team</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-teal/10 flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-sheraa-teal" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                  <p className="text-sheraa-primary font-medium mb-2">Sun - Thu</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">9:00 AM - 6:00 PM GST</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Send className="w-6 h-6 text-sheraa-primary" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company/Organization</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">I am inquiring about... *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {inquiryTypes.map((type) => (
                        <Button
                          key={type.id}
                          variant={formData.inquiryType === type.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleInquiryTypeSelect(type.id)}
                          className="justify-start h-auto p-3 text-xs"
                        >
                          <type.icon className="w-3 h-3 mr-1" />
                          {type.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {showBooking && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="bg-sheraa-primary/5 rounded-lg p-4 border border-sheraa-primary/20"
                    >
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Select a meeting time
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={selectedSlot === slot ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedSlot(slot)}
                            className="text-xs"
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your inquiry, goals, or how we can help you..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSubmit} 
                    className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Visit Our Hubs</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Find us at strategic locations across Sharjah's innovation landscape
                </p>
              </div>

              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{location.name}</h3>
                        <Badge className="bg-sheraa-primary/10 text-sheraa-primary border-sheraa-primary/20">
                          Hub
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{location.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-sheraa-primary mt-0.5 flex-shrink-0" />
                          <span>{location.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-sheraa-primary" />
                          <span>{location.phone}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {location.features.map((feature, idx) => (
                          <div key={idx} className="bg-sheraa-primary/5 rounded px-2 py-1 text-xs text-center">
                            <CheckCircle className="w-3 h-3 inline mr-1 text-sheraa-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                        Get Directions
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Map Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Find Us in Sharjah</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Strategically located across Sharjah's key innovation districts
                  </p>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-sheraa-primary/10 to-sheraa-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-sheraa-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Explore our hub locations across Sharjah
                    </p>
                    <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      View Interactive Map
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Social Media & Newsletter */}
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
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Follow our journey and get the latest updates on programs, events, and success stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    <a href="#" className="flex items-center gap-2">
                      Follow Our Journey
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Subscribe to Newsletter
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

export default ContactPage;
