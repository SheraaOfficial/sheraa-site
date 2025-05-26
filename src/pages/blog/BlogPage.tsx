
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "Building the Future: Sharjah's Entrepreneurship Ecosystem in 2024",
      excerpt: "Discover how Sharjah is becoming a global hub for innovation and entrepreneurship through strategic initiatives and supportive policies.",
      author: "Sara Al Nuaimi",
      date: "December 15, 2024",
      category: "Ecosystem",
      readTime: "8 min read"
    },
    {
      title: "From Idea to Scale: Success Stories from S3 Incubator",
      excerpt: "Learn from our portfolio companies who have successfully scaled their startups with the support of Sheraa's flagship incubator program.",
      author: "Ahmed Hassan",
      date: "December 10, 2024",
      category: "Success Stories",
      readTime: "6 min read"
    },
    {
      title: "The Rise of Sustainable Startups in the MENA Region",
      excerpt: "Exploring how sustainability-focused startups are addressing regional challenges and creating lasting impact.",
      author: "Fatima Al Zahra",
      date: "December 5, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    }
  ];

  const recentPosts = [
    {
      title: "Fundraising in the UAE: A Complete Guide for Startups",
      date: "November 28, 2024",
      category: "Funding"
    },
    {
      title: "Women in Entrepreneurship: Breaking Barriers",
      date: "November 25, 2024",
      category: "Diversity"
    },
    {
      title: "Tech Trends Shaping the Future of Business",
      date: "November 20, 2024",
      category: "Technology"
    },
    {
      title: "Building Strategic Partnerships for Growth",
      date: "November 15, 2024",
      category: "Growth"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
                <BookOpen className="w-16 h-16 text-[#165A5A]" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sheraa <span className="text-[#165A5A]">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Insights, stories, and knowledge from the heart of Sharjah's entrepreneurship ecosystem
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-3 py-1 bg-[#165A5A]/10 text-[#165A5A] rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                            {post.category}
                          </span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Stay Updated
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get the latest insights and stories delivered to your inbox
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165A5A] dark:bg-gray-800 dark:text-white"
                />
                <Button className="bg-[#165A5A] hover:bg-[#165A5A]/90">
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

export default BlogPage;
