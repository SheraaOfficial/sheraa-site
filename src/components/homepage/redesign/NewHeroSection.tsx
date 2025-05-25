
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle, Play } from "lucide-react";

export const NewHeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const floatingElements = [
    { delay: 0, x: "10%", y: "20%" },
    { delay: 0.2, x: "80%", y: "10%" },
    { delay: 0.4, x: "20%", y: "80%" },
    { delay: 0.6, x: "90%", y: "70%" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Animated Background Elements */}
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
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-sheraa-primary/20 rounded-full"
            style={{
              left: element.x,
              top: element.y,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
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
              Sharjah's Official Entrepreneurship Hub
            </span>
          </motion.div>

          {/* Main Title with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                className="block text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Turn Your Idea Into
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                A Thriving Business
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Get funding, mentorship, and market access in Sharjah's most supportive startup ecosystem. 
              From first idea to global success.
            </motion.p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
          >
            {[
              "Equity-free funding",
              "Expert mentorship", 
              "Market access"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
              >
                <CheckCircle className="w-5 h-5 text-sheraa-primary" />
                <span className="font-medium">{benefit}</span>
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
                <Link to="/programs" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg font-semibold">
                <Link to="/community/startups" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  See Success Stories
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
          >
            {[
              { number: "180+", label: "Startups Funded", delay: 0 },
              { number: "$248M", label: "Revenue Generated", delay: 0.1 },
              { number: "1,900+", label: "Jobs Created", delay: 0.2 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + stat.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-sheraa-primary mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2 + stat.delay, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-sheraa-primary/40 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2" 
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
