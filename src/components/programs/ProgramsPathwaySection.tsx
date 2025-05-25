
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Rocket, Globe, Building2, ArrowRight, CheckCircle, Users, TrendingUp, Target } from "lucide-react";

const programsPathway = [
  {
    id: "start-young",
    stage: "Idea Stage / Youth",
    title: "Start Young",
    subtitle: "Student & Youth Programs",
    description: "Nurturing potential and building foundational skills through university partnerships and youth-focused incubation programs designed for the next generation of innovators.",
    icon: GraduationCap,
    color: "from-blue-500/30 to-blue-600/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    stats: "18k+ Youth Upskilled",
    programs: ["Startup Dojo", "Startup Dojo+"],
    features: ["8-week Summer Incubation", "University Partnerships", "Skill Development", "Mentorship Access"],
    link: "/programs/start-young",
    highlight: "81% Emirati Youth Participation"
  },
  {
    id: "s3-incubator", 
    stage: "Validation / Early Traction",
    title: "S3 Incubator",
    subtitle: "Sharjah Startup Studio",
    description: "Building sustainable business models and achieving product-market fit with equity-free support through our flagship revenue-sharing model program.",
    icon: Rocket,
    color: "from-sheraa-primary/30 to-purple-600/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    stats: "$30k Pre-seed Funding",
    programs: ["S3 Incubator"],
    features: ["Equity-Free Support", "6-Month Program", "Revenue-Sharing Model", "25hrs Mentorship"],
    link: "/programs/s3-incubator",
    highlight: "UAE's First Gov-backed Studio"
  },
  {
    id: "access-sharjah",
    stage: "Growth / Scaling",
    title: "Access Sharjah",
    subtitle: "Market Access Challenge",
    description: "Tackling challenges, accessing markets, and securing growth capital through industry partnerships and proof-of-concept opportunities with leading organizations.",
    icon: Globe,
    color: "from-sheraa-teal/30 to-green-600/30",
    borderColor: "border-green-200 dark:border-green-800",
    stats: "Direct Market Access",
    programs: ["Access Sharjah Challenge (ASC)"],
    features: ["POC Grants", "Industry Partners", "Global Competition", "Market Validation"],
    link: "/programs/access-sharjah",
    highlight: "Real Client Engagements"
  },
  {
    id: "sme-support",
    stage: "Established Businesses",
    title: "SME Support",
    subtitle: "Business Innovation & Growth",
    description: "Driving innovation and growth for existing Small and Medium Enterprises in Sharjah through strategic partnerships and resource access.",
    icon: Building2,
    color: "from-orange-500/30 to-red-500/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    stats: "60k+ SMEs in Sharjah",
    programs: ["SME Support Programs"],
    features: ["Finance Access", "Export Development", "Innovation Adoption", "Strategic Partnerships"],
    link: "/programs/sme-support",
    highlight: "Government Partnerships"
  }
];

export const ProgramsPathwaySection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-sheraa-teal/10 to-sheraa-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sheraa-teal/10 text-sheraa-teal rounded-full border border-sheraa-teal/20 shadow-sm backdrop-blur-sm mb-6"
          >
            <Target className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold">Program Pathway</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Your Entrepreneurial </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Journey Map
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive journey from ideation to global scaling, with stage-specific support 
            tailored to your entrepreneurial needs. Each program builds upon the previous, 
            creating a seamless pathway to success.
          </p>
        </motion.div>

        {/* Enhanced Pathway Visual */}
        <div className="mb-16 hidden lg:block">
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary opacity-30 rounded-full" />
            
            {programsPathway.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Enhanced Stage Indicator */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-800 flex items-center justify-center mb-4 border-4 border-sheraa-primary/30 shadow-lg backdrop-blur-sm relative group">
                  <program.icon className="w-12 h-12 text-sheraa-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm" />
                </div>
                
                <div className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white px-4 py-2 rounded-full text-sm font-medium mb-2 shadow-md">
                  {program.stage}
                </div>
                
                <h3 className="text-xl font-bold text-sheraa-dark dark:text-white mb-1">
                  {program.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-32">
                  {program.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Program Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programsPathway.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40`} />
                
                {/* Highlight badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {program.highlight}
                  </div>
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-sheraa-dark dark:text-white mb-1">
                        {program.title}
                      </h3>
                      <p className="text-sheraa-primary font-medium text-sm">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                    <TrendingUp className="w-4 h-4" />
                    {program.stats}
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-sheraa-dark dark:text-white flex items-center gap-2">
                      <Users className="w-4 h-4 text-sheraa-primary" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 group-hover:shadow-lg transition-all duration-300">
                    <Link to={program.link} className="flex items-center justify-center gap-2">
                      Learn More & Apply
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
