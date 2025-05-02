
import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Building, Lightbulb, Calendar, Briefcase } from 'lucide-react';

const MembershipSection = () => {
  const benefits = [
    {
      category: "Workspace & Facilities",
      items: [
        "Free co-working access at SRTIP, AUS & UOS hubs",
        "Meeting room usage (subject to availability)",
        "Access to event spaces (subject to availability)"
      ],
      icon: Building
    },
    {
      category: "Network & Connections",
      items: [
        "Exclusive Slack community access",
        "Investor & partner introductions",
        "Access to mentors & industry experts",
        "Exclusive event invitations"
      ],
      icon: Users
    },
    {
      category: "Resources & Support",
      items: [
        "Startup perks & service credits",
        "Discounted professional services",
        "Knowledge resources access",
        "Program application priority"
      ],
      icon: Lightbulb
    },
    {
      category: "Events & Opportunities",
      items: [
        "SEF ticket discounts",
        "Networking events & mixers",
        "Potential speaking opportunities",
        "Demo day participation"
      ],
      icon: Calendar
    },
    {
      category: "Business Setup Benefits",
      items: [
        "Subsidized free zone incorporation",
        "Business setup guidance",
        "Legal & licensing support",
        "Official community affiliation"
      ],
      icon: Briefcase
    }
  ];

  return (
    <div className="py-16 bg-sheraa-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="gradient-warm" animation="shimmer" className="mb-3">Join Our Community</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark">Sheraa Membership</h2>
          <p className="text-gray-600">
            Designed for founders with a product in the market, Sheraa Membership provides flexible, 
            on-demand access to the resources and connections you need to grow, without the structure 
            of a long-term program.
          </p>
        </motion.div>

        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white text-center py-8">
              <CardTitle className="text-2xl font-bold">Membership Benefits</CardTitle>
              <CardDescription className="text-white/80">Access a suite of resources designed to support your startup journey</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-sheraa-light rounded-lg p-5"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center">
                        <benefit.icon size={20} className="text-sheraa-primary" />
                      </div>
                      <h3 className="font-semibold text-lg text-sheraa-dark">{benefit.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-sheraa-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center bg-gray-50 p-6">
              <p className="text-center max-w-2xl mb-6 text-gray-600">
                Ready to join our vibrant community of founders and innovators? Apply for Sheraa membership 
                today and take your startup to the next level with our comprehensive support ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <GradientButton size="lg">Apply for Membership</GradientButton>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-sheraa-dark">Membership Eligibility</h3>
          <p className="text-gray-600 mb-6">
            Sheraa Membership is designed for founders with launched products or services who are 
            seeking community, networking, and flexible resources without the structure of a long-term program.
          </p>
          
          <h4 className="font-medium text-lg mb-3 text-sheraa-dark">How to Apply:</h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Ensure you meet the eligibility criteria (founder with a market-ready product)</li>
            <li>Complete the online application form, providing details about your startup</li>
            <li>The Sheraa team will review your application and contact you regarding the outcome</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
