
import React from "react";
import StartupsShowcase from "../StartupsShowcase";
import ImpactNumbers from "../ImpactNumbers";
import ProgramsOverview from "../ProgramsOverview";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Award, Globe, Rocket, Star, Zap } from "lucide-react";

export const EnhancedFirstPriorityComponents: React.FC = () => {
  return (
    <>
      {/* Enhanced Impact Numbers Section */}
      <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sheraa-orange/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sheraa-teal/5 rounded-full blur-3xl" />
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
              <span className="text-sm font-medium text-sheraa-primary">Proven Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Impact That Speaks Volumes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem. 
              Our commitment translates into <span className="font-semibold text-sheraa-primary">tangible results</span>.
            </p>
          </motion.div>
          
          <ImpactNumbers />
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="group border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 shadow-lg">
              <Link to="/about/impact" className="flex items-center gap-2">
                Read Our Latest Impact Report 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Enhanced Programs Overview Section */}
      <section className="py-24 bg-white dark:bg-sheraa-dark/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,51,102,0.15)_1px,transparent_0)] [background-size:50px_50px]" />
        </div>
        
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
              <span className="text-sm font-medium text-sheraa-primary">Your Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed 
              to meet you where you are on your <span className="font-semibold text-sheraa-primary">entrepreneurial path</span>.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <ProgramsOverview />
          </div>
          
          {/* Enhanced Why Choose Sheraa Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <motion.div 
              className="relative bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-3xl p-8 md:p-12 border border-sheraa-primary/10 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sheraa-orange/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                    Why Choose Sheraa?
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Join an ecosystem designed for your success
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "Founder-First Approach",
                      description: "Equity-free support and resources tailored to your needs",
                      color: "sheraa-primary"
                    },
                    {
                      icon: Globe,
                      title: "Powerful Network",
                      description: "Access to mentors, investors, and partners across the region",
                      color: "sheraa-teal"
                    },
                    {
                      icon: Star,
                      title: "Sharjah Advantage",
                      description: "Strategic location and business-friendly environment",
                      color: "sheraa-orange"
                    },
                    {
                      icon: Zap,
                      title: "Stage-Specific Support",
                      description: "Programs designed for every step of your journey",
                      color: "sheraa-primary"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="group p-6 rounded-2xl bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
              <Link to="/programs" className="flex items-center gap-2">
                Explore All Programs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Enhanced Startups Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/20 dark:from-sheraa-dark/50 dark:via-sheraa-dark/30 dark:to-sheraa-dark/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-40 h-40 bg-sheraa-teal/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-10 w-56 h-56 bg-sheraa-orange/15 rounded-full blur-3xl" />
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
              <Star className="w-5 h-5 text-sheraa-teal" />
              <span className="text-sm font-medium text-sheraa-teal">Our Community</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Meet Our Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the innovative startups and ambitious founders shaping the future through 
              <span className="font-semibold text-sheraa-primary"> Sheraa's ecosystem</span>.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <StartupsShowcase />
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
              <Link to="/community/startups" className="flex items-center gap-2">
                View All Startups
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
