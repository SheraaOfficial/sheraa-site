
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, FileText, Users, Globe, Mail, Calendar } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, phone number, and contact details',
            'Professional information including company details and role',
            'Educational background and qualifications',
            'Application materials and supporting documents'
          ]
        },
        {
          subtitle: 'Usage Information',
          items: [
            'Website navigation patterns and preferences',
            'Program participation and engagement metrics',
            'Event attendance and interaction data',
            'Communication preferences and history'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'IP address, browser type, and device information',
            'Cookies and similar tracking technologies',
            'Login credentials and security tokens',
            'System logs and error reports'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'Program Services',
          items: [
            'Processing applications for incubation and acceleration programs',
            'Providing personalized mentorship and guidance',
            'Connecting you with relevant investors and partners',
            'Facilitating networking opportunities within our ecosystem'
          ]
        },
        {
          subtitle: 'Communication',
          items: [
            'Sending program updates and important announcements',
            'Event invitations and community newsletters',
            'Educational content and resources sharing',
            'Responding to inquiries and support requests'
          ]
        },
        {
          subtitle: 'Improvement & Analytics',
          items: [
            'Analyzing program effectiveness and participant success',
            'Improving our website and digital platforms',
            'Conducting research for ecosystem development',
            'Generating anonymized impact reports'
          ]
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: Globe,
      content: [
        {
          subtitle: 'Within Sheraa Ecosystem',
          items: [
            'Sharing participant profiles with mentors and advisors (with consent)',
            'Facilitating introductions between startups and investors',
            'Creating directory listings for community members',
            'Promoting success stories and achievements (with permission)'
          ]
        },
        {
          subtitle: 'Service Providers',
          items: [
            'Technology platforms for program delivery and communication',
            'Event management and registration services',
            'Payment processing for program fees and services',
            'Professional services including legal and accounting support'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          items: [
            'Compliance with UAE federal and emirate-specific regulations',
            'Cooperation with government agencies and authorities',
            'Protection of Sheraa\'s rights and legal interests',
            'Prevention of fraud, abuse, or illegal activities'
          ]
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Technical Safeguards',
          items: [
            'Encryption of data in transit and at rest',
            'Secure cloud storage with regular backups',
            'Multi-factor authentication for staff access',
            'Regular security audits and vulnerability assessments'
          ]
        },
        {
          subtitle: 'Administrative Controls',
          items: [
            'Access controls limiting data access to authorized personnel',
            'Regular staff training on data protection and privacy',
            'Incident response procedures for potential breaches',
            'Vendor agreements ensuring third-party compliance'
          ]
        },
        {
          subtitle: 'Physical Security',
          items: [
            'Secure facilities with controlled access',
            'Surveillance systems and security protocols',
            'Secure disposal of physical documents and devices',
            'Visitor access controls and monitoring'
          ]
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: Eye,
      content: [
        {
          subtitle: 'Access & Control',
          items: [
            'Request access to your personal information we hold',
            'Update or correct inaccurate personal information',
            'Request deletion of your personal information (subject to legal requirements)',
            'Object to or restrict certain processing activities'
          ]
        },
        {
          subtitle: 'Communication Preferences',
          items: [
            'Opt-out of marketing communications at any time',
            'Choose specific types of updates you wish to receive',
            'Set preferences for how we contact you',
            'Request removal from specific mailing lists'
          ]
        },
        {
          subtitle: 'Data Portability',
          items: [
            'Request a copy of your data in a portable format',
            'Transfer your information to another organization',
            'Receive regular reports on how your data is used',
            'Lodge complaints with relevant data protection authorities'
          ]
        }
      ]
    }
  ];

  return (
    <MainLayout
      seoTitle="Privacy Policy - Sheraa Data Protection & User Rights"
      seoDescription="Learn how Sheraa protects your personal information, handles data securely, and respects your privacy rights in our entrepreneurship ecosystem."
      seoKeywords="Sheraa privacy policy, data protection UAE, startup incubator privacy, personal information security"
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
                <Shield className="w-5 h-5 text-sheraa-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Your Privacy Matters
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
                Privacy Policy
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                At Sheraa, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Version 2.1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Privacy Principles</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These core principles guide how we handle your personal information and protect your privacy.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
              {[
                {
                  title: 'Transparency',
                  description: 'Clear communication about data collection and usage',
                  icon: Eye,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Security',
                  description: 'Industry-leading protection for your information',
                  icon: Lock,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Control',
                  description: 'You decide how your data is used and shared',
                  icon: Users,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'Compliance',
                  description: 'Full adherence to UAE and international standards',
                  icon: Shield,
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((principle, idx) => (
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
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${principle.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <principle.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
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
                      
                      <div className="space-y-8">
                        {section.content.map((subsection, sidx) => (
                          <div key={sidx}>
                            <h3 className="text-lg font-semibold mb-4 text-sheraa-primary">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-3">
                              {subsection.items.map((item, iidx) => (
                                <li key={iidx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                  <div className="w-2 h-2 bg-sheraa-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* Contact Information */}
        <section className="py-20">
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
                  <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy, your personal information, 
                    or wish to exercise your rights, please don't hesitate to contact our Data Protection Officer.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Data Protection Officer</p>
                    <p className="text-sheraa-primary">privacy@sheraa.ae</p>
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

export default PrivacyPolicyPage;
