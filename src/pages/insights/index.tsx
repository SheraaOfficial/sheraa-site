
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Users, FileText, TrendingUp, 
  ArrowRight, Download, MessageSquare, BarChart
} from 'lucide-react';

const InsightsPage: React.FC = () => {
  const insightCategories = [
    {
      title: "Guides & Toolkits",
      description: "Practical templates, checklists, and step-by-step guides covering essential business functions",
      icon: BookOpen,
      link: "/insights/guides",
      color: "text-teal-600 bg-teal-50",
      stats: "50+ Resources"
    },
    {
      title: "Advisory Services", 
      description: "Connect with experienced mentors and subject matter experts for personalized guidance",
      icon: Users,
      link: "/insights/advisory",
      color: "text-green-600 bg-green-50",
      stats: "30+ Experts"
    },
    {
      title: "Articles & Insights",
      description: "Stay informed with the latest trends, best practices, and success stories from our ecosystem",
      icon: FileText,
      link: "/insights/articles",
      color: "text-purple-600 bg-purple-50",
      stats: "Weekly Updates"
    },
    {
      title: "Impact Reports",
      description: "Discover the collective achievements of the Sheraa ecosystem and entrepreneurship impact",
      icon: BarChart,
      link: "/insights/impact-reports",
      color: "text-orange-600 bg-orange-50",
      stats: "Annual Reports"
    }
  ];

  const featuredInsights = [
    {
      title: "Startup Pitch Deck Template",
      description: "Structure your winning investor pitch with this proven template used by successful startups",
      type: "Template",
      downloads: "2.5K+"
    },
    {
      title: "Business Model Canvas Guide",
      description: "Map out your business model quickly and effectively with this comprehensive guide",
      type: "Guide", 
      downloads: "1.8K+"
    },
    {
      title: "Fundraising Masterclass",
      description: "Learn from successful founders and investors about raising capital in the MENA region",
      type: "Video",
      downloads: "1.2K+"
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
                Your Entrepreneurial Insights<br />Knowledge & Support
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Building a successful venture requires more than just a great idea. Access essential insights, expert guidance, and timely knowledge to navigate the complexities of the startup journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/insights/guides" className="flex items-center gap-2">
                    Explore Insights
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Link to="/insights/advisory">Get Expert Advice</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Insight Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Curated for Your Success</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our insights are curated based on the real-world needs of founders within our ecosystem, offering actionable advice specific to the Sharjah and UAE context.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {insightCategories.map((category, idx) => (
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
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{category.description}</p>
                      <div className="text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mb-4">
                        {category.stats}
                      </div>
                      <Button asChild variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        <Link to={category.link} className="flex items-center justify-center gap-2">
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Insights</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get started with these highly-rated insights that have helped thousands of entrepreneurs build better businesses.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredInsights.map((insight, idx) => (
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
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium px-3 py-1 bg-sheraa-primary/10 text-sheraa-primary rounded-full">
                          {insight.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Download className="w-3 h-3" />
                          {insight.downloads}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3">{insight.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{insight.description}</p>
                      
                      <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Now
                      </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You Need?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our team is here to help you find the right insights or connect you with the right experts for your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl">
                <MessageSquare className="mr-2 w-4 h-4" />
                Request an Insight
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Our Team
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default InsightsPage;
