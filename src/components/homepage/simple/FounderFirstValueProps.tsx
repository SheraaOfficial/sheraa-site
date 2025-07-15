import React from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Globe, Users } from 'lucide-react';

const FounderFirstValueProps: React.FC = () => {
  const valueProps = [
    {
      icon: Heart,
      title: 'Founder-First Approach',
      subtitle: 'Tailored programs designed by entrepreneurs, for entrepreneurs',
      color: 'text-red-500'
    },
    {
      icon: DollarSign,
      title: 'Equity-Free Funding',
      subtitle: 'Up to $30K with no equity taken, keeping ownership with founders',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Vibrant Ecosystem',
      subtitle: '180+ startups, mentors, and corporate partners in one network',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      subtitle: 'Strategic Sharjah location connecting East and West markets',
      color: 'text-purple-500'
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="bg-muted/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <motion.div 
                className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <motion.div 
                  variants={iconVariants}
                  className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 ${prop.color}`}
                >
                  <prop.icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                  >
                    {prop.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                  >
                    {prop.subtitle}
                  </motion.p>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  className="w-0 h-1 bg-primary rounded-full mt-6 group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderFirstValueProps;