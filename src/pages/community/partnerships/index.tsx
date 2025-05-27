import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, Building2, Users, Globe, ArrowRight } from 'lucide-react';

const CommunityPartnerships: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Corporate Innovation',
      description: 'Partner with us to drive innovation within your organization and access cutting-edge solutions.',
      icon: Building2,
      features: [
        'Innovation workshops',
        'Startup scouting',
        'Proof of concept programs',
        'Corporate venture opportunities'
      ]
    },
    {
      title: 'Government Collaboration',
      description: 'Work with us to shape policies and initiatives that support entrepreneurship and innovation.',
      icon: Globe,
      features: [
        'Policy development',
        'Program co-creation',
        'Research partnerships',
        'Public-private initiatives'
      ]
    },
    {
      title: 'Mentorship Network',
      description: 'Share your expertise and guide the next generation of entrepreneurs.',
      icon: Users,
      features: [
        'One-on-one mentoring',
        'Workshop facilitation',
        'Industry insights',
        'Network access'
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-sheraa-light/30 via-white to-purple-50/30 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-sheraa-primary/10 text-sheraa-primary hover:bg-sheraa-primary/20">
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-purple-500 to-sheraa-teal bg-clip-text text-transparent leading-tight">
              Shape the Future Together
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Join forces with Sheraa to drive innovation, foster entrepreneurship, and create lasting impact in Sharjah's ecosystem.
            </p>
          </motion.div>

          {/* Partnership Types */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{type.description}</p>
                        
                        <ul className="space-y-2 mb-8">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                          <Link to="/contact" className="flex items-center justify-center gap-2">
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary to-purple-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can work together to create meaningful impact in Sharjah's innovation ecosystem.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-white/90">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPartnerships; 