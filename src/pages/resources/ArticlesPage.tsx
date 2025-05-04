import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Calendar, ArrowRight, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ResourcesNav } from '@/components/resources/ResourcesNav';
import { ResourceInteraction } from '@/components/resources/ResourceInteraction';
import { useResourcesGame } from '@/components/resources/ResourcesGameContext';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { trackResourceView } = useResourcesGame();

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'ecosystem', name: 'Ecosystem News' },
    { id: 'founders', name: 'Founder Stories' },
    { id: 'tips', name: 'Practical Tips' },
    { id: 'trends', name: 'Industry Trends' },
    { id: 'programs', name: 'Program Updates' }
  ];

  const articles = [
    {
      id: "article-1",
      title: "Sharjah Climbs Global Startup Rankings: Now 4th in GCC",
      excerpt: "The latest Global Startup Ecosystem Report (GSER) shows Sharjah's impressive rise in regional rankings, highlighting the emirate's growing attraction for innovative startups and investors.",
      category: "ecosystem",
      image: "/placeholder.svg",
      date: "April 15, 2025",
      author: "Sheraa Team",
      new: true
    },
    {
      id: "article-2",
      title: "SEF 2025 Recap: Highlights from the Region's Largest Entrepreneurship Gathering",
      excerpt: "With over 14,000 attendees, 300+ global speakers, and 250+ activities, this year's Sharjah Entrepreneurship Festival (SEF) set new benchmarks for innovation and collaboration in the region.",
      category: "ecosystem",
      image: "/placeholder.svg",
      date: "February 10, 2025",
      author: "Events Team",
      new: false
    },
    {
      id: 3,
      title: "5 Reasons Your Startup Needs an Incubator",
      excerpt: "From mentorship and funding to networking opportunities and operational support, learn how joining the right incubator can significantly boost your startup's chances of success.",
      category: "tips",
      image: "/placeholder.svg",
      date: "March 22, 2025",
      author: "Programs Team"
    },
    {
      id: 4,
      title: "Founder Spotlight: How Manhat Scaled with Sheraa's S3 Program",
      excerpt: "Dr. Saeed Alhassan, founder of Manhat, shares his journey from innovative water technology concept to successful implementation with the support of Sheraa's flagship incubator.",
      category: "founders",
      image: "/placeholder.svg",
      date: "March 5, 2025",
      author: "Content Team"
    },
    {
      id: 5,
      title: "Navigating Seed Funding in the UAE: Expert Tips",
      excerpt: "Industry experts share insights on preparing for seed funding, approaching investors, and structuring deals in the unique context of the UAE's evolving venture capital landscape.",
      category: "tips",
      image: "/placeholder.svg",
      date: "February 28, 2025",
      author: "Investment Team"
    },
    {
      id: 6,
      title: "The Rise of EdTech: Opportunities in the MENA Region",
      excerpt: "Explore the rapid growth of educational technology across the Middle East and North Africa, with insights on market gaps, investment trends, and success stories from regional EdTech founders.",
      category: "trends",
      image: "/placeholder.svg",
      date: "February 15, 2025",
      author: "Research Team"
    },
    {
      id: 7,
      title: "Access Sharjah Challenge 2025: Solving Real-World Sustainability Challenges",
      excerpt: "This year's ASC focuses on innovative solutions for agriculture and livestock health, in partnership with the Department of Agriculture and endorsed by the Ministry of Climate Change.",
      category: "programs",
      image: "/placeholder.svg",
      date: "January 30, 2025",
      author: "Programs Team"
    },
    {
      id: 8,
      title: "How Sharjah's Creative Economy is Fostering Innovation",
      excerpt: "From design and media to performing arts and publishing, Sharjah's vibrant creative sectors are providing fertile ground for entrepreneurship and economic diversification.",
      category: "trends",
      image: "/placeholder.svg",
      date: "January 20, 2025",
      author: "Research Team"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Featured article is the most recent one
  const featuredArticle = articles[0];
  
  // Track viewed resources
  useEffect(() => {
    // Consider the page visited after 3 seconds
    const timer = setTimeout(() => {
      trackResourceView('articles-page');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [trackResourceView]);

  return (
    <MainLayout>
      <ResourcesNav />
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Stay Ahead: Insights from the Forefront of Innovation</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Explore the latest trends, expert perspectives, success stories, and practical advice shaping the entrepreneurial 
            landscape in Sharjah, the UAE, and beyond. Our articles and insights keep you informed and inspired on your journey.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gray-200 aspect-video lg:aspect-auto relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                />
                {featuredArticle.new && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    NEW
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredArticle.date}</span>
                  <span className="inline-block bg-sheraa-light text-sheraa-primary px-2 py-0.5 rounded">
                    {categories.find(cat => cat.id === featuredArticle.category)?.name}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex justify-between items-center">
                  <ResourceInteraction 
                    resourceId={featuredArticle.id}
                    resourceType="article"
                    resourceName={featuredArticle.title}
                  />
                  <Button className="group" asChild>
                    <Link to={`/resources/articles/${featuredArticle.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="mb-8 mx-auto max-w-2xl grid grid-cols-3 md:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium mb-2">No articles found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, idx) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
                        }}
                      >
                        <Card className="overflow-hidden border hover:shadow-md transition-all h-full">
                          <div className="aspect-[16/9] bg-gray-200 relative">
                            <img 
                              src={article.image} 
                              alt={article.title} 
                              className="w-full h-full object-cover"
                            />
                            {article.new && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold flex items-center gap-0.5">
                                <Sparkles className="h-3 w-3" />
                                NEW
                              </div>
                            )}
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>{article.date}</span>
                              <div className="flex-grow"></div>
                              <User className="h-3 w-3" />
                              <span>{article.author}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                              <ResourceInteraction 
                                resourceId={article.id}
                                resourceType="article"
                                resourceName={article.title}
                              />
                              <Button variant="link" className="p-0 group" asChild>
                                <Link to={`/resources/articles/${article.id}`} className="flex items-center text-sheraa-primary">
                                  Read More
                                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Get Insights Delivered to Your Inbox</h3>
            <p className="text-gray-600 mb-6">
              Sign up for the Sheraa newsletter to receive the latest articles, event invitations, and ecosystem updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;
