
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, Users, Handshake, Star, Award, Coffee, 
  MapPin, Network, Zap, Crown, Globe, Heart
} from 'lucide-react';

export const MembershipBenefits: React.FC = () => {
  const membershipBenefits = [
    {
      category: "Workspace & Facilities",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      benefits: [
        {
          title: "Premium Co-working Access",
          description: "24/7 access to inspiring co-working spaces at Sheraa HQ (SRTIP) and university hubs (AUS & UOS).",
          icon: MapPin
        }
      ]
    },
    {
      category: "Network & Connections", 
      icon: Network,
      color: "from-purple-500 to-purple-600",
      benefits: [
        {
          title: "Exclusive Community Platform",
          description: "Connect with fellow founders, mentors, and the Sheraa team via our private Slack workspace.",
          icon: Users
        },
        {
          title: "Investor & Partner Introductions",
          description: "Get facilitated connections to VCs, angel investors, potential customers, and corporate/government partners.",
          icon: Handshake
        },
        {
          title: "Expert Mentor Network",
          description: "Access our network of 30+ subject matter experts, coaches, and mentors for personalized guidance.",
          icon: Star
        }
      ]
    },
    {
      category: "Resources & Support",
      icon: Zap,
      color: "from-green-500 to-green-600",
      benefits: [
        {
          title: "Startup Perks & Credits",
          description: "Benefit from AED 3M+ worth of software perks and credits for essential business tools.",
          icon: Award
        },
        {
          title: "Professional Services",
          description: "Access vetted service providers (legal, HR, accounting, marketing, IT, business setup) at preferential rates.",
          icon: Coffee
        }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-sheraa-light/10 dark:from-sheraa-dark/30 dark:via-sheraa-dark/20 dark:to-sheraa-dark/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <Crown className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Premium Benefits</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Membership Benefits
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access a comprehensive suite of resources designed to accelerate your startup journey
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {membershipBenefits.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Header */}
              <motion.div
                className="text-center mb-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <category.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
              </motion.div>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.benefits.map((benefit, benefitIdx) => (
                  <motion.div
                    key={benefitIdx}
                    variants={benefitVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="h-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                      <CardContent className="p-8 relative">
                        {/* Animated background gradient on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />
                        
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                          whileHover={{ rotate: 10 }}
                        >
                          <benefit.icon className="w-8 h-8 text-sheraa-primary" />
                        </motion.div>
                        
                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                          {benefit.description}
                        </p>

                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-sheraa-primary rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ 
                            y: [-5, 5, -5],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
