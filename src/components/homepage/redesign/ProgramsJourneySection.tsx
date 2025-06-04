
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Rocket, Globe, Building2, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProgramsJourneySection: React.FC = () => {
  const programs = [
    {
      id: "start-young",
      title: "Start Young",
      subtitle: "For Students & Youth",
      description: "Turn ideas into action with our youth entrepreneurship programs including Startup Dojo.",
      icon: GraduationCap,
      color: "bg-blue-500",
      link: "/programs/start-young",
      stats: "18k+ youth trained"
    },
    {
      id: "s3-incubator",
      title: "S3 Incubator",
      subtitle: "For Early-Stage Startups",
      description: "Get $30k equity-free funding and 6 months of intensive support to scale your startup.",
      icon: Rocket,
      color: "bg-green-500",
      link: "/programs/s3-incubator",
      stats: "$30k equity-free funding"
    },
    {
      id: "access-sharjah",
      title: "Access Sharjah Challenge",
      subtitle: "For Growth-Stage Startups",
      description: "Connect with Sharjah's ecosystem through real challenges and POC opportunities.",
      icon: Globe,
      color: "bg-purple-500",
      link: "/programs/access-sharjah-challenge",
      stats: "Direct market access"
    },
    {
      id: "deal-dock",
      title: "Deal Dock",
      subtitle: "For Investment-Ready Startups",
      description: "Access our network of investors and secure funding for your growing startup.",
      icon: TrendingUp,
      color: "bg-orange-500",
      link: "/programs/deal-dock",
      stats: "Investor network access"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-sheraa-light/10 dark:from-sheraa-dark/20 dark:via-sheraa-dark/10 dark:to-sheraa-dark/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sheraa-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <Rocket className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Your Entrepreneurial Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
            Programs Designed for Every Stage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From student ideas to Series A funding. We provide tailored support at every stage of your 
            entrepreneurial journey, ensuring you have exactly what you need to succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group"
            >
              <Card className="h-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <Badge variant="outline" className="text-xs mb-3">
                    {program.subtitle}
                  </Badge>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sheraa-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-full mb-4">
                    {program.stats}
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-sheraa-primary group-hover:text-white group-hover:border-sheraa-primary transition-all duration-300">
                    <Link to={program.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-2xl p-8 border border-sheraa-primary/10 backdrop-blur-sm mb-8">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Program Fits?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI-powered program matcher will help you find the perfect program based on your startup stage, 
              goals, and specific needs. Get personalized recommendations in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-lg">
                <Link to="/eligibility" className="flex items-center gap-2">
                  Find My Program
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/programs" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  View All Programs
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
