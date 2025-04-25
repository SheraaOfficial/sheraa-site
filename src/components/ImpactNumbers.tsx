import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users, Building, Briefcase } from "lucide-react";

const Counter = ({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  startOnView = true 
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  const shouldStart = startOnView ? isInView : true;

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime = null;
    const easeOutExpo = t => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t);
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return (
    <span className="font-display" ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactNumbers = () => {
  const stats = [
    {
      value: 180,
      suffix: "+",
      title: "Startups Supported",
      description: "Building impactful ventures across sectors",
      icon: Award,
      growthText: "52% women-led startups"
    },
    {
      value: 248,
      prefix: "$",
      suffix: "M+",
      title: "Revenue Generated",
      description: "By our portfolio companies",
      icon: Building,
      growthText: "71% startup survival rate"
    },
    {
      value: 1900,
      suffix: "+",
      title: "Jobs Created",
      description: "Contributing to economic growth",
      icon: Users,
      growthText: "Across UAE and beyond"
    },
    {
      value: 140,
      suffix: "+",
      title: "Ecosystem Partners",
      description: "Strong network of collaborators",
      icon: Briefcase,
      growthText: "18,000+ youth upskilled"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sheraa-dark">
            Impact That Speaks Volumes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We measure our success through the achievements of our founders and the growth of Sharjah's innovation ecosystem.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-6 text-sheraa-primary" />
                  <div className="text-6xl font-black text-sheraa-dark mb-6">
                    <Counter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-sheraa-dark">{stat.title}</h3>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  
                  <div className="flex items-center justify-center text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>{stat.growthText}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
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
