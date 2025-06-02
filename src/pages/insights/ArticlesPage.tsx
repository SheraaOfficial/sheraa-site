
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User, ArrowRight, Search } from 'lucide-react';

const ArticlesPage: React.FC = () => {
  const articles = [
    {
      title: "Sharjah Climbs Global Startup Rankings: Now 4th in GCC",
      excerpt: "Discover how Sharjah's innovation ecosystem has achieved remarkable growth in global competitiveness rankings.",
      author: "Sheraa Team",
      date: "2024-01-15",
      category: "Ecosystem News",
      readTime: "5 min read"
    },
    {
      title: "5 Reasons Your Startup Needs an Incubator", 
      excerpt: "Explore the key benefits of joining an incubation program and how it can accelerate your startup's growth.",
      author: "Sara Al Nuaimi",
      date: "2024-01-10", 
      category: "Practical Tips",
      readTime: "7 min read"
    },
    {
      title: "The Rise of EdTech: Opportunities in the MENA Region",
      excerpt: "An in-depth look at the educational technology landscape and emerging opportunities for entrepreneurs.",
      author: "Industry Expert",
      date: "2024-01-05",
      category: "Industry Trends", 
      readTime: "10 min read"
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
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Explore the latest trends, expert perspectives, success stories, and practical advice shaping the entrepreneurial landscape in Sharjah, the UAE, and beyond.
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
                  Search Articles
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
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
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Read Article
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

export default ArticlesPage;
