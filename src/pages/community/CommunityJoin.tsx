
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, Workspace, Network, Calendar, 
  DollarSign, Building, CheckCircle, ArrowRight
} from 'lucide-react';

const CommunityJoin: React.FC = () => {
  const membershipBenefits = [
    {
      category: "Workspace & Facilities",
      icon: Workspace,
      benefits: [
        "Free Co-working Access at Sheraa HQ (SRTIP) and university hubs",
        "Meeting rooms and event spaces",
        "High-speed internet and premium amenities"
      ]
    },
    {
      category: "Network & Connections", 
      icon: Network,
      benefits: [
        "Community Platform Access via exclusive Slack workspace",
        "Investor & Partner Introductions through events and mixers",
        "Mentor & Expert Network access for guidance"
      ]
    },
    {
      category: "Events & Learning",
      icon: Calendar,
      benefits: [
        "Exclusive Event Invitations to key ecosystem events",
        "Speaking opportunities at conferences",
        "Access to workshops and masterclasses"
      ]
    },
    {
      category: "Business Support",
      icon: DollarSign,
      benefits: [
        "Perks & Credits for startup services",
        "Discounted Professional Services (legal, HR, accounting)",
        "Subsidized Free Zone Incorporation starting from $600 USD"
      ]
    }
  ];

  const eligibilityCriteria = [
    "Founder with a launched product or service in the market",
    "Seeking community, networking, and flexible support",
    "Committed to contributing to the Sheraa ecosystem",
    "Based in or expanding to the UAE market"
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
              <Badge variant="outline" className="mb-6 px-6 py-2 text-sheraa-primary border-sheraa-primary/30">
                Flexible Support for Founders
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Unlock Your Potential<br />with Sheraa Membership
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Designed for founders with a product in the market, Sheraa Membership provides flexible, on-demand access to the resources and connections you need to grow, without the structure of a long-term program.
              </p>
              
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl">
                Apply for Membership Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Benefits</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access a suite of resources designed to support your startup journey with the flexibility you need.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {membershipBenefits.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="w-6 h-6 text-sheraa-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {category.benefits.map((benefit, benefitIdx) => (
                          <div key={benefitIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
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

        {/* Eligibility Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Can Apply?</h2>
              
              <Card className="bg-white dark:bg-sheraa-dark border-sheraa-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-sheraa-primary" />
                        Eligibility Criteria
                      </h3>
                      <div className="space-y-4">
                        {eligibilityCriteria.map((criteria, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{criteria}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Building className="w-5 h-5 text-sheraa-primary" />
                        Application Process
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sheraa-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                          <span className="text-sm">Complete the online application form</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sheraa-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                          <span className="text-sm">Sheraa team reviews your application</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sheraa-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                          <span className="text-sm">Welcome to the Sheraa community!</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the next step in your entrepreneurial journey. Connect with like-minded founders, access valuable resources, and grow your startup with Sheraa's support.
            </p>
            <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl">
              Apply for Membership Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default CommunityJoin;
