
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Quote, ChevronLeft, ChevronRight, 
  Star, Building2, Lightbulb, GraduationCap,
  Globe, Users, ArrowRight
} from 'lucide-react';

const SEFEnhancedTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Al-Mahmoud",
      title: "Founder & CEO, TechVenture",
      company: "Dubai, UAE",
      type: "Entrepreneur",
      image: "/placeholder.svg",
      quote: "SEF was the turning point for my startup. I connected with three potential investors and found my co-founder during the networking sessions. The energy and genuine connections made here are unmatched.",
      impact: "Raised $2M Series A",
      year: "SEF 2023 Attendee",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Partner, Gulf Ventures",
      company: "Investment Firm",
      type: "Investor",
      image: "/placeholder.svg",
      quote: "The quality of startups at SEF consistently impresses me. Last year, I discovered two portfolio companies that are now performing exceptionally well. It's become an essential event in my calendar.",
      impact: "Invested in 5 startups",
      year: "SEF 2024 Attendee",
      icon: Building2,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      title: "Computer Science Graduate",
      company: "American University of Sharjah",
      type: "Student",
      image: "/placeholder.svg",
      quote: "As a fresh graduate, SEF opened my eyes to the startup world. I attended every workshop, connected with mentors, and landed my dream job at a tech startup. The inspiration I got here changed my career path.",
      impact: "Landed dream job",
      year: "SEF 2024 Attendee",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      title: "Innovation Director",
      company: "Regional Telecom Giant",
      type: "Corporate",
      image: "/placeholder.svg",
      quote: "SEF helps us stay connected with emerging technologies and promising startups. We've established three strategic partnerships and launched two pilot programs with startups we met at SEF.",
      impact: "3 partnerships formed",
      year: "SEF 2023 Attendee",
      icon: Globe,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "Linda Rodriguez",
      title: "Serial Entrepreneur",
      company: "Barcelona, Spain",
      type: "International Founder",
      image: "/placeholder.svg",
      quote: "I've attended startup events worldwide, but SEF stands out for its authentic community and practical value. The connections I made led to expanding my business into the MENA region successfully.",
      impact: "Entered MENA market",
      year: "SEF 2024 Attendee",
      icon: Star,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "Omar Al-Rashid",
      title: "Policy Advisor",
      company: "Ministry of Economy",
      type: "Government",
      image: "/placeholder.svg",
      quote: "SEF provides invaluable insights into the entrepreneurship ecosystem. The discussions and connections here directly influence our policy decisions and support programs for startups.",
      impact: "Influenced policy",
      year: "SEF 2023 Attendee",
      icon: Users,
      color: "from-teal-500 to-cyan-600"
    }
  ];

  // Auto-rotation
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoplay(false);
    if (direction === 'prev') {
      setActiveIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
    } else {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Quote className="w-5 h-5 text-sheraa-sef-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            Voices from Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear from past attendees about their transformative experiences and the lasting impact 
            SEF has had on their entrepreneurial journeys.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className={`h-2 bg-gradient-to-r ${currentTestimonial.color}`} />
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Quote Section */}
                    <div className="lg:col-span-2 p-12 bg-white dark:bg-sheraa-dark">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTestimonial.color} flex items-center justify-center`}>
                          <currentTestimonial.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2 bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 text-sheraa-sef-primary border-sheraa-sef-primary/30">
                            {currentTestimonial.type}
                          </Badge>
                          <div className="text-sm text-gray-500">{currentTestimonial.year}</div>
                        </div>
                      </div>
                      
                      <Quote className="w-12 h-12 text-sheraa-sef-primary/20 mb-6" />
                      <blockquote className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                        "{currentTestimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg">{currentTestimonial.name}</div>
                          <div className="text-sheraa-sef-primary font-medium">{currentTestimonial.title}</div>
                          <div className="text-gray-500 text-sm">{currentTestimonial.company}</div>
                        </div>
                        <Badge variant="outline" className="border-green-500/30 text-green-600 bg-green-50">
                          {currentTestimonial.impact}
                        </Badge>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.color} opacity-10`} />
                      <div className="relative z-10 text-center p-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 dark:bg-gray-600 mb-6 overflow-hidden">
                          <img 
                            src={currentTestimonial.image} 
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${currentTestimonial.color} flex items-center justify-center mb-4`}>
                          <currentTestimonial.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {currentTestimonial.type} Success Story
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('prev')}
            className="w-12 h-12 rounded-full border-sheraa-sef-primary/30 hover:bg-sheraa-sef-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-sheraa-sef-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('next')}
            className="w-12 h-12 rounded-full border-sheraa-sef-primary/30 hover:bg-sheraa-sef-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeIndex ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => goToSlide(index)}
            >
              <Card className={`h-full border-2 transition-all duration-300 ${
                index === activeIndex 
                  ? 'border-sheraa-sef-primary shadow-lg' 
                  : 'border-transparent hover:border-sheraa-sef-primary/30'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center`}>
                      <testimonial.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.type}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-sef-primary/5 to-sheraa-sef-accent/5 border-sheraa-sef-primary/20">
            <CardContent className="p-12">
              <Star className="w-16 h-16 mx-auto text-sheraa-sef-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Your Success Story Starts Here</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Join thousands of entrepreneurs, investors, and innovators who have transformed 
                their businesses and careers through SEF connections and experiences.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent hover:from-sheraa-sef-primary/90 hover:to-sheraa-sef-accent/90"
              >
                Become Part of the Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFEnhancedTestimonials;
