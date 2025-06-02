
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, Download, ArrowRight, Search } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: "Startup Pitch Deck Template",
      description: "Structure your winning investor pitch with this proven template used by successful startups.",
      category: "Templates",
      downloads: "2.5K+",
      type: "PDF"
    },
    {
      title: "Business Model Canvas Guide",
      description: "Map out your business model quickly and effectively with this comprehensive guide.",
      category: "Guides", 
      downloads: "1.8K+",
      type: "PDF"
    },
    {
      title: "Legal Compliance Checklist",
      description: "Ensure your startup meets all legal requirements with this detailed checklist.",
      category: "Checklists",
      downloads: "1.2K+",
      type: "PDF"
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
                Practical Guides<br />For Building Your Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Access a library of downloadable guides, templates, checklists, and toolkits designed to streamline your startup operations and accelerate your growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/insights" className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Back to Insights
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Search className="w-4 h-4 mr-2" />
                  Search Guides
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, idx) => (
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
                        <span className="text-xs font-medium px-3 py-1 bg-sheraa-primary/10 text-sheraa-primary rounded-full">
                          {guide.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Download className="w-3 h-3" />
                          {guide.downloads}
                        </div>
                      </div>
                      
                      <BookOpen className="w-8 h-8 text-sheraa-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{guide.description}</p>
                      <p className="text-xs text-gray-500 mb-6">Format: {guide.type}</p>
                      
                      <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90 w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Guide
                      </Button>
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

export default GuidesPage;
