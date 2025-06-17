
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle, BookOpen, Users, Calendar } from 'lucide-react';

const NotFound = () => {
  const suggestedLinks = [
    { name: 'Homepage', path: '/', icon: Home, description: 'Return to our homepage' },
    { name: 'Programs', path: '/programs', icon: BookOpen, description: 'Explore our startup programs' },
    { name: 'Community', path: '/community', icon: Users, description: 'Join our entrepreneur community' },
    { name: 'Events', path: '/events', icon: Calendar, description: 'Discover upcoming events' },
    { name: 'Resources', path: '/resources', icon: Search, description: 'Access guides and toolkits' },
    { name: 'Contact Us', path: '/contact', icon: HelpCircle, description: 'Get help from our team' },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-gradient-to-br from-white to-sheraa-background-soft">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-8xl md:text-9xl font-bold text-sheraa-primary/20 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track with our entrepreneurship ecosystem!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Get Help
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-8">Or explore these popular pages:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <Link
                        to={link.path}
                        className="flex flex-col items-center gap-3 text-gray-700 hover:text-sheraa-primary transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-sheraa-primary/10 flex items-center justify-center">
                          <link.icon className="w-6 h-6 text-sheraa-primary" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1">{link.name}</span>
                          <span className="text-sm text-gray-500">{link.description}</span>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-12 p-6 bg-sheraa-primary/5 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-2">Still can't find what you're looking for?</h3>
            <p className="text-gray-600 mb-4">
              Contact our team and we'll help you navigate the Sheraa ecosystem.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
