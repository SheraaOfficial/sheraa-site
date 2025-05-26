
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, FileText, BarChart, TrendingUp, 
  Users, DollarSign, Building, Calendar, 
  Eye, ArrowRight, Award, Target
} from 'lucide-react';

const ImpactReports: React.FC = () => {
  const keyMetrics = [
    { 
      metric: "180+", 
      label: "Startups Supported",
      description: "Companies launched through our programs",
      icon: Building,
      color: "text-blue-600 bg-blue-50"
    },
    { 
      metric: "$248M+", 
      label: "Revenue Generated",
      description: "Total revenue by portfolio companies",
      icon: DollarSign,
      color: "text-green-600 bg-green-50"
    },
    { 
      metric: "$171M+", 
      label: "Capital Raised", 
      description: "Funding secured by our startups",
      icon: TrendingUp,
      color: "text-purple-600 bg-purple-50"
    },
    { 
      metric: "1,900+", 
      label: "Jobs Created",
      description: "Employment opportunities generated",
      icon: Users,
      color: "text-orange-600 bg-orange-50"
    },
    { 
      metric: "71%", 
      label: "Survival Rate",
      description: "Above industry average of 50%",
      icon: Award,
      color: "text-emerald-600 bg-emerald-50"
    },
    { 
      metric: "52%", 
      label: "Women-Led Startups",
      description: "Well above global average",
      icon: Target,
      color: "text-pink-600 bg-pink-50"
    }
  ];

  const reports = [
    {
      title: "2024 Annual Impact Report",
      description: "Comprehensive overview of Sheraa's ecosystem performance, startup success stories, and economic impact on Sharjah",
      year: "2024",
      pages: "48 pages",
      downloads: "2.1K+",
      type: "Annual Report",
      status: "Latest",
      highlights: ["Record investment activity", "71% startup survival rate", "52% women-led startups"]
    },
    {
      title: "Q3 2024 Ecosystem Update", 
      description: "Quarterly insights into funding trends, program outcomes, and emerging sectors in Sharjah's startup landscape",
      year: "2024",
      pages: "24 pages", 
      downloads: "1.5K+",
      type: "Quarterly Report",
      status: "Recent",
      highlights: ["EdTech growth surge", "$45M raised in Q3", "New partnership launches"]
    },
    {
      title: "2023 Impact & Growth Analysis",
      description: "Year-over-year analysis showing significant growth in startup formation, revenue generation, and job creation",
      year: "2023", 
      pages: "52 pages",
      downloads: "3.2K+",
      type: "Annual Report", 
      status: "Archive",
      highlights: ["180+ startups milestone", "International expansion", "Government partnerships"]
    },
    {
      title: "SEF 2024 Event Impact Report",
      description: "Detailed analysis of the Sharjah Entrepreneurship Festival's economic and networking impact on the ecosystem",
      year: "2024",
      pages: "16 pages",
      downloads: "890+", 
      type: "Event Report",
      status: "Archive",
      highlights: ["14,000+ attendees", "320+ investor meetings", "$2M+ deals initiated"]
    }
  ];

  const testimonials = [
    {
      quote: "These reports provide invaluable insights into the regional startup ecosystem. Essential reading for any investor or entrepreneur in the MENA region.",
      author: "Sarah Al Mahmoud",
      title: "Managing Partner, MENA Ventures",
      company: "Investment Firm"
    },
    {
      quote: "Sheraa's transparency and detailed reporting give us confidence in the ecosystem's growth trajectory and our continued partnership.",
      author: "Ahmed Hassan",
      title: "Head of Innovation",
      company: "Crescent Enterprises"
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
                Measuring Impact<br />Driving Transparency
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover the collective achievements of the Sheraa ecosystem and the tangible impact of entrepreneurship in Sharjah. Our comprehensive reports showcase real results from real companies.
              </p>
              
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl">
                <Download className="mr-2 w-4 h-4" />
                Download Latest Report
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact That Speaks Volumes</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem. Our commitment translates into tangible results.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {keyMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${metric.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <metric.icon className="w-8 h-8" />
                      </div>
                      <div className="text-3xl font-bold text-sheraa-primary mb-2">{metric.metric}</div>
                      <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Reports */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Our Reports</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access detailed analysis, performance metrics, and insights into Sharjah's growing entrepreneurship ecosystem.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reports.map((report, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-sheraa-dark">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={report.status === 'Latest' ? 'default' : 'outline'}
                            className={report.status === 'Latest' ? 'bg-sheraa-primary' : ''}
                          >
                            {report.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {report.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          {report.downloads}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{report.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {report.highlights.map((highlight, highlightIdx) => (
                            <li key={highlightIdx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <div className="w-1 h-1 bg-sheraa-primary rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {report.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {report.pages}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
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

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What Ecosystem Leaders Say</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <Card className="h-full bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                    <CardContent className="p-8">
                      <BarChart className="w-8 h-8 text-sheraa-primary mb-4" />
                      <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.title}</div>
                        <div className="text-xs text-sheraa-primary">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on Our Impact</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Be the first to receive our latest impact reports and ecosystem insights. Join our mailing list for quarterly updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Research Team
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default ImpactReports;
