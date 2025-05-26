
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, Users, TrendingUp, Award, Clock, Target, 
  BookOpen, Lightbulb, ArrowRight, CheckCircle 
} from "lucide-react";

const StartupDojoPage: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "8-Week Intensive Program",
      description: "Summer incubation focusing on idea validation and business development"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Industry experts and successful entrepreneurs guide your journey"
    },
    {
      icon: Target,
      title: "Idea Validation",
      description: "Transform student ideas into viable entrepreneurial solutions"
    },
    {
      icon: Award,
      title: "Pathway to S3",
      description: "Top teams get fast-track consideration for our flagship incubator"
    }
  ];

  const benefits = [
    "Intensive training and mentorship from industry experts",
    "Opportunity to develop and refine business ideas",
    "Networking with peers and ecosystem players",
    "Potential grants and commercial licenses for top teams",
    "Access to Sheraa's broader entrepreneurship ecosystem"
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Youth Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent leading-tight">
              Startup Dojo: Ignite Your Potential
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              An intensive 8-week summer incubation program designed to transform student ideas 
              into viable entrepreneurial solutions. Your entrepreneurial journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Apply for Next Cohort
              </Button>
              <Button asChild variant="outline" size="lg" className="border-orange-600/30 text-orange-600 hover:bg-orange-50">
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Program Highlights
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-orange-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center mb-12"
              >
                What You'll Gain
              </motion.h2>
              <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    Program Benefits
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Eligibility & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-xl mb-6 text-white/90">
                  Open to university students and recent graduates across the UAE
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Join 81% Emirati participation and students from top universities like AUS, UOS, and more
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-50">
                    Apply Now
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/programs" className="flex items-center gap-2">
                      Explore Programs
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

export default StartupDojoPage;
