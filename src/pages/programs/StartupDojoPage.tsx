
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  Calendar, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Star
} from 'lucide-react';

const StartupDojoPage = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Idea Validation",
      description: "Transform your ideas into viable business concepts through structured validation"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from successful entrepreneurs and industry experts"
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Build essential entrepreneurial skills through hands-on workshops"
    },
    {
      icon: Award,
      title: "Recognition & Funding",
      description: "Top teams receive grants and potential pathway to further programs"
    }
  ];

  const features = [
    "8-week intensive summer program",
    "Business model development",
    "Market research training",
    "Pitch development workshops",
    "Networking with peers",
    "Pathway to S3 Incubator"
  ];

  return (
    <MainLayout>
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Startup Dojo
                  <span className="block text-sheraa-primary">Summer Incubation</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  An intensive 8-week summer incubation program designed to transform 
                  student ideas into viable entrepreneurial solutions through hands-on 
                  training and expert mentorship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/programs">View All Programs</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is Startup Dojo?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Startup Dojo is our flagship youth entrepreneurship program that nurtures 
                  the next generation of innovators. Participants gain real-world experience 
                  in starting and running a business through intensive training, mentorship, 
                  and hands-on application.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-sheraa-primary" />
                    <span className="font-medium">University students and recent graduates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-sheraa-primary" />
                    <span className="font-medium">8-week intensive summer program</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-sheraa-primary" />
                    <span className="font-medium">Team-based learning approach</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-sheraa-primary/10 to-sheraa-secondary/10 rounded-2xl p-8 text-center">
                  <Star className="w-16 h-16 text-sheraa-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">81% Emirati Youth</h3>
                  <p className="text-gray-600">Participation in 2023 cohort</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join Startup Dojo?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our program provides comprehensive support to help you validate your ideas 
                and build the foundation for a successful startup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-sheraa-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-6 h-6 text-sheraa-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What You'll Gain
                </h2>
                <p className="text-gray-600">
                  Comprehensive training and support throughout your entrepreneurial journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Entrepreneurial Journey?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join the next cohort of young entrepreneurs and transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Apply for Next Cohort
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sheraa-primary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StartupDojoPage;
