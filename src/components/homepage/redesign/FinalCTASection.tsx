
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-sheraa-primary to-sheraa-teal relative overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-white">Ready to Start?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Your Success Story
            <span className="block text-yellow-300">Starts Here</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join hundreds of entrepreneurs who've turned their ideas into thriving businesses. 
            Apply today and take the first step toward your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl">
              <Link to="/programs" className="flex items-center gap-2">
                Apply to Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
              <Link to="/contact">
                Talk to Our Team
              </Link>
            </Button>
          </div>

          {/* Simple stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Free</div>
              <div className="text-sm text-white/80">Application Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2 Weeks</div>
              <div className="text-sm text-white/80">Review Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
