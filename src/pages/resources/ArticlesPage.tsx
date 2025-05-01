
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Clock, User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All',
    'Ecosystem News',
    'Founder Stories',
    'Practical Tips',
    'Industry Trends',
    'Program Updates',
  ];
  
  const articles = [
    {
      title: "Sharjah Climbs Global Startup Rankings: Now 4th in GCC",
      excerpt: "The latest Global Startup Ecosystem Report (GSER) shows Sharjah's impressive rise in regional rankings, reflecting the growing strength of its entrepreneurial ecosystem.",
      category: "Ecosystem News",
      author: "Sheraa Team",
      date: "April 25, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      title: "SEF 2025 Recap: Highlights from the Region's Largest Entrepreneurship Gathering",
      excerpt: "With over 14,000 attendees, 300+ global speakers, and countless connections made, this year's Sharjah Entrepreneurship Festival was our biggest and most impactful event yet.",
      category: "Ecosystem News",
      author: "Najla Al Midfa",
      date: "April 18, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      title: "5 Reasons Your Startup Needs an Incubator",
      excerpt: "From mentorship to funding opportunities, discover why joining the right incubator program can be the catalyst your startup needs for accelerated growth.",
      category: "Practical Tips",
      author: "Sheraa Team",
      date: "April 10, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Founder Spotlight: How TechEd Solutions Scaled with Sheraa's S3 Program",
      excerpt: "Ahmed and Fatima share their journey from a university project to a thriving EdTech startup serving schools across the UAE, and how S3 helped them get there.",
      category: "Founder Stories",
      author: "Sheraa Team",
      date: "April 3, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Navigating Seed Funding in the UAE: Expert Tips",
      excerpt: "Our panel of investors share insights on what they look for in early-stage startups and how founders can prepare for successful fundraising in the UAE ecosystem.",
      category: "Practical Tips",
      author: "Sara Al Nuaimi",
      date: "March 25, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "The Rise of EdTech: Opportunities in the MENA Region",
      excerpt: "With increasing investment in education innovation across the Middle East, we explore the growing opportunities for EdTech startups in addressing regional learning needs.",
      category: "Industry Trends",
      author: "Sheraa Team",
      date: "March 18, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Access Sharjah Challenge 2025: New Focus on AgriTech Innovation",
      excerpt: "This year's challenge will focus on agricultural technology solutions to address food security and sustainable farming in arid environments.",
      category: "Program Updates",
      author: "Sheraa Team",
      date: "March 12, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Building a Sustainable Startup: Beyond Environmental Impact",
      excerpt: "Sustainability isn't just about being eco-friendly. Discover how to build a startup with sustainable business practices, finances, and growth strategies.",
      category: "Industry Trends",
      author: "Environmental Expert",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "S3 Incubator Applications Now Open for Summer 2025 Cohort",
      excerpt: "Sheraa's flagship incubator program is accepting applications from tech-enabled startups with early market traction. Learn about eligibility and benefits.",
      category: "Program Updates",
      author: "Sheraa Team",
      date: "February 25, 2025",
      readTime: "3 min read",
      image: "/placeholder.svg",
      featured: false,
    },
  ];
  
  const filteredArticles = articles.filter(article => 
    (selectedCategory === 'All' || article.category === selectedCategory) &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Stay Ahead: Insights from the Forefront of Innovation</h1>
          <p className="text-lg text-gray-600">
            Explore the latest trends, expert perspectives, success stories, and practical advice shaping the 
            entrepreneurial landscape in Sharjah, the UAE, and beyond. Our articles and insights keep you 
            informed and inspired on your journey.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="w-full md:w-72 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3">{article.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <User size={14} className="mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-sheraa-primary">Read Article</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Regular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          
          {regularArticles.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularArticles.map((article, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center">
                        <User size={12} className="mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-3 text-sheraa-primary flex justify-center items-center">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {/* Subscribe Section */}
        <div className="bg-sheraa-primary/10 p-8 rounded-lg max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-3">Get Insights Delivered to Your Inbox</h2>
          <p className="text-gray-700 mb-6">
            Sign up for the Sheraa newsletter to receive the latest articles, event invitations, and ecosystem updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input placeholder="Your email address" className="flex-grow" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;
