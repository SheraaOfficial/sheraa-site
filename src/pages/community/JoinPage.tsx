
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Users, Wifi, Network, DollarSign, MapPin, Calendar,
  Sparkles, CheckCircle, ArrowRight, Building2, Coffee,
  MessageSquare, BookOpen, Star, Crown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    company: "",
    stage: "",
    industry: "",
    description: ""
  });

  const membershipBenefits = [
    {
      category: "Workspace & Facilities",
      icon: Building2,
      color: "text-blue-600",
      benefits: [
        { name: "Free Co-working Access", description: "Utilize inspiring co-working spaces at Sheraa HQ (SRTIP) and university hubs" },
        { name: "Meeting Rooms", description: "Book professional meeting spaces for client meetings and team sessions" },
        { name: "High-Speed Internet", description: "Reliable, fast internet connectivity for seamless work" }
      ]
    },
    {
      category: "Network & Connections", 
      icon: Network,
      color: "text-purple-600",
      benefits: [
        { name: "Community Platform Access", description: "Connect with fellow founders via our exclusive Slack workspace" },
        { name: "Investor Introductions", description: "Get facilitated connections to VCs, angels, and potential partners" },
        { name: "Mentor Network", description: "Access our network of subject matter experts and coaches" },
        { name: "Exclusive Events", description: "Receive invitations to key ecosystem events and speaking opportunities" }
      ]
    },
    {
      category: "Resources & Support",
      icon: BookOpen, 
      color: "text-green-600",
      benefits: [
        { name: "Perks & Credits", description: "Benefit from credits for free or discounted services to help get started" },
        { name: "Professional Services", description: "Access vetted service providers at preferential rates" },
        { name: "Knowledge Base", description: "Access to exclusive guides, templates, and resources" }
      ]
    },
    {
      category: "Cost Savings",
      icon: DollarSign,
      color: "text-orange-600", 
      benefits: [
        { name: "Subsidized Incorporation", description: "Discounted packages for setting up your business in Sharjah free zones" },
        { name: "Service Discounts", description: "Reduced rates on legal, HR, accounting, and marketing services" }
      ]
    }
  ];

  const membershipTiers = [
    {
      name: "Explorer",
      price: "Free",
      period: "",
      description: "Perfect for early-stage founders exploring opportunities",
      features: [
        "Basic co-working access (5 days/month)",
        "Community platform access", 
        "Networking events",
        "Resource library access"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Founder",
      price: "AED 500",
      period: "/month", 
      description: "Ideal for active founders building their ventures",
      features: [
        "Unlimited co-working access",
        "Priority mentor matching",
        "Investor introduction facilitation",
        "Professional services discounts",
        "Meeting room credits",
        "All Explorer benefits"
      ],
      popular: true,
      color: "border-sheraa-primary"
    },
    {
      name: "Scale",
      price: "AED 1,200",
      period: "/month",
      description: "For growing startups ready to scale operations", 
      features: [
        "Dedicated desk space",
        "Priority event access",
        "Advanced mentor network",
        "Partnership facilitation",
        "Custom workshop access",
        "All Founder benefits"
      ],
      popular: false,
      color: "border-sheraa-secondary"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will review your application and contact you within 2-3 business days.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      stage: "",
      industry: "",
      description: ""
    });
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Crown className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Flexible Support for Founders
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Unlock Your Potential with Sheraa Membership
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Designed for founders with a product in the market, Sheraa Membership provides flexible, 
              on-demand access to the resources and connections you need to grow.
            </p>
          </motion.div>

          {/* Membership Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Membership</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Select the plan that best fits your startup's current needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.1 * index), duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className={`relative ${tier.color} ${tier.popular ? 'border-2 shadow-xl' : 'border'} hover:shadow-lg transition-all duration-300 h-full`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-sheraa-primary">{tier.price}</span>
                        <span className="text-gray-600">{tier.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{tier.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Benefits</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to grow your startup in one place</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {membershipBenefits.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.5 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center">
                          <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.benefits.map((benefit, idx) => (
                          <div key={idx} className="border-l-2 border-sheraa-primary/20 pl-4">
                            <h4 className="font-semibold text-sm mb-1">{benefit.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">{benefit.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-2">Apply for Membership</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">Tell us about your startup and we'll get back to you within 2-3 business days</p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company/Startup Name *</label>
                      <Input
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Stage *</label>
                      <Input
                        required
                        value={formData.stage}
                        onChange={(e) => setFormData({...formData, stage: e.target.value})}
                        placeholder="e.g., Pre-seed, Seed, Series A"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry/Sector *</label>
                    <Input
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      placeholder="e.g., FinTech, HealthTech, EdTech"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your startup *</label>
                    <Textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Brief description of your product, target market, and current traction..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                    Submit Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPage;
