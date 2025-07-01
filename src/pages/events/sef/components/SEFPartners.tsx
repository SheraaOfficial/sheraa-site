
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, Sparkles, Trophy, Star, Crown,
  ArrowRight, Handshake, Globe, Target,
  Users, Lightbulb, Heart, Mail
} from 'lucide-react';

const SEFPartners: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const partnershipTiers = [
    {
      tier: 'Platinum',
      icon: Crown,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      benefits: [
        'Keynote speaking opportunity',
        'Premium exhibition space',
        'VIP networking access',
        'Logo on all materials',
        'Dedicated partner zone'
      ]
    },
    {
      tier: 'Gold',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      benefits: [
        'Panel speaking slot',
        'Exhibition booth',
        'Networking sessions',
        'Marketing materials',
        'Social media mentions'
      ]
    },
    {
      tier: 'Silver',
      icon: Star,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      benefits: [
        'Workshop hosting',
        'Startup pitch judging',
        'Networking access',
        'Logo placement',
        'Event materials'
      ]
    }
  ];

  const partners = [
    {
      category: 'founding',
      name: 'Strategic Partners',
      partners: [
        { name: 'Bee\'ah Group', logo: '/placeholder.svg', description: 'Sustainability Solutions', tier: 'Platinum' },
        { name: 'Air Arabia', logo: '/placeholder.svg', description: 'Aviation & Travel', tier: 'Platinum' },
        { name: 'Crescent Enterprises', logo: '/placeholder.svg', description: 'Investment & Development', tier: 'Platinum' },
        { name: 'Sharjah Media City', logo: '/placeholder.svg', description: 'Creative Industries', tier: 'Gold' },
        { name: 'SRTIP', logo: '/placeholder.svg', description: 'Research & Innovation', tier: 'Gold' },
        { name: 'Alef Group', logo: '/placeholder.svg', description: 'F&B & Retail', tier: 'Gold' }
      ]
    },
    {
      category: 'government',
      name: 'Government Partners',
      partners: [
        { name: 'Ministry of Economy', logo: '/placeholder.svg', description: 'Federal Economic Policy', tier: 'Platinum' },
        { name: 'Sharjah Chamber', logo: '/placeholder.svg', description: 'Business Development', tier: 'Gold' },
        { name: 'Emirates Development Bank', logo: '/placeholder.svg', description: 'Financial Services', tier: 'Gold' },
        { name: 'Invest Bank', logo: '/placeholder.svg', description: 'Banking Solutions', tier: 'Silver' }
      ]
    },
    {
      category: 'corporate',
      name: 'Corporate Partners',
      partners: [
        { name: 'Emirates Airlines', logo: '/placeholder.svg', description: 'Aviation Excellence', tier: 'Platinum' },
        { name: 'du Telecom', logo: '/placeholder.svg', description: 'Telecommunications', tier: 'Gold' },
        { name: 'EMAAR Properties', logo: '/placeholder.svg', description: 'Real Estate Development', tier: 'Gold' },
        { name: 'Bank of Sharjah', logo: '/placeholder.svg', description: 'Financial Services', tier: 'Silver' }
      ]
    },
    {
      category: 'ecosystem',
      name: 'Ecosystem Partners',
      partners: [
        { name: 'Endeavor UAE', logo: '/placeholder.svg', description: 'Scale-up Support', tier: 'Gold' },
        { name: 'CE-Ventures', logo: '/placeholder.svg', description: 'Venture Capital', tier: 'Silver' },
        { name: 'Jensen Matthews', logo: '/placeholder.svg', description: 'Professional Services', tier: 'Silver' },
        { name: 'Sandooq Al Watan', logo: '/placeholder.svg', description: 'Innovation Fund', tier: 'Silver' }
      ]
    }
  ];

  const partnershipOpportunities = [
    {
      title: 'Title Sponsorship',
      description: 'Become the official title partner of SEF 2026',
      icon: Crown,
      color: 'from-sheraa-sef-primary to-sheraa-sef-accent',
      benefits: ['Maximum brand visibility', 'Keynote opportunities', 'Custom activations']
    },
    {
      title: 'Zone Sponsorship',
      description: 'Sponsor specific experience zones',
      icon: Building2,
      color: 'from-blue-500 to-blue-700',
      benefits: ['Branded zone presence', 'Direct audience engagement', 'Content integration']
    },
    {
      title: 'Program Partnership',
      description: 'Partner on specific programs or tracks',
      icon: Handshake,
      color: 'from-green-500 to-green-700',
      benefits: ['Industry expertise showcase', 'Talent pipeline access', 'Innovation collaboration']
    }
  ];

  const filteredPartners = activeTab === 'all' 
    ? partners 
    : partners.filter(category => category.category === activeTab);

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'Platinum': return Crown;
      case 'Gold': return Trophy;
      case 'Silver': return Star;
      default: return Star;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'text-purple-600 bg-purple-50';
      case 'Gold': return 'text-yellow-600 bg-yellow-50';
      case 'Silver': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Handshake className="w-5 h-5 text-sheraa-sef-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              Our Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            Powered by Partnership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SEF 2026 is made possible by our incredible network of strategic partners who share our vision 
            of fostering innovation and entrepreneurship across the region.
          </p>
        </motion.div>

        {/* Partnership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Tiers</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipTiers.map((tier, idx) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-sheraa-dark dark:to-gray-800/50">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${tier.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tier.icon className={`w-8 h-8 ${tier.textColor}`} />
                    </div>
                    
                    <h4 className="text-xl font-bold mb-4">{tier.tier} Partner</h4>
                    
                    <div className="space-y-2">
                      {tier.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-sheraa-sef-primary" />
                          <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Categories Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-sheraa-dark rounded-xl p-1 border border-sheraa-sef-primary/20">
            {[
              { key: 'all', label: 'All Partners' },
              { key: 'founding', label: 'Strategic' },
              { key: 'government', label: 'Government' },
              { key: 'corporate', label: 'Corporate' },
              { key: 'ecosystem', label: 'Ecosystem' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="space-y-12">
          {filteredPartners.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * categoryIdx }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.name}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, idx) => {
                  const TierIcon = getTierIcon(partner.tier);
                  return (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                          <div className="relative mb-4">
                            <div className="w-20 h-20 mx-auto rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                              <img 
                                src={partner.logo} 
                                alt={partner.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <Badge className={`absolute -top-2 -right-2 ${getTierColor(partner.tier)} text-xs`}>
                              <TierIcon className="w-3 h-3 mr-1" />
                              {partner.tier}
                            </Badge>
                          </div>
                          
                          <h4 className="font-bold mb-2 group-hover:text-sheraa-sef-primary transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {partner.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Partnership Opportunities</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us as a partner and help shape the future of entrepreneurship in the region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnershipOpportunities.map((opportunity, idx) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${opportunity.color} flex items-center justify-center mb-6`}>
                      <opportunity.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3">{opportunity.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="space-y-2">
                      {opportunity.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-center gap-2 text-sm">
                          <Heart className="w-3 h-3 text-sheraa-sef-primary" />
                          <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white border-0">
            <CardContent className="p-12">
              <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Become a SEF 2026 Partner</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join our network of visionary partners and help us create the region's most impactful 
                entrepreneurship festival. Let's shape the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50">
                  <a href="mailto:partnerships@sheraa.ae">
                    <Mail className="mr-2 w-4 h-4" />
                    Partnership Inquiry
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFPartners;
