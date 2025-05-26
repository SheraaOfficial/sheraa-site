
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Calendar, Mail, Phone, Users, 
  ArrowRight, Home, Sparkles, Clock, Award
} from 'lucide-react';

const MembershipConfirmation: React.FC = () => {
  const nextSteps = [
    {
      step: 1,
      title: 'Application Review',
      description: 'Our team will review your application within 24-48 hours',
      timeline: '1-2 days',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      step: 2,
      title: 'Initial Interview',
      description: 'Brief 30-minute video call to discuss your startup and goals',
      timeline: '3-5 days',
      icon: Users,
      color: 'text-sheraa-primary'
    },
    {
      step: 3,
      title: 'Decision & Onboarding',
      description: 'Application decision and welcome to the Sheraa community',
      timeline: '5-7 days',
      icon: Award,
      color: 'text-green-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Questions about your application?',
      content: 'membership@sheraa.ae',
      icon: Mail,
      action: 'mailto:membership@sheraa.ae'
    },
    {
      title: 'Want to schedule a call?',
      content: '+971 6 509 4000',
      icon: Phone,
      action: 'tel:+97165094000'
    },
    {
      title: 'Join our community updates',
      content: 'Follow @sheraa on social media',
      icon: Users,
      action: 'https://linkedin.com/company/sheraa'
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen py-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-2xl"
            >
              <CheckCircle className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Application Submitted!
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Thank you for applying to join Sheraa's elite community. 
                Your entrepreneurial journey with us is about to begin!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-sheraa-light border border-green-200"
            >
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Application ID: #SH{Date.now().toString().slice(-6)}
              </span>
            </motion.div>
          </motion.div>

          {/* What Happens Next */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              What Happens Next?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + (0.2 * index), duration: 0.6 }}
                    className="text-center group"
                  >
                    <Card className="h-full border border-sheraa-primary/20 bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-8">
                        <div className="relative mb-6">
                          <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-gray-100">
                            <IconComponent className={`w-8 h-8 ${step.color}`} />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-sheraa-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20">
                          <Calendar className="w-4 h-4 text-sheraa-primary" />
                          <span className="text-sm font-medium text-sheraa-primary">
                            {step.timeline}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Need Help or Have Questions?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + (0.1 * index), duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <IconComponent className="w-8 h-8 mx-auto mb-4 text-sheraa-primary" />
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{info.content}</p>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10"
                        >
                          <a href={info.action} target="_blank" rel="noopener noreferrer">
                            Get in Touch
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary/10 via-sheraa-teal/10 to-purple-500/10 border border-sheraa-primary/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-sheraa-primary" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  While You Wait...
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Explore more about Sheraa's ecosystem, success stories, and upcoming events. 
                  Stay connected with our community!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to="/community/startups">
                      <Users className="w-4 h-4 mr-2" />
                      Explore Our Startups
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                    <Link to="/events/sef">
                      <Calendar className="w-4 h-4 mr-2" />
                      Upcoming Events
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-300">
                    <Link to="/">
                      <Home className="w-4 h-4 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
};

export default MembershipConfirmation;
