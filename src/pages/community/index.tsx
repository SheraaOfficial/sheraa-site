
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Users, Handshake, Rocket, Network, ArrowRight, Heart, Globe, Zap } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      title: 'Join Our Community',
      description: 'Access essential resources, co-working spaces, and our vibrant network through flexible membership.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: ['Co-working spaces access', 'Networking events', 'Mentor connections', 'Resource library'],
      path: '/community/join'
    },
    {
      title: 'Our Startups',
      description: 'Discover the dynamic portfolio of 180+ startups building the future from Sharjah.',
      icon: Rocket,
      color: 'from-sheraa-primary to-sheraa-teal',
      features: ['180+ startups supported', '$248M+ revenue generated', '1,900+ jobs created', '71% survival rate'],
      path: '/community/startups'
    },
    {
      title: 'Partnership Opportunities',
      description: 'Collaborate with Sheraa to drive innovation and shape Sharjah\'s entrepreneurial future.',
      icon: Handshake,
      color: 'from-orange-500 to-red-500',
      features: ['Corporate partnerships', 'Government collaboration', 'Investor network', 'Mentor opportunities'],
      path: '/community/partnerships'
    }
  ];

  const stats = [
    { icon: Users, number: '140+', label: 'Ecosystem Partners', color: 'text-blue-600' },
    { icon: Globe, number: '18,000+', label: 'Youth Upskilled', color: 'text-sheraa-primary' },
    { icon: Heart, number: '52%', label: 'Women-Led Startups', color: 'text-pink-600' },
    { icon: Zap, number: '71%', label: 'Startup Survival Rate', color: 'text-green-600' }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-sheraa-light/30 via-white to-purple-50/30 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-sheraa-primary/10 text-sheraa-primary hover:bg-sheraa-primary/20">
              <Network className="w-4 h-4 mr-2" />
              Powered by Community
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-purple-500 to-sheraa-teal bg-clip-text text-transparent leading-tight">
              Join Sharjah's Innovation Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              At Sheraa, we believe that groundbreaking innovation happens through connection and collaboration. 
              Join our dynamic ecosystem of founders, mentors, investors, and industry leaders.
            </p>
          </motion.div>

          {/* Community Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center group hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Card className="p-6 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                        <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Community Features */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              How to Get Involved
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {communityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                        
                        <ul className="space-y-2 mb-8">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <GradientButton asChild className="w-full">
                          <Link to={feature.path} className="flex items-center justify-center gap-2">
                            Explore
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-sheraa-primary/10 to-purple-500/10 rounded-3xl p-12 text-center border border-sheraa-primary/20"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-4xl mb-6">💫</div>
                <h3 className="text-2xl font-bold mb-4">The Power of Our Network</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  "Our ecosystem is built on the principle that collective strength fuels individual success. 
                  By joining Sheraa, you tap into a powerful network designed to accelerate growth, foster partnerships, 
                  and unlock opportunities."
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-8 h-8 bg-sheraa-primary rounded-full flex items-center justify-center text-white font-bold">S</div>
                  <span>Sheraa Community</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary to-purple-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Be Part of Something Bigger?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our thriving community of innovators, entrepreneurs, and changemakers who are building the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                <Link to="/community/join">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
