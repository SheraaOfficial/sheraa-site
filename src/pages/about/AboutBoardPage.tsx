import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { SophisticatedCard } from '@/components/ui/sophisticated-card';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { BoardHeader } from './components/BoardHeader';
import { BoardStats } from './components/BoardStats';
import { BoardMembersGrid } from './components/BoardMembersGrid';

const AboutBoardPage: React.FC = () => {
  const headerStats = [
    { icon: Users, value: "17", label: "Board Members" },
    { icon: Award, value: "25+", label: "Years Combined Experience" },
    { icon: Globe, value: "10+", label: "Industries Represented" },
    { icon: TrendingUp, value: "100%", label: "Strategic Alignment" },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Sophisticated Header */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-sheraa-teal/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 rounded-full border border-sheraa-primary/20 shadow-lg backdrop-blur-sm mb-8"
              >
                <Users className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-semibold text-sheraa-primary">Leadership Excellence</span>
              </motion.div>
              
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Board of Advisors
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our distinguished Board of Advisors comprises visionary leaders from government, 
                industry, academia, and the entrepreneurial community, ensuring our initiatives 
                remain aligned with national priorities and market needs.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {headerStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <SophisticatedCard key={index} hover glowEffect className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + (index * 0.1), duration: 0.5, type: "spring" }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 mb-4"
                    >
                      <Icon className="w-8 h-8 text-sheraa-primary" />
                    </motion.div>
                    <div className="text-3xl font-bold text-sheraa-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </SophisticatedCard>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Meet Our Advisory Board</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic guidance from industry pioneers and thought leaders who shape our vision and drive our success.
              </p>
            </motion.div>

            {/* Board Members Grid - placeholder for now */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <SophisticatedCard hover gradient className="p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Users className="w-12 h-12 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Board Member {index + 1}</h3>
                      <p className="text-sheraa-primary font-medium mb-3">Strategic Advisor</p>
                      <p className="text-gray-600 text-sm">
                        Leading expert in their field with extensive experience in driving innovation and strategic growth.
                      </p>
                    </div>
                  </SophisticatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutBoardPage;
