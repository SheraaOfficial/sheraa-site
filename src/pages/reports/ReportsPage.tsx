
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReportsPage = () => {
  const reports = [
    {
      title: "Sheraa Impact Report 2024",
      description: "Comprehensive overview of our ecosystem impact, featuring startup successes, job creation, and economic contribution to Sharjah.",
      type: "Annual Report",
      date: "December 2024",
      pages: 48,
      featured: true
    },
    {
      title: "State of Entrepreneurship in Sharjah 2024",
      description: "In-depth analysis of the entrepreneurial landscape in Sharjah, including trends, challenges, and opportunities.",
      type: "Research Report",
      date: "November 2024",
      pages: 32
    },
    {
      title: "Women in Entrepreneurship: MENA Insights",
      description: "Special report focusing on women entrepreneurs across the MENA region and their impact on economic development.",
      type: "Special Report",
      date: "October 2024",
      pages: 24
    },
    {
      title: "Startup Funding Landscape in the UAE",
      description: "Analysis of funding trends, investor activity, and startup performance across the UAE ecosystem.",
      type: "Market Analysis",
      date: "September 2024",
      pages: 36
    },
    {
      title: "SEF 2024: Festival Impact and Insights",
      description: "Post-event analysis of the Sharjah Entrepreneurship Festival 2024, including attendee insights and outcomes.",
      type: "Event Report",
      date: "August 2024",
      pages: 20
    },
    {
      title: "Sustainability in Startup Innovation",
      description: "Exploring how startups are driving sustainable innovation and contributing to environmental goals.",
      type: "Thematic Report",
      date: "July 2024",
      pages: 28
    }
  ];

  const stats = [
    { label: "Reports Published", value: "25+", icon: FileText },
    { label: "Data Points Analyzed", value: "1000+", icon: BarChart3 },
    { label: "Stakeholders Surveyed", value: "500+", icon: TrendingUp },
    { label: "Annual Downloads", value: "10K+", icon: Download }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Research & <span className="text-blue-600">Reports</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Data-driven insights into the entrepreneurship ecosystem in Sharjah and beyond
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Report */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Featured Report
              </h2>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {reports[0].type}
                    </span>
                    <span className="text-sm opacity-90">{reports[0].date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold mt-4">
                    {reports[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 opacity-90 text-lg">
                    {reports[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{reports[0].pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{reports[0].date}</span>
                      </div>
                    </div>
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* All Reports */}
        <section className="py-16 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              All Reports
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reports.slice(1).map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                          {report.type}
                        </span>
                        <span className="text-sm text-gray-500">{report.pages} pages</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {report.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{report.date}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get notified when new reports and research insights are published
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ReportsPage;
