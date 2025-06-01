
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, MessageCircle, Calendar } from "lucide-react";

export const ProgramsCTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Idea into Reality?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful entrepreneurs who started their journey with Sheraa. 
            Your success story begins with the first step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-sheraa-primary hover:bg-gray-100"
              asChild
            >
              <Link to="/eligibility" className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Find My Perfect Program
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/events/upcoming" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Attend Our Events
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>🚀 Over 180 startups launched • 💰 $248M+ revenue generated • 🎯 71% success rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
