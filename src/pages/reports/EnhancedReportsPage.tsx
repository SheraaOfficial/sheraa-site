
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';
import { 
  Download, 
  Eye, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  FileText,
  Share2,
  Bookmark
} from 'lucide-react';

interface Report {
  id: number;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  downloadUrl: string;
  previewUrl?: string;
  pages: number;
  downloads: number;
  featured: boolean;
  tags: string[];
}

const EnhancedReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadProgress, setDownloadProgress] = useState<{ [key: number]: number }>({});

  const categories = ['All', 'Impact Reports', 'Market Research', 'Program Analysis', 'Ecosystem Studies'];

  const reports: Report[] = [
    {
      id: 1,
      title: "Sheraa Impact Report 2024",
      description: "Comprehensive overview of Sheraa's impact on the entrepreneurship ecosystem in Sharjah, including startup outcomes, job creation, and economic contribution.",
      category: "Impact Reports",
      publishDate: "2024-01-15",
      downloadUrl: "/reports/sheraa-impact-2024.pdf",
      previewUrl: "/reports/previews/sheraa-impact-2024",
      pages: 52,
      downloads: 1247,
      featured: true,
      tags: ["impact", "startups", "jobs", "economic-growth"]
    },
    {
      id: 2,
      title: "UAE Startup Ecosystem Analysis",
      description: "In-depth analysis of the UAE startup ecosystem, covering funding trends, sector growth, and emerging opportunities for entrepreneurs.",
      category: "Market Research",
      publishDate: "2024-01-08",
      downloadUrl: "/reports/uae-startup-ecosystem.pdf",
      pages: 38,
      downloads: 892,
      featured: false,
      tags: ["uae", "ecosystem", "funding", "trends"]
    },
    {
      id: 3,
      title: "S3 Incubator Program Evaluation",
      description: "Detailed evaluation of the S3 Incubator program performance, startup success rates, and recommendations for program enhancement.",
      category: "Program Analysis",
      publishDate: "2023-12-20",
      downloadUrl: "/reports/s3-evaluation.pdf",
      pages: 29,
      downloads: 634,
      featured: false,
      tags: ["s3", "incubator", "evaluation", "success-rates"]
    }
  ];

  const filteredReports = reports.filter(report => 
    selectedCategory === 'All' || report.category === selectedCategory
  );

  const handleDownload = async (report: Report) => {
    setDownloadProgress(prev => ({ ...prev, [report.id]: 0 }));
    
    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setDownloadProgress(prev => ({ ...prev, [report.id]: i }));
    }
    
    // Simulate actual download
    setTimeout(() => {
      setDownloadProgress(prev => {
        const newProgress = { ...prev };
        delete newProgress[report.id];
        return newProgress;
      });
    }, 500);
  };

  const featuredReport = reports.find(report => report.featured);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/10 via-sheraa-teal/10 to-sheraa-primary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Research & Reports
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive research and analysis on entrepreneurship, innovation, and the startup ecosystem in Sharjah and the UAE.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-sheraa-primary/10 px-4 py-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Featured Report */}
          {featuredReport && selectedCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Report</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-sheraa-primary to-sheraa-teal p-8 text-white flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">{featuredReport.pages} Pages</p>
                      <p className="text-sm opacity-90">{featuredReport.downloads} Downloads</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{featuredReport.category}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredReport.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredReport.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredReport.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {featuredReport.downloads} downloads
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {downloadProgress[featuredReport.id] !== undefined ? (
                        <div className="space-y-2">
                          <Progress value={downloadProgress[featuredReport.id]} className="h-2" />
                          <p className="text-sm text-gray-500">Downloading... {downloadProgress[featuredReport.id]}%</p>
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <Button 
                            className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                            onClick={() => handleDownload(featuredReport)}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Button>
                          {featuredReport.previewUrl && (
                            <Button variant="outline">
                              <Eye className="mr-2 h-4 w-4" />
                              Preview
                            </Button>
                          )}
                          <Button variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* All Reports */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'All' ? 'All Reports' : selectedCategory} ({filteredReports.length})
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{report.category}</Badge>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {report.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {report.pages} pages
                          </div>
                          <div className="flex items-center gap-1">
                            <BarChart3 className="h-3 w-3" />
                            {report.downloads}
                          </div>
                        </div>
                        <span>{report.publishDate}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {report.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {downloadProgress[report.id] !== undefined ? (
                        <div className="space-y-2">
                          <Progress value={downloadProgress[report.id]} className="h-2" />
                          <p className="text-sm text-gray-500">Downloading... {downloadProgress[report.id]}%</p>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-sheraa-primary hover:bg-sheraa-primary/90"
                            onClick={() => handleDownload(report)}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </Button>
                          {report.previewUrl && (
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <NewsletterSignup variant="default" />
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EnhancedReportsPage;
