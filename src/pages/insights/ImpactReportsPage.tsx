
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BarChart, Download, TrendingUp, ArrowRight, FileText } from 'lucide-react';

const ImpactReportsPage: React.FC = () => {
  const reports = [
    {
      title: "Sheraa Impact Report 2023",
      description: "Comprehensive overview of our ecosystem achievements, startup successes, and economic contributions to Sharjah.",
      year: "2023",
      pages: "64 pages",
      highlights: ["180+ Startups Supported", "$248M+ Revenue Generated", "1,900+ Jobs Created"],
      downloadUrl: "#"
    },
    {
      title: "Entrepreneurship Ecosystem Analysis 2022",
      description: "Deep dive into the regional startup landscape, market trends, and growth opportunities in the UAE.",
      year: "2022", 
      pages: "48 pages",
      highlights: ["Market Analysis", "Trend Insights", "Growth Projections"],
      downloadUrl: "#"
    },
    {
      title: "Women in Entrepreneurship Report 2022",
      description: "Special focus on women-led startups in our ecosystem and their remarkable contributions to innovation.",
      year: "2022",
      pages: "32 pages", 
      highlights: ["52% Women-Led Startups", "Success Stories", "Support Programs"],
      downloadUrl: "#"
    }
  ];

  return (
    <MainLayout>
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Impact Reports<br />Measuring Our Success
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover the collective achievements of the Sheraa ecosystem and the measurable impact of entrepreneurship in Sharjah through our comprehensive annual reports.
              </p>
              
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/insights" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Back to Insights
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <BarChart className="w-8 h-8 text-sheraa-primary" />
                        <span className="text-xs font-medium px-3 py-1 bg-sheraa-primary/10 text-sheraa-primary rounded-full">
                          {report.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{report.description}</p>
                      <p className="text-xs text-gray-500 mb-4">{report.pages}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold">Key Highlights:</h4>
                        {report.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 text-sheraa-primary" />
                            <span className="text-xs">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90 w-full">
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

        {/* Subscribe Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6 text-sheraa-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Be the first to know when we release new impact reports and ecosystem insights.
              </p>
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                Subscribe for Updates
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ImpactReportsPage;
