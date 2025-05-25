
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Rocket, Globe, Building2, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Student Programs",
    subtitle: "Start Young",
    description: "Turn your university ideas into real businesses with mentorship and funding.",
    link: "/programs/start-young",
    icon: GraduationCap,
    highlight: "Perfect for students",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Startup Incubator",
    subtitle: "Get $30k Funding",
    description: "6-month program with equity-free funding to scale your tech startup.",
    link: "/programs/s3-incubator",
    icon: Rocket,
    highlight: "Most popular",
    color: "from-sheraa-primary to-sheraa-teal"
  },
  {
    title: "Market Access",
    subtitle: "Global Opportunities", 
    description: "Connect with major companies and government partners for real projects.",
    link: "/programs/access-sharjah",
    icon: Globe,
    highlight: "Immediate contracts",
    color: "from-green-500 to-green-600"
  },
  {
    title: "SME Growth",
    subtitle: "Scale Your Business",
    description: "Resources and connections for established businesses ready to expand.",
    link: "/programs/sme-support",
    icon: Building2,
    highlight: "For existing businesses",
    color: "from-orange-500 to-orange-600"
  }
];

export const ProgramsJourneySection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're a student with an idea or a company ready to scale, 
            we have the right program for your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-sheraa-dark">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium rounded-full">
                    {program.highlight}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  
                  <div className="text-sm font-medium text-sheraa-primary mb-3">
                    {program.subtitle}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-sheraa-primary group-hover:text-white group-hover:border-sheraa-primary transition-all duration-300">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg font-medium">
            <Link to="/programs" className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
