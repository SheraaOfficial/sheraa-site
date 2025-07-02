import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, Handshake, Rocket, Network, ArrowRight, Heart, 
  Globe, Zap, Building, Target, Award, Star, Crown
} from 'lucide-react';
import { CinematicVideoHero } from '@/components/hero/CinematicVideoHero';
import { ScrollRevealSection } from '@/components/hero/ScrollRevealSection';
import { GlassMorphismCard, GlassMorphismCardContent } from '@/components/ui/glass-morphism-card';
import { AnimatedCounter, MetricCounter } from '@/components/ui/animated-counter';
import { ParallaxSection } from '@/components/parallax';

const CommunityOverviewPage: React.FC = () => {
  const keyMetrics = [
    {
      title: 'Ecosystem Partners',
      value: '140+',
      change: '+25% from 2023',
      icon: Building,
      color: 'rgb(59, 130, 246)',
      description: 'Strategic partnerships driving innovation'
    },
    {
      title: 'Community Members',
      value: '500+',
      change: '+80% from 2023',
      icon: Users,
      color: 'rgb(34, 197, 94)',
      description: 'Active founders and entrepreneurs'
    },
    {
      title: 'Youth Upskilled',
      value: '18,000+',
      change: '+120% from 2023',
      icon: Target,
      color: 'rgb(249, 115, 22)',
      description: 'Young talents empowered with skills'
    },
    {
      title: 'Women-Led Startups',
      value: '52%',
      change: '+12% from 2023',
      icon: Crown,
      color: 'rgb(236, 72, 153)',
      description: 'Strong female leadership representation'
    }
  ];

  const communityHighlights = [
    {
      title: 'Thriving Startup Portfolio',
      description: '180+ innovative startups creating $248M+ in revenue and 1,900+ jobs',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      stats: ['180+ Startups', '$248M+ Revenue', '1,900+ Jobs', '71% Survival Rate'],
      path: '/startups'
    },
    {
      title: 'Flexible Membership',
      description: 'Join our community with access to co-working spaces, mentors, and exclusive events',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      stats: ['Co-working Access', 'Mentor Network', 'Exclusive Events', 'Resource Library'],
      path: '/community/membership'
    },
    {
      title: 'Strategic Partnerships',
      description: 'Collaborate with 140+ partners to drive innovation and create lasting impact',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500',
      stats: ['Corporate Partners', 'Government Ties', 'Investor Network', 'Global Reach'],
      path: '/community/partnerships'
    }
  ];

  const successStories = [
    {
      name: 'Baytuki',
      founder: 'Latifa bin Haidar',
      sector: 'PropTech',
      achievement: 'Smart real estate micro-investing platform',
      badge: 'Community Success'
    },
    {
      name: 'FortyGuard',
      founder: 'Jay Sadiq',
      sector: 'ClimaTech',
      achievement: 'AI-powered environmental data solutions',
      badge: 'S3 Graduate'
    },
    {
      name: 'Remal IoT',
      founder: 'Khalid Al Awadhi',
      sector: 'IoT/Hardware',
      achievement: 'PCB design hub nurturing IoT ecosystem',
      badge: 'Innovation Leader'
    }
  ];

  return (
    <MainLayout
      seoTitle="Community Overview - Join Sharjah's Innovation Ecosystem | Sheraa"
      seoDescription="Join Sheraa's thriving community of 500+ entrepreneurs, 140+ partners, and 18,000+ upskilled youth building the future from Sharjah."
      seoKeywords="Sheraa community, entrepreneurship ecosystem, startup community Sharjah, innovation network"
    >
      {/* Enhanced Cinematic Video Hero */}
      <CinematicVideoHero
        videoId="mr1oWGH48FY"
        title="Powered by Community"
        subtitle="Join Sharjah's Thriving Innovation Ecosystem"
        showScrollIndicator={true}
        overlay="gradient"
        interactive={true}
      />

      {/* Main Content with Scroll Reveal */}
      <ScrollRevealSection className="relative z-50 bg-background">
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
          
          {/* Enhanced Hero Content Section */}
          <section className="py-20 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8">
                  <Network className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Powered by Community
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Where Innovation<br />Meets Collaboration
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                  At Sheraa, groundbreaking innovation happens through connection and collaboration. 
                  Join our dynamic ecosystem of founders, mentors, investors, and industry leaders.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-8 py-6">
                    <Link to="/community/membership">
                      <Users className="w-4 h-4 mr-2" />
                      Join Community
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6">
                    <Link to="/community/partnerships">
                      <Handshake className="w-4 h-4 mr-2" />
                      Explore Partnerships
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Key Metrics */}
          <ParallaxSection direction="up" scrollMultiplier={0.05} className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Community Impact
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our ecosystem is built on the principle that collective strength fuels individual success.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {keyMetrics.map((metric, idx) => (
                  <GlassMorphismCard key={idx} variant="premium" tiltEffect={true} glow={true} index={idx}>
                    <GlassMorphismCardContent className="p-8 text-center">
                      <MetricCounter
                        value={metric.value}
                        label={metric.title}
                        icon={metric.icon}
                        trend="up"
                        trendValue={metric.change}
                        glowColor={metric.color}
                        className="text-4xl md:text-5xl font-bold mb-4"
                      />
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {metric.description}
                      </p>
                    </GlassMorphismCardContent>
                  </GlassMorphismCard>
                ))}
              </div>
            </div>
          </ParallaxSection>

          {/* Community Highlights */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                  How to Get Involved
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Multiple pathways to join our ecosystem and contribute to Sharjah's innovation future.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {communityHighlights.map((highlight, idx) => {
                  const IconComponent = highlight.icon;
                  return (
                    <GlassMorphismCard 
                      key={idx} 
                      variant="floating" 
                      className="bg-white/10 backdrop-blur-xl border-white/20"
                      index={idx}
                    >
                      <GlassMorphismCardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-white">{highlight.title}</h3>
                        <p className="text-white/90 mb-6 leading-relaxed">
                          {highlight.description}
                        </p>
                        
                        <ul className="space-y-2 mb-8">
                          {highlight.stats.map((stat, sidx) => (
                            <li key={sidx} className="flex items-center gap-2 text-sm text-white/80">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {stat}
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          asChild
                          className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:shadow-lg backdrop-blur-sm"
                        >
                          <Link to={highlight.path}>
                            Explore
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </GlassMorphismCardContent>
                    </GlassMorphismCard>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <ParallaxSection direction="down" scrollMultiplier={0.03} className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Community Success Stories
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Meet the entrepreneurs who are building the future through our ecosystem.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {successStories.map((story, idx) => (
                  <GlassMorphismCard key={idx} variant="interactive" tiltEffect={true} index={idx}>
                    <GlassMorphismCardContent className="p-8">
                      <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/10">
                        {story.badge}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                      <p className="text-muted-foreground mb-1">Founded by {story.founder}</p>
                      <p className="text-sm text-primary mb-4">{story.sector}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {story.achievement}
                      </p>
                    </GlassMorphismCardContent>
                  </GlassMorphismCard>
                ))}
              </div>
            </div>
          </ParallaxSection>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Ready to Be Part of Something Bigger?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  Join our thriving community of innovators, entrepreneurs, and changemakers who are building the future together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-2xl">
                    <Link to="/community/membership">
                      <Users className="w-5 h-5 mr-2" />
                      Join Community
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 hover:bg-muted/50 px-12 py-6 text-lg font-semibold">
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </ScrollRevealSection>
    </MainLayout>
  );
};

export default CommunityOverviewPage;