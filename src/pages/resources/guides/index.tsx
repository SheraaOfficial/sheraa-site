
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { ResourcesNav } from '@/components/resources/ResourcesNav';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, Download, Search, Filter, 
  BookOpen, Calculator, Target, Users,
  TrendingUp, Zap, CheckCircle
} from 'lucide-react';
import { downloadResource } from './GuideDownloadHandler';
import { ResourceInteraction } from '@/components/resources/ResourceInteraction';
import { useResourcesGame } from '@/components/resources/ResourcesGameContext';

const GuidesPage: React.FC = () => {
  const { trackResourceView, trackResourceDownload } = useResourcesGame();

  const resourceCategories = [
    {
      name: 'Business Planning',
      icon: Target,
      color: 'bg-blue-50 text-blue-600',
      count: 12
    },
    {
      name: 'Financial Management', 
      icon: Calculator,
      color: 'bg-green-50 text-green-600',
      count: 8
    },
    {
      name: 'Marketing & Sales',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600',
      count: 15
    },
    {
      name: 'Operations & HR',
      icon: Users,
      color: 'bg-orange-50 text-orange-600',
      count: 10
    }
  ];

  const featuredGuides = [
    {
      id: 'pitch-deck-template',
      title: 'Startup Pitch Deck Template',
      description: 'Structure your winning investor pitch with this proven template used by successful startups.',
      category: 'Business Planning',
      type: 'Template',
      downloads: '2.5K+',
      fileType: 'html' as const,
      featured: true
    },
    {
      id: 'business-model-canvas',
      title: 'Business Model Canvas Guide',
      description: 'Map out your business model quickly and effectively with this comprehensive interactive guide.',
      category: 'Business Planning',
      type: 'Guide',
      downloads: '1.8K+',
      fileType: 'html' as const,
      featured: true
    },
    {
      id: 'financial-model-template',
      title: 'Financial Model Template',
      description: 'Build accurate financial projections with this Excel template designed for startups.',
      category: 'Financial Management',
      type: 'Template',
      downloads: '1.4K+',
      fileType: 'csv' as const,
      featured: false
    },
    {
      id: 'go-to-market-strategy',
      title: 'Go-to-Market Strategy Framework',
      description: 'Launch your product successfully with this step-by-step market entry framework.',
      category: 'Marketing & Sales',
      type: 'Framework',
      downloads: '1.1K+',
      fileType: 'markdown' as const,
      featured: false
    },
    {
      id: 'legal-compliance-checklist',
      title: 'Legal Compliance Checklist',
      description: 'Ensure your startup meets all legal requirements with this comprehensive checklist.',
      category: 'Operations & HR',
      type: 'Checklist',
      downloads: '950+',
      fileType: 'json' as const,
      featured: false
    },
    {
      id: 'content-marketing-toolkit',
      title: 'Content Marketing Toolkit',
      description: 'Create engaging content that drives results with templates, calendars, and guides.',
      category: 'Marketing & Sales',
      type: 'Toolkit',
      downloads: '1.2K+',
      fileType: 'html' as const,
      featured: false
    }
  ];

  const handleDownload = (guide: typeof featuredGuides[0]) => {
    trackResourceView(guide.id);
    trackResourceDownload(guide.id);
    downloadResource(guide.title, guide.description, guide.fileType);
  };

  React.useEffect(() => {
    // Track page view
    trackResourceView('guides-page');
  }, [trackResourceView]);

  return (
    <MainLayout>
      <ResourcesNav />
      
      <div className="bg-gradient-to-br from-white via-sheraa-light/5 to-white dark:from-sheraa-dark/30 dark:to-sheraa-dark/10 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <BookOpen className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-semibold text-sheraa-primary">Practical Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
              Guides & Toolkits
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access downloadable guides, templates, checklists, and toolkits designed to streamline your startup operations and accelerate your growth.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mx-auto rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} Resources
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Resources</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="group"
                >
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${guide.featured ? 'ring-2 ring-sheraa-primary/20' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant={guide.featured ? "default" : "secondary"} className="text-xs">
                          {guide.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Download className="w-3 h-3" />
                          {guide.downloads}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-3 group-hover:text-sheraa-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {guide.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          Free
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button 
                          onClick={() => handleDownload(guide)}
                          className="flex-1 mr-3 bg-sheraa-primary hover:bg-sheraa-primary/90"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        
                        <ResourceInteraction 
                          resourceId={guide.id}
                          resourceType="guide"
                          resourceName={guide.title}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 border-sheraa-primary/20">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 mx-auto mb-4 text-sheraa-primary" />
                <h3 className="text-2xl font-bold mb-4">Need a Custom Resource?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Let us know what resources would help your startup, and we'll consider adding them to our library.
                </p>
                <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  Request a Resource
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuidesPage;
