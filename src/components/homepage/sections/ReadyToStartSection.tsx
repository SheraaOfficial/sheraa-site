
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Clock, Heart } from "lucide-react";

export const ReadyToStartSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sheraa-primary via-sheraa-primary/90 to-sheraa-teal text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start?
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 opacity-90">
            Your Success Story Starts Here
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join hundreds of entrepreneurs who've turned their ideas into thriving businesses. 
            Apply today and take the first step toward your future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-sheraa-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <Link to="/programs" className="flex items-center gap-2">
              Apply to Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Talk to Our Team
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold mb-2">Free</div>
            <div className="text-sm opacity-80">Application Process</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold mb-2">2 Weeks</div>
            <div className="text-sm opacity-80">Review Time</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
