
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
  UserPlus, Target, TrendingUp, Award, Rocket,
  Brain, Network, Shield, Calendar, MessageSquare,
  Trophy, Briefcase, Heart, ChevronRight, User
} from 'lucide-react';

const MembershipLanding: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string>('founder');

  const personas = [
    {
      id: 'aspiring',
      title: 'Aspiring Founder',
      subtitle: 'Have an idea, need guidance',
      description: 'Turn your vision into reality with our startup foundation programs',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'founder',
      title: 'Active Founder',
      subtitle: 'Building and scaling',
      description: 'Access the resources, network, and support to accelerate growth',
      icon: TrendingUp,
      color: 'from-sheraa-primary to-sheraa-teal'
    },
    {
      id: 'ceo',
      title: 'CEO / Scale-up',
      subtitle: 'Leading established company',
      description: 'Strategic partnerships and executive-level networking opportunities',
      icon: Crown,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ecosystem',
      title: 'Ecosystem Player',
      subtitle: 'Investor, mentor, or partner',
      description: 'Drive innovation and discover the next generation of startups',
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const membershipTiers = [
    {
      id: 'explorer',
      name: 'Explorer',
      price: 'Free',
      period: '',
      tagline: 'Start Your Journey',
      description: 'Perfect for aspiring founders exploring entrepreneurship',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Access to community events (monthly meetups, workshops)',
        'Basic networking opportunities with peers',
        'Resource library access (templates, guides)',
        'Co-working space access (5 days/month)',
        'Newsletter and ecosystem updates'
      ],
      benefits: ['Risk-free exploration', 'Community connection', 'Learning resources'],
      audienceMatch: ['aspiring']
    },
    {
      id: 'founder',
      name: 'Founder',
      price: 'AED 500',
      period: '/month',
      tagline: 'Build Your Future',
      description: 'For serious entrepreneurs ready to scale their ventures',
      color: 'from-sheraa-primary to-sheraa-teal',
      popular: true,
      features: [
        'Unlimited co-working access across all 3 hubs',
        'Priority mentor matching and 1:1 sessions',
        'Investor introduction facilitation',
        'Professional services discounts (legal, accounting, marketing)',
        'Meeting room credits (8 hours/month)',
        'Exclusive founder-only events and mastermind groups',
        'Pitch practice sessions and feedback',
        'All Explorer benefits included'
      ],
      benefits: ['Direct investor access', 'Premium mentorship', 'Growth acceleration'],
      audienceMatch: ['founder', 'aspiring']
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
        'Dedicated workspace with personalized setup',
        'C-level mentor access and executive coaching',
        'Strategic partnership facilitation',
        'Custom growth programs and consulting',
        'Global network access and international connections',
        'Priority access to all Sheraa programs',
        'Board advisory matching for governance',
        'VIP event access and speaking opportunities',
        'All Founder benefits included'
      ],
      benefits: ['Executive mentorship', 'Strategic partnerships', 'Global expansion support'],
      audienceMatch: ['ceo', 'founder']
    },
    {
      id: 'ecosystem',
      name: 'Ecosystem Partner',
      price: 'Custom',
      period: '',
      tagline: 'Drive Innovation',
      description: 'For investors, corporates, and ecosystem enablers',
      color: 'from-green-500 to-emerald-500',
      popular: false,
      features: [
        'Curated deal flow and startup access',
        'Co-investment opportunities with other partners',
        'Corporate innovation consulting',
        'Exclusive ecosystem events and roundtables',
        'Thought leadership and speaking opportunities',
        'Portfolio company support and advisory',
        'Custom partnership structures',
        'Market intelligence and trend reports'
      ],
      benefits: ['Quality deal flow', 'Strategic partnerships', 'Market insights'],
      audienceMatch: ['ecosystem']
    }
  ];

  const roiCalculator = {
    aspiring: [
      { metric: 'Learning Acceleration', value: '6x faster than self-study', icon: Brain },
      { metric: 'Network Growth', value: '200+ founder connections', icon: Users },
      { metric: 'Cost Savings', value: 'AED 15,000+ in free resources', icon: Shield }
    ],
    founder: [
      { metric: 'Funding Success Rate', value: '3x higher with our network', icon: TrendingUp },
      { metric: 'Time to Market', value: '40% faster product launches', icon: Zap },
      { metric: 'Professional Savings', value: 'AED 25,000+ annual discounts', icon: Building }
    ],
    ceo: [
      { metric: 'Strategic Partnerships', value: '15+ potential partners', icon: Network },
      { metric: 'Market Expansion', value: 'Access to 25+ countries', icon: Globe },
      { metric: 'Executive Network', value: '100+ C-level connections', icon: Crown }
    ],
    ecosystem: [
      { metric: 'Deal Flow Quality', value: '180+ vetted startups', icon: Target },
      { metric: 'Portfolio Growth', value: '85% survival rate', icon: Trophy },
      { metric: 'Market Intelligence', value: 'Weekly insights & reports', icon: BookOpen }
    ]
  };

  const successStories = {
    aspiring: [
      {
        name: 'Layla Ahmed',
        role: 'Student → Founder',
        company: 'EduTech Startup',
        achievement: 'Raised AED 200k seed funding',
        quote: 'Sheraa\'s Explorer membership gave me the foundation I needed to transform my idea into a funded startup.'
      }
    ],
    founder: [
      {
        name: 'Omar Hassan',
        role: 'Founder, FoodDelivery+',
        company: 'B2B Food Platform',
        achievement: 'Scaled to AED 2M ARR',
        quote: 'The investor connections through Sheraa were game-changing. We closed our Series A in just 4 months.'
      }
    ],
    ceo: [
      {
        name: 'Sarah Al-Mansoori',
        role: 'CEO, FinanceFlow',
        company: 'B2B FinTech',
        achievement: 'Expanded to 8 countries',
        quote: 'Sheraa\'s Scale membership opened doors to partnerships that accelerated our regional expansion.'
      }
    ],
    ecosystem: [
      {
        name: 'Ahmed Al-Rashid',
        role: 'Angel Investor',
        company: 'Investment Portfolio',
        achievement: '12 successful investments',
        quote: 'The quality of startups in Sheraa\'s ecosystem is exceptional. My hit rate has tripled.'
      }
    ]
  };

  const communityStats = [
    { icon: Users, number: '500+', label: 'Active Members', color: 'text-blue-600' },
    { icon: Building, number: '180+', label: 'Startups Supported', color: 'text-sheraa-primary' },
    { icon: TrendingUp, number: '$248M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Globe, number: '45+', label: 'Countries Represented', color: 'text-purple-600' }
  ];

  const filteredTiers = membershipTiers.filter(tier => 
    tier.audienceMatch.includes(selectedPersona)
  );

  const selectedPersonaData = personas.find(p => p.id === selectedPersona);
  const roiData = roiCalculator[selectedPersona as keyof typeof roiCalculator];
  const storyData = successStories[selectedPersona as keyof typeof successStories][0];

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
                Where Ambition
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sheraa-orange bg-clip-text text-transparent">
                Meets Opportunity
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join an exclusive community where ambitious founders, seasoned investors, and industry leaders 
              collaborate to build the next generation of successful companies.
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

          {/* Persona Selection */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Are You?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose your entrepreneurial journey stage to see personalized membership options and ROI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {personas.map((persona, index) => {
                const IconComponent = persona.icon;
                const isSelected = selectedPersona === persona.id;
                
                return (
                  <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedPersona(persona.id)}
                  >
                    <Card className={`h-full border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-sheraa-primary shadow-xl shadow-sheraa-primary/20 bg-sheraa-primary/5' 
                        : 'border-gray-200/50 hover:border-sheraa-primary/30 bg-white/80'
                    } backdrop-blur-sm`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-4 ${
                          isSelected ? 'scale-110' : 'group-hover:scale-105'
                        } transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-sheraa-primary' : ''}`}>
                          {persona.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">{persona.subtitle}</p>
                        <p className="text-sm text-gray-600">{persona.description}</p>
                        
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-4"
                          >
                            <CheckCircle className="w-6 h-6 text-sheraa-primary mx-auto" />
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* ROI Calculator for Selected Persona */}
            {selectedPersonaData && (
              <motion.div
                key={selectedPersona}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 rounded-3xl p-8 border border-sheraa-primary/20"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Your Potential ROI as a {selectedPersonaData.title}</h3>
                  <p className="text-gray-600">See what members like you typically achieve:</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {roiData.map((roi, index) => {
                    const IconComponent = roi.icon;
                    return (
                      <div key={index} className="text-center">
                        <IconComponent className="w-12 h-12 mx-auto mb-4 text-sheraa-primary" />
                        <div className="text-2xl font-bold mb-2">{roi.value}</div>
                        <div className="text-sm text-gray-600">{roi.metric}</div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </section>

          {/* Personalized Membership Tiers */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Membership Options for {selectedPersonaData?.title}s
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tailored membership tiers designed specifically for your entrepreneurial stage and goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredTiers.map((tier, index) => (
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
                        Recommended for You
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
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
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
                        <Link to={`/community/membership/apply?tier=${tier.id}&persona=${selectedPersona}`}>
                          {tier.id === 'ecosystem' ? 'Contact Us' : 'Start Application'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Success Story */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border border-sheraa-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">{storyData.name}</h3>
                        <Badge className="bg-sheraa-primary/10 text-sheraa-primary">{storyData.role}</Badge>
                      </div>
                      <div className="text-sheraa-primary font-medium mb-2">{storyData.company}</div>
                      <div className="text-green-600 font-semibold mb-4">{storyData.achievement}</div>
                      <blockquote className="text-gray-700 italic border-l-4 border-sheraa-primary pl-4">
                        "{storyData.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Ready to Accelerate Your Success?
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                Your transformation begins with a single application. 
                Join {selectedPersonaData?.title.toLowerCase()}s who've built category-defining companies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 px-10 py-6 text-lg font-semibold shadow-2xl">
                  <Link to={`/community/membership/apply?persona=${selectedPersona}`}>
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
