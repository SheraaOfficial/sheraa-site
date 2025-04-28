import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextShimmer } from "./ui/text-shimmer";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "./ui/glowing-stars-card";
const Counter = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  startOnView = true,
  className = ""
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, {
    once: true,
    margin: "-100px"
  });
  const shouldStart = startOnView ? isInView : true;
  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);
  return <TextShimmer className={`font-display ${className}`} ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </TextShimmer>;
};
const ImpactNumbers = () => {
  const isMobile = useIsMobile();
  const stats = [{
    value: 180,
    suffix: "+",
    title: "Startups",
    description: isMobile ? "Supported" : "Building impactful ventures across sectors",
    growthText: "52% women-led"
  }, {
    value: 248,
    prefix: "$",
    suffix: "M+",
    title: "Revenue",
    description: isMobile ? "Generated" : "By our portfolio companies",
    growthText: "71% survival rate"
  }, {
    value: 1900,
    suffix: "+",
    title: "Jobs",
    description: isMobile ? "Created" : "Contributing to economic growth",
    growthText: "Regional impact"
  }, {
    value: 140,
    suffix: "+",
    title: "Partners",
    description: isMobile ? "Connected" : "Strong network of collaborators",
    growthText: "18k+ youth trained"
  }];
  return <section className="py-16 md:py-24 lg:py-32 bg-sheraa-background-DEFAULT relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent">
            Creating Lasting Change
          </h2>
          {!isMobile && <p className="text-gray-600 leading-relaxed">
              We measure our success through the achievements of our founders and ecosystem growth.
            </p>}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: index * 0.1
        }}>
              <GlowingStarsBackgroundCard className="h-full">
                <div className="flex flex-col items-center text-center space-y-3 pt-4 mx-0 bg-transparent py-0">
                  <div className="text-5xl md:text-6xl font-bold text-sheraa-primary">
                    <Counter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} className="text-sheraa-primary" />
                  </div>
                  <GlowingStarsTitle className="mt-2">{stat.title}</GlowingStarsTitle>
                  <GlowingStarsDescription>{stat.description}</GlowingStarsDescription>
                  <div className="inline-flex items-center text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mt-2">
                    <span>{stat.growthText}</span>
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>)}
        </div>

        <motion.div className="mt-12 md:mt-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
            <Link to="/about/impact" className="flex items-center gap-2">
              View Impact Report 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default ImpactNumbers;