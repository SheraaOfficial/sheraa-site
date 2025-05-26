
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, FileText, Users, MessageSquare } from 'lucide-react';

export const ApplicationProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Check Eligibility",
      description: "Ensure you meet the eligibility criteria (founder with a market-ready product)",
      icon: CheckCircle,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Complete Application",
      description: "Fill out our comprehensive application form with details about your startup",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Review Process",
      description: "Our team reviews your application and contacts you within 2 weeks",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Welcome Interview",
      description: "Brief interview to understand your goals and how we can best support you",
      icon: MessageSquare,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Simple Application Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Getting started is easy. Follow these four simple steps to join our community.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-sheraa-primary/30 to-sheraa-teal/30 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                />
              )}
              
              <Card className="relative bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl h-full z-10">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Step Number */}
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 mx-auto rounded-xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-6 h-6 text-sheraa-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    {step.description}
                  </p>

                  {/* Floating effect */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-sheraa-primary/20 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
