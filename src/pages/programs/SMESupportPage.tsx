
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Globe, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SMESupportPage = () => {
  const supportAreas = [
    {
      icon: TrendingUp,
      title: "Access to Finance",
      description: "Connect with financing solutions through partners like Emirates Development Bank (EDB) for working capital, equipment, and expansion projects."
    },
    {
      icon: Globe,
      title: "Market Access & Export",
      description: "Facilitate connections to new markets and export opportunities via Sharjah Chamber of Commerce and Etihad Credit Insurance."
    },
    {
      icon: Building2,
      title: "Innovation & Technology",
      description: "Encourage adoption of advanced manufacturing, digital transformation, and sustainable practices through our Centers of Excellence."
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Access workshops, training programs, and mentorship from industry experts facilitated by Sheraa and partners."
    }
  ];

  const partners = [
    "Emirates Development Bank (EDB)",
    "Sharjah Chamber of Commerce and Industry (SCCI)",
    "Etihad Credit Insurance (ECI)",
    "Ministry of Industry and Advanced Technology (MoIAT)"
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white to-sheraa-background-soft pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                SME Support
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Elevating Sharjah's SMEs: Driving Growth and Innovation for established businesses 
                across diverse sectors through strategic partnerships and ecosystem support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-sheraa-primary/10 rounded-3xl p-8 md:p-12 mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Why SME Support Matters</h2>
                  <p className="text-gray-700 mb-6">
                    Small and Medium Enterprises (SMEs) are the bedrock of Sharjah's vibrant economy, 
                    representing over 60,000 businesses across diverse sectors.
                  </p>
                  <p className="text-gray-700">
                    Supporting SMEs alongside startups creates a more robust and resilient economic landscape, 
                    enhancing competitiveness and contributing to Sharjah's long-term economic diversification goals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-4xl font-bold text-sheraa-primary mb-2">60,000+</div>
                    <div className="text-lg font-semibold mb-4">SMEs in Sharjah</div>
                    <div className="text-sm text-gray-600">Driving economic growth and innovation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sheraa facilitates access to support mechanisms crucial for SME growth through strategic partnerships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center mb-6">
                        <area.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Partners */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Key Partners</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with leading organizations to provide comprehensive SME support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-sheraa-primary rounded-full"></div>
                    <span className="font-medium text-gray-800">{partner}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Benefit */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Benefit?</h2>
              <div className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 rounded-3xl p-8 md:p-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Established Small and Medium Enterprises based in or looking to expand into Sharjah, 
                  particularly those operating in or seeking to innovate within sectors like 
                  <span className="font-semibold text-sheraa-primary"> Advanced Manufacturing, CPG, Sustainability</span>, 
                  and others aligned with Sharjah's economic priorities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Engage */}
        <section className="py-20 bg-sheraa-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Engage</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multiple pathways to access SME support and join the Sheraa ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Explore Partnerships</h3>
                  <p className="text-sm text-gray-600 mb-4">Learn about our key partners and their specific support offerings</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/community/partnerships">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Join Community</h3>
                  <p className="text-sm text-gray-600 mb-4">Consider Sheraa Membership for access to networks and resources</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/community/membership">Join Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Attend Events</h3>
                  <p className="text-sm text-gray-600 mb-4">Participate in SEF and other networking opportunities</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/events">View Events</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-600 mb-4">Reach out to discuss your specific needs and support</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your SME?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Connect with Sheraa's SME support network and unlock new opportunities for innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50" asChild>
                  <Link to="/community/partnerships" className="flex items-center gap-2">
                    Explore Resources
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SMESupportPage;
