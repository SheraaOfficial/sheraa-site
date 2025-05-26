import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Users, 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  ShieldCheck,
  Link as LucideLink
} from "lucide-react";
import { Link } from "react-router-dom";

import AboutLeadershipPage from './AboutLeadershipPage';
import AboutBoardPage from './AboutBoardPage';

const AboutPages = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/leadership" element={<AboutLeadershipPage />} />
      <Route path="/board" element={<AboutBoardPage />} />
    </Routes>
  );
};

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: "Impact-Driven",
      description: "We measure our success by the positive change we create in the lives of entrepreneurs and the broader community.",
      icon: TrendingUp
    },
    {
      title: "Collaborative",
      description: "We believe in the power of partnerships and work closely with stakeholders to achieve shared goals.",
      icon: Users
    },
    {
      title: "Innovative",
      description: "We embrace creativity and are always seeking new and better ways to support entrepreneurs.",
      icon: Lightbulb
    },
    {
      title: "Empowering",
      description: "We provide entrepreneurs with the resources, knowledge, and networks they need to succeed.",
      icon: Award
    }
  ];

  const keyStats = [
    {
      label: "Startups Supported",
      value: "200+",
      description: "We've helped over 200 startups launch and scale their businesses.",
      icon: Briefcase
    },
    {
      label: "Jobs Created",
      value: "1,500+",
      description: "Our startups have created over 1,500 jobs in the Sharjah economy.",
      icon: Users
    },
    {
      label: "Funding Raised",
      value: "$50M+",
      description: "Our startups have raised over $50 million in funding.",
      icon: MessageSquare
    },
    {
      label: "Community Members",
      value: "10,000+",
      description: "We have a vibrant community of over 10,000 entrepreneurs, mentors, and investors.",
      icon: Users
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <ShieldCheck className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              About Sheraa
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The Sharjah Entrepreneurship Center (Sheraa) is a government initiative 
              launched in 2016 to cultivate the entrepreneurship ecosystem in Sharjah 
              and the UAE.
            </p>
          </motion.div>

          {/* Core Values Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <value.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Key Stats Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Key Stats
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <stat.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <div className="text-2xl font-bold text-sheraa-primary mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                      <p className="text-gray-500 text-xs mt-2">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Leadership and Board Sections */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Meet Our Leaders
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-sheraa-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Leadership Team</h3>
                    <p className="text-gray-600 text-sm">
                      Discover the visionary leaders guiding Sheraa's mission.
                    </p>
                    <Link to="/about/leadership" className="text-sheraa-primary hover:text-sheraa-teal flex items-center justify-center gap-2 mt-4">
                      Learn More <LucideLink className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-8 h-8 text-sheraa-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Board of Advisors</h3>
                    <p className="text-gray-600 text-sm">
                      Meet the strategic advisors shaping our direction.
                    </p>
                    <Link to="/about/board" className="text-sheraa-primary hover:text-sheraa-teal flex items-center justify-center gap-2 mt-4">
                      Learn More <LucideLink className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Impact Report CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-none max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Explore Our Impact</h2>
                <p className="text-xl mb-8 text-white/90">
                  Discover how Sheraa is transforming the entrepreneurship landscape 
                  in Sharjah and beyond.
                </p>
                <Link to="/impact-report" className="bg-white text-sheraa-primary hover:bg-gray-50 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2">
                  Read the Impact Report <TrendingUp className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPages;
