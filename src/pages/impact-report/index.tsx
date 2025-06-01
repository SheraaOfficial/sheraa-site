
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, Users, DollarSign, Building2, Target, 
  Globe, Award, Sparkles, Download, Eye, Calendar,
  BarChart3, PieChart, LineChart, ArrowUpRight
} from 'lucide-react';

const ImpactReportPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const keyMetrics = [
    {
      title: 'Startups Supported',
      value: '180+',
      change: '+45% from 2023',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      description: 'Companies built through our programs'
    },
    {
      title: 'Revenue Generated',
      value: '$248M+',
      change: '+67% from 2023',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      description: 'Total revenue by portfolio companies'
    },
    {
      title: 'Capital Raised',
      value: '$171M+',
      change: '+52% from 2023',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      description: 'Funding secured by startups'
    },
    {
      title: 'Jobs Created',
      value: '1,900+',
      change: '+38% from 2023',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      description: 'Employment opportunities generated'
    },
    {
      title: 'Success Rate',
      value: '71%',
      change: '+8% from 2023',
      icon: Target,
      color: 'from-red-500 to-red-600',
      description: 'Startups still operating after 3 years'
    },
    {
      title: 'Youth Upskilled',
      value: '18,000+',
      change: '+120% from 2023',
      icon: Sparkles,
      color: 'from-pink-500 to-pink-600',
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

  const programImpact = [
    {
      program: 'S3 Incubator',
      startups: 45,
      success: '78%',
      funding: '$89M',
      color: 'from-sheraa-primary to-blue-600'
    },
    {
      program: 'Start Young',
      startups: 120,
      success: '65%',
      funding: '$12M',
      color: 'from-green-500 to-emerald-600'
    },
    {
      program: 'Access Sharjah',
      startups: 15,
      success: '87%',
      funding: '$70M',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <MainLayout
      seoTitle="Impact Report - Sheraa's Ecosystem Growth & Success Stories"
      seoDescription="Explore Sheraa's comprehensive impact reports showing $248M+ revenue generated, 180+ startups supported, and 1,900+ jobs created in Sharjah's ecosystem."
      seoKeywords="Sheraa impact report, startup ecosystem metrics, Sharjah entrepreneurship success, startup funding statistics"
    >
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <BarChart3 className="w-5 h-5 text-sheraa-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Impact That Speaks Volumes
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
                Measuring Our<br />Collective Success
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                We measure our success by the success of our founders and the growth of Sharjah's 
                innovation ecosystem. Our commitment translates into tangible results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Latest Report
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Eye className="w-4 h-4 mr-2" />
                  View Interactive Dashboard
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics Dashboard */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">2024 Key Metrics</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These figures demonstrate the scale and effectiveness of Sheraa's programs and 
                the significant economic contribution of our supported ventures.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {keyMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <metric.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {metric.value}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        {metric.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {metric.description}
                      </p>
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-900/20">
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        {metric.change}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports & Downloads */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Annual Impact Reports</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Download our comprehensive annual reports to dive deep into our ecosystem's 
                growth, success stories, and strategic insights.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reports.map((report, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`h-full bg-white dark:bg-sheraa-dark transition-all duration-300 hover:shadow-xl ${
                    report.featured ? 'border-2 border-sheraa-primary shadow-lg' : 'border border-gray-200 dark:border-gray-700'
                  }`}>
                    <CardContent className="p-8">
                      {report.featured && (
                        <Badge className="mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white">
                          Latest Report
                        </Badge>
                      )}
                      
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-sheraa-primary" />
                        <span className="text-2xl font-bold text-sheraa-primary">{report.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {report.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-sm">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {report.highlights.map((highlight, hidx) => (
                            <li key={hidx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span>{report.pages}</span>
                        <span>{report.downloadCount} downloads</span>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-lg"
                        size="lg"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Success Stories</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the entrepreneurs who transformed their ideas into thriving businesses 
                through Sheraa's ecosystem support.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <Badge variant="outline" className="mb-4">{story.sector}</Badge>
                      <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Founded by {story.founder}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Funding Raised:</span>
                          <span className="font-semibold text-green-600">{story.funding}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Team Size:</span>
                          <span className="font-semibold text-blue-600">{story.jobs}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Performance */}
        <section className="py-20 bg-gradient-to-r from-sheraa-primary/5 to-sheraa-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Performance</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each of our programs delivers measurable impact, creating value for entrepreneurs 
                and the broader Sharjah ecosystem.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {programImpact.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center bg-white dark:bg-sheraa-dark shadow-xl border-2 border-transparent hover:border-sheraa-primary/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{program.program}</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-sheraa-primary">{program.startups}</div>
                          <div className="text-xs text-gray-500">Startups</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">{program.success}</div>
                          <div className="text-xs text-gray-500">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{program.funding}</div>
                          <div className="text-xs text-gray-500">Total Funding</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ImpactReportPage;
