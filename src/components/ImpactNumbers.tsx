import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

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
      value: 500,
      suffix: "+",
      title: "Startups Supported",
      description: "Empowering diverse entrepreneurs across industries",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      icon: "🚀",
      growthText: "28% growth in the last year"
    },
    {
      value: 50,
      prefix: "$",
      suffix: "M+",
      title: "Investment Secured",
      description: "Facilitating funding for innovative ventures",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      icon: "💰",
      growthText: "43% increase from previous year"
    },
    {
      value: 2500,
      suffix: "+",
      title: "Jobs Created",
      description: "Contributing to economic growth in UAE",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      icon: "👥",
      growthText: "1,100+ new jobs in 2024"
    },
    {
      value: 100,
      suffix: "+",
      title: "Global Partners",
      description: "Building a worldwide innovation network",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      icon: "🌍",
      growthText: "Expanded to 15 new countries"
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-sheraa-light text-sheraa-primary text-sm font-medium mb-4">
            Our Growing Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sheraa-dark">
            Transforming Sharjah's Future
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Through strategic initiatives, world-class mentorship programs, and vibrant community building, 
            we're nurturing innovation and driving sustainable economic growth in the region.
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
                <div className={`absolute top-0 left-0 w-full h-2 ${stat.textColor}`} />
                <CardContent className={`p-8 text-center relative ${stat.bgColor}`}>
                  <span className="text-4xl mb-4 block">{stat.icon}</span>
                  <div className={`text-5xl font-bold ${stat.textColor} mb-4`}>
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
          className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left md:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent mb-4">
                Beyond Numbers
              </h3>
              <p className="text-gray-600 mb-6">
                Our impact extends across various sectors, creating lasting change in Sharjah's entrepreneurial ecosystem.
              </p>
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
                <Link to="/about/impact" className="flex items-center gap-2">
                  View Impact Report 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { value: "30+", label: "Global Partnerships" },
                { value: "12", label: "Industry Sectors" },
                { value: "4", label: "Innovation Hubs" },
                { value: "25+", label: "Corporate Partners" },
                { value: "5K+", label: "Community Members" },
                { value: "150+", label: "Expert Mentors" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-sheraa-secondary mb-1">{item.value}</div>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
