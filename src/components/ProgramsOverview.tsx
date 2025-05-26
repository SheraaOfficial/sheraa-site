
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Globe, Building2, ArrowRight, Handshake } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProgramsOverview = () => {
  const isMobile = useIsMobile();
  
  const programs = [
    {
      title: "Start Young",
      subtitle: "Student & Youth Programs",
      description: "Nurturing the next generation of innovators through education and mentorship.",
      link: "/programs/start-young",
      icon: GraduationCap,
      stats: "18k+ Youth",
      color: "from-blue-500/20 to-sheraa-primary/20",
      iconColor: "text-blue-500"
    },
    {
      title: "S3 Incubator",
      subtitle: "Sharjah Startup Studio",
      description: "Comprehensive support and funding to help startups achieve product-market fit and scale.",
      link: "/programs/s3-incubator",
      icon: Rocket,
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
      stats: "60k+ SMEs",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    },
    {
      title: "Startup Dojo",
      subtitle: "Summer Incubation",
      description: "8-week intensive program for students to transform ideas into viable solutions.",
      link: "/programs/startup-dojo",
      icon: GraduationCap,
      stats: "Summer Program",
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        
        {/* Vertical layout for condensed view */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${program.color} opacity-40`} />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary rounded-t-lg" />
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{program.title}</h3>
                        <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          {program.stats}
                        </div>
                      </div>
                      <p className="text-sm text-sheraa-primary font-medium mb-2">{program.subtitle}</p>
                      <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                      
                      <Link 
                        to={program.link}
                        className="text-sm text-sheraa-primary hover:text-sheraa-secondary font-medium inline-flex items-center group"
                      >
                        Learn more 
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white">
            <Link to="/programs" className="flex items-center gap-2">
              Explore All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
