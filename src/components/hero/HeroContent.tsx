import React, { useMemo } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { TextRotate } from "@/components/ui/text-rotate";
import { Badge } from "@/components/ui/badge";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
export function HeroContent() {
  const {
    isMobile
  } = useDeviceDetection();

  // Memoize animation variants to prevent recreation on each render
  const badgeVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.2
    }
  }), []);
  const titleVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.3
    }
  }), []);
  const descriptionVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.5
    }
  }), []);
  return <div className="flex flex-col justify-center items-center w-[90%] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto mx-auto bg-[sheraa-background-soft] bg-inherit">
      {/* Festival Badge */}
      <motion.div initial={badgeVariants.initial} animate={badgeVariants.animate} transition={badgeVariants.transition} className="">
        <Badge variant="gradient-warm" size={isMobile ? "default" : "lg"} animation="float" className="py-0 mx-0 rounded-full my-[30px] bg-sheraa-primary">
          Sharjah Entrepreneurship Center
        </Badge>
      </motion.div>
      
      <motion.h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-3" initial={titleVariants.initial} animate={titleVariants.animate} transition={titleVariants.transition}>
        <span className="text-5xl">Creating the</span>
        <LayoutGroup>
          <motion.span layout className="flex whitespace-pre">
            <motion.span layout transition={{
            type: "spring",
            damping: 30,
            stiffness: 400
          }} className="flex whitespace-pre text-3xl">
              Next Wave of{" "}
            </motion.span>
            <TextRotate texts={["Entrepreneurs", "Innovators", "Changemakers", "Creators", "Leaders", "Visionaries", "Founders", "Trailblazers"]} mainClassName="overflow-hidden pr-3 text-sheraa-primary py-0 pb-2 md:pb-3 rounded-xl" staggerDuration={0.03} staggerFrom="last" rotationInterval={3000} transition={{
            type: "spring",
            damping: 30,
            stiffness: 400
          }} />
          </motion.span>
        </LayoutGroup>
      </motion.h1>
      
      <motion.p initial={descriptionVariants.initial} animate={descriptionVariants.animate} transition={descriptionVariants.transition} className="text-xs sm:text-sm md:text-lg xl:text-2xl text-center pt-3 sm:pt-4 md:pt-6 lg:pt-6 max-w-2xl mx-auto font-medium text-sheraa-primary md:px-[130px] lg:text-sm py-0 px-[59px]">
        Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.
      </motion.p>

      <HeroCTA />
    </div>;
}
function HeroCTA() {
  const {
    isMobile
  } = useDeviceDetection();

  // Memoize animation variants
  const buttonVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.7
    },
    whileHover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400
      }
    }
  }), []);
  return <div className="my-[65px] py-0">
      <motion.div initial={buttonVariants.initial} animate={buttonVariants.animate} transition={buttonVariants.transition} whileHover={buttonVariants.whileHover} className="my-[25px]">
        <GradientButton asChild className="w-full sm:w-auto">
          <Link to="/programs">Launch Your Startup</Link>
        </GradientButton>
      </motion.div>
      
      <motion.div initial={buttonVariants.initial} animate={buttonVariants.animate} transition={{
      ...buttonVariants.transition,
      delay: 0.8
    }} whileHover={buttonVariants.whileHover} className="w-full sm:w-auto">
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link to="/community">Join Our Community</Link>
        </Button>
      </motion.div>
    </div>;
}