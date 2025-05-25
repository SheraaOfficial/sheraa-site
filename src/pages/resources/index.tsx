
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FileText, Users, BookOpen, BarChart, ArrowRight, 
  Sparkles, Lightbulb, Target, Rocket, Zap 
} from "lucide-react";

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: "Guides & Toolkits",
      description: "Practical templates, checklists, and step-by-step guides covering essential business functions",
      icon: FileText,
      href: "/resources/guides",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      features: ["Pitch Deck Templates", "Business Plan Tools", "Financial Models", "Legal Checklists"]
    },
    {
      title: "Advisory Services",
      description: "Connect with experienced mentors and subject matter experts for personalized guidance",
      icon: Users,
      href: "/resources/advisory",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
      features: ["1:1 Mentoring", "Expert Consultations", "Strategic Planning", "Industry Insights"]
    },
    {
      title: "Articles & Insights",
      description: "Stay informed with the latest trends, best practices, and success stories from our ecosystem",
      icon: BookOpen,
      href: "/resources/articles",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
      features: ["Industry Trends", "Success Stories", "Best Practices", "Market Analysis"]
    },
    {
      title: "Impact Reports",
      description: "Discover the collective achievements of the Sheraa ecosystem and our impact on Sharjah",
      icon: BarChart,
      href: "/resources/impact-reports",
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-600",
      features: ["Annual Reports", "Economic Impact", "Success Metrics", "Growth Data"]
    }
  ];

  const featuredTools = [
    {
      title: "Startup Readiness Assessment",
      description: "Evaluate your startup's readiness and get personalized recommendations",
      icon: Target,
      action: "Take Assessment"
    },
    {
      title: "Business Model Canvas",
      description: "Interactive tool to map out your business model visually",
      icon: Lightbulb,
      action: "Start Planning"
    },
    {
      title: "Funding Calculator",
      description: "Calculate how much funding you need and plan your runway",
      icon: Rocket,
      action: "Calculate Now"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Sparkles className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Your Entrepreneurial Toolkit
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Knowledge & Tools for Your Success
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Access practical guides, expert advisory services, and insightful articles designed to help you 
              navigate the challenges and opportunities of building your business in Sharjah and beyond.
            </p>
          </motion.div>

          {/* Resource Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group"
              >
                <Card className="relative bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full overflow-hidden">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="relative z-10 p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Zap className="w-3 h-3 text-sheraa-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 group-hover:scale-105 transition-transform duration-300">
                      <Link to={category.href} className="flex items-center justify-center gap-2">
                        Explore {category.title}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Interactive Business Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get instant insights with our collection of interactive tools designed to help you make informed decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index), duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-sheraa-light/50 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30 border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{tool.description}</p>
                      <Button variant="outline" size="sm" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                        {tool.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Join our programs and get access to exclusive resources, mentorship, and funding opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    <Link to="/programs">Explore Programs</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
