
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Target, Users, DollarSign, TrendingUp, Shield, 
  CheckCircle, ArrowRight, Handshake 
} from 'lucide-react';

const DealDockPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Curated Deal Flow",
      description: "Access to vetted startup deals and investment opportunities from Sheraa's portfolio"
    },
    {
      icon: Users,
      title: "Investor Network",
      description: "Connect with seasoned VCs, angels, and corporate investors in the region"
    },
    {
      icon: Shield,
      title: "Due Diligence Support",
      description: "Comprehensive startup assessments and investment guidance from our experts"
    },
    {
      icon: Handshake,
      title: "Co-Investment Opportunities",
      description: "Partner with other investors on high-potential deals and share risks"
    }
  ];

  const features = [
    "Exclusive access to Sheraa portfolio companies seeking funding",
    "Monthly investor meetups and pitch sessions",
    "Pre-screened investment opportunities with detailed analysis",
    "Direct introductions to startup founders",
    "Investment committee participation opportunities",
    "Market insights and sector-specific deal flow"
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">For Investors</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight">
              Deal Dock: Exclusive Investment Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with high-potential startups in Sheraa's ecosystem. Access curated deal flow, 
              co-investment opportunities, and direct connections to the region's most promising entrepreneurs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Deal Dock
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600/30 text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Why Join Deal Dock?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center mb-12"
              >
                What You Get Access To
              </motion.h2>
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Invest in the Future?</h2>
                <p className="text-xl mb-6 text-white/90">
                  Join Deal Dock and get exclusive access to Sharjah's top startup opportunities
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Minimum investment: $25,000 | Accredited investors only
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                    Apply for Membership
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/programs" className="flex items-center gap-2">
                      Explore All Programs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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

export default DealDockPage;
