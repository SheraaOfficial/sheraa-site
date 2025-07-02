import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, Users, DollarSign, Building2, Target, 
  Globe, Award, Sparkles, Download, Eye, Calendar,
  BarChart3, PieChart, LineChart, ArrowUpRight
} from 'lucide-react';
import { CinematicVideoHero } from '@/components/hero/CinematicVideoHero';
import { ScrollRevealSection } from '@/components/hero/ScrollRevealSection';
import { GlassMorphismCard, GlassMorphismCardContent, GlassMorphismCardHeader } from '@/components/ui/glass-morphism-card';
import { AnimatedCounter, MetricCounter } from '@/components/ui/animated-counter';
import { ParallaxSection } from '@/components/parallax';

const EnhancedImpactReportPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const keyMetrics = [
    {
      title: 'Startups Supported',
      value: '180+',
      change: '+45% from 2023',
      icon: Building2,
      color: 'rgb(59, 130, 246)',
      description: 'Companies built through our programs'
    },
    {
      title: 'Revenue Generated',
      value: '$248M+',
      change: '+67% from 2023', 
      icon: DollarSign,
      color: 'rgb(34, 197, 94)',
      description: 'Total revenue by portfolio companies'
    },
    {
      title: 'Capital Raised',
      value: '$171M+',
      change: '+52% from 2023',
      icon: TrendingUp,
      color: 'rgb(168, 85, 247)',
      description: 'Funding secured by startups'
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
    },
    {
      title: 'Youth Upskilled',
      value: '18,000+',
      change: '+120% from 2023',
      icon: Sparkles,
      color: 'rgb(236, 72, 153)',
      description: 'Young entrepreneurs trained'
    }
  ];

  const reports = [
    {
      year: '2024',
      title: 'Annual Impact Report 2024',
      description: 'Our most comprehensive report showcasing record-breaking growth and impact across all programs.',
      pages: '84 pages',
      downloadCount: '2,847',
      featured: true,
      highlights: ['Record startup survival rate', '3x growth in women-led startups', 'New international partnerships']
    },
    {
      year: '2023',
      title: 'Annual Impact Report 2023',
      description: 'A year of expansion and innovation, marking significant milestones in ecosystem development.',
      pages: '76 pages',
      downloadCount: '4,521',
      featured: false,
      highlights: ['Launch of S3 Incubator 2.0', 'First international cohort', 'SEF attendance record']
    },
    {
      year: '2022',
      title: 'Annual Impact Report 2022',
      description: 'Post-pandemic recovery and adaptation, showcasing resilience and digital transformation.',
      pages: '68 pages',
      downloadCount: '3,892',
      featured: false,
      highlights: ['Digital-first programming', 'Virtual SEF success', 'New partnership model']
    }
  ];

  const successStories = [
    {
      company: 'TechFlow Solutions',
      founder: 'Sarah Al-Mahmoud',
      sector: 'EdTech',
      funding: '$2.5M Series A',
      jobs: '45+ employees',
      description: 'Revolutionary learning platform serving 100,000+ students across the GCC'
    },
    {
      company: 'GreenVenture',
      founder: 'Ahmed Hassan',
      sector: 'Sustainability',
      funding: '$1.8M Seed',
      jobs: '32+ employees',
      description: 'IoT-powered waste management system deployed in 15+ UAE cities'
    },
    {
      company: 'HealthBridge',
      founder: 'Fatima Al-Zahra',
      sector: 'HealthTech',
      funding: '$3.2M Series A',
      jobs: '58+ employees',
      description: 'Telemedicine platform connecting rural communities to healthcare'
    }
  ];

  return (
    <MainLayout
      seoTitle="Impact Report - Sheraa's Ecosystem Growth & Success Stories"
      seoDescription="Explore Sheraa's comprehensive impact reports showing $248M+ revenue generated, 180+ startups supported, and 1,900+ jobs created in Sharjah's ecosystem."
      seoKeywords="Sheraa impact report, startup ecosystem metrics, Sharjah entrepreneurship success, startup funding statistics"
    >
      {/* Enhanced Cinematic Video Hero */}
      <CinematicVideoHero
        videoId="zbzQxBVzDXw"
        title="Impact That Speaks Volumes"
        subtitle="Measuring Our Collective Success"
        showScrollIndicator={true}
        overlay="particles"
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
                  <BarChart3 className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Transforming Ideas Into Impact
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Building Tomorrow's<br />Success Stories Today
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                  We measure our success by the success of our founders and the growth of Sharjah's 
                  innovation ecosystem. Our commitment translates into tangible results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-8 py-6">
                    <Download className="w-4 h-4 mr-2" />
                    Download Latest Report
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6">
                    <Eye className="w-4 h-4 mr-2" />
                    View Interactive Dashboard
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Key Metrics Dashboard */}
          <ParallaxSection direction="up" scrollMultiplier={0.05} className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  2024 Key Metrics
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  These figures demonstrate the scale and effectiveness of Sheraa's programs and 
                  the significant economic contribution of our supported ventures.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

          {/* Enhanced Reports & Downloads */}
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
                  Annual Impact Reports
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Download our comprehensive annual reports to dive deep into our ecosystem's 
                  growth, success stories, and strategic insights.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {reports.map((report, idx) => (
                  <GlassMorphismCard 
                    key={idx} 
                    variant="floating" 
                    className={`${report.featured ? 'border-2 border-white/40' : ''} bg-white/10 backdrop-blur-xl`}
                    index={idx}
                  >
                    <GlassMorphismCardContent className="p-8">
                      {report.featured && (
                        <Badge className="mb-4 bg-gradient-to-r from-accent to-primary text-white">
                          Latest Report
                        </Badge>
                      )}
                      
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span className="text-2xl font-bold text-white">
                          <AnimatedCounter value={report.year} />
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{report.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        {report.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-sm text-white">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {report.highlights.map((highlight, hidx) => (
                            <li key={hidx} className="text-sm text-white/80 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/70 mb-6">
                        <span>{report.pages}</span>
                        <span>
                          <AnimatedCounter value={report.downloadCount} /> downloads
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white border border-white/30 hover:shadow-lg backdrop-blur-sm"
                        size="lg"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                    </GlassMorphismCardContent>
                  </GlassMorphismCard>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Success Stories Section */}
          <ParallaxSection direction="down" scrollMultiplier={0.03} className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Meet the entrepreneurs who transformed their ideas into thriving businesses 
                  through Sheraa's ecosystem support.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {successStories.map((story, idx) => (
                  <GlassMorphismCard key={idx} variant="interactive" tiltEffect={true} index={idx}>
                    <GlassMorphismCardContent className="p-8">
                      <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/10">
                        {story.sector}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
                      <p className="text-muted-foreground mb-4">Founded by {story.founder}</p>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Funding Raised:</span>
                          <span className="font-semibold text-green-600">
                            <AnimatedCounter value={story.funding} />
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Team Size:</span>
                          <span className="font-semibold text-blue-600">
                            <AnimatedCounter value={story.jobs} />
                          </span>
                        </div>
                      </div>
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
                  Ready to Create Impact?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  Join Sheraa's ecosystem and become part of the next generation of successful entrepreneurs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-2xl">
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    Join Our Programs
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 hover:bg-muted/50 px-12 py-6 text-lg font-semibold">
                    Explore Opportunities
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

export default EnhancedImpactReportPage;