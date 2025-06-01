
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Lightbulb, Users, Shield, Target, DollarSign, MapPin,
  Trophy, Star, Zap, BookOpen, ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EligibilityCheckerButton from "@/components/eligibility/EligibilityCheckerButton";
import { ProgramsTestimonialsSection } from "@/components/programs/ProgramsTestimonialsSection";
import { StickyCornerCTA } from "@/components/ui/sticky-corner-cta";
import { ProgramsCTASection } from "@/components/programs/ProgramsCTASection";
import { ProgramsTimelineLayout } from "@/components/programs/ProgramsTimelineLayout";

const ProgramsPage: React.FC = () => {
  const benefits = [
    {
      title: 'No Equity Taken',
      description: 'Keep 100% ownership of your company. We believe founders should control their destiny.',
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: 'Real Market Access',
      description: 'Direct connections to customers, not just networking events. Get real POCs and pilot projects.',
      icon: Target,
      color: "text-blue-600", 
      bgColor: "bg-blue-50"
    },
    {
      title: 'Funding When Ready',
      description: 'From $30k pre-seed to Series A connections. We fund based on your stage and needs.',
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: 'Sharjah Advantage',
      description: 'Business-friendly regulations, strategic location, and government support for entrepreneurs.',
      icon: MapPin,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <MainLayout
      seoTitle="Startup Programs & Incubation - Sheraa"
      seoDescription="Join Sheraa's comprehensive startup programs: S3 Incubator with $30K equity-free funding, Start Young for students, Access Sharjah Challenge, and SME support."
      seoKeywords="startup incubator UAE, entrepreneur programs Sharjah, startup funding, business acceleration, S3 incubator"
    >
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sheraa-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Lightbulb className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">For Founders, By Founders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Your Startup Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              From day one idea to Series A funding. We've designed a clear path that takes you from wherever you are 
              to wherever you want to go. No fluff, no theory - just practical support that gets results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <EligibilityCheckerButton 
                variant="gradient"
                size="lg"
                text="Find My Perfect Program"
              />
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Free Consultation
                  <Users className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { number: "180+", label: "Startups Built" },
                { number: "$248M+", label: "Revenue Generated" },
                { number: "71%", label: "Still Operating" },
                { number: "$30k", label: "Equity-Free Funding" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Why Founders Choose Sheraa
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full border border-gray-100 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-sheraa-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Programs Timeline */}
          <ProgramsTimelineLayout />

          {/* Success Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Trophy className="w-16 h-16 mx-auto text-sheraa-primary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Real Results from Real Founders</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    These aren't just vanity metrics. These are real companies, built by real founders, creating real value.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { metric: "$248M+", label: "Revenue Generated", desc: "By our portfolio companies" },
                    { metric: "$171M+", label: "Capital Raised", desc: "From top-tier investors" },
                    { metric: "1,900+", label: "Jobs Created", desc: "Across the ecosystem" },
                    { metric: "52%", label: "Women-Led", desc: "Above global average" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">
                        {item.metric}
                      </div>
                      <div className="font-semibold mb-1">{item.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Testimonials */}
          <ProgramsTestimonialsSection />
        </div>
      </div>
      
      {/* Enhanced CTA Section */}
      <ProgramsCTASection />
      
      {/* Add Sticky CTA */}
      <StickyCornerCTA 
        href="/eligibility"
        text="Find Your Program"
        subtext="AI-Powered Matcher"
      />
    </MainLayout>
  );
};

export default ProgramsPage;
