
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, CheckCircle } from "lucide-react";

export const ProgramsHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Simplified Background */}
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
            <Rocket className="w-4 h-4 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Comprehensive Support Programs</span>
          </motion.div>

          {/* Clear Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white mb-3">Find the Right Program</span>
              <span className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                For Your Stage
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From idea validation to global scaling, we provide structured support, 
              expert guidance, and funding at every step of your journey.
            </p>
          </motion.div>

          {/* Clear Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
          >
            {[
              "Equity-free funding",
              "Expert mentorship",
              "Market access"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-sheraa-primary" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Simplified CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg font-medium shadow-lg">
              <Link to="#programs-overview" className="flex items-center gap-2">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg font-medium">
              <Link to="/eligibility">
                Find Your Fit
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
