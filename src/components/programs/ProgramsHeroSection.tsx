
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, Rocket, Sparkles } from "lucide-react";

export const ProgramsHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sheraa-light/30 to-blue-50/40 dark:from-sheraa-dark dark:to-black">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-sheraa-teal/20 to-sheraa-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Users, Award, Globe, Sparkles].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-sheraa-primary/30"
            style={{
              left: `${15 + index * 20}%`,
              top: `${15 + index * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-sheraa-dark/90 rounded-full border border-sheraa-primary/30 shadow-lg backdrop-blur-sm"
            >
              <Rocket className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-semibold text-sheraa-primary">Comprehensive Program Pathway</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="block text-sheraa-dark dark:text-white mb-2">Your Entrepreneurial</span>
                <span className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent animate-pulse">
                  Journey
                </span>
                <span className="block text-sheraa-dark dark:text-white">Empowered by Sheraa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              >
                From validating your initial idea to scaling globally, Sheraa offers a suite of programs 
                designed to meet you where you are on your entrepreneurial path with structured support, 
                expert guidance, and access to critical resources.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="#programs-overview" className="flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                <Link to="/eligibility">
                  Find Your Perfect Fit
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="aspect-square relative">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-sheraa-primary/30 to-sheraa-teal/30 shadow-2xl backdrop-blur-sm border border-white/20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-sheraa-primary/20 to-transparent rounded-3xl" />
                
                {/* Enhanced Floating Program Cards */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-sheraa-dark p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-sheraa-primary mb-1">S3</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Incubator</div>
                  <div className="text-xs text-sheraa-teal font-semibold">$30k Funding</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [8, -8, 8], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-sheraa-dark p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-sheraa-teal mb-1">ASC</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Challenge</div>
                  <div className="text-xs text-sheraa-primary font-semibold">Market Access</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-sheraa-dark p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-2xl font-bold text-sheraa-primary mb-1">180+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Startups</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-sheraa-primary/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1.5 h-3 bg-sheraa-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
