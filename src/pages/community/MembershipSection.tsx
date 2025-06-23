
import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Building, Lightbulb, Calendar, Briefcase, Star, Crown, Rocket } from 'lucide-react';

const MembershipSection = () => {
  const membershipTiers = [
    {
      name: "Explorer",
      price: "Free",
      description: "Perfect for aspiring entrepreneurs and students",
      icon: Lightbulb,
      color: "bg-blue-500",
      features: [
        "Access to co-working spaces (limited hours)",
        "Basic community platform access",
        "Monthly startup events",
        "Resource library access",
        "Networking meetups"
      ]
    },
    {
      name: "Founder",
      price: "AED 299/month",
      description: "Ideal for active founders with launched products",
      icon: Rocket,
      color: "bg-sheraa-primary",
      popular: true,
      features: [
        "Unlimited co-working access",
        "Full community platform access",
        "Priority event invitations",
        "Mentor introductions",
        "Investor pitch opportunities",
        "Discounted professional services",
        "Business setup support"
      ]
    },
    {
      name: "Scale",
      price: "AED 499/month",
      description: "For scaling startups and established businesses",
      icon: Crown,
      color: "bg-sheraa-orange",
      features: [
        "Everything in Founder tier",
        "Private office space access",
        "1-on-1 advisor sessions",
        "Corporate partnership introductions",
        "Speaking opportunities",
        "Custom workshop organization",
        "Priority program applications"
      ]
    }
  ];

  const benefits = [
    {
      category: "Workspace & Facilities",
      items: ["Free co-working access at SRTIP, AUS & UOS hubs", "Meeting room usage (subject to availability)", "Access to event spaces (subject to availability)"],
      icon: Building
    },
    {
      category: "Network & Connections",
      items: ["Exclusive Slack community access", "Investor & partner introductions", "Access to mentors & industry experts", "Exclusive event invitations"],
      icon: Users
    },
    {
      category: "Resources & Support",
      items: ["Startup perks & service credits", "Discounted professional services", "Knowledge resources access", "Program application priority"],
      icon: Lightbulb
    },
    {
      category: "Events & Opportunities",
      items: ["SEF ticket discounts", "Networking events & mixers", "Potential speaking opportunities", "Demo day participation"],
      icon: Calendar
    },
    {
      category: "Business Setup Benefits",
      items: ["Subsidized free zone incorporation", "Business setup guidance", "Legal & licensing support", "Official community affiliation"],
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
          <Badge variant="gradient-warm" animation="shimmer" className="mb-3 bg-sheraa-primary my-0 py-0 px-[24px] mx-0">
            Community Membership Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark">
            Choose Your Entrepreneurial Journey
          </h2>
          <p className="text-gray-600">
            Flexible membership options designed to support founders at every stage, 
            from early ideation to scaling your venture across the region.
          </p>
        </motion.div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-sheraa-orange text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card className={`border-0 shadow-xl h-full ${tier.popular ? 'ring-2 ring-sheraa-orange' : ''}`}>
                <CardHeader className={`${tier.color} text-white text-center py-8`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold mt-2">{tier.price}</div>
                  <CardDescription className="text-white/80 mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-sheraa-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <GradientButton 
                    className="w-full" 
                    size="lg"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.price === "Free" ? "Join Now" : "Get Started"}
                  </GradientButton>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Overview */}
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white text-center py-8">
              <CardTitle className="text-2xl font-bold">Membership Benefits</CardTitle>
              <CardDescription className="text-white/80">
                Access a comprehensive suite of resources designed to support your startup journey
              </CardDescription>
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
                Ready to join our vibrant community of founders and innovators? Choose the membership 
                tier that fits your entrepreneurial journey and unlock access to Sharjah's leading startup ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <GradientButton size="lg">Compare All Plans</GradientButton>
                <Button variant="outline" size="lg">Contact Us</Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Application Process */}
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-sheraa-dark">How to Join</h3>
          <p className="text-gray-600 mb-6">
            Our membership application process is designed to ensure we can provide the best 
            support for your entrepreneurial journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-sheraa-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sheraa-primary font-bold">1</span>
              </div>
              <h4 className="font-medium mb-2">Choose Your Plan</h4>
              <p className="text-sm text-gray-600">Select the membership tier that best fits your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sheraa-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sheraa-primary font-bold">2</span>
              </div>
              <h4 className="font-medium mb-2">Submit Application</h4>
              <p className="text-sm text-gray-600">Complete our online form with your startup details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sheraa-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sheraa-primary font-bold">3</span>
              </div>
              <h4 className="font-medium mb-2">Welcome to Sheraa</h4>
              <p className="text-sm text-gray-600">Get onboarded and start accessing your benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
