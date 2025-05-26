
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, DollarSign, Users, Target, Clock, Star,
  CheckCircle, ArrowRight, Calendar, MapPin, Globe,
  TrendingUp, Award, Zap, Building, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const S3IncubatorDetailPage: React.FC = () => {
  const benefits = [
    {
      title: "$30,000 USD Pre-Seed Funding",
      description: "Equity-free funding with revenue-sharing model",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "25+ Hours of Mentorship",
      description: "Personalized guidance from 30+ experienced mentors",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Free Business License",
      description: "1-year Sharjah business license included",
      icon: Building,
      color: "text-purple-600"
    },
    {
      title: "AED 3M+ in Perks",
      description: "Software credits and exclusive discounts",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Demo Day Showcase",
      description: "Present to investors and potential partners",
      icon: Target,
      color: "text-red-600"
    },
    {
      title: "SEF Platform",
      description: "Showcase at Sharjah Entrepreneurship Festival",
      icon: Globe,
      color: "text-indigo-600"
    }
  ];

  const requirements = [
    "Tech-enabled, market-ready product/service",
    "Early customer traction and revenue generation",
    "Dedicated full-time founder(s) and core team",
    "Commitment to operating in Sharjah and UAE",
    "Scalable business model with growth potential",
    "Open to feedback and collaborative approach"
  ];

  const timeline = [
    { phase: "Applications Open", date: "Month 1", description: "Submit application online" },
    { phase: "Assessment", date: "Month 2", description: "Internal review and screening calls" },
    { phase: "Deep Dive", date: "Month 2", description: "In-depth interviews and evaluation" },
    { phase: "Selection", date: "Month 3", description: "Final selection and onboarding" },
    { phase: "Program Start", date: "Month 3", description: "6-month intensive incubation begins" },
    { phase: "Demo Day", date: "Month 9", description: "Present to investors and graduate" }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-6">
              <Rocket className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                S3 Incubator Program
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Sharjah Startup Studio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              The UAE's first government-backed startup studio operating on a unique revenue-sharing model. 
              Transform your tech-enabled venture into a scalable success story with our 6-month intensive program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/eligibility" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                Download Program Guide
              </Button>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { label: "Duration", value: "6 Months", icon: Clock },
              { label: "Funding", value: "$30,000", icon: DollarSign },
              { label: "Mentors", value: "30+", icon: Users },
              { label: "Success Rate", value: "85%", icon: TrendingUp }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto text-sheraa-primary mb-3" />
                  <div className="text-2xl font-bold text-sheraa-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Gain</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive support designed to accelerate your startup's growth and success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="p-6">
                      <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Requirements Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Award className="w-16 h-16 mx-auto text-sheraa-primary mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Eligibility Requirements</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Make sure your startup meets these criteria before applying.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Timeline</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From application to graduation - here's your journey with S3.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-16 h-16 bg-sheraa-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sheraa-primary font-bold">{index + 1}</span>
                    </div>
                    <Card className="flex-1 bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold">{item.phase}</h3>
                          <Badge variant="outline" className="text-xs">{item.date}</Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
              <CardContent className="p-12">
                <Zap className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Startup?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join the next cohort of innovative startups transforming their businesses with S3's comprehensive support system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to="/eligibility" className="flex items-center gap-2">
                      Start Your Application
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                    <a href="mailto:programs@sheraa.ae" className="flex items-center gap-2">
                      Contact Program Team
                      <Users className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default S3IncubatorDetailPage;
