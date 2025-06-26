
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Rocket, 
  Globe, 
  Building2, 
  ArrowRight,
  Leaf,
  Cpu,
  Palette,
  BookOpen
} from "lucide-react";

export const EnhancedProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Start Young",
      subtitle: "Youth & Student Programs",
      description: "Nurturing the next generation through Startup Dojo and Dojo+ programs for students and youth.",
      link: "/programs/start-young",
      icon: GraduationCap,
      logo: "/lovable-uploads/start-young-logo.png", // Placeholder - logos to be added
      stats: "18k+ Youth",
      color: "from-blue-500/20 to-sheraa-primary/20",
      iconColor: "text-blue-500",
      subPrograms: ["Startup Dojo", "Startup Dojo+"]
    },
    {
      title: "S3 Incubator",
      subtitle: "Sharjah Startup Studio",
      description: "Comprehensive support and funding to help startups achieve product-market fit and scale.",
      link: "/programs/s3-incubator",
      icon: Rocket,
      logo: "/lovable-uploads/s3-logo.png", // Placeholder - logos to be added
      stats: "$30k Funding",
      color: "from-green-500/20 to-sheraa-secondary/20",
      iconColor: "text-green-500"
    },
    {
      title: "Access Sharjah",
      subtitle: "Market Access Program",
      description: "Connect global startups with Sharjah's public and private sector through innovation challenges.",
      link: "/programs/access-sharjah-challenge",
      icon: Globe,
      logo: "/lovable-uploads/access-sharjah-logo.png", // Placeholder - logos to be added
      stats: "Direct POCs",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      title: "SME Support",
      subtitle: "Business Growth",
      description: "Tailored resources and connections for established SMEs seeking growth and innovation.",
      link: "/programs/sme-support",
      icon: Building2,
      logo: "/lovable-uploads/sme-support-logo.png", // Placeholder - logos to be added
      stats: "60k+ SMEs",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    }
  ];

  const centersOfExcellence = [
    {
      title: "Sustainability",
      description: "Green technology and environmental solutions",
      icon: Leaf,
      color: "text-green-600",
      logo: "/lovable-uploads/coe-sustainability-logo.png" // Placeholder
    },
    {
      title: "Advanced Manufacturing",
      description: "Industry 4.0 and smart manufacturing",
      icon: Cpu,
      color: "text-blue-600",
      logo: "/lovable-uploads/coe-manufacturing-logo.png" // Placeholder
    },
    {
      title: "Creative Industries",
      description: "Arts, media, and creative technology",
      icon: Palette,
      color: "text-purple-600",
      logo: "/lovable-uploads/coe-creative-logo.png" // Placeholder
    },
    {
      title: "EdTech",
      description: "Educational technology and learning solutions",
      icon: BookOpen,
      color: "text-orange-600",
      logo: "/lovable-uploads/coe-edtech-logo.png" // Placeholder
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/20 dark:from-sheraa-dark/50 dark:via-sheraa-dark/30 dark:to-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
            Programs Tailored for Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            From validating your initial idea to scaling globally, we meet you exactly where you are 
            and help you reach where you want to be.
          </p>
        </motion.div>

        {/* Main Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    {/* Program Logo - Uniform sizing and spacing */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center justify-center">
                        <IconComponent className={`w-8 h-8 ${program.iconColor}`} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-sheraa-primary font-medium mb-3">
                        {program.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      
                      <Badge variant="outline" className="mb-4">
                        {program.stats}
                      </Badge>
                      
                      <Button 
                        asChild 
                        variant="ghost" 
                        className="w-full group-hover:bg-sheraa-primary/10 group-hover:text-sheraa-primary"
                      >
                        <Link to={program.link} className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Centers of Excellence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-3xl p-12 border border-sheraa-primary/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Centers of Excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized support and expertise in Sharjah's key strategic sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {centersOfExcellence.map((center, index) => {
              const IconComponent = center.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center group"
                >
                  {/* COE Logo - Uniform sizing */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-sheraa-dark/80 border border-sheraa-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${center.color}`} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {center.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {center.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Find My Program CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/programs/find-my-program" className="flex items-center gap-2">
              Find My Program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
