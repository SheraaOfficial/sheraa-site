
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Handshake, Building, Users, DollarSign, Target, 
  Globe, ArrowRight, CheckCircle, Star, Trophy
} from 'lucide-react';

const Partnerships: React.FC = () => {
  const partnershipBenefits = [
    {
      title: "Access Innovation",
      description: "Tap into a curated pipeline of vetted startups across key sectors for investment, pilot projects, or acquisition opportunities.",
      icon: Target,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Drive Strategic Goals",
      description: "Collaborate on initiatives aligned with your CSR objectives, industry challenges, or national strategic priorities.",
      icon: Trophy,
      color: "text-green-600 bg-green-50"
    },
    {
      title: "Enhance Brand Visibility",
      description: "Position your organization as a leader in innovation through event sponsorships and program partnerships.",
      icon: Star,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Connect with Talent",
      description: "Engage with bright, entrepreneurial talent emerging from Sharjah's strong academic base.",
      icon: Users,
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const partnershipTypes = [
    {
      title: "Corporate Partners",
      description: "Sponsor programs, provide expertise, offer pilot opportunities, become a CoE partner",
      opportunities: ["Program Sponsorship", "Industry Expertise", "Pilot Projects", "Perks & Services"]
    },
    {
      title: "Government & Public Sector", 
      description: "Collaborate on strategic initiatives, co-develop challenges, align with national agendas",
      opportunities: ["Strategic Initiatives", "Challenge Development", "Policy Support", "National Alignment"]
    },
    {
      title: "Investors (VCs, Angels, CVCs)",
      description: "Access vetted deal flow through pitch events, Demo Days, and curated introductions",
      opportunities: ["Deal Flow Access", "Co-investment", "Judging Panels", "Mentorship"]
    },
    {
      title: "Mentors & Experts",
      description: "Share knowledge through our advisor network, lead workshops, provide consultations",
      opportunities: ["Advisory Network", "Workshops", "Masterclasses", "Pro-bono Consulting"]
    }
  ];

  const foundingPartners = [
    "Bee'ah Group", "Air Arabia", "Crescent Enterprises", "Sharjah Media City",
    "Sandooq Al Watan", "SRTIP", "Alef Group", "Bank of Sharjah"
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Collaborate with Sheraa<br />Invest in Sharjah's Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Sheraa thrives on collaboration. We partner with diverse organizations to build a robust and dynamic entrepreneurial ecosystem in Sharjah. Join us in shaping the future of innovation.
              </p>
              
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl">
                Become a Sheraa Partner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with Sheraa?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Partnering with Sheraa offers unique opportunities to access innovation, support emerging talent, and contribute to the region's economic growth.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {partnershipBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Opportunities for Collaboration</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We offer diverse partnership models to match your organization's goals and expertise.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {partnershipTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-sheraa-primary">{type.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{type.description}</p>
                      
                      <div className="space-y-3">
                        {type.opportunities.map((opportunity, oppIdx) => (
                          <div key={oppIdx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{opportunity}</span>
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

        {/* Founding Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Esteemed Partners</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We are proud to collaborate with visionary partners who share our commitment to fostering entrepreneurship across diverse sectors.
              </p>
            </motion.div>
            
            <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {foundingPartners.map((partner, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-sheraa-dark shadow-md flex items-center justify-center mb-3">
                        <Building className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <p className="text-sm font-medium">{partner}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-8 pt-8 border-t border-sheraa-primary/20">
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>140+ Ecosystem Partners</strong> across government, industry, academia, and investment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape the Future Together?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can collaborate to achieve shared goals and make a lasting impact on Sharjah's innovation ecosystem.
            </p>
            <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl">
              Start Partnership Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default Partnerships;
