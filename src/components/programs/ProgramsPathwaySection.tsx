
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Rocket, Globe, Building2, ArrowRight, CheckCircle, Users } from "lucide-react";

const programsPathway = [
  {
    id: "start-young",
    stage: "Idea Stage / Youth",
    title: "Start Young",
    subtitle: "Student & Youth Programs",
    description: "Nurturing potential and building foundational skills through university partnerships and youth-focused incubation.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    stats: "18k+ Youth Upskilled",
    programs: ["Startup Dojo", "Startup Dojo+"],
    features: ["8-week Summer Incubation", "University Partnerships", "Skill Development"],
    link: "/programs/start-young"
  },
  {
    id: "s3-incubator", 
    stage: "Validation / Early Traction",
    title: "S3 Incubator",
    subtitle: "Sharjah Startup Studio",
    description: "Building sustainable business models and achieving product-market fit with equity-free support.",
    icon: Rocket,
    color: "from-sheraa-primary to-purple-600",
    stats: "$30k Pre-seed Funding",
    programs: ["S3 Incubator"],
    features: ["Equity-Free Support", "6-Month Program", "Revenue-Sharing Model"],
    link: "/programs/s3-incubator"
  },
  {
    id: "access-sharjah",
    stage: "Growth / Scaling",
    title: "Access Sharjah",
    subtitle: "Market Access Challenge",
    description: "Tackling challenges, accessing markets, and securing growth capital through industry partnerships.",
    icon: Globe,
    color: "from-sheraa-teal to-green-600",
    stats: "Direct Market Access",
    programs: ["Access Sharjah Challenge (ASC)"],
    features: ["POC Grants", "Industry Partners", "Global Competition"],
    link: "/programs/access-sharjah"
  },
  {
    id: "sme-support",
    stage: "Established Businesses",
    title: "SME Support",
    subtitle: "Business Innovation & Growth",
    description: "Driving innovation and growth for existing Small and Medium Enterprises in Sharjah.",
    icon: Building2,
    color: "from-orange-500 to-red-500",
    stats: "60k+ SMEs in Sharjah",
    programs: ["SME Support Programs"],
    features: ["Finance Access", "Export Development", "Innovation Adoption"],
    link: "/programs/sme-support"
  }
];

export const ProgramsPathwaySection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Our Program </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Pathway
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive journey from ideation to global scaling, with stage-specific support 
            tailored to your entrepreneurial needs.
          </p>
        </motion.div>

        {/* Pathway Visual */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {programsPathway.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Stage Indicator */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 flex items-center justify-center mb-4 border-2 border-sheraa-primary/20">
                  <program.icon className="w-12 h-12 text-sheraa-primary" />
                </div>
                
                <div className="bg-sheraa-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                  {program.stage}
                </div>
                
                <h3 className="text-xl font-bold text-sheraa-dark dark:text-white">
                  {program.title}
                </h3>
                
                {/* Arrow (except for last item) */}
                {index < programsPathway.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-16">
                    <ArrowRight className="w-8 h-8 text-sheraa-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Program Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programsPathway.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-sheraa-dark dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sheraa-primary font-medium mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="inline-block bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    {program.stats}
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-sheraa-dark dark:text-white">Key Features:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to={program.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
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
