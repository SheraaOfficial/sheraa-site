import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Book, Sailboat, Rocket, Globe } from "lucide-react";

const ProgramsOverview = () => {
  const programs = [
    {
      title: "Start Young",
      description: "Empowering the next generation of entrepreneurs through education and mentorship.",
      link: "/programs/start-young",
      color: "from-blue-500 to-purple-500",
      icon: Book,
      iconClass: "text-blue-500"
    },
    {
      title: "Startup Dojo",
      description: "A pre-accelerator program that helps early-stage startups validate their ideas.",
      link: "/programs/startup-dojo",
      color: "from-green-500 to-teal-500",
      icon: Sailboat,
      iconClass: "text-green-500"
    },
    {
      title: "S3 Incubator",
      description: "Sharjah Startup Studio helps founders build their MVP and go-to-market strategy.",
      link: "/programs/s3-incubator",
      color: "from-orange-500 to-red-500",
      icon: Rocket,
      iconClass: "text-orange-500"
    },
    {
      title: "Access Sharjah Challenge",
      description: "Connecting global startups with Sharjah's public and private sector entities.",
      link: "/programs/access-sharjah-challenge",
      color: "from-purple-500 to-pink-500",
      icon: Globe,
      iconClass: "text-purple-500"
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-sheraa-background-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sheraa offers a comprehensive entrepreneurial journey through various programs tailored to different stages of your startup.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className={`w-8 h-8 ${program.iconClass}`} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link 
                    to={program.link} 
                    className="text-sheraa-primary hover:text-sheraa-secondary font-medium inline-flex items-center group"
                  >
                    Learn more 
                    <svg 
                      className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
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
          className="text-center"
        >
          <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
