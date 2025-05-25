
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Handshake, ArrowRight, TrendingUp, Users, DollarSign, 
  Target, CheckCircle, Calendar, Building2, Award, Star 
} from "lucide-react";

const DealDockPage: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Investment Readiness",
      description: "Comprehensive preparation for fundraising with expert guidance"
    },
    {
      icon: Users,
      title: "Investor Network",
      description: "Direct access to VCs, angels, and institutional investors"
    },
    {
      icon: Target,
      title: "Pitch Perfection",
      description: "Refine your pitch deck and presentation skills"
    },
    {
      icon: Building2,
      title: "Due Diligence Support",
      description: "Get your financials and legal documents investor-ready"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Application & Assessment", 
      description: "Submit your startup for evaluation by our investment committee"
    },
    {
      step: "02", 
      title: "Investment Readiness Program",
      description: "4-week intensive program to prepare for fundraising"
    },
    {
      step: "03",
      title: "Investor Matchmaking", 
      description: "Connect with pre-qualified investors aligned with your sector"
    },
    {
      step: "04",
      title: "Pitch & Close",
      description: "Present to investors and close your funding round"
    }
  ];

  const eligibility = [
    "Seed to Series A stage startups",
    "Proven product-market fit with revenue",
    "Strong founding team with relevant experience", 
    "Clear growth strategy and market opportunity",
    "Seeking funding between $100K - $5M"
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 dark:from-sheraa-dark dark:via-yellow-900/10 dark:to-orange-900/10">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
              <Handshake className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">Investment Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              Deal Dock: Your Gateway to Investment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with the right investors and secure funding for your high-potential startup. 
              Our investment readiness platform bridges the gap between ambitious founders and 
              strategic capital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                Apply to Deal Dock
              </Button>
              <Button asChild variant="outline" size="lg" className="border-yellow-600/30 text-yellow-600 hover:bg-yellow-50">
                <Link to="/contact">Book Consultation</Link>
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
              Why Choose Deal Dock?
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
                  <Card className="h-full border border-yellow-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              How Deal Dock Works
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center mb-12"
              >
                Eligibility Criteria
              </motion.h2>
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-yellow-600" />
                        Requirements
                      </h3>
                      <ul className="space-y-3">
                        {eligibility.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-yellow-600" />
                        Investment Range
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white/80 rounded-lg p-4">
                          <div className="text-2xl font-bold text-yellow-600">$100K - $5M</div>
                          <div className="text-sm text-gray-600">Funding Range</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-4">
                          <div className="text-2xl font-bold text-orange-600">6-12 months</div>
                          <div className="text-sm text-gray-600">Program Duration</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <Card className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Funding?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Join successful startups who have raised millions through Deal Dock
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-yellow-600 hover:bg-gray-50">
                    Apply Now
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/contact" className="flex items-center gap-2">
                      Schedule Call
                      <Calendar className="w-4 h-4" />
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
