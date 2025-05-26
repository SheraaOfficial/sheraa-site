
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Rocket, ArrowRight, TrendingUp, Users, DollarSign, 
  Target, CheckCircle, Calendar, Award, Lightbulb 
} from "lucide-react";

const S3IncubatorPage: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "$30,000 USD Equity-Free Funding",
      description: "Pre-seed funding with revenue-sharing model, not equity dilution"
    },
    {
      icon: Users,
      title: "25+ Hours of Mentorship",
      description: "Personalized guidance from 30+ experienced mentors and EIRs"
    },
    {
      icon: Target,
      title: "Market Access",
      description: "Warm introductions to potential customers and strategic partners"
    },
    {
      icon: Award,
      title: "$800K+ in Perks",
      description: "Software credits, legal support, and premium services"
    }
  ];

  const eligibility = [
    "Tech-enabled, scalable business model",
    "Market-ready product with early traction",
    "Full-time commitment from founding team",
    "Revenue generation and customer validation",
    "Willingness to operate in Sharjah/UAE"
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl" />
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
              <Rocket className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Flagship Incubator</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              S3 Incubator: Sharjah Startup Studio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The UAE's first government-backed startup studio operating on a unique revenue-sharing model. 
              Build a sustainable, profitable business while retaining full ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                Apply to S3 Incubator
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              What You Get
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
                  <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
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
                Who Should Apply?
              </motion.h2>
              <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-sheraa-primary" />
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-4">
                    {eligibility.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sheraa-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
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
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Startup?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Join the next cohort of S3 Incubator and transform your vision into reality
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
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

export default S3IncubatorPage;
