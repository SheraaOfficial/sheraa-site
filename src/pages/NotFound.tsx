
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

const NotFound = () => {
  const suggestedLinks = [
    { name: 'Homepage', path: '/', icon: Home },
    { name: 'Programs', path: '/programs', icon: Search },
    { name: 'Events', path: '/events', icon: Search },
    { name: 'Community', path: '/community', icon: Search },
    { name: 'Contact Us', path: '/contact', icon: HelpCircle },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-gradient-to-br from-white to-sheraa-background-soft">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-8xl md:text-9xl font-bold text-sheraa-primary/20 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-8"
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
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Or explore these popular pages:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <Link
                        to={link.path}
                        className="flex items-center gap-3 text-gray-700 hover:text-sheraa-primary transition-colors"
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
