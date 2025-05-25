
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Award, Globe, MessageCircle, BookOpen, Coffee, Handshake, Target } from "lucide-react";

export const HomepageSecondary: React.FC = () => {
  return (
    <>
      {/* Community & Events Section */}
      <section className="py-24 bg-white dark:bg-sheraa-dark/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,rgba(0,51,102,0.1)_12%,rgba(0,51,102,0.1)_14%,transparent_14%,transparent_36%,rgba(0,128,128,0.1)_36%,rgba(0,128,128,0.1)_38%,transparent_38%)] [background-size:60px_60px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-orange/10 border border-sheraa-orange/20 mb-6">
              <Users className="w-5 h-5 text-sheraa-orange" />
              <span className="text-sm font-medium text-sheraa-orange">Community & Events</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Powered by Community, Strengthened by Partnership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Entrepreneurship thrives in collaboration. Connect with a vibrant network of founders, mentors, 
              investors, and industry leaders dedicated to fostering innovation in Sharjah.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Calendar,
                title: "SEF 2026",
                description: "Experience the region's premier entrepreneurship festival with 14,000+ attendees",
                link: "/events/sef-landing",
                color: "sheraa-primary",
                badge: "Jan 31-Feb 1",
                highlight: "300+ Global Speakers"
              },
              {
                icon: MessageCircle,
                title: "Founder Community",
                description: "Connect with like-minded entrepreneurs, mentors, and ecosystem partners",
                link: "/community/join",
                color: "sheraa-teal",
                badge: "180+ Startups",
                highlight: "52% Women-Led"
              },
              {
                icon: Coffee,
                title: "Networking Events",
                description: "Join weekly meetups, workshops, pitch sessions, and community gatherings",
                link: "/events/upcoming",
                color: "sheraa-orange",
                badge: "Every Friday",
                highlight: "4PM at Sheraa HQ"
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
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark/80 dark:to-sheraa-dark/60 border border-gray-200 dark:border-sheraa-primary/20 hover:border-sheraa-primary/30 dark:hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium bg-${item.color}/10 text-${item.color} rounded-full`}>
                        {item.badge}
                      </span>
                    </div>
                    
                    <div className={`w-14 h-14 rounded-full bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
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

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Users className="w-4 h-4" />
                </Link>
              </GradientButton>
              
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/community/partnerships" className="flex items-center gap-2">
                  Partnership Opportunities
                  <Handshake className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Support Section */}
      <section className="py-24 bg-gradient-to-br from-sheraa-light/20 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sheraa-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sheraa-orange/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-teal/10 border border-sheraa-teal/20 mb-6">
              <BookOpen className="w-5 h-5 text-sheraa-teal" />
              <span className="text-sm font-medium text-sheraa-teal">Knowledge & Tools</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Your Entrepreneurial Toolkit
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Access practical guides, expert advisory services, and insights designed to help you navigate 
              the challenges and opportunities of building your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Guides & Toolkits",
                description: "Practical templates, checklists, and step-by-step guides for business success",
                link: "/resources/guides",
                count: "50+ Resources",
                icon: Target
              },
              {
                title: "Advisory Services",
                description: "Connect with 30+ experienced mentors and subject matter experts",
                link: "/resources/advisory",
                count: "30+ Experts",
                icon: Users
              },
              {
                title: "Articles & Insights",
                description: "Latest trends, best practices, and success stories from our ecosystem",
                link: "/resources/articles",
                count: "Weekly Updates",
                icon: BookOpen
              },
              {
                title: "Impact Reports",
                description: "Discover our collective achievements and ecosystem growth metrics",
                link: "/resources/impact-reports",
                count: "Annual Reports",
                icon: Award
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
                  <div className="p-6 rounded-xl bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-gray-200 dark:border-sheraa-primary/20 hover:border-sheraa-primary/30 dark:hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sheraa-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-sheraa-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-lg">
              <Link to="/resources" className="flex items-center gap-2">
                Explore All Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-sheraa-primary via-sheraa-primary/90 to-sheraa-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Idea Into Reality?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join thousands of entrepreneurs who have chosen Sheraa as their partner in building 
              the future. Your journey to success starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                asChild 
                size="xl" 
                className="bg-white text-sheraa-primary hover:bg-white/90 shadow-2xl"
              >
                <Link to="/eligibility" className="flex items-center gap-2">
                  Find Your Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GradientButton>
              
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
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
