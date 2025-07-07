
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, TrendingUp, Users, Globe,
  ArrowRight, Target, Lightbulb, Award,
  DollarSign, BarChart, Network, Rocket
} from 'lucide-react';

const SMESupport: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const supportAreas = [
    {
      icon: DollarSign,
      title: "Access to Finance",
      description: "Connect with financing solutions through partners like Emirates Development Bank (EDB) for working capital, equipment purchase, and expansion projects.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Market Access & Export",
      description: "Facilitate connections to new markets, trade fairs, and export opportunities via Sharjah Chamber of Commerce and Etihad Credit Insurance.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Innovation & Technology",
      description: "Encourage adoption of advanced manufacturing, digital transformation, and sustainable practices through our Centers of Excellence.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Access workshops, training programs, and mentorship from industry experts facilitated by Sheraa and its partners.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const partners = [
    { name: "Emirates Development Bank", type: "Financing Partner" },
    { name: "Sharjah Chamber of Commerce", type: "Trade Partner" },
    { name: "Etihad Credit Insurance", type: "Risk Mitigation" },
    { name: "Ministry of Industry", type: "Strategic Partner" }
  ];

  const stats = [
    { number: "60,000+", label: "SMEs in Sharjah" },
    { number: "85%", label: "Economic Contribution" },
    { number: "50+", label: "Partner Organizations" },
    { number: "300+", label: "SMEs Supported" }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.div variants={itemVariants}>
                <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-sm font-bold">
                  Small & Medium Enterprise Support
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Elevating Sharjah's<br />SMEs
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Supporting the bedrock of Sharjah's economy. We help established businesses innovate, adapt, and achieve sustainable growth through our strategic partnerships and ecosystem support.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                    Connect with Resources
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                    Learn About Partnerships
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-lg"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Support Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of Support</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Leveraging strategic partnerships to provide comprehensive support mechanisms crucial for SME growth and innovation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {supportAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <area.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Partners Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Partners</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our network of trusted partners provides specialized support across different aspects of SME growth and development.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partners.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 text-center bg-white dark:bg-sheraa-dark">
                      <CardContent className="p-6">
                        <motion.div 
                          className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Building className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="font-bold mb-2">{partner.name}</h3>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400">{partner.type}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Scale Your Business?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Join the ecosystem that's driving Sharjah's economic diversification. Connect with resources, partners, and opportunities to take your SME to the next level.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Network className="mr-2 w-5 h-5" />
                  Connect with Partners
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Award className="mr-2 w-5 h-5" />
                  Explore Centers of Excellence
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default SMESupport;
