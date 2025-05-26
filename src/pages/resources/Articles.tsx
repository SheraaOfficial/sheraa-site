
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, Filter, Calendar, User, 
  ArrowRight, TrendingUp, Bell, BookOpen
} from 'lucide-react';

const Articles: React.FC = () => {
  const categories = [
    "All", "Ecosystem News", "Founder Stories", "How-To Guides", 
    "Industry Trends", "Program Updates", "Investment News"
  ];

  const featuredArticles = [
    {
      title: "Sharjah Climbs Global Startup Rankings: Now 4th in GCC",
      excerpt: "Latest Global Startup Ecosystem Report shows significant progress in Sharjah's innovation landscape",
      category: "Ecosystem News", 
      author: "Sheraa Editorial",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "photo-1519389950473-47ba0277781c",
      featured: true
    },
    {
      title: "How This UAE Founder Scaled to $5M ARR in 18 Months", 
      excerpt: "Deep dive into the strategies and mindset that helped this S3 graduate achieve rapid growth",
      category: "Founder Stories",
      author: "Sarah Al Madani",
      date: "Dec 12, 2024", 
      readTime: "8 min read",
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: true
    },
    {
      title: "The Rise of EdTech: Opportunities in the MENA Region",
      excerpt: "Market analysis and trends shaping the future of educational technology in our region",
      category: "Industry Trends",
      author: "Ahmed Hassan",
      date: "Dec 10, 2024",
      readTime: "12 min read", 
      image: "photo-1581091226825-a6a2a5aee158",
      featured: true
    }
  ];

  const recentArticles = [
    {
      title: "5 Reasons Your Startup Needs an Incubator",
      excerpt: "Breaking down the tangible benefits of joining a structured startup program",
      category: "How-To Guides",
      author: "Fatima Al Zahra", 
      date: "Dec 8, 2024",
      readTime: "6 min read"
    },
    {
      title: "SEF 2025 Registration Opens: What's New This Year",
      excerpt: "Early bird tickets now available for the region's largest entrepreneurship festival",
      category: "Program Updates",
      author: "Sheraa Events",
      date: "Dec 5, 2024", 
      readTime: "3 min read"
    },
    {
      title: "Navigating Seed Funding in the UAE: Expert Tips",
      excerpt: "Insights from VCs and successful founders on raising your first institutional round", 
      category: "Investment News",
      author: "Mohammed Abbas",
      date: "Dec 3, 2024",
      readTime: "10 min read"
    },
    {
      title: "Building a Remote-First Startup Culture",
      excerpt: "Lessons learned from distributed teams across the MENA region",
      category: "How-To Guides", 
      author: "Layla Hassan",
      date: "Nov 30, 2024",
      readTime: "7 min read"
    },
    {
      title: "Q3 2024 Ecosystem Report: Record Investment Activity",
      excerpt: "Analysis of funding trends and startup activity in Sharjah's growing ecosystem",
      category: "Ecosystem News",
      author: "Sheraa Research",
      date: "Nov 28, 2024",
      readTime: "15 min read"
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
                Stay Ahead<br />Insights from Innovation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Explore the latest trends, expert perspectives, success stories, and practical advice shaping the entrepreneurial landscape in Sharjah, the UAE, and beyond.
              </p>
              
              {/* Search and Newsletter */}
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search articles and insights..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Bell className="mr-2 w-4 h-4" />
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                    <Filter className="mr-2 w-4 h-4" />
                    Filter Articles
                  </Button>
                </div>
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

        {/* Featured Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredArticles.map((article, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=600&h=300`}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            <div className="flex items-center gap-1 mb-1">
                              <User className="w-3 h-3" />
                              {article.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {article.date}
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-sheraa-primary hover:text-sheraa-primary/80">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
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

        {/* Recent Articles */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
              <div className="space-y-6">
                {recentArticles.map((article, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx, duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-sheraa-dark">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {article.category}
                              </Badge>
                              <span className="text-xs text-gray-500">{article.readTime}</span>
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{article.excerpt}</p>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {article.date}
                              </div>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 md:flex-shrink-0">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-12">
                  <BookOpen className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Insights Delivered</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Sign up for the Sheraa newsletter to receive the latest articles, event invitations, and ecosystem updates directly in your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                    />
                    <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Subscribe
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Weekly insights • No spam • Unsubscribe anytime
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Articles;
