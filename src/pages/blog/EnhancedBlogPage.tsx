import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlogSearchFilter } from './BlogSearchFilter';
import { BlogReadingProgress } from './BlogReadingProgress';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';
import { ArrowRight, Clock, Eye, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const EnhancedBlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Startup Stories', 'Industry Insights', 'Program Updates', 'Expert Advice', 'Ecosystem News'];
  const tags = ['All', 'funding', 'innovation', 'mentorship', 'sustainability', 'ai', 'fintech', 'growth'];

  const articles = [
    {
      id: 1,
      title: "The Future of Sustainable Startups in the UAE",
      excerpt: "Exploring how environmental consciousness is driving innovation and creating new opportunities for entrepreneurs in the region.",
      content: "Full article content would go here...",
      author: {
        name: "Sarah Al-Mansouri",
        avatar: "",
        title: "Sustainability Expert"
      },
      category: "Industry Insights",
      tags: ["sustainability", "innovation"],
      publishDate: "2024-01-15",
      readTime: 8,
      views: 1247,
      likes: 89,
      comments: 23,
      featured: true,
      image: "/lovable-uploads/sustainability-startup.jpg"
    },
    {
      id: 2,
      title: "From Idea to Series A: A Sheraa Success Story",
      excerpt: "Follow the journey of TechFlow as they navigate the challenges of scaling their EdTech platform with support from the Sheraa ecosystem.",
      content: "Full article content would go here...",
      author: {
        name: "Ahmed Hassan",
        avatar: "",
        title: "Program Director"
      },
      category: "Startup Stories",
      tags: ["funding", "growth"],
      publishDate: "2024-01-12",
      readTime: 6,
      views: 892,
      likes: 67,
      comments: 15,
      featured: false,
      image: "/lovable-uploads/startup-success.jpg"
    },
    {
      id: 3,
      title: "AI Revolution: How Machine Learning is Transforming MENA Startups",
      excerpt: "An in-depth look at how artificial intelligence is being adopted by startups across the Middle East and North Africa region.",
      content: "Full article content would go here...",
      author: {
        name: "Dr. Fatima Al-Zahra",
        avatar: "",
        title: "AI Research Lead"
      },
      category: "Expert Advice",
      tags: ["ai", "innovation"],
      publishDate: "2024-01-10",
      readTime: 12,
      views: 1534,
      likes: 134,
      comments: 41,
      featured: true,
      image: "/lovable-uploads/ai-transformation.jpg"
    },
    {
      id: 4,
      title: "Sheraa's S3 Incubator: 2024 Cohort Spotlight",
      excerpt: "Meet the innovative startups joining our latest S3 Incubator cohort and learn about their groundbreaking solutions.",
      content: "Full article content would go here...",
      author: {
        name: "Omar Al-Rashid",
        avatar: "",
        title: "Incubator Manager"
      },
      category: "Program Updates",
      tags: ["mentorship", "growth"],
      publishDate: "2024-01-08",
      readTime: 5,
      views: 743,
      likes: 56,
      comments: 12,
      featured: false,
      image: "/lovable-uploads/s3-cohort.jpg"
    }
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || article.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const featuredArticle = articles.find(article => article.featured);

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
                Sheraa Insights & Stories
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the latest trends, success stories, and expert insights from Sharjah's thriving entrepreneurship ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <BlogSearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              categories={categories}
              tags={tags}
            />
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && searchQuery === '' && selectedCategory === 'All' && selectedTag === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4">{featuredArticle.category}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={featuredArticle.author.avatar} />
                          <AvatarFallback>
                            {featuredArticle.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{featuredArticle.author.name}</p>
                          <p className="text-sm text-gray-500">{featuredArticle.author.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.readTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {featuredArticle.views}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Articles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Latest Articles ({filteredArticles.length})
              </h2>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  List
                </Button>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex gap-1">
                          {article.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime} min
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={article.author.avatar} />
                            <AvatarFallback className="text-xs">
                              {article.author.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{article.author.name}</p>
                            <p className="text-xs text-gray-500">{article.publishDate}</p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
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

export default EnhancedBlogPage;
