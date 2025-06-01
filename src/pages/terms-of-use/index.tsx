
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle, Calendar, Mail } from 'lucide-react';

const TermsOfUsePage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using Sheraa\'s website, programs, and services, you agree to be bound by these Terms of Use and all applicable laws and regulations.',
        'If you do not agree with any of these terms, you are prohibited from using or accessing our services.',
        'These terms apply to all visitors, users, and others who access or use our services.',
        'We reserve the right to modify these terms at any time, with changes becoming effective immediately upon posting.'
      ]
    },
    {
      title: 'Use of Services',
      icon: Users,
      content: [
        'You may use our services only for lawful purposes and in accordance with these Terms of Use.',
        'You agree not to use our services in any way that could damage, disable, or impair our systems or interfere with other users.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
        'We reserve the right to terminate or suspend your access to our services at any time for violation of these terms.'
      ]
    },
    {
      title: 'Program Participation',
      icon: FileText,
      content: [
        'Participation in Sheraa programs is subject to additional program-specific terms and conditions.',
        'Acceptance into any program is at Sheraa\'s sole discretion based on eligibility criteria and application quality.',
        'Program participants must comply with all program requirements, deadlines, and code of conduct.',
        'Failure to meet program obligations may result in removal from the program without refund of fees paid.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        'All content on our website and materials provided through our programs are protected by intellectual property laws.',
        'You retain ownership of intellectual property you create, but grant Sheraa limited rights to use such property for program purposes.',
        'You may not reproduce, distribute, or create derivative works from our content without explicit written permission.',
        'Sheraa respects intellectual property rights and expects all users to do the same.'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: [
        'Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.',
        'By using our services, you consent to the collection and use of your information as described in our Privacy Policy.',
        'We implement appropriate security measures to protect your personal information.',
        'You have the right to access, update, or delete your personal information as outlined in our Privacy Policy.'
      ]
    },
    {
      title: 'Disclaimers and Limitations',
      icon: AlertTriangle,
      content: [
        'Our services are provided "as is" without warranties of any kind, either express or implied.',
        'We do not guarantee that our services will be uninterrupted, secure, or error-free.',
        'Sheraa is not liable for any indirect, incidental, special, or consequential damages.',
        'Our total liability for any claims related to our services shall not exceed the amount you paid for the specific service.'
      ]
    }
  ];

  const keyPoints = [
    {
      title: 'Eligibility',
      description: 'Must be 18+ or have parental consent to use our services',
      icon: Users
    },
    {
      title: 'Compliance',
      description: 'All activities must comply with UAE laws and regulations',
      icon: Scale
    },
    {
      title: 'Respect',
      description: 'Maintain professional conduct and respect for all community members',
      icon: CheckCircle
    },
    {
      title: 'Accuracy',
      description: 'Provide truthful and accurate information in all interactions',
      icon: FileText
    }
  ];

  return (
    <MainLayout
      seoTitle="Terms of Use - Sheraa Service Agreement & User Guidelines"
      seoDescription="Read Sheraa's terms of use covering service access, program participation, intellectual property rights, and user responsibilities in our ecosystem."
      seoKeywords="Sheraa terms of use, service agreement, user guidelines, startup incubator terms, legal terms UAE"
    >
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background Effects */}
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
                <Scale className="w-5 h-5 text-sheraa-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Clear Guidelines
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
                Terms of Use
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                These terms govern your use of Sheraa's services, programs, and community. 
                By participating in our ecosystem, you agree to these terms and conditions.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Effective Date: January 1, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Version 3.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Guidelines</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These fundamental principles ensure a positive and productive experience for all members of our community.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
              {keyPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full text-center bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-sheraa-primary to-sheraa-secondary flex items-center justify-center mb-4 shadow-lg">
                        <point.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                >
                  <Card className="bg-white dark:bg-sheraa-dark border border-sheraa-primary/20 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sheraa-primary to-sheraa-secondary flex items-center justify-center shadow-lg">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {section.content.map((item, iidx) => (
                          <div key={iidx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-sheraa-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-amber-800 dark:text-amber-400">
                        Important Notice
                      </h3>
                      <div className="space-y-3 text-amber-700 dark:text-amber-300">
                        <p>
                          These Terms of Use constitute a legally binding agreement between you and Sheraa. 
                          Please read them carefully before using our services.
                        </p>
                        <p>
                          If you have questions about these terms or need clarification on any provisions, 
                          please contact our legal team before proceeding.
                        </p>
                        <p>
                          Continued use of our services after any modifications to these terms constitutes 
                          acceptance of the revised terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 border border-sheraa-primary/30">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-sheraa-primary" />
                  <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    If you have questions about these Terms of Use or need legal clarification, 
                    our team is here to help you understand your rights and obligations.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Legal Affairs</p>
                    <p className="text-sheraa-primary">legal@sheraa.ae</p>
                    <p className="text-gray-600 dark:text-gray-400">+971 6 509 4000</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Sheraa, Sharjah Research Technology and Innovation Park<br />
                      Sharjah, United Arab Emirates
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default TermsOfUsePage;
