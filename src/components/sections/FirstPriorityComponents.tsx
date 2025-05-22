
import React from "react";
import StartupsShowcase from "../StartupsShowcase";
import ImpactNumbers from "../ImpactNumbers";
import ProgramsOverview from "../ProgramsOverview";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export const FirstPriorityComponents: React.FC = () => {
  return (
    <>
      {/* Impact Numbers with enhanced animation */}
      <section className="py-24 bg-gradient-to-b from-white to-sheraa-light/30 dark:from-sheraa-dark/30 dark:to-sheraa-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">Impact That Speaks Volumes</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem. 
              Our commitment translates into tangible results.
            </p>
          </motion.div>
          
          <ImpactNumbers />
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="group border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
              <Link to="/about/impact" className="flex items-center">
                Read Our Latest Impact Report 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Programs Overview section with enhanced visual design */}
      <section className="py-24 bg-white dark:bg-sheraa-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">Your Journey Starts Here</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed 
              to meet you where you are on your entrepreneurial path.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <ProgramsOverview />
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 rounded-2xl p-8 border border-sheraa-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Sheraa?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sheraa-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Founder-First Approach</h4>
                    <p className="text-gray-600 dark:text-gray-400">Equity-free support and resources tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sheraa-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Powerful Network</h4>
                    <p className="text-gray-600 dark:text-gray-400">Access to mentors, investors, and partners across the region</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sheraa-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Sharjah Advantage</h4>
                    <p className="text-gray-600 dark:text-gray-400">Strategic location and business-friendly environment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sheraa-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Stage-Specific Support</h4>
                    <p className="text-gray-600 dark:text-gray-400">Programs designed for every step of your journey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/programs" className="flex items-center">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Startups showcase with enhanced presentation */}
      <section className="py-24 bg-gradient-to-b from-sheraa-light/30 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">Meet Our Entrepreneurs</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              Discover the innovative startups and ambitious founders shaping the future through Sheraa's ecosystem.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <StartupsShowcase />
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="default" size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/community/startups" className="flex items-center">
                View All Startups
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
