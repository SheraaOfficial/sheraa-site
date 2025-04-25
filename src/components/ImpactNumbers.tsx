
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Counter animation for statistics
const Counter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const ImpactNumbers = () => {
  // Stats data with more detailed information
  const stats = [
    {
      value: 500,
      suffix: "+",
      title: "Startups Supported",
      description: "Empowering entrepreneurs across various industries",
      color: "from-blue-500 to-sheraa-primary"
    },
    {
      value: 50,
      prefix: "$",
      suffix: "M+",
      title: "Venture Capital Raised",
      description: "Facilitating funding for innovative ventures",
      color: "from-green-500 to-sheraa-secondary"
    },
    {
      value: 2500,
      suffix: "+",
      title: "Jobs Created",
      description: "Contributing to economic growth in Sharjah",
      color: "from-purple-500 to-pink-500"
    },
    {
      value: 100,
      suffix: "+",
      title: "Community Events",
      description: "Fostering connections and knowledge sharing",
      color: "from-orange-500 to-red-500"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sheraa-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-sheraa-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-sheraa-primary/10 blur-3xl"></div>
        <div className="absolute top-40 right-10 w-20 h-20 rounded-full bg-sheraa-secondary/20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-sheraa-light text-sheraa-primary text-sm font-medium mb-4">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-sheraa-dark">
            Transforming <span className="text-sheraa-primary">Sharjah's</span> Entrepreneurial Landscape
          </h2>
          <p className="text-lg text-gray-600">
            Through strategic initiatives, mentorship programs, and community building, 
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
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`h-2 bg-gradient-to-r ${stat.color} rounded-t-lg`}></div>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-sheraa-primary mb-4">
                    <Counter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended stats section */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-lg p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left md:col-span-1">
              <h3 className="text-2xl font-bold text-sheraa-dark mb-4">Beyond the Numbers</h3>
              <p className="text-gray-600 mb-6">Our impact extends across various sectors, creating lasting change in Sharjah's economy.</p>
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/about/impact" className="flex items-center gap-2">
                  View Impact Report <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">30+</div>
                <p className="text-gray-600 text-sm">Global Partnerships</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">12</div>
                <p className="text-gray-600 text-sm">Industry Sectors</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">4</div>
                <p className="text-gray-600 text-sm">Innovation Hubs</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">25+</div>
                <p className="text-gray-600 text-sm">Corporate Partners</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">5K+</div>
                <p className="text-gray-600 text-sm">Community Members</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-sheraa-secondary mb-1">150+</div>
                <p className="text-gray-600 text-sm">Mentors Network</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light group transition-all">
              <Link to="/about/impact" className="flex items-center gap-2">
                Learn More About Our Impact
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
