
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { MapPin, Users, Award, Target, Heart, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  const hubs = [
    {
      name: 'Sheraa HQ (SRTIP)',
      address: 'Sharjah Research Technology and Innovation Park',
      description: 'Our headquarters connects startups with cutting-edge research and technology facilities.',
      phone: '+971 6 509 4000'
    },
    {
      name: 'AUS Hub',
      address: 'Ground Floor, Library Building, American University of Sharjah',
      description: 'Engaging students and faculty, fostering early-stage innovation.',
      phone: '+971 6 509 4000'
    },
    {
      name: 'UOS Hub',
      address: 'W3 Building, University of Sharjah',
      description: 'Connecting with key academic institutions and young talent.',
      phone: '+971 6 509 4010'
    }
  ];

  const leadership = [
    {
      name: 'H.E. Sheikha Bodour Bint Sultan Al Qasimi',
      role: 'Chairperson',
      image: '👑'
    },
    {
      name: 'Najla Al Midfa',
      role: 'Vice-Chairperson',
      image: '🌟'
    },
    {
      name: 'Sara Al Nuaimi',
      role: 'Chief Executive Officer',
      image: '🚀'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Founder-First',
      description: 'We believe entrepreneurs are the driving force of progress. Our founder-first philosophy guides everything we do.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'We foster an inclusive, collaborative community where founders, mentors, and investors connect and grow together.'
    },
    {
      icon: Target,
      title: 'Impact-Focused',
      description: 'We aim to cultivate changemakers who address pressing challenges and contribute positively to society.'
    },
    {
      icon: Sparkles,
      title: 'Innovation-Led',
      description: 'We embrace creativity and innovation, blending traditional values with modern entrepreneurial thinking.'
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
            <Badge className="mb-6 bg-sheraa-primary/10 text-sheraa-primary hover:bg-sheraa-primary/20">
              <Award className="w-4 h-4 mr-2" />
              About Sheraa
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight">
              Empowering Entrepreneurs, Building Sharjah's Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              At Sheraa (Sharjah Entrepreneurship Center), we are deeply inspired by Sharjah's unique ability to blend 
              collective strength and unity with individual expression and creativity. This synergy fuels our mission 
              to cultivate a world-class entrepreneurship ecosystem.
            </p>
          </motion.div>

          {/* Our Approach */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Approach: Founder-First, Community-Driven
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-sheraa-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Our Vision & Impact */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Vision & Impact</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  To establish Sharjah as a leading global hub for entrepreneurship and innovation, recognized for its 
                  supportive ecosystem, high-impact startups, and contribution to a diversified, knowledge-based economy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Since our launch in 2016 under the patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, 
                  Ruler of Sharjah, we have made a significant mark on the regional entrepreneurship landscape.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sheraa-primary">180+</div>
                    <div className="text-sm text-gray-600">Startups Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sheraa-primary">$248M+</div>
                    <div className="text-sm text-gray-600">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sheraa-primary">1,900+</div>
                    <div className="text-sm text-gray-600">Jobs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sheraa-primary">71%</div>
                    <div className="text-sm text-gray-600">Survival Rate</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-sheraa-primary to-sheraa-teal rounded-3xl p-8 text-white">
                  <Target className="w-16 h-16 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90">
                    To cultivate a world-class entrepreneurship ecosystem in Sharjah, nurturing the next generation 
                    of innovators and supporting impactful ventures at every stage of their journey.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Leadership
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="text-center border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-8">
                      <div className="text-6xl mb-4">{leader.image}</div>
                      <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-sheraa-primary font-medium">{leader.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Our Hubs */}
          <section className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Hubs: At the Heart of Innovation
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {hubs.map((hub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-sheraa-primary" />
                        <h3 className="text-xl font-bold">{hub.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{hub.description}</p>
                      <div className="text-sm text-gray-500 mb-2">{hub.address}</div>
                      <div className="text-sm text-sheraa-primary font-medium">{hub.phone}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Be part of Sharjah's dynamic entrepreneurship ecosystem and help shape the future of innovation in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/community/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
