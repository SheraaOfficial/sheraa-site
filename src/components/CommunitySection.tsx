
import React from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Users, Calendar, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useDeviceDetection";

const CommunitySection = () => {
  const isMobile = useIsMobile();
  
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
  
  // Use simpler animations for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.2,
        delayChildren: isMobile ? 0 : 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-white via-sheraa-background-soft to-white">
      {/* Simplified background elements */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#9b87f5]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#D946EF]/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{
            once: true,
            margin: "0px"
          }} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-[#9b87f5]/10 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[#9b87f5] text-sm font-medium mb-6 md:mb-8">
              Community
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] bg-clip-text text-transparent">
              Join Our Vibrant Community
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
              Connect with fellow entrepreneurs, industry experts, and investors in Sheraa's 
              dynamic ecosystem. Access exclusive events, networking opportunities, and resources 
              to help your startup thrive.
            </p>
            
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4 md:mr-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#9b87f5]/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <GradientButton asChild size={isMobile ? "default" : "lg"} className="group w-full md:w-auto">
              <Link to="/community/join" className="flex items-center justify-center gap-2">
                Become a Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </GradientButton>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 lg:mt-0">
            <div>
              <div className="inline-block bg-[#D946EF]/10 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[#D946EF] text-sm font-medium mb-6 md:mb-8">
                Partnerships
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#D946EF] to-[#9b87f5] bg-clip-text text-transparent">
                Partner with Sheraa
              </h3>
              
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
                Collaborate with organizations that share our vision of fostering 
                innovation and entrepreneurship in the region.
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {partnershipItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#D946EF]/10 flex items-center justify-center text-[#D946EF] font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-base md:text-lg font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <GradientButton asChild variant="accent" size={isMobile ? "default" : "lg"} className="w-full group">
                <Link to="/community/partnerships" className="flex items-center justify-center gap-2">
                  Explore Partnerships
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </GradientButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
