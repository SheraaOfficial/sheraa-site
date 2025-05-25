
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Zap, MessageCircle } from "lucide-react";

export const FinalCallToActionSection: React.FC = () => {
  return (
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
  );
};
