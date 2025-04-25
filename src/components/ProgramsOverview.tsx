import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Globe, Building2 } from "lucide-react";

const programs = [
  {
    title: "Start Young",
    subtitle: "Student & Youth Programs",
    description: "Nurturing the next generation of innovators through education and mentorship. Join Startup Dojo and transform your ideas into reality.",
    link: "/programs/start-young",
    icon: GraduationCap,
    stats: "18,000+ Youth Upskilled",
    color: "from-blue-500/20 to-sheraa-primary/20",
    iconColor: "text-blue-500"
  },
  {
    title: "S3 Incubator",
    subtitle: "Sharjah Startup Studio",
    description: "Equity-free funding and comprehensive support to help tech-enabled startups achieve product-market fit and scale effectively.",
    link: "/programs/s3-incubator",
    icon: Rocket,
    stats: "$30,000 Pre-seed Funding",
    color: "from-green-500/20 to-sheraa-secondary/20",
    iconColor: "text-green-500"
  },
  {
    title: "Access Sharjah",
    subtitle: "Market Access Program",
    description: "Connect global startups with Sharjah's public and private sector entities through innovation challenges and pilot opportunities.",
    link: "/programs/access-sharjah",
    icon: Globe,
    stats: "Direct POC Opportunities",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "SME Support",
    subtitle: "Business Growth",
    description: "Tailored resources and connections for established Small and Medium Enterprises seeking growth and innovation support.",
    link: "/programs/sme-support",
    icon: Building2,
    stats: "60,000+ SMEs Supported",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  }
];

const ProgramsOverview = () => {
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sheraa-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-sheraa-light text-sheraa-primary text-sm font-medium mb-4">
            Your Journey Starts Here
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programs Tailored for Growth
          </h2>
          <p className="text-lg text-gray-600">
            From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed to meet you where you are on your entrepreneurial path.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${program.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary rounded-t-lg" />
                
                <CardContent className="p-6 relative">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <program.icon className={`w-12 h-12 ${program.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-sheraa-primary font-medium mb-3">{program.subtitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                  <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                    {program.stats}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 relative">
                  <Link 
                    to={program.link}
                    className="text-sheraa-primary hover:text-sheraa-secondary font-medium inline-flex items-center group"
                  >
                    Learn more 
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            asChild 
            className="bg-sheraa-primary hover:bg-sheraa-primary/90"
          >
            <Link to="/programs">Explore All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
