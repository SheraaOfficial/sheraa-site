
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, Target, DollarSign, Trophy, Users, Lightbulb, 
  CheckCircle, ArrowRight, Building2, Award 
} from "lucide-react";

const AccessSharjahChallengePage: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "AED 250,000 POC Grants",
      description: "Substantial funding to implement your solution with major partners"
    },
    {
      icon: Building2,
      title: "Direct Market Access",
      description: "Work directly with leading Sharjah entities like BEEAH and SSC"
    },
    {
      icon: Award,
      title: "Global Recognition",
      description: "Showcase at major events like GITEX North Star"
    },
    {
      icon: Users,
      title: "Expert Validation",
      description: "Endorsement from ministries and industry leaders"
    }
  ];

  const focusAreas = [
    {
      title: "AgriTech",
      description: "Innovations in sustainable farming, precision agriculture, food security"
    },
    {
      title: "Livestock Health", 
      description: "Technologies for animal health monitoring, breeding, biosecurity"
    },
    {
      title: "Sustainability",
      description: "Waste management, net zero solutions, environmental technologies"
    },
    {
      title: "Smart Cities",
      description: "Urban innovation, IoT solutions, smart infrastructure"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Global Challenge</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-500 to-green-600 bg-clip-text text-transparent leading-tight">
              Access Sharjah Challenge
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A unique global competition inviting growth-stage startups to address real-world 
              challenges faced by leading entities in Sharjah. Solve challenges, scale your impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Apply for ASC 2025
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-600/30 text-green-600 hover:bg-green-50">
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* How It Works */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              How ASC Works
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Global Application</h3>
                      <p className="text-gray-600">Startups worldwide apply with solutions to specific challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Selection Process</h3>
                      <p className="text-gray-600">Finalists participate in intensive readiness sprint</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Pitch & Win</h3>
                      <p className="text-gray-600">Present solutions to industry partners and judges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">POC Implementation</h3>
                      <p className="text-gray-600">Winners receive grants to implement with partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Why Join ASC?
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
                  <Card className="h-full border border-green-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              2024 Focus Areas
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="border border-green-100 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-green-700">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Solve Global Challenges?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Join startups from around the world competing for market access and funding
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-50">
                    Apply Now
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/programs" className="flex items-center gap-2">
                      View All Programs
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

export default AccessSharjahChallengePage;
