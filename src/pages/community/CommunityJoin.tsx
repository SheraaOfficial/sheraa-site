
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Users, Building, Network, ArrowRight,
  Sparkles, Crown, Star
} from 'lucide-react';
import { MembershipBenefits } from './components/MembershipBenefits';
import { ApplicationProcess } from './components/ApplicationProcess';

const CommunityJoin: React.FC = () => {
  const targetAudience = [
    {
      title: "Product Founders",
      description: "Founders with a launched product or service ready for market",
      icon: Building,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Community Seekers",
      description: "Startups seeking networking opportunities and collaborative resources",
      icon: Users,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Flexible Entrepreneurs",
      description: "Entrepreneurs who want flexibility without long-term program commitment",
      icon: Network,
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Enhanced Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-white dark:from-sheraa-dark dark:via-sheraa-dark/80 dark:to-sheraa-dark/60 relative overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
            animate={{ 
              y: [-20, 20, -20],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl"
            animate={{ 
              y: [20, -20, 20],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="w-5 h-5 text-sheraa-primary" />
                </motion.div>
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Premium Membership
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                  Unlock Your Potential
                </span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-sheraa-secondary to-sheraa-orange bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
                >
                  Flexible Support with Sheraa Membership
                </motion.span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Designed for founders with a product in the market, Sheraa Membership provides flexible, 
                on-demand access to the resources and connections you need to grow, without the structure of a long-term program.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 px-8 py-6 text-lg shadow-xl">
                    <motion.div
                      className="flex items-center gap-2"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply for Membership Today
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 px-8 py-6 text-lg backdrop-blur-sm">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who is Membership For Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Who is Membership For?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our membership is designed for specific types of entrepreneurs at particular stages of their journey.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {targetAudience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
                      
                      <motion.div
                        className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                        whileHover={{ rotate: 10 }}
                      >
                        <item.icon className="w-8 h-8 text-sheraa-primary" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 relative z-10">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <MembershipBenefits />

        {/* Application Process */}
        <ApplicationProcess />

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-24 bg-gradient-to-br from-sheraa-primary via-sheraa-teal to-sheraa-secondary text-white relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="mb-8"
            >
              <Star className="w-16 h-16 mx-auto text-yellow-300" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ready to Join Our Community?
            </motion.h2>
            
            <motion.p
              className="text-xl mb-10 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with like-minded entrepreneurs and access the resources you need to grow your startup.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold shadow-2xl">
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Apply for Membership Today
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default CommunityJoin;
