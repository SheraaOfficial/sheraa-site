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
      color: "from-blue-500/20 to-sheraa-primary/20",
      icon: Award,
      growthText: "52% women-led startups"
    },
    {
      value: 248,
      prefix: "$",
      suffix: "M+",
      title: "Revenue Generated",
      description: "By our portfolio companies",
      color: "from-green-500/20 to-sheraa-secondary/20",
      icon: Building,
      growthText: "71% startup survival rate"
    },
    {
      value: 1900,
      suffix: "+",
      title: "Jobs Created",
      description: "Contributing to economic growth",
      color: "from-purple-500/20 to-pink-500/20",
      icon: Users,
      growthText: "Across UAE and beyond"
    },
    {
      value: 140,
      suffix: "+",
      title: "Ecosystem Partners",
      description: "Strong network of collaborators",
      color: "from-orange-500/20 to-red-500/20",
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
    <section className="py-24 bg-gradient-to-b from-white to-sheraa-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-sheraa-secondary/10 to-transparent blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-40 right-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tl from-sheraa-primary/10 to-transparent blur-3xl"
        />
        <div className="absolute top-60 right-40 w-20 h-20 rounded-full bg-gradient-to-br from-sheraa-secondary/20 to-transparent blur-xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-sheraa-light text-sheraa-primary text-sm font-medium mb-4">
            Our Impact in Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent">
            Creating Lasting Change
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
              <Card className="relative border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${stat.color} opacity-50`} />
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary rounded-t-lg" />
                <CardContent className="p-8 text-center relative">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-sheraa-primary" />
                  <div className="text-5xl font-bold text-sheraa-primary mb-4">
                    <Counter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
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
