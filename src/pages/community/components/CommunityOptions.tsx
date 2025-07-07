
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, Handshake, Building2, ArrowRight, 
  Sparkles, Zap, Crown, Star, Globe, Heart 
} from 'lucide-react';

export const CommunityOptions: React.FC = () => {
  const options = [
    {
      title: "Join Our Community",
      subtitle: "Sheraa Membership",
      description: "Access essential resources, co-working spaces, and our vibrant network on your terms. Perfect for founders with market-ready products.",
      icon: Users,
      href: "/community/join",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      features: ["Co-working Access", "Network Events", "Expert Mentorship", "Investor Introductions"],
      popular: true,
      badge: "Most Popular"
    },
    {
      title: "Partnership Opportunities", 
      subtitle: "Shape the Future Together",
      description: "Collaborate with Sheraa to drive innovation, access cutting-edge startups, and contribute to Sharjah's entrepreneurial ecosystem.",
      icon: Handshake,
      href: "/community/partnerships",
      color: "from-purple-500/20 to-purple-600/20", 
      iconColor: "text-purple-600",
      features: ["Corporate Partnerships", "Investment Opportunities", "Mentor Network", "Event Sponsorship"],
      badge: "Strategic"
    },
    {
      title: "Our Startups",
      subtitle: "Innovation in Action",
      description: "Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. Connect with founders changing the world.",
      icon: Building2,
      href: "/community/startups",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600", 
      features: ["180+ Startups", "52% Women-Led", "$248M+ Revenue", "71% Survival Rate"],
      badge: "Portfolio"
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

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
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
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're a founder, partner, or investor, find your perfect fit in our thriving ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group h-full"
            >
              <Card className={`relative bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm rounded-3xl border transition-all duration-500 hover:shadow-2xl h-full overflow-hidden ${option.popular ? 'border-sheraa-primary/50 shadow-lg' : 'border-sheraa-primary/20 hover:border-sheraa-primary/40'}`}>
                {/* Animated Badge */}
                {option.badge && (
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: "backOut" }}
                  >
                    <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${option.popular ? 'bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white' : 'bg-sheraa-teal/20 text-sheraa-teal'}`}>
                      {option.popular && <Sparkles className="w-3 h-3" />}
                      {option.badge}
                    </div>
                  </motion.div>
                )}
                
                {/* Animated Background Overlay */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <CardContent className="relative z-10 p-8">
                  {/* Icon with sophisticated animation */}
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <option.icon className={`w-10 h-10 ${option.iconColor}`} />
                  </motion.div>
                  
                  <motion.div
                    className="text-sm font-bold text-sheraa-primary mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {option.subtitle}
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {option.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {option.description}
                  </motion.p>
                  
                  {/* Animated Feature List */}
                  <motion.div
                    className="grid grid-cols-2 gap-2 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {option.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                      >
                        <Zap className="w-3 h-3 text-sheraa-primary flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Animated CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 group-hover:shadow-lg transition-all duration-300">
                      <Link to={option.href} className="flex items-center justify-center gap-2">
                        Learn More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
