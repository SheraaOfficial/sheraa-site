
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Glow } from "./ui/glow";
import { TextShimmer } from "./ui/text-shimmer";
import { Badge } from "./ui/badge";
import ParticleBackground from "./ParticleBackground";
import { BorderBeam } from "./ui/border-beam";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => ["Innovate", "Create", "Scale", "Transform", "Grow"], []);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleIndex(prev => prev === titles.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleIndex, titles]);
  
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background text-foreground py- sm:py-24 px-4 rounded-lg md:py-[125px] py-[63px]">
      <ParticleBackground />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 relative">
          <BorderBeam 
            size={300} 
            duration={20} 
            colorFrom="#003366" 
            colorTo="#008080" 
            borderWidth={2} 
            delay={5} 
          />
          
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }}
          >
            <Badge variant="outline" className="animate-appear gap-2">
              Creating the Next Wave of Entrepreneurs
              <ArrowRight className="h-3 w-3" />
            </Badge>
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
                    initial={{
                      opacity: 0,
                      y: 50
                    }} 
                    animate={{
                      y: titleIndex === index ? 0 : titleIndex > index ? -50 : 50,
                      opacity: titleIndex === index ? 1 : 0
                    }} 
                    transition={{
                      type: "spring",
                      stiffness: 50
                    }}
                  >
                    <TextShimmer>{title}</TextShimmer>
                  </motion.span>
                ))}
              </div>
            </h1>

            <motion.p 
              initial={{
                opacity: 0,
                y: 20
              }} 
              animate={{
                opacity: 1,
                y: 0
              }} 
              transition={{
                delay: 0.2
              }} 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower changemakers to build impactful businesses and shape the future.
            </motion.p>
          </div>

          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.3
            }} 
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
              <Link to="/programs" className="flex items-center gap-2">
                Launch Your Startup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light">
              <Link to="/community/join">Join Our Community</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
    </section>
  );
};

export default Hero;
