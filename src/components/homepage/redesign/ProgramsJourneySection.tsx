
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users, Target, Building, Zap, Star } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

export const ProgramsJourneySection = () => {
  const programs = [
    {
      icon: Users,
      title: "Start Young",
      subtitle: "Nurture Tomorrow's Innovators",
      description: "Igniting entrepreneurial passion in the next generation through incubation and skill-building for students and youth. Where dreams take their first breath.",
      highlights: ["Student Entrepreneurship", "Youth Incubation", "Early Innovation"],
      color: "from-blue-500 to-cyan-500",
      link: "/programs/start-young",
      badge: "Ages 16-25"
    },
    {
      icon: Rocket,
      title: "Grow Smart (S3)",
      subtitle: "Your Launchpad to Success",
      description: "Our flagship S3 Incubator helps market-ready startups achieve product-market fit and scale effectively. The UAE's first government-backed startup studio.",
      highlights: ["$30K Equity-Free Funding", "6-Month Program", "Global Market Access"],
      color: "from-green-500 to-emerald-500",
      link: "/programs/s3-incubator",
      badge: "Market Ready"
    },
    {
      icon: Target,
      title: "Build Ventures (ASC)",
      subtitle: "Solve Real-World Challenges",
      description: "Tackle industry challenges and unlock market access through our Access Sharjah Challenge. Connect with major clients and secure growth capital.",
      highlights: ["Industry Partnerships", "POC Grants", "Direct Client Access"],
      color: "from-purple-500 to-violet-500",
      link: "/programs/access-sharjah-challenge",
      badge: "Growth Stage"
    },
    {
      icon: Building,
      title: "SME Support",
      subtitle: "Elevate Established Businesses",
      description: "Tailored resources and connections for established Small and Medium Enterprises seeking growth, innovation, and market expansion opportunities.",
      highlights: ["Business Growth", "Innovation Support", "Market Expansion"],
      color: "from-orange-500 to-red-500",
      link: "/community/partnerships",
      badge: "Established"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Journey Starts Here:
            <span className="block bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
              Programs Tailored for Growth
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed to meet you 
            where you are on your entrepreneurial path. We provide structured support, expert guidance, and access to 
            critical resources at every stage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 relative overflow-hidden group"
              >
                {/* Background Decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color}`}>
                    {program.badge}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${program.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {program.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    {program.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-500"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <GradientButton
                    asChild
                    className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg transition-all duration-300 group`}
                  >
                    <Link to={program.link} className="flex items-center justify-center gap-3">
                      <span className="font-bold">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </GradientButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Journey Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/10 via-sheraa-secondary/10 to-sheraa-primary/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-sheraa-primary" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Ready to Begin Your Journey?
              </h3>
              <Star className="w-8 h-8 text-sheraa-secondary" />
            </div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're a student with a spark, a startup ready to scale, or an established business looking to innovate, 
              Sheraa is where <span className="font-bold text-sheraa-primary">potential meets opportunity</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                asChild
                size="lg"
                className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-xl"
              >
                <Link to="/programs" className="flex items-center gap-3">
                  🚀 Find Your Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GradientButton>

              <GradientButton
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  💬 Get Personalized Guidance
                </Link>
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
