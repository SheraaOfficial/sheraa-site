import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Search, Building, Plus, Star, TrendingUp, 
  Users, Globe, ArrowRight, Sparkles, ExternalLink,
  Rocket, Target, Award
} from 'lucide-react';
import { CinematicVideoHero } from '@/components/hero/CinematicVideoHero';
import { ScrollRevealSection } from '@/components/hero/ScrollRevealSection';
import { GlassMorphismCard, GlassMorphismCardContent } from '@/components/ui/glass-morphism-card';
import { AnimatedCounter, MetricCounter } from '@/components/ui/animated-counter';
import { ParallaxSection } from '@/components/parallax';
import { featuredStartups } from '@/components/startups/startupsData';
import StartupSubmissionForm from '@/components/startups/StartupSubmissionForm';

const StartupsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');

  const sectors = [
    "All Sectors", "Sustainability", "EdTech", "HealthTech", "AgriTech", 
    "FinTech", "Creative Industries", "Advanced Manufacturing", "Food & Beverage",
    "Retail", "Travel & Tourism", "Deep Tech"
  ];

  const programs = [
    "All Programs", "S3 Incubator", "Access Sharjah Challenge", 
    "Startup Dojo", "Startup Dojo+", "Community Member"
  ];

  const filteredStartups = useMemo(() => {
    return featuredStartups.filter(startup => {
      const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'All Sectors' || startup.sector === selectedSector;
      const matchesProgram = selectedProgram === 'All Programs' || startup.tags?.includes(selectedProgram);
      
      return matchesSearch && matchesSector && matchesProgram;
    });
  }, [searchTerm, selectedSector, selectedProgram]);

  const keyMetrics = [
    {
      title: 'Startups Supported',
      value: '180+',
      change: '+45% from 2023',
      icon: Building,
      color: 'rgb(59, 130, 246)',
      description: 'Companies built through our programs'
    },
    {
      title: 'Revenue Generated',
      value: '$248M+',
      change: '+67% from 2023', 
      icon: TrendingUp,
      color: 'rgb(34, 197, 94)',
      description: 'Total revenue by portfolio companies'
    },
    {
      title: 'Jobs Created',
      value: '1,900+',
      change: '+38% from 2023',
      icon: Users,
      color: 'rgb(249, 115, 22)',
      description: 'Employment opportunities generated'
    },
    {
      title: 'Success Rate',
      value: '71%',
      change: '+8% from 2023',
      icon: Target,
      color: 'rgb(239, 68, 68)',
      description: 'Startups still operating after 3 years'
    }
  ];

  const showcaseStartups = featuredStartups.slice(0, 6);

  return (
    <MainLayout
      seoTitle="Our Startups - Sheraa Portfolio & Innovation Showcase"
      seoDescription="Discover Sheraa's dynamic portfolio of 180+ innovative startups transforming industries and creating impact across the MENA region."
      seoKeywords="Sheraa startups, startup portfolio, innovation showcase, MENA entrepreneurs, startup directory"
    >
      {/* Enhanced Cinematic Video Hero */}
      <CinematicVideoHero
        videoId="mr1oWGH48FY"
        title="Innovation in Action"
        subtitle="Discover Our Dynamic Portfolio of Game-Changing Startups"
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
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Our Portfolio
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Building Tomorrow's<br />Success Stories Today
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                  Explore our dynamic portfolio of innovative startups that are transforming industries, 
                  creating jobs, and generating significant impact across the region.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-8 py-6">
                    <Building className="w-4 h-4 mr-2" />
                    Explore Directory
                  </Button>
                  <StartupSubmissionForm trigger={
                    <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit Your Startup
                    </Button>
                  } />
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
                  Portfolio Performance
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our startups are creating tangible impact through innovation, job creation, and economic growth.
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

          {/* Startup Showcase Section */}
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
                  Featured Startups
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Meet some of the innovative companies that are shaping the future from Sharjah.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {showcaseStartups.map((startup, idx) => (
                  <GlassMorphismCard 
                    key={idx} 
                    variant="floating" 
                    className="bg-white/10 backdrop-blur-xl border-white/20"
                    index={idx}
                  >
                    <GlassMorphismCardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                        {startup.logo ? (
                          <img src={startup.logo} alt={startup.name} className="w-12 h-12 object-contain" />
                        ) : (
                          <Building className="w-8 h-8 text-white" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{startup.name}</h3>
                      <Badge variant="outline" className="mb-4 border-white/30 text-white bg-white/10">
                        {startup.sector}
                      </Badge>
                      <p className="text-white/90 mb-6 leading-relaxed text-sm">
                        {startup.description}
                      </p>
                      
                      {startup.website && (
                        <Button 
                          asChild
                          variant="ghost" 
                          size="sm" 
                          className="text-white hover:bg-white/20 border border-white/30"
                        >
                          <a href={startup.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </a>
                        </Button>
                      )}
                    </GlassMorphismCardContent>
                  </GlassMorphismCard>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:shadow-lg backdrop-blur-sm px-8 py-6"
                >
                  <Link to="/community/startups">
                    <Building className="w-5 h-5 mr-2" />
                    View Full Directory
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Search and Filter Section */}
          <ParallaxSection direction="down" scrollMultiplier={0.03} className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Startup Directory
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Search through our comprehensive directory of portfolio companies.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto mb-8">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    type="text" 
                    placeholder="Search startups by name, description, or sector..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg bg-card/50 backdrop-blur-sm"
                  />
                </div>

                {/* Filter Chips */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Sector:</span>
                    {sectors.map((sector) => (
                      <Badge 
                        key={sector}
                        variant={selectedSector === sector ? "default" : "outline"}
                        className={`cursor-pointer px-3 py-1 text-xs ${
                          selectedSector === sector 
                            ? 'bg-primary hover:bg-primary/90' 
                            : 'hover:bg-primary/10'
                        }`}
                        onClick={() => setSelectedSector(sector)}
                      >
                        {sector}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Program:</span>
                    {programs.map((program) => (
                      <Badge 
                        key={program}
                        variant={selectedProgram === program ? "default" : "outline"}
                        className={`cursor-pointer px-3 py-1 text-xs ${
                          selectedProgram === program 
                            ? 'bg-primary hover:bg-primary/90' 
                            : 'hover:bg-primary/10'
                        }`}
                        onClick={() => setSelectedProgram(program)}
                      >
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Startup Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {filteredStartups.slice(0, 12).map((startup, index) => (
                  <motion.div
                    key={startup.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index % 8) }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <GlassMorphismCard variant="interactive" tiltEffect={true} index={index}>
                      <GlassMorphismCardContent className="p-6">
                        {/* Logo/Image */}
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          {startup.logo ? (
                            <img src={startup.logo} alt={startup.name} className="w-12 h-12 object-contain" />
                          ) : (
                            <Building className="w-8 h-8 text-primary" />
                          )}
                        </div>
                        
                        {/* Content */}
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {startup.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {startup.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            {startup.sector}
                          </Badge>
                          {startup.tags?.slice(0, 1).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-muted">
                          {startup.website ? (
                            <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
                              <a href={startup.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Visit
                              </a>
                            </Button>
                          ) : (
                            <div />
                          )}
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        </div>
                      </GlassMorphismCardContent>
                    </GlassMorphismCard>
                  </motion.div>
                ))}
              </div>

              {filteredStartups.length > 12 && (
                <div className="text-center mt-12">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6">
                    <Link to="/community/startups">
                      <Building className="w-5 h-5 mr-2" />
                      View All {filteredStartups.length} Startups
                    </Link>
                  </Button>
                </div>
              )}

              {filteredStartups.length === 0 && (
                <div className="text-center py-12">
                  <Building className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No startups found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedSector('All Sectors');
                    setSelectedProgram('All Programs');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
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
                  Ready to Join Our Portfolio?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  Join our vibrant ecosystem of innovative startups and get the support you need to scale your venture.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-2xl">
                    <Link to="/programs">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Explore Programs
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 hover:bg-muted/50 px-12 py-6 text-lg font-semibold">
                    <Link to="/community/membership">
                      Join Community
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

export default StartupsPage;