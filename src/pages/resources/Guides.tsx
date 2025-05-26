
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, Search, Filter, FileText, 
  CheckCircle, Star, Clock, Users
} from 'lucide-react';

const Guides: React.FC = () => {
  const categories = [
    "Business Planning", "Financial Management", "Marketing & Sales", 
    "Legal & Compliance", "Operations & HR", "Pitching & Fundraising",
    "Technology & Product", "All Categories"
  ];

  const guides = [
    {
      title: "Complete Business Plan Template",
      description: "Structure your winning business plan with this comprehensive template used by 500+ startups",
      category: "Business Planning",
      type: "Template",
      downloads: "2.5K+",
      rating: 4.9,
      timeToRead: "30 min",
      featured: true
    },
    {
      title: "Pitch Deck Masterclass",
      description: "Learn how to create compelling investor presentations that get funded",
      category: "Pitching & Fundraising", 
      type: "Guide",
      downloads: "1.8K+",
      rating: 4.8,
      timeToRead: "45 min",
      featured: true
    },
    {
      title: "Financial Modeling Toolkit",
      description: "Build professional financial models with our step-by-step toolkit",
      category: "Financial Management",
      type: "Toolkit", 
      downloads: "1.2K+",
      rating: 4.7,
      timeToRead: "60 min",
      featured: true
    },
    {
      title: "Lean Canvas Worksheet",
      description: "Map out your business model quickly and effectively", 
      category: "Business Planning",
      type: "Template",
      downloads: "980+",
      rating: 4.6,
      timeToRead: "15 min",
      featured: false
    },
    {
      title: "Legal Compliance Checklist",
      description: "Ensure your startup meets all legal requirements in the UAE",
      category: "Legal & Compliance",
      type: "Checklist",
      downloads: "750+", 
      rating: 4.5,
      timeToRead: "20 min",
      featured: false
    },
    {
      title: "Marketing Strategy Template",
      description: "Develop a comprehensive marketing strategy for your startup",
      category: "Marketing & Sales",
      type: "Template",
      downloads: "650+",
      rating: 4.4,
      timeToRead: "40 min",
      featured: false
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
                Practical Resources<br />for Building Your Business
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Access a library of downloadable guides, templates, checklists, and toolkits designed to streamline your startup operations and accelerate your growth.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, idx) => (
                <Badge 
                  key={idx}
                  variant={idx === 0 ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Resources</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {guides.filter(guide => guide.featured).map((guide, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="gradient-warm" className="text-xs">
                            {guide.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Download className="w-3 h-3" />
                            {guide.downloads}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{guide.description}</p>
                        
                        <div className="flex items-center gap-4 mb-6 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            {guide.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {guide.timeToRead}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* All Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">All Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx, duration: 0.5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-sheraa-dark">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-xs">
                            {guide.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Users className="w-3 h-3" />
                            {guide.downloads}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{guide.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {guide.rating}
                            </div>
                            <span>•</span>
                            <span>{guide.timeToRead}</span>
                          </div>
                          
                          <Button variant="outline" size="sm" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                            <Download className="w-3 h-3 mr-1" />
                            Get
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Suggest Resource */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12">
                  <FileText className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Can't Find What You Need?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Let us know what resources would be helpful for your startup journey. We're always adding new content based on community feedback.
                  </p>
                  <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    Suggest a Resource
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Guides;
