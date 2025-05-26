
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, Heart, Users, Globe, Trophy, 
  ArrowRight, Zap, Target, Coffee
} from 'lucide-react';
import JobOpenings from './JobOpenings';
import ApplicationProcess from './ApplicationProcess';

const ReframedCareersPage: React.FC = () => {
  const impact = [
    {
      number: "180+",
      label: "Startups We've Built",
      description: "Direct impact on entrepreneurs"
    },
    {
      number: "$248M+", 
      label: "Revenue Generated",
      description: "By our portfolio companies"
    },
    {
      number: "1,900+",
      label: "Jobs Created",
      description: "Across the ecosystem"
    },
    {
      number: "71%",
      label: "Success Rate",
      description: "Above industry average"
    }
  ];

  const values = [
    {
      title: "Founder-First",
      description: "Every decision we make puts entrepreneurs first. We exist to serve their success.",
      icon: Target,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Collaborative Impact", 
      description: "We believe the best outcomes happen when diverse minds work together.",
      icon: Users,
      color: "text-green-600 bg-green-50"
    },
    {
      title: "Global Thinking",
      description: "We connect Sharjah to the world while staying rooted in our local community.",
      icon: Globe,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Authentic Growth",
      description: "We pursue sustainable impact over quick wins, building for the long term.",
      icon: Heart,
      color: "text-red-600 bg-red-50"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <Rocket className="w-5 h-5 text-sheraa-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Join the Mission
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
                Build Tomorrow's<br />Entrepreneurship Hub
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Join a team that's not just building careers, but <span className="font-semibold text-sheraa-primary">shaping the future</span> of innovation in the Middle East. 
                Every role here directly impacts thousands of entrepreneurs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
                  <a href="#openings" className="flex items-center gap-2">
                    Explore Open Roles
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Coffee className="w-4 h-4 mr-2" />
                  Chat With Our Team
                </Button>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {impact.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-primary/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white dark:bg-sheraa-dark/30 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These aren't just values on a wall. They're the principles that guide every decision, 
                every interaction, and every opportunity we create.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <div id="openings">
          <JobOpenings />
        </div>

        {/* Application Process */}
        <ApplicationProcess />

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join a team where your work directly impacts the next generation of entrepreneurs. 
              Every day brings new challenges, growth, and the satisfaction of building something meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl">
                Start Your Application
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Questions? Let's Talk
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default ReframedCareersPage;
