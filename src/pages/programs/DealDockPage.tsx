
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ModernNavigation from '@/components/navigation/ModernNavigation';
import Footer from '@/components/Footer';

const DealDockPage = () => {
  const benefits = [
    {
      icon: Target,
      title: "Deal Sourcing",
      description: "Access to vetted startup deals and investment opportunities"
    },
    {
      icon: Users,
      title: "Network Access",
      description: "Connect with seasoned investors and industry experts"
    },
    {
      icon: DollarSign,
      title: "Investment Support",
      description: "Due diligence support and investment guidance"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Growth",
      description: "Ongoing support for portfolio company growth"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-sheraa-dark">
      <ModernNavigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/programs" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>
          </Button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Deal Dock
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              An exclusive platform connecting investors with high-potential startups in the Sheraa ecosystem.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 text-sheraa-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/contact">
                Learn More About Deal Dock
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DealDockPage;
