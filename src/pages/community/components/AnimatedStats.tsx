
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Star, Building, Award, Zap, Target } from 'lucide-react';

export const AnimatedStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    { number: "140+", label: "Ecosystem Partners", icon: Globe, color: "text-blue-600" },
    { number: "1,900+", label: "Jobs Created", icon: TrendingUp, color: "text-green-600" },
    { number: "18,000+", label: "Youth Upskilled", icon: Users, color: "text-purple-600" },
    { number: "71%", label: "Startup Survival Rate", icon: Star, color: "text-orange-600" },
    { number: "180+", label: "Startups Supported", icon: Building, color: "text-pink-600" },
    { number: "$248M+", label: "Revenue Generated", icon: Award, color: "text-indigo-600" },
    { number: "52%", label: "Women-Led Startups", icon: Zap, color: "text-emerald-600" },
    { number: "$171M+", label: "Capital Raised", icon: Target, color: "text-red-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark/30 dark:to-sheraa-dark/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
            Impact That Speaks Volumes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-secondary/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent mb-2 relative z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: "backOut" }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-gray-600 dark:text-gray-400 font-medium relative z-10">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
