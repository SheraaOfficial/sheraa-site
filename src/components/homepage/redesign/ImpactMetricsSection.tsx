
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Briefcase, Globe, Star } from "lucide-react";

export const ImpactMetricsSection = () => {
  const metrics = [
    {
      icon: Users,
      value: "180+",
      label: "Startups Launched",
      description: "From idea to market success",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      value: "$248M+",
      label: "Revenue Generated",
      description: "By our portfolio companies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Briefcase,
      value: "$171M+",
      label: "Capital Raised",
      description: "Total funding secured",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Award,
      value: "1,900+",
      label: "Jobs Created",
      description: "Driving economic growth",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      value: "52%",
      label: "Women-Led Startups",
      description: "Championing diversity",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      value: "71%",
      label: "Success Rate",
      description: "Above industry standard",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Impact That Speaks
            <span className="block bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
              Volumes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem. 
            Our commitment translates into tangible results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${metric.color} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="text-2xl"
                  >
                    ✨
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-bold text-sheraa-primary">These figures demonstrate</span> the scale and effectiveness 
              of Sheraa's programs and the significant economic contribution of its supported ventures. 
              The high survival rate and strong representation of women-led startups underscore the quality 
              and inclusivity of the support provided, positioning Sheraa as a vital engine for 
              <span className="font-bold text-sheraa-secondary"> sustainable growth and diversification</span> in the UAE.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
