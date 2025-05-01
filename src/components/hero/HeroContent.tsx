
import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { TextRotate } from "@/components/ui/text-rotate";
import { Badge } from "@/components/ui/badge";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto mx-auto">
      {/* Festival Badge */}
      <motion.div
        className="mb-6" 
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      >
        <Badge 
          variant="gradient-warm" 
          size="lg" 
          animation="float" 
          className="py-1.5 px-4 text-sm"
        >
          Sharjah Entrepreneurship Festival
        </Badge>
      </motion.div>
      
      <motion.h1
        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-4"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
      >
        <span>Making your </span>
        <LayoutGroup>
          <motion.span layout className="flex whitespace-pre">
            <motion.span
              layout
              className="flex whitespace-pre"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              startup{" "}
            </motion.span>
            <TextRotate
              texts={[
                "innovative",
                "successful",
                "sustainable ♥",
                "global",
                "🚀 scalable",
                "impactful",
                "profitable",
                "💡 transformative",
                "grow 🌱",
                "🔥 disruptive",
                "unique",
                "thrive ✨",
              ]}
              mainClassName="overflow-hidden pr-3 text-sheraa-primary py-0 pb-2 md:pb-4 rounded-xl"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </motion.span>
        </LayoutGroup>
      </motion.h1>
      
      <motion.p
        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
      >
        Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.
      </motion.p>

      <HeroCTA />
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.7,
          scale: { duration: 0.2 },
        }}
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", damping: 30, stiffness: 400 },
        }}
      >
        <GradientButton asChild>
          <Link to="/programs">Launch Your Startup</Link>
        </GradientButton>
      </motion.div>
      
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.7,
          scale: { duration: 0.2 },
        }}
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", damping: 30, stiffness: 400 },
        }}
      >
        <Button variant="outline" asChild>
          <Link to="/community">Join Our Community</Link>
        </Button>
      </motion.div>
    </div>
  );
}
