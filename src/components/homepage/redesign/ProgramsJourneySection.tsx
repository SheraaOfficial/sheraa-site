
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Rocket, Globe, Building2, ArrowRight, CheckCircle } from "lucide-react";

const programs = [
  {
    id: "start-young",
    title: "Start Young",
    subtitle: "Student & Youth Programs",
    description: "Nurturing the next generation of innovators through incubation and skill-building for students and youth.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    stats: "18k+ Youth Upskilled",
    features: ["8-week Summer Incubation", "University Partnerships", "Startup Dojo & Dojo+"],
    link: "/programs/start-young"
  },
  {
    id: "s3-incubator", 
    title: "S3 Incubator",
    subtitle: "Sharjah Startup Studio",
    description: "Equity-free funding and support to help startups achieve product-market fit and scale effectively.",
    icon: Rocket,
    color: "from-sheraa-primary to-purple-600",
    stats: "$30k Pre-seed Funding",
    features: ["Equity-Free Support", "6-Month Program", "Revenue-Sharing Model"],
    link: "/programs/s3-incubator"
  },
  {
    id: "access-sharjah",
    title: "Access Sharjah",
    subtitle: "Market Access Challenge",
    description: "Tackle real-world challenges and unlock market access through our global startup challenge.",
    icon: Globe,
    color: "from-sheraa-teal to-green-600",
    stats: "Direct Market Access",
    features: ["POC Grants", "Industry Partners", "Global Competition"],
    link: "/programs/access-sharjah"
  },
  {
    id: "sme-support",
    title: "SME Support",
    subtitle: "Business Growth",
    description: "Tailored resources and connections for established SMEs seeking growth and innovation support.",
    icon: Building2,
    color: "from-orange-500 to-red-500",
    stats: "60k+ SMEs Supported",
    features: ["Finance Access", "Export Development", "Innovation Adoption"],
    link: "/programs/sme-support"
  }
];

export const ProgramsJourneySection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Your Journey </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            From validating your initial idea to scaling globally, Sheraa offers a suite of programs 
            designed to meet you where you are on your entrepreneurial path.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900">
                <CardContent className="p-6 relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-sheraa-dark dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-sheraa-primary font-medium mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-block bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {program.stats}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={program.link}
                    className="inline-flex items-center gap-2 text-sheraa-primary hover:text-sheraa-teal font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 px-8">
            <Link to="/programs" className="flex items-center gap-2">
              Explore All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
