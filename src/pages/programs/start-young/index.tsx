
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Trophy, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const StartYoungPage: React.FC = () => {
  const benefits = [
    'Intensive 8-week summer incubation program',
    'Mentorship from industry experts',
    'Business model development training',
    'Pitch preparation and practice',
    'Networking with peers and ecosystem players',
    'Potential grants and commercial licenses',
    'Pathway to S3 Incubator program'
  ];

  const stats = [
    { number: '81%', label: 'Emirati Youth Participation' },
    { number: '100+', label: 'Student Teams Trained' },
    { number: '50+', label: 'University Partners' },
    { number: '90%', label: 'Program Completion Rate' }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-900/10 dark:via-gray-900 dark:to-cyan-900/10 min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Users className="w-4 h-4 mr-2" />
              Youth Entrepreneurship Program
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent leading-tight">
              Start Young: Ignite Your Potential
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              The journey to becoming an entrepreneur starts early. Our Start Young initiatives cultivate 
              entrepreneurial mindsets and provide a launchpad for innovative ideas from university campuses 
              across the UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-4 h-4 mr-2" />
                Apply for Next Cohort
              </GradientButton>
              <Button size="lg" variant="outline" className="border-blue-600/30 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Program Overview */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Startup Dojo & Dojo+</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our comprehensive youth program consists of two phases: the intensive 8-week Startup Dojo 
                  summer incubation program, followed by the accelerated Dojo+ phase for top-performing teams.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
                  <Lightbulb className="w-16 h-16 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4">Why Start Young?</h3>
                  <p className="text-white/90">
                    Nurturing entrepreneurial skills early creates a pipeline of future innovators and leaders. 
                    By engaging students within their university environments, we make entrepreneurship accessible 
                    and integrate it with academic learning.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Program Impact
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center group hover:scale-105 transition-transform cursor-pointer"
                >
                  <Card className="p-6 border border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-0">
                      <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Program Structure */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Program Structure
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold">Startup Dojo</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      An intensive 8-week summer incubation program focused on transforming student ideas 
                      into viable entrepreneurial solutions.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Idea validation and business model development</li>
                      <li>• Market research and customer discovery</li>
                      <li>• Team building and leadership skills</li>
                      <li>• Pitching and presentation training</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border border-cyan-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-cyan-600" />
                      </div>
                      <h3 className="text-2xl font-bold">Startup Dojo+</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      An intensive accelerator program for top-performing teams from Startup Dojo, 
                      offering bespoke attention and funding opportunities.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Advanced business model refinement</li>
                      <li>• Financial planning and investor readiness</li>
                      <li>• Product design and development</li>
                      <li>• Fast-track to S3 Incubator consideration</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Ignite Your Entrepreneurial Journey?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join the next generation of innovators and transform your ideas into impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                <Calendar className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Program Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StartYoungPage;
