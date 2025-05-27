import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, TrendingUp, Users, Globe } from 'lucide-react';

const CommunityStartups: React.FC = () => {
  const stats = [
    { icon: Rocket, number: '180+', label: 'Startups Supported', color: 'text-sheraa-primary' },
    { icon: TrendingUp, number: '$248M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Users, number: '1,900+', label: 'Jobs Created', color: 'text-blue-600' },
    { icon: Globe, number: '71%', label: 'Survival Rate', color: 'text-purple-600' }
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
              <Rocket className="w-4 h-4 mr-2" />
              Our Portfolio
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-purple-500 to-sheraa-teal bg-clip-text text-transparent leading-tight">
              Building the Future from Sharjah
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our dynamic portfolio of innovative startups that are transforming industries and creating impact across the region.
            </p>
          </motion.div>

          {/* Stats Section */}
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

          {/* Coming Soon Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-sheraa-primary/10 to-purple-500/10 rounded-3xl p-12 text-center border border-sheraa-primary/20"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Startup Showcase Coming Soon</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We're currently building an interactive showcase of our startup portfolio. 
                  Soon you'll be able to explore our startups by sector, stage, and impact.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-8 h-8 bg-sheraa-primary rounded-full flex items-center justify-center text-white font-bold">S</div>
                  <span>Sheraa Team</span>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityStartups; 