
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "./ui/animated-background";
import { TextShimmer } from "./ui/text-shimmer";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(
    () => ["Innovate", "Create", "Scale", "Transform", "Grow"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleIndex, titles]);

  return (
    <div className="relative min-h-[90vh] flex flex-col">
      <AnimatedBackground className="flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-sheraa-primary/10 px-6 py-2 rounded-full text-sheraa-primary text-sm font-medium"
            >
              Creating the Next Wave of Entrepreneurs
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-sheraa-dark mb-4">
                  Dream to
                </span>
                <div className="h-[1.2em] relative flex justify-center overflow-hidden">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-bold"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        y: titleIndex === index ? 0 : titleIndex > index ? -50 : 50,
                        opacity: titleIndex === index ? 1 : 0
                      }}
                      transition={{ type: "spring", stiffness: 50 }}
                    >
                      <TextShimmer>{title}</TextShimmer>
                    </motion.span>
                  ))}
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Sharjah's official hub for aspiring founders and established ventures. 
                We empower changemakers to build impactful businesses and shape the future.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-sheraa-primary hover:bg-sheraa-primary/90 transform transition-all group"
              >
                <Link to="/programs" className="flex items-center gap-2">
                  Launch Your Startup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light"
              >
                <Link to="/community/join">Join Our Community</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
};

export default Hero;
