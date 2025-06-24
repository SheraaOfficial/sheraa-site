
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsT rigger, TabsContent } from '@/components/ui/tabs';
import { 
  TrendingUp, Users, Building, Globe, Download, 
  Calendar, BarChart3, PieChart, Target, Award,
  ArrowRight, FileText, Eye
} from 'lucide-react';

const ImpactReportsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const reports = [
    {
      year: '2024',
      title: 'Sheraa Impact Report 2024',
      subtitle: 'Building a Leading Hub for Entrepreneurship',
      status: 'Latest',
      downloadUrl: '/reports/sheraa-impact-2024.pdf',
      coverImage: '/lovable-uploads/sheraa-logo.png',
      highlights: [
        '180+ Startups Supported',
        '$248M+ Revenue Generated',
        '$171M+ Capital Raised',
        '1,900+ Jobs Created',
        '71% Startup Survival Rate',
        '18,000+ Youth Upskilled'
      ],
      keyStats: {
        startups: 180,
        revenue: 248,
        funding: 171,
        jobs: 1900,
        survivalRate: 71,
        youthUpskilled: 18000,
        womenLed: 52,
        partners: 140
      }
    },
    {
      year: '2023',
      title: 'Sheraa Impact Report 2023',
      subtitle: 'Fostering Innovation and Growth',
      status: 'Previous',
      downloadUrl: '/reports/sheraa-impact-2023.pdf',
      coverImage: '/lovable-uploads/sheraa-logo.png',
      highlights: [
        '150+ Startups Supported',
        '$180M+ Revenue Generated',
        '$120M+ Capital Raised',
        '1,500+ Jobs Created',
        '68% Startup Survival Rate',
        '15,000+ Youth Upskilled'
      ]
    },
    {
      year: '2022',
      title: 'Sheraa Impact Report 2022',
      subtitle: 'Driving Entrepreneurial Excellence',
      status: 'Archive',
      downloadUrl: '/reports/sheraa-impact-2022.pdf',
      coverImage: '/lovable-uploads/sheraa-logo.png',
      highlights: [
        '120+ Startups Supported',
        '$120M+ Revenue Generated',
        '$85M+ Capital Raised',
        '1,200+ Jobs Created',
        '65% Startup Survival Rate',
        '12,000+ Youth Upskilled'
      ]
    }
  ];

  const currentReport = reports.find(report => report.year === selectedYear) || reports[0];

  const impactAreas = [
    {
      title: 'Economic Impact',
      icon: TrendingUp,
      description: 'Generating significant economic value across the UAE',
      metrics: [
        { label: 'Revenue Generated', value: '$248M+', color: 'text-green-600' },
        { label: 'Capital Raised', value: '$171M+', color: 'text-blue-600' },
        { label: 'Economic Multiplier', value: '3.2x', color: 'text-purple-600' }
      ]
    },
    {
      title: 'Job Creation',
      icon: Users,
      description: 'Creating meaningful employment opportunities',
      metrics: [
        { label: 'Total Jobs Created', value: '1,900+', color: 'text-orange-600' },
        { label: 'Average Jobs per Startup', value: '11', color: 'text-teal-600' },
        { label: 'Youth Employment', value: '65%', color: 'text-pink-600' }
      ]
    },
    {
      title: 'Startup Ecosystem',
      icon: Building,
      description: 'Building a thriving entrepreneurial ecosystem',
      metrics: [
        { label: 'Startups Supported', value: '180+', color: 'text-indigo-600' },
        { label: 'Survival Rate', value: '71%', color: 'text-green-600' },
        { label: 'Success Stories', value: '8 Exits', color: 'text-yellow-600' }
      ]
    },
    {
      title: 'Global Reach',
      icon: Globe,
      description: 'Connecting Sharjah to the global innovation network',
      metrics: [
        { label: 'Countries Represented', value: '45+', color: 'text-red-600' },
        { label: 'International Partners', value: '140+', color: 'text-cyan-600' },
        { label: 'Global Ranking', value: '#7 MENA', color: 'text-violet-600' }
      ]
    }
  ];

  const sectionPreviews = [
    {
      title: 'Leadership Message',
      description: 'Insights from our Chairperson and CEO on Sheraa\'s vision and achievements',
      icon: Award,
      page: 4
    },
    {
      title: 'The Sheraa Journey',
      description: 'Our comprehensive approach to supporting entrepreneurs at every stage',
      icon: Target,
      page: 10
    },
    {
      title: 'Empowering Talent',
      description: 'Building the next generation of entrepreneurs through education and training',
      icon: Users,
      page: 16
    },
    {
      title: 'Building Ventures',
      description: 'Supporting startups from ideation to scaling with tailored programs',
      icon: Building,
      page: 26
    },
    {
      title: 'Nurturing Community',
      description: 'Creating connections and fostering collaboration within our ecosystem',
      icon: Globe,
      page: 34
    }
  ];

  return (
    <MainLayout
      seoTitle="Impact Reports - Sheraa's Annual Performance & Achievements"
      seoDescription="Discover Sheraa's annual impact through comprehensive reports showcasing startup support, economic impact, and ecosystem growth."
    >
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <BarChart3 className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Impact Reports
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Measuring Our Impact
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover the collective achievements of the Sheraa ecosystem and the transformative impact of entrepreneurship in Sharjah through our comprehensive annual reports.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics Overview */}
        <section className="py-16 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {Object.entries(currentReport.keyStats).slice(0, 4).map(([key, value], index) => {
                const labels = {
                  startups: 'Startups Supported',
                  revenue: 'Revenue Generated (M)',
                  funding: 'Capital Raised (M)',
                  jobs: 'Jobs Created'
                };
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">
                      {key === 'revenue' || key === 'funding' ? `$${value}M+` : 
                       key === 'survivalRate' || key === 'womenLed' ? `${value}%` : 
                       `${value}+`}
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {labels[key as keyof typeof labels] || key}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Report Selection */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  {reports.map((report) => (
                    <TabsTrigger key={report.year} value={report.year}>
                      {report.year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {reports.map((report) => (
                <TabsContent key={report.year} value={report.year}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                      {/* Report Cover */}
                      <div className="relative">
                        <Card className="overflow-hidden shadow-2xl">
                          <div className="aspect-[3/4] bg-gradient-to-br from-sheraa-primary to-sheraa-teal p-8 flex flex-col justify-between text-white relative">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10">
                              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                                {report.status}
                              </Badge>
                              <h2 className="text-2xl font-bold mb-2">{report.title}</h2>
                              <p className="text-white/90">{report.subtitle}</p>
                            </div>
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>Annual Report {report.year}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Report Details */}
                      <div>
                        <h3 className="text-3xl font-bold mb-6">Key Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {report.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                              <span className="font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </Button>
                          <Button size="lg" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview Online
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">Impact Areas</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Measuring success across multiple dimensions of entrepreneurial ecosystem development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-sheraa-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{area.title}</CardTitle>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{area.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {area.metrics.map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                              <span className={`font-bold text-lg ${metric.color}`}>{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Report Sections Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Inside the Report</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore the comprehensive sections that make up our annual impact assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionPreviews.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-sheraa-primary/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-sheraa-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-sheraa-primary transition-colors">
                              {section.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                              {section.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-sheraa-primary">
                              <FileText className="w-3 h-3" />
                              <span>Page {section.page}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Stay Updated on Our Impact</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Be the first to know when our next impact report is released and receive insights into our ecosystem's growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  Download Latest Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Subscribe to Updates
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ImpactReportsPage;
