
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const NewHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sheraa-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Clean Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-sheraa-dark/80 rounded-full border border-sheraa-primary/20 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Sharjah's Official Entrepreneurship Hub</span>
          </motion.div>

          {/* Cleaner Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white mb-3">Turn Your Idea Into</span>
              <span className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                A Thriving Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From first idea to global success. Get funding, mentorship, and market access 
              in Sharjah's most supportive startup ecosystem.
            </p>
          </motion.div>

          {/* Simplified CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg font-medium shadow-lg">
              <Link to="/programs" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg font-medium">
              <Link to="/community/startups">
                See Success Stories
              </Link>
            </Button>
          </motion.div>

          {/* Clean Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-primary mb-1">180+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Startups Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-primary mb-1">$248M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-primary mb-1">1,900+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Jobs Created</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
