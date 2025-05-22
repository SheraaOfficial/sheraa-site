
import React from "react";
import StartupsShowcase from "../StartupsShowcase";
import ImpactNumbers from "../ImpactNumbers";
import ProgramsOverview from "../ProgramsOverview";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FirstPriorityComponents: React.FC = () => {
  return (
    <>
      {/* Impact Numbers with enhanced animation */}
      <section className="py-20 bg-white dark:bg-sheraa-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact That Speaks Volumes</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem. 
              Our commitment translates into tangible results.
            </p>
          </motion.div>
          
          <ImpactNumbers />
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/about/impact" className="flex items-center">
                Read Our Latest Impact Report 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Programs Overview section */}
      <section className="py-20 bg-sheraa-light/30 dark:bg-sheraa-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey Starts Here</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed 
              to meet you where you are on your entrepreneurial path.
            </p>
          </motion.div>
          
          <ProgramsOverview />
        </div>
      </section>
      
      {/* Startups showcase with enhanced presentation */}
      <section className="py-20 bg-white dark:bg-sheraa-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Entrepreneurs</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the innovative startups and ambitious founders shaping the future through Sheraa's ecosystem.
            </p>
          </motion.div>
          
          <StartupsShowcase />
          
          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg" className="group">
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
