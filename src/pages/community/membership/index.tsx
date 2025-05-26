
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, Crown, Sparkles, ArrowRight, CheckCircle, 
  Star, Globe, Zap, Building, Coffee, Wifi, BookOpen,
  UserPlus, Target, TrendingUp, Award
} from 'lucide-react';

const MembershipLanding: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('founder');

  const membershipTiers = [
    {
      id: 'explorer',
      name: 'Explorer',
      price: 'Free',
      period: '',
      tagline: 'Start Your Journey',
      description: 'Perfect for curious minds exploring entrepreneurship',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Community events access',
        'Basic networking opportunities',
        'Resource library access',
        'Monthly workshops',
        'Co-working space (5 days/month)'
      ],
      benefits: ['Perfect for beginners', 'Risk-free exploration', 'Community connection']
    },
    {
      id: 'founder',
      name: 'Founder',
      price: 'AED 500',
      period: '/month',
      tagline: 'Build Your Future',
      description: 'For serious entrepreneurs ready to scale',
      color: 'from-sheraa-primary to-sheraa-teal',
      popular: true,
      features: [
        'Unlimited co-working access',
        'Priority mentor matching',
        'Investor introductions',
        'Professional services discounts',
        'Meeting room credits',
        'All Explorer benefits'
      ],
      benefits: ['Direct investor access', 'Premium mentorship', 'Growth acceleration']
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 'AED 1,200',
      period: '/month',
      tagline: 'Dominate Your Market',
      description: 'For rapidly growing startups and established ventures',
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Dedicated workspace',
        'C-level mentor access',
        'Strategic partnerships',
        'Custom growth programs',
        'Global network access',
        'All Founder benefits'
      ],
      benefits: ['Executive mentorship', 'Strategic partnerships', 'Global expansion']
    }
  ];

  const journeySteps = [
    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the membership tier that aligns with your startup stage',
      icon: Target,
      color: 'text-blue-500'
    },
    {
      step: 2,
      title: 'Application Process',
      description: 'Complete our detailed application with startup information',
      icon: UserPlus,
      color: 'text-sheraa-primary'
    },
    {
      step: 3,
      title: 'Review & Interview',
      description: 'Our team reviews your application and conducts a brief interview',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      step: 4,
      title: 'Welcome & Onboarding',
      description: 'Get matched with mentors and start your Sheraa journey',
      icon: Award,
      color: 'text-green-500'
    }
  ];

  const communityStats = [
    { icon: Users, number: '500+', label: 'Active Members', color: 'text-blue-600' },
    { icon: Building, number: '180+', label: 'Startups Supported', color: 'text-sheraa-primary' },
    { icon: TrendingUp, number: '$248M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Globe, number: '45+', label: 'Countries Represented', color: 'text-purple-600' }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
            animate={{ 
              y: [-20, 20, -20],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"
            animate={{ 
              y: [20, -20, 20],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-5 h-5 text-sheraa-primary" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Join Sheraa's Elite Community
              </span>
              <Sparkles className="w-4 h-4 text-sheraa-teal" />
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-500 bg-clip-text text-transparent">
                Transform Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sheraa-orange bg-clip-text text-transparent">
                Into Empires
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join an exclusive community where ambitious founders, seasoned investors, and industry leaders 
              collaborate to build the next generation of successful startups.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {communityStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center group hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Card className="p-6 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                      <CardContent className="p-0">
                        <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                        <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Membership Tiers */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Choose Your Growth Path
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every entrepreneur's journey is unique. Find the membership tier that matches your ambition.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className={`relative h-full border-2 ${
                    tier.popular 
                      ? 'border-sheraa-primary shadow-2xl shadow-sheraa-primary/20' 
                      : 'border-gray-200/50 hover:border-sheraa-primary/30'
                  } bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm transition-all duration-300 overflow-hidden`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        Most Popular
                        <Star className="w-4 h-4" />
                      </div>
                    )}

                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="text-center mb-8">
                        <Badge className={`mb-4 bg-gradient-to-r ${tier.color} text-white border-0`}>
                          {tier.tagline}
                        </Badge>
                        <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                        <div className="mb-4">
                          <span className="text-5xl font-black bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                            {tier.price}
                          </span>
                          <span className="text-lg text-gray-600">{tier.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{tier.description}</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sheraa-primary">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        asChild
                        className={`w-full ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90' 
                            : 'bg-gray-900 hover:bg-gray-800'
                        } text-white font-semibold py-3`}
                        size="lg"
                      >
                        <Link to={`/community/membership/apply?tier=${tier.id}`}>
                          Start Application
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Application Journey */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Journey to Success
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A streamlined process designed to match you with the right resources and mentors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-gray-100">
                        <IconComponent className={`w-10 h-10 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-sheraa-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="mb-8"
              >
                <Sparkles className="w-20 h-20 mx-auto text-yellow-300" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Join the Elite?
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                Your startup's transformation begins with a single application. 
                Join founders who've raised millions and built category-defining companies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 px-10 py-6 text-lg font-semibold shadow-2xl">
                  <Link to="/community/membership/apply">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Start Your Application
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg backdrop-blur-sm">
                  <Link to="/community/membership/success-stories">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
};

export default MembershipLanding;
