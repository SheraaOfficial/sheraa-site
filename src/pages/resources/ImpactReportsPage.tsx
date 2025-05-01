
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ImpactReportsPage = () => {
  const reports = [
    {
      year: "2024",
      title: "Sheraa Impact Report 2024",
      description: "Our most recent impact report showcasing the growth of Sheraa's ecosystem, with updated statistics on startup success, economic impact, and ecosystem development.",
      image: "/placeholder.svg",
      stats: [
        { label: "Startups Supported", value: "180+" },
        { label: "Revenue Generated", value: "$248M+" },
        { label: "Capital Raised", value: "$171M+" },
        { label: "Jobs Created", value: "1,900+" }
      ]
    },
    {
      year: "2023",
      title: "Sheraa Impact Report 2023",
      description: "A comprehensive overview of Sheraa's impact on the entrepreneurial landscape in Sharjah and the broader UAE, with key milestones and success stories.",
      image: "/placeholder.svg",
      stats: [
        { label: "Startups Supported", value: "165+" },
        { label: "Revenue Generated", value: "$210M+" },
        { label: "Capital Raised", value: "$142M+" },
        { label: "Jobs Created", value: "1,700+" }
      ]
    },
    {
      year: "2022",
      title: "Sheraa Impact Report 2022",
      description: "Documenting the recovery and growth of Sheraa startups post-pandemic, with insights into emerging sectors and innovative solutions.",
      image: "/placeholder.svg",
      stats: [
        { label: "Startups Supported", value: "150+" },
        { label: "Revenue Generated", value: "$175M+" },
        { label: "Capital Raised", value: "$120M+" },
        { label: "Jobs Created", value: "1,500+" }
      ]
    }
  ];

  const specialReports = [
    {
      title: "Women Founders in Sheraa",
      description: "A spotlight on women-led startups in the Sheraa ecosystem, highlighting their achievements and impact on the regional economy.",
      icon: <BarChart className="h-10 w-10 text-purple-500" />,
      category: "Special Report"
    },
    {
      title: "Sustainability Impact Assessment",
      description: "Analyzing the environmental and social impact of Sheraa-supported startups focused on sustainability solutions.",
      icon: <BarChart className="h-10 w-10 text-green-500" />,
      category: "Special Report"
    },
    {
      title: "Youth Entrepreneurship Study",
      description: "Research on the effectiveness of youth entrepreneurship programs and their long-term impact on career trajectories.",
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      category: "Research Paper"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Discover the Collective Achievements of the Sheraa Ecosystem</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Access our impact reports to explore the tangible outcomes of Sheraa's programs and initiatives. 
            These comprehensive reports provide insights into startup success metrics, economic contribution, 
            job creation, and the overall growth of Sharjah's entrepreneurial ecosystem.
          </p>
        </div>

        {/* Featured Report (Latest) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest Impact Report</h2>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-sheraa-primary to-sheraa-secondary text-white p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{reports[0].title}</h3>
                <p className="mb-8 text-white/80">{reports[0].description}</p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {reports[0].stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="white" size="lg" className="w-fit">
                  <Link to="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Full Report
                  </Link>
                </Button>
              </div>
              <div className="bg-gray-100 flex items-center justify-center">
                <img 
                  src={reports[0].image}
                  alt={reports[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Previous Reports */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Previous Annual Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.slice(1).map((report, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-md transition-all border">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 bg-gray-100 flex items-center justify-center">
                    <div className="text-4xl font-bold text-sheraa-primary">{report.year}</div>
                  </div>
                  <div className="col-span-2 p-6">
                    <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-full gap-2">
                      <Link to="#">
                        <Download className="h-4 w-4" />
                        Download Report
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Reports */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Special Reports & Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialReports.map((report, idx) => (
              <Card key={idx} className="border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gray-50 p-2 rounded-md">
                      {report.icon}
                    </div>
                    <div>
                      <span className="inline-block bg-sheraa-light text-sheraa-primary px-2 py-0.5 rounded text-xs font-medium mb-2">
                        {report.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                      <Button variant="link" className="p-0 group" asChild>
                        <Link to="#" className="flex items-center text-sheraa-primary">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Visualization */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Sheraa's Impact at a Glance</h2>
          <div className="bg-sheraa-light p-8 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-sheraa-primary mb-2">52%</div>
                <div className="text-gray-600">Women-Led Startups</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-sheraa-primary mb-2">71%</div>
                <div className="text-gray-600">Startup Survival Rate</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-sheraa-primary mb-2">18k+</div>
                <div className="text-gray-600">Youth Upskilled</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-sheraa-primary mb-2">140+</div>
                <div className="text-gray-600">Ecosystem Partners</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Request Custom Report */}
        <div className="text-center bg-gradient-to-r from-sheraa-primary/5 to-sheraa-secondary/5 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Need Specific Data or Insights?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team can help you access specific information about Sheraa's impact, 
            startup performance metrics, or sector-specific data for research or partnership purposes.
          </p>
          <Button asChild>
            <Link to="/contact?inquiry=report-request">Request Custom Impact Analysis</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ImpactReportsPage;
