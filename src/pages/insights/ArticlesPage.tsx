
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, Filter, BookOpen, TrendingUp } from 'lucide-react';

const ArticlesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'Ecosystem News', 'Founder Stories', 'Practical Tips', 'Industry Trends', 'Program Updates'
  ];

  const articles = [
    {
      id: 1,
      title: "Sharjah Climbs Global Startup Rankings: Now 4th in GCC",
      excerpt: "Sheraa's efforts have contributed to Sharjah being ranked 7th in the top 10 MENA startup ecosystems in the Global Startup Ecosystem Report.",
      category: "Ecosystem News",
      author: "Sheraa Editorial Team",
      date: "2024-06-15",
      readTime: "5 min read",
      image: "/lovable-uploads/sheraa-logo.png",
      featured: true
    },
    {
      id: 2,
      title: "5 Reasons Your Startup Needs an Incubator",
      excerpt: "Discover why joining an incubator program like S3 can accelerate your startup's growth and increase your chances of success.",
      category: "Practical Tips",
      author: "Sara Al Nuaimi",
      date: "2024-06-10",
      readTime: "8 min read",
      image: "/lovable-uploads/sheraa-logo.png"
    },
    {
      id: 3,
      title: "The Rise of EdTech: Opportunities in the MENA Region",
      excerpt: "Exploring the growing EdTech sector and how startups are transforming education across the Middle East and North Africa.",
      category: "Industry Trends",
      author: "Technology Team",
      date: "2024-06-05",
      readTime: "12 min read",
      image: "/lovable-uploads/sheraa-logo.png"
    },
    {
      id: 4,
      title: "From Idea to Exit: A Founder's Journey Through Sheraa",
      excerpt: "Follow the inspiring story of a startup that went from a university idea to a successful acquisition, supported by Sheraa programs.",
      category: "Founder Stories",
      author: "Community Team",
      date: "2024-05-28",
      readTime: "10 min read",
      image: "/lovable-uploads/sheraa-logo.png"
    },
    {
      id: 5,
      title: "Navigating Seed Funding in the UAE: Expert Tips",
      excerpt: "Essential insights for startups seeking their first round of funding in the UAE market, from preparation to pitch.",
      category: "Practical Tips",
      author: "Investment Team",
      date: "2024-05-20",
      readTime: "15 min read",
      image: "/lovable-uploads/sheraa-logo.png"
    },
    {
      id: 6,
      title: "S3 Incubator Graduates Raise $5M in Series A",
      excerpt: "Recent S3 graduates continue to achieve milestones, with three startups securing significant Series A funding rounds.",
      category: "Program Updates",
      author: "Programs Team",
      date: "2024-05-15",
      readTime: "6 min read",
      image: "/lovable-uploads/sheraa-logo.png"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <BookOpen className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Articles & Insights
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Stay Ahead of the Curve
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Explore the latest trends, expert perspectives, success stories, and practical advice shaping the entrepreneurial landscape in Sharjah, the UAE, and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles and insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 items-center justify-center">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedCategory === category 
                        ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' 
                        : 'hover:bg-sheraa-primary/10'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'All' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <Badge className="mb-4 bg-sheraa-primary">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Featured Article
                </Badge>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-1/2 p-8">
                      <Badge variant="outline" className="mb-3">
                        {featuredArticle.category}
                      </Badge>
                      <h2 className="text-2xl font-bold mb-4 hover:text-sheraa-primary transition-colors cursor-pointer">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                        Read Full Article
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {article.category}
                      </Badge>
                      <h3 className="font-bold text-lg mb-3 group-hover:text-sheraa-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights, startup stories, and ecosystem updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;
