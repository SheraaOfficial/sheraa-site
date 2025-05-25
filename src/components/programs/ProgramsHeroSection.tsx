
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, CheckCircle, Sparkles } from "lucide-react";

export const ProgramsHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sheraa-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-sheraa-dark/90 rounded-full border border-sheraa-primary/20 shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-sheraa-primary" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Comprehensive Support Programs
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                className="block text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Find the Perfect Program
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                For Your Journey
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Whether you're a student with a spark or a startup ready to scale, 
              we provide structured support, expert guidance, and funding at every step.
            </motion.p>
          </motion.div>

          {/* Enhanced Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          >
            {[
              { text: "Equity-free funding", desc: "Keep 100% ownership" },
              { text: "Expert mentorship", desc: "30+ seasoned professionals" },
              { text: "Market access", desc: "Direct partner connections" }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-6 h-6 text-sheraa-primary" />
                <span className="font-semibold text-gray-900 dark:text-white">{benefit.text}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
                <Link to="#programs-overview" className="flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg font-semibold">
                <Link to="/eligibility">
                  Find Your Fit
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Success Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 dark:border-gray-700 max-w-3xl mx-auto"
          >
            {[
              { number: "71%", label: "Success Rate", desc: "5-year survival" },
              { number: "180+", label: "Startups", desc: "Supported to date" },
              { number: "$248M", label: "Revenue", desc: "Generated by alumni" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + (index * 0.1), duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-sheraa-primary mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2 + (index * 0.1), duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{stat.label}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
