
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { ParallaxBackground } from '@/components/parallax';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SEFRegisterPage: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      role: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "You've been registered for SEF'26. Check your email for confirmation details.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.1), rgba(26, 31, 44, 0.1))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                Register for SEF'26
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for the region's largest entrepreneurship festival - January 31st - February 1st, 2026
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-sheraa-soft p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">Secure Your Spot</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Company or institution" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role / Position</FormLabel>
                      <FormControl>
                        <Input placeholder="Your role" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Register Now"}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By registering, you agree to our <Link to="/terms" className="text-sheraa-primary hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </Form>
          </motion.div>
          
          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* About SEF */}
            <div className="bg-white rounded-3xl shadow-sheraa-soft p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">About the Event</h2>
              
              <p className="text-gray-600 mb-6">
                The Sharjah Entrepreneurship Festival is the region's largest gathering of entrepreneurial minds. With over 14,000 attendees, 300+ global speakers, and 250+ activities, SEF'26 unites visionaries, investors, innovators, and aspiring changemakers from across the globe.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">January 31st - February 1st, 2026</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">Sharjah Research, Technology, and Innovation Park (SRTIP)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">Expected attendance: 14,000+</span>
                </div>
              </div>
            </div>
            
            {/* Why Attend */}
            <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl shadow-sheraa-soft p-8 border border-purple-100">
              <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">Why Attend SEF'26?</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                    <Info className="h-4 w-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">World-Class Speakers</span>
                    <p className="text-gray-600 text-sm mt-1">Learn from 300+ global leaders sharing insights across technology, finance, sustainability, and more.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                    <Info className="h-4 w-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Dynamic Experience Zones</span>
                    <p className="text-gray-600 text-sm mt-1">Explore diverse zones: Startup Town, Investors Lounge, Made in Sharjah, Creative Zone, and more.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                    <Info className="h-4 w-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">High-Impact Networking</span>
                    <p className="text-gray-600 text-sm mt-1">Connect with potential co-founders, mentors, partners, and investors through curated meetings.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                    <Info className="h-4 w-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Startup Opportunities</span>
                    <p className="text-gray-600 text-sm mt-1">Showcase your venture, compete for significant funding in the Pitch Competition, and gain recognition.</p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="w-full mt-6" variant="secondary">
                <Link to="/events/sef/agenda">
                  Explore Full Agenda
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Related Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
            </Link>
            
            <Link to="/events/sef/experience" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">SEF Experience</h4>
              <p className="text-gray-600 mt-2 text-sm">Discover the unique zones and experiences at SEF'26.</p>
            </Link>
            
            <Link to="/events/sef/faq" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">FAQs</h4>
              <p className="text-gray-600 mt-2 text-sm">Find answers to commonly asked questions about the festival.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SEFRegisterPage;
