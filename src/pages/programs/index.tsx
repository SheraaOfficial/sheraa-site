
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Rocket, Users, Target, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: 'Start Young',
      description: 'Nurturing the next generation of innovators through incubation and skill-building for students and youth.',
      features: ['8-week summer program', 'Mentorship from experts', 'Networking opportunities', 'Grant opportunities'],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      path: '/programs/start-young'
    },
    {
      title: 'S3 Incubator',
      description: 'Our flagship program helps market-ready startups achieve product-market fit and scale effectively.',
      features: ['6-month program', '$30,000 equity-free funding', '25+ hours of mentorship', 'Demo Day pitch'],
      icon: Rocket,
      color: 'from-sheraa-primary to-sheraa-teal',
      path: '/programs/s3'
    },
    {
      title: 'Access Sharjah Challenge',
      description: 'Tackle real-world challenges and unlock market access through our global startup competition.',
      features: ['Global competition', 'POC opportunities', 'Market validation', 'Industry partnerships'],
      icon: Target,
      color: 'from-orange-500 to-red-500',
      path: '/programs/asc'
    },
    {
      title: 'SME Support',
      description: 'Tailored resources and connections for established Small and Medium Enterprises seeking growth.',
      features: ['Business advisory', 'Market expansion', 'Innovation support', 'Networking events'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      path: '/programs/sme'
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-teal/10 dark:from-sheraa-dark dark:via-gray-900 dark:to-black min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Sparkles className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Your Entrepreneurial Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight">
              Programs Designed for Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              From validating your initial idea to scaling globally, Sheraa offers a comprehensive pathway 
              for entrepreneurs at every stage of their journey.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{program.description}</p>
                      
                      <ul className="space-y-2 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <GradientButton asChild className="w-full">
                        <Link to={program.path} className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </GradientButton>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have transformed their ideas into successful ventures with Sheraa's support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                Apply to Programs
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

export default ProgramsPage;
