
import React from "react";
import ImpactNumbers from "../ImpactNumbers";
import ProgramsOverview from "../ProgramsOverview";
import StartupsShowcase from "../StartupsShowcase";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Rocket, Star, Users, Globe, CheckCircle, Zap, Target, Lightbulb, Calendar, MessageCircle, Coffee, Handshake, BookOpen, TrendingUp } from "lucide-react";

export const HomepageCore: React.FC = () => {
  return (
    <>
      {/* Impact at Scale Section */}
      <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sheraa-orange/10 rounded-full blur-xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 mb-6">
              <Award className="w-5 h-5 text-sheraa-orange" />
              <span className="text-sm font-medium text-sheraa-primary">Impact That Speaks Volumes</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Where Potential Meets Opportunity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Since 2016, we've built Sharjah's most dynamic entrepreneurship ecosystem. Our numbers tell the story, 
              but our founders write the future.
            </p>
            
            <ImpactNumbers />
          </motion.div>
        </div>
      </section>
      
      {/* Your Entrepreneurial Journey Section */}
      <section className="py-24 bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/20 dark:from-sheraa-dark/50 dark:via-sheraa-dark/30 dark:to-sheraa-dark/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Rocket className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Your Journey Starts Here</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Programs Tailored for Growth
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              From validating your initial idea to scaling globally, we meet you exactly where you are 
              and help you reach where you want to be.
            </p>
            
            <ProgramsOverview />
          </motion.div>

          {/* The Sheraa Advantage */}
          <motion.div 
            className="relative bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-3xl p-12 border border-sheraa-primary/10 backdrop-blur-sm overflow-hidden mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sheraa-orange/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Why Choose Sheraa?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're not just another accelerator - we're your long-term growth partner with proven results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Founder-First",
                  description: "Equity-free programs with revenue-sharing models that keep you in control",
                  stat: "$30K funding"
                },
                {
                  icon: Users,
                  title: "Deep Network",
                  description: "140+ partners including government, corporates, and 30+ expert mentors",
                  stat: "140+ partners"
                },
                {
                  icon: Globe,
                  title: "Sharjah Gateway",
                  description: "Strategic location connecting MENA, Asia, and global markets",
                  stat: "3 continents"
                },
                {
                  icon: Lightbulb,
                  title: "Sector Focus",
                  description: "Deep expertise in Sustainability, EdTech, Creative Industries, and DeepTech",
                  stat: "4 specialties"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="group text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-sheraa-dark/80 border border-sheraa-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-sheraa-primary" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                  <span className="text-xs font-bold text-sheraa-orange bg-sheraa-orange/10 px-3 py-1 rounded-full">
                    {item.stat}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/30 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-teal/10 border border-sheraa-teal/20 mb-6">
              <Star className="w-5 h-5 text-sheraa-teal" />
              <span className="text-sm font-medium text-sheraa-teal">Innovation in Action</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Meet Tomorrow's Changemakers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              From AI revolutionizing healthcare to sustainable solutions tackling climate change - 
              our 180+ portfolio companies are building the future, today.
            </p>
            
            <StartupsShowcase />
          </motion.div>
        </div>
      </section>

      {/* Community Ecosystem */}
      <section className="py-24 bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/20 dark:from-sheraa-dark/50 dark:via-sheraa-dark/30 dark:to-sheraa-dark/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Powered by Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
              Connect with founders, access resources, attend events, and become part of Sharjah's most vibrant innovation community.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Calendar,
                  title: "SEF 2026",
                  description: "The region's largest entrepreneurship festival with 14,000+ attendees and 300+ speakers",
                  link: "/events/sef-landing",
                  badge: "Jan 31-Feb 1",
                  highlight: "Register Now"
                },
                {
                  icon: Coffee,
                  title: "Weekly Events",
                  description: "Founder Fridays, workshops, pitch sessions, and networking mixers every week",
                  link: "/events/upcoming",
                  badge: "Every Friday",
                  highlight: "4PM at SRTIP"
                },
                {
                  icon: BookOpen,
                  title: "Expert Resources",
                  description: "50+ templates, 30+ mentors, and continuous learning resources for your journey",
                  link: "/resources",
                  badge: "Free Access",
                  highlight: "Always Updated"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link to={item.link}>
                    <div className="relative p-8 rounded-2xl bg-white/90 dark:bg-sheraa-dark/80 border border-gray-200 dark:border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-sheraa-orange/10 text-sheraa-orange rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      
                      <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-sheraa-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="text-sm font-medium text-sheraa-teal bg-sheraa-teal/10 px-3 py-1 rounded-full inline-block mb-4">
                        {item.highlight}
                      </div>
                      
                      <div className="flex items-center text-sm font-medium text-sheraa-primary group-hover:text-sheraa-primary/80">
                        Learn More 
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Users className="w-4 h-4" />
                </Link>
              </GradientButton>
              
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/community/partnerships" className="flex items-center gap-2">
                  Become a Partner
                  <Handshake className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-sheraa-primary via-sheraa-primary/90 to-sheraa-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Future Starts Now
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join 18,000+ entrepreneurs who chose Sheraa as their launchpad. Whether you're a student with a spark 
              or a CEO ready to scale - <span className="font-semibold">this is where potential meets opportunity</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                asChild 
                size="xl" 
                className="bg-white text-sheraa-primary hover:bg-white/90 shadow-2xl"
              >
                <Link to="/eligibility" className="flex items-center gap-2">
                  Find Your Program
                  <Zap className="w-5 h-5" />
                </Link>
              </GradientButton>
              
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start the Conversation
                  <MessageCircle className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
