import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Globe, Building2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProgramsOverview = () => {
  const isMobile = useIsMobile();
  
  const programs = [
    {
      title: "Start Young",
      subtitle: isMobile ? "Students & Youth" : "Student & Youth Programs",
      description: "Nurturing the next generation of innovators through education and mentorship.",
      link: "/programs/start-young",
      icon: GraduationCap,
      stats: "18k+ Youth",
      color: "from-blue-500/20 to-sheraa-primary/20",
      iconColor: "text-blue-500"
    },
    {
      title: "S3 Incubator",
      subtitle: isMobile ? "Startup Studio" : "Sharjah Startup Studio",
      description: "Equity-free funding and support to help startups achieve product-market fit and scale.",
      link: "/programs/s3-incubator",
      icon: Rocket,
      stats: "$30k Pre-seed",
      color: "from-green-500/20 to-sheraa-secondary/20",
      iconColor: "text-green-500"
    },
    {
      title: "Access Sharjah",
      subtitle: isMobile ? "Market Access" : "Market Access Program",
      description: "Connect global startups with Sharjah's public and private sector through innovation challenges.",
      link: "/programs/access-sharjah",
      icon: Globe,
      stats: "Direct POCs",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      title: "SME Support",
      subtitle: isMobile ? "Business Growth" : "Business Growth",
      description: "Tailored resources and connections for established SMEs seeking growth and innovation support.",
      link: "/programs/sme-support",
      icon: Building2,
      stats: "60k+ SMEs",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-white to-sheraa-background-soft relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-sheraa-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Programs Tailored for Growth
          </h2>
          {!isMobile && (
            <p className="text-gray-600">
              From validating your initial idea to scaling globally, we support you at every stage.
            </p>
          )}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group h-full"
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${program.color} opacity-40`} />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary rounded-t-lg" />
                
                <CardContent className="p-4 md:p-6 relative">
                  <program.icon className={`w-8 h-8 mb-3 ${program.iconColor}`} />
                  <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                  <p className="text-xs text-sheraa-primary font-medium mb-2">{program.subtitle}</p>
                  {!isMobile && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{program.description}</p>
                  )}
                  <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                    {program.stats}
                  </div>
                  
                  <Link 
                    to={program.link}
                    className="mt-3 text-sm text-sheraa-primary hover:text-sheraa-secondary font-medium inline-flex items-center group"
                  >
                    Learn more 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
