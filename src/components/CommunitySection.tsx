import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with other founders, mentors, and investors."
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to workshops, talks, and community gatherings."
    },
    {
      icon: Target,
      title: "Resource Access",
      description: "Get support, advice, and resources for your startup."
    }
  ];

  const partnershipItems = [
    "Corporate Innovation Programs",
    "Community Sponsorships",
    "Co-hosted Events & Workshops"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-white via-sheraa-background-soft to-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#9b87f5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#D946EF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-[#9b87f5]/10 px-6 py-2 rounded-full text-[#9b87f5] text-sm font-medium mb-8">
              Community
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] bg-clip-text text-transparent">
              Join Our Vibrant Community
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Connect with fellow entrepreneurs, industry experts, and investors in Sheraa's 
              dynamic ecosystem. Access exclusive events, networking opportunities, and resources 
              to help your startup thrive.
            </p>
            
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#9b87f5]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] transition-all group"
            >
              <Link to="/community/join" className="flex items-center gap-2">
                Become a Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-lg">
              <div className="inline-block bg-[#D946EF]/10 px-6 py-2 rounded-full text-[#D946EF] text-sm font-medium mb-8">
                Partnerships
              </div>
              
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#D946EF] to-[#9b87f5] bg-clip-text text-transparent">
                Partner with Sheraa
              </h3>
              
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Collaborate with organizations that share our vision of fostering 
                innovation and entrepreneurship in the region.
              </p>
              
              <div className="space-y-6 mb-12">
                {partnershipItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#D946EF]/10 flex items-center justify-center text-[#D946EF] font-semibold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="w-full border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF]/10 group"
              >
                <Link to="/community/partnerships" className="flex items-center justify-center gap-2">
                  Explore Partnerships
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
