import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users, Building, Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextShimmer } from "./ui/text-shimmer";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
const Counter = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  startOnView = true
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
  return <TextShimmer className="font-display" ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </TextShimmer>;
};
const ImpactNumbers = () => {
  const isMobile = useIsMobile();
  
  const stats = [
    {
      value: 180,
      suffix: "+",
      title: "Startups",
      description: isMobile ? "Supported" : "Building impactful ventures across sectors",
      colors: ["#FED700", "#FFE55C", "#FFB800"],
      icon: Award,
      growthText: "52% women-led"
    },
    {
      value: 248,
      prefix: "$",
      suffix: "M+",
      title: "Revenue",
      description: isMobile ? "Generated" : "By our portfolio companies",
      colors: ["#FFB800", "#FED700", "#FFE55C"],
      icon: Building,
      growthText: "71% survival rate"
    },
    {
      value: 1900,
      suffix: "+",
      title: "Jobs",
      description: isMobile ? "Created" : "Contributing to economic growth",
      colors: ["#FFE55C", "#FFB800", "#FED700"],
      icon: Users,
      growthText: "Regional impact"
    },
    {
      value: 140,
      suffix: "+",
      title: "Partners",
      description: isMobile ? "Connected" : "Strong network of collaborators",
      colors: ["#FED700", "#FFB800", "#FFE55C"],
      icon: Briefcase,
      growthText: "18k+ youth trained"
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-sheraa-background-DEFAULT relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent">
            Creating Lasting Change
          </h2>
          {!isMobile && (
            <p className="text-gray-600 leading-relaxed">
              We measure our success through the achievements of our founders and ecosystem growth.
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden rounded-xl border-none shadow-lg">
                <AnimatedGradient colors={stat.colors} speed={8} blur="medium" />
                <div className="relative z-10 p-4 md:p-6 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-sheraa-primary" />
                  <div className="text-4xl md:text-5xl font-bold text-sheraa-dark mb-2">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-sheraa-dark">{stat.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{stat.description}</p>
                  
                  <div className="inline-flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>{stat.growthText}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild size="sm" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
            <Link to="/about/impact" className="flex items-center gap-2">
              View Impact Report 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
