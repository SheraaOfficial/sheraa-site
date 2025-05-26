
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, MapPin, Network, Star, ArrowRight, 
  Building, Coffee, Handshake, Award
} from 'lucide-react';

const CommunityJoin: React.FC = () => {
  const membershipBenefits = [
    {
      category: "Workspace & Facilities",
      benefits: [
        {
          title: "Free Co-working Access",
          description: "Utilize inspiring co-working spaces at Sheraa HQ (SRTIP) and university hubs (AUS & UOS).",
          icon: Building
        }
      ]
    },
    {
      category: "Network & Connections", 
      benefits: [
        {
          title: "Community Platform Access",
          description: "Connect with fellow founders, mentors, and the Sheraa team via our exclusive Slack workspace.",
          icon: Users
        },
        {
          title: "Investor & Partner Introductions",
          description: "Get facilitated connections to VCs, angel investors, potential customers, and corporate/government partners.",
          icon: Handshake
        },
        {
          title: "Mentor & Expert Network",
          description: "Access our network of subject matter experts, coaches, and mentors for guidance.",
          icon: Star
        }
      ]
    },
    {
      category: "Resources & Support",
      benefits: [
        {
          title: "Perks & Credits",
          description: "Benefit from credits for free or discounted services to help get started.",
          icon: Award
        },
        {
          title: "Discounted Professional Services",
          description: "Access vetted service providers (legal, HR, accounting, marketing, IT, business setup) at preferential rates.",
          icon: Coffee
        }
      ]
    }
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
                Unlock Your Potential<br />Flexible Support with Sheraa Membership
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Designed for founders with a product in the market, Sheraa Membership provides flexible, on-demand access to the resources and connections you need to grow, without the structure of a long-term program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  Apply for Membership Today
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who is Membership For */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who is Membership For?</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Product Founders",
                    description: "Founders with a launched product or service",
                    icon: Building
                  },
                  {
                    title: "Community Seekers",
                    description: "Startups seeking community, networking, and ad-hoc resources",
                    icon: Users
                  },
                  {
                    title: "Flexible Entrepreneurs",
                    description: "Entrepreneurs desiring flexibility and connection without program commitment",
                    icon: Network
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <item.icon className="w-12 h-12 text-sheraa-primary mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Benefits</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access a suite of resources designed to support your startup journey
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {membershipBenefits.map((category, categoryIdx) => (
                <motion.div
                  key={categoryIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * categoryIdx, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.benefits.map((benefit, benefitIdx) => (
                      <Card key={benefitIdx} className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <benefit.icon className="w-8 h-8 text-sheraa-primary mb-4" />
                          <h4 className="text-lg font-semibold mb-3">{benefit.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Apply</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Check Eligibility",
                    description: "Ensure you meet the eligibility criteria (founder with a market-ready product)"
                  },
                  {
                    step: "02", 
                    title: "Complete Application",
                    description: "Complete the online application form, providing details about your startup"
                  },
                  {
                    step: "03",
                    title: "Review Process",
                    description: "The Sheraa team will review your application and contact you regarding the outcome"
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-sheraa-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </motion.div>
                ))}
              </div>
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
              Connect with like-minded entrepreneurs and access the resources you need to grow your startup.
            </p>
            <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50">
              Apply for Membership Today
            </Button>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default CommunityJoin;
