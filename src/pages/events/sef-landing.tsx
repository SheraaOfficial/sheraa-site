
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Mic, Users } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEFSection from '@/components/SEFSection';
import { Sparkles } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SEFLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#292D3E]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md mb-6">
                <Sparkles className="text-[#9b87f5]">
                  <span>JANUARY 31 - FEBRUARY 1, 2026</span>
                </Sparkles>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                <span className="block">Sharjah Entrepreneurship</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">Festival 2026</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Join 14,000+ attendees at the region's largest gathering of entrepreneurial minds.
                Experience transformative talks, workshops, and unparalleled networking opportunities.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <GradientButton asChild variant="shimmer" size="lg" className="shadow-lg hover:shadow-[0_5px_30px_rgba(155,135,245,0.4)]">
                  <Link to="/events/sef/register">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </GradientButton>
                
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 
                    hover:bg-white/20 backdrop-blur-xl hover:border-white/50">
                  <Link to="/events/sef/agenda">Explore Agenda</Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Key Event Info Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                { icon: Calendar, label: "January 31 - February 1, 2026" },
                { icon: MapPin, label: "SRTIP, Sharjah, UAE" },
                { icon: Users, label: "14,000+ Attendees" },
                { icon: Mic, label: "300+ Global Speakers" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20
                    hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-white/20 p-2.5 rounded-full">
                    <item.icon className="h-5 w-5 text-[#9b87f5]" />
                  </div>
                  <span className="text-white text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      
      <main className="flex-grow">
        {/* Experience Section */}
        <SEFSection />
        
        {/* Featured Speakers Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Featured Speakers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights 
                across technology, finance, sustainability, and more.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((speaker) => (
                <motion.div
                  key={speaker}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: speaker * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all"
                >
                  <div className="relative">
                    <AspectRatio ratio={1 / 1} className="bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#F97316]/40 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
                    </AspectRatio>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-sheraa-primary">Speaker Name</h3>
                    <p className="text-sm text-gray-500 mb-3">Position, Company</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Expert in technology innovation and business transformation.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
                <Link to="/events/sef/speakers">
                  View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Highlights From Previous Festival */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#292D3E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SEF'25 Highlights</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Relive the energy and inspiration from our previous festival that brought together 
                thousands of innovators, founders, and changemakers.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="relative overflow-hidden rounded-xl aspect-video bg-white/5 backdrop-blur-sm
                    border border-white/10 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-transparent to-transparent 
                    opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Highlight Title</h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      Brief description of this particular highlight or moment from SEF'25.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 
                hover:bg-white/20 hover:border-white/50">
                <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
                  Watch SEF'25 Recap Video <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Experience Zones Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Experience Zones</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore diverse zones catering to every interest, from connecting with investors to 
                discovering local talent and innovating in specialized areas.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Startup Town",
                  description: "Connect with fellow founders, showcase your venture, and find potential collaborators."
                },
                {
                  title: "Investors Lounge",
                  description: "Meet with VCs, angel investors, and other funding sources in a dedicated networking space."
                },
                {
                  title: "Made in Sharjah",
                  description: "Discover innovative products and services created by local entrepreneurs and makers."
                },
                {
                  title: "Creative Zone",
                  description: "Explore the intersection of entrepreneurship, art, design, and creative industries."
                },
                {
                  title: "SEF Academy",
                  description: "Participate in hands-on workshops and masterclasses led by industry experts."
                },
                {
                  title: "Impact Zone",
                  description: "Engage with social entrepreneurs and learn how business can drive positive change."
                }
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm border border-purple-100
                    hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] rounded-lg flex items-center 
                    justify-center text-white mb-4">
                    {index + 1}
                  </div>
                  
                  <h3 className="font-bold text-xl text-sheraa-primary mb-2">{zone.title}</h3>
                  <p className="text-gray-600">{zone.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
                <Link to="/events/sef/experience">
                  Explore All Zones <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Who Should Attend Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-6">Who Should Attend?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  SEF'26 offers value for everyone in the entrepreneurial ecosystem, from aspiring founders to 
                  seasoned investors looking for the next big opportunity.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Entrepreneurs & Startup Founders",
                      description: "Connect with investors, mentors, and potential customers to grow your business."
                    },
                    {
                      title: "Investors & VCs",
                      description: "Discover promising startups and innovative solutions across various sectors."
                    },
                    {
                      title: "Students & Young Talents",
                      description: "Explore entrepreneurship paths and connect with potential employers or co-founders."
                    },
                    {
                      title: "Corporate Innovators",
                      description: "Find startup partners and stay ahead of disruptive industry trends."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#9b87f5] font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-sheraa-primary">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button asChild variant="default" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to="/events/sef/who-should-attend">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#F97316]/40" />
                <div className="absolute inset-0 bg-[#1A1F2C]/50" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <Sparkles className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to join SEF'26?</h3>
                  </Sparkles>
                  <p className="text-white/90 text-center mb-8">
                    Secure your spot at the region's largest entrepreneurship gathering.
                  </p>
                  
                  <GradientButton asChild variant="shimmer" size="lg" className="shadow-glow">
                    <Link to="/events/sef/register">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </GradientButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Preview Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to commonly asked questions about the Sharjah Entrepreneurship Festival.
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "When and where is SEF'26 taking place?",
                  answer: "SEF'26 will take place on January 31 - February 1, 2026, at the Sharjah Research, Technology, and Innovation Park (SRTIP) in Sharjah, UAE."
                },
                {
                  question: "How can I register for the event?",
                  answer: "You can register for SEF'26 through our online registration platform. Early bird tickets will be available until October 2025."
                },
                {
                  question: "Are there opportunities to pitch my startup at SEF?",
                  answer: "Yes! SEF'26 features a dedicated Pitch Competition where startups can showcase their ventures and compete for significant funding. Applications will open in November 2025."
                },
                {
                  question: "What is the dress code for SEF'26?",
                  answer: "The dress code is smart-casual. We recommend comfortable attire as the festival involves moving between different venues and activities throughout the day."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="p-5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-lg text-sheraa-primary mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
              
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
                  <Link to="/events/sef/faq">
                    View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#1A1F2C] to-[#292D3E] relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#9b87f5]/30 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/20 rounded-full filter blur-[120px]" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to be part of SEF'26?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join us for two days of inspiration, connection, and growth at the region's premier entrepreneurship festival.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <GradientButton asChild variant="shimmer" size="lg" className="shadow-glow">
                  <Link to="/events/sef/register">
                    Reserve Your Spot <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </GradientButton>
                
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 
                    hover:bg-white/20 hover:border-white/50">
                  <Link to="/events/sef/be-part-of-sef">Explore Opportunities</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEFLandingPage;
