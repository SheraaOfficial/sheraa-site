
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Users, DollarSign, Globe, 
  Star, ArrowRight, Building, Crown,
  Target, Shield, Briefcase, Calendar, Award
} from 'lucide-react';
import {
  StatsSection,
  ProcessSteps,
  type StatItem,
  type ProcessStep
} from '@/components/common';
import { ImmersiveVideoHero } from '@/components/hero/ImmersiveVideoHero';
import { ScrollRevealSection } from '@/components/hero/ScrollRevealSection';
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader } from '@/components/ui/enhanced-card';
import { ParallaxSection } from '@/components/parallax';

const DealDockPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'startups' | 'investors'>('startups');

  const platformStats: StatItem[] = [
    { icon: DollarSign, number: '$45M+', label: 'Total Funding Facilitated', color: 'text-green-600' },
    { icon: Users, number: '120+', label: 'Active Investors', color: 'text-blue-600' },
    { icon: Building, number: '85+', label: 'Startups Funded', color: 'text-purple-600' },
    { icon: Globe, number: '25+', label: 'Countries Represented', color: 'text-sheraa-primary' }
  ];

  const applicationProcess: ProcessStep[] = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete detailed startup profile with financials and pitch deck',
      duration: '15 minutes'
    },
    {
      step: 2,
      title: 'Sheraa Review',
      description: 'Our investment team reviews and scores your application',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Investor Matching',
      description: 'AI-powered matching with relevant investors based on criteria',
      duration: '1-2 days'
    },
    {
      step: 4,
      title: 'Introductions',
      description: 'Warm introductions to interested investors via our platform',
      duration: 'Ongoing'
    },
    {
      step: 5,
      title: 'Deal Support',
      description: 'Support through negotiations, due diligence, and closing',
      duration: '4-8 weeks'
    }
  ];

  const startupBenefits = [
    {
      icon: Users,
      title: 'Curated Investor Access',
      description: 'Direct access to pre-qualified investors actively seeking opportunities in your sector'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'AI-powered matching based on stage, sector, geography, and investment thesis alignment'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All investors are vetted and verified for legitimacy, experience, and portfolio quality'
    },
    {
      icon: Briefcase,
      title: 'Deal Room Access',
      description: 'Secure virtual deal rooms for due diligence and document sharing'
    },
    {
      icon: Calendar,
      title: 'Pitch Events',
      description: 'Regular pitch events and demo days with high-net-worth individuals and VCs'
    },
    {
      icon: Award,
      title: 'Success Support',
      description: 'End-to-end support from initial introduction to term sheet negotiation'
    }
  ];

  const investorBenefits = [
    {
      icon: Target,
      title: 'Deal Flow Quality',
      description: 'Access to pre-screened, high-potential startups from Sheraa\'s ecosystem'
    },
    {
      icon: Globe,
      title: 'Regional Access',
      description: 'Unique access to MENA startups with global ambitions and local market knowledge'
    },
    {
      icon: Users,
      title: 'Co-Investment',
      description: 'Opportunities to co-invest with other reputable investors and funds'
    },
    {
      icon: Building,
      title: 'Due Diligence',
      description: 'Comprehensive startup vetting and due diligence support from our team'
    },
    {
      icon: Star,
      title: 'Portfolio Support',
      description: 'Ongoing support for portfolio companies through Sheraa\'s programs and network'
    },
    {
      icon: Crown,
      title: 'Exclusive Events',
      description: 'VIP access to exclusive investor events, roundtables, and market insights'
    }
  ];

  const successStories = [
    {
      startup: 'Baytuki',
      sector: 'PropTech',
      funding: '$1.2M Seed',
      investor: 'Multiple Angels',
      outcome: '300% revenue growth, expanded to 3 cities'
    },
    {
      startup: 'Caena',
      sector: 'AgriTech',
      funding: '$800K Pre-Series A',
      investor: 'CE-Ventures + Angels',
      outcome: 'Deployed across 15 farms, 40% cost reduction'
    },
    {
      startup: 'KRISPR',
      sector: 'B2B SaaS',
      funding: '$2.1M Series A',
      investor: 'BECO Capital',
      outcome: 'Acquired by regional tech giant'
    }
  ];

  return (
    <MainLayout>
      {/* Immersive Video Hero */}
      <ImmersiveVideoHero
        videoId="mr1oWGH48FY"
        title="Deal Dock"
        subtitle="Where Startups Meet Capital"
        showScrollIndicator={true}
      />

      {/* Main Content with Scroll Reveal */}
      <ScrollRevealSection className="relative z-50 bg-background">
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
          
          {/* Hero Content Section */}
          <section className="py-20 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/20 dark:border-purple-500/20 rounded-full px-6 py-2 mb-8">
                  <Crown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-800 dark:text-purple-200 font-medium">Deal Dock - Investment Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Where Startups Meet Capital
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Deal Dock is Sheraa's exclusive investment platform connecting high-potential startups with vetted investors across the MENA region and beyond.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-12">
                <div className="bg-card/50 backdrop-blur-xl rounded-full p-1 shadow-2xl border border-border/50">
                  <button
                    onClick={() => setActiveTab('startups')}
                    className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                      activeTab === 'startups' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    For Startups
                  </button>
                  <button
                    onClick={() => setActiveTab('investors')}
                    className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                      activeTab === 'investors' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    For Investors
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {activeTab === 'startups' ? (
                  <>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-xl">
                      <Link to="/programs/deal-dock/apply">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Submit Your Startup
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 hover:bg-muted/50">
                      <Link to="/contact?type=deal-dock&audience=startup">
                        Learn More
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-8 py-6 text-lg font-semibold shadow-xl">
                      <Link to="/programs/deal-dock/investor-apply">
                        <Crown className="w-5 h-5 mr-2" />
                        Join as Investor
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 hover:bg-muted/50">
                      <Link to="/contact?type=deal-dock&audience=investor">
                        Schedule Demo
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Platform Stats */}
          <StatsSection
            title="Platform Performance"
            subtitle="Our commitment to connecting quality startups with the right investors."
            stats={platformStats}
            columns={4}
            variant="gradient"
          />

          {/* Benefits Section */}
          <ParallaxSection direction="up" scrollMultiplier={0.05} className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {activeTab === 'startups' ? 'Why Startups Choose Deal Dock' : 'Why Investors Choose Deal Dock'}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {activeTab === 'startups' 
                    ? 'Get access to quality investors who understand your market and can accelerate your growth.'
                    : 'Access high-quality deal flow from the fastest-growing startup ecosystem in the MENA region.'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeTab === 'startups' ? startupBenefits : investorBenefits).map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <EnhancedCard key={index} variant="glass" hover={true} glow={true} index={index}>
                      <EnhancedCardContent className="p-8">
                        <IconComponent className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </EnhancedCardContent>
                    </EnhancedCard>
                  );
                })}
              </div>
            </div>
          </ParallaxSection>

          {/* Success Stories */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Success Stories</h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Deal Dock has facilitated over $45M in funding for high-growth startups.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <EnhancedCard key={index} variant="glass" hover={true} className="bg-white/10 backdrop-blur-xl border-white/20" index={index}>
                    <EnhancedCardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Star className="w-6 h-6 text-yellow-300" />
                        <h3 className="font-bold text-xl text-white">{story.startup}</h3>
                        <Badge className="bg-white/20 text-white border-white/30">{story.sector}</Badge>
                      </div>
                      <div className="space-y-3 text-white/90">
                        <div className="flex justify-between">
                          <span className="font-medium">Funding:</span>
                          <span className="text-white font-semibold">{story.funding}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Investor:</span>
                          <span className="text-white font-semibold">{story.investor}</span>
                        </div>
                        <div className="mt-4 p-3 bg-white/10 rounded-lg">
                          <span className="text-sm text-white/80 font-medium">Outcome:</span>
                          <p className="text-white mt-1">{story.outcome}</p>
                        </div>
                      </div>
                    </EnhancedCardContent>
                  </EnhancedCard>
                ))}
              </div>
            </div>
          </section>

          {/* Application Process */}
          {activeTab === 'startups' && (
            <ProcessSteps
              title="How It Works"
              subtitle="Our streamlined process gets you in front of the right investors quickly."
              steps={applicationProcess}
              variant="horizontal"
              showConnectors={false}
            />
          )}

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  {activeTab === 'startups' ? 'Ready to Raise Capital?' : 'Ready to Invest?'}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  {activeTab === 'startups' 
                    ? 'Join Deal Dock and get connected with investors who can fuel your growth journey.'
                    : 'Get exclusive access to the most promising startups in the MENA region.'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-2xl">
                    <Link to={activeTab === 'startups' ? '/programs/deal-dock/apply' : '/programs/deal-dock/investor-apply'}>
                      <ArrowRight className="w-5 h-5 mr-2" />
                      {activeTab === 'startups' ? 'Apply Now' : 'Join Network'}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 hover:bg-muted/50 px-12 py-6 text-lg font-semibold">
                    <Link to={`/contact?type=deal-dock&audience=${activeTab === 'startups' ? 'startup' : 'investor'}`}>
                      Schedule Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ScrollRevealSection>
    </MainLayout>
  );
};

export default DealDockPage;
