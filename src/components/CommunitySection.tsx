
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Target, ArrowRight, Sparkles, Globe, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with other founders, mentors, and investors in our vibrant ecosystem."
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to workshops, talks, and community gatherings designed for growth."
    },
    {
      icon: Target,
      title: "Resource Access",
      description: "Get support, advice, and resources for every stage of your startup journey."
    },
    {
      icon: Globe,
      title: "Global Connections",
      description: "Tap into international markets and expand your venture's reach."
    }
  ];

  const partnershipItems = [
    {
      icon: Sparkles,
      title: "Corporate Innovation Programs",
      description: "Collaborate with industry leaders to solve real-world challenges."
    },
    {
      icon: PieChart,
      title: "Strategic Investments",
      description: "Connect with investors looking for the next breakthrough idea."
    },
    {
      icon: Calendar,
      title: "Co-hosted Events",
      description: "Create impactful experiences for the entrepreneurial community."
    }
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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#9b87f5]/10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#D946EF]/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-block bg-gradient-to-r from-[#9b87f5]/20 to-[#D946EF]/20 px-6 py-2 rounded-full text-[#9b87f5] text-sm font-medium mb-6">
            Powered by Community
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] bg-clip-text text-transparent">
            Join Our Thriving Ecosystem
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with fellow entrepreneurs, industry experts, and investors in Sheraa's 
            dynamic community. Access exclusive events, networking opportunities, and resources 
            to help your startup thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 flex items-start gap-6 shadow-lg border border-white/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b87f5] to-[#D946EF]/80 flex items-center justify-center text-white shadow-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] text-white transition-all group shadow-xl rounded-xl px-8 py-6 text-lg"
              >
                <Link to="/community/join" className="flex items-center gap-2">
                  Become a Member
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#D946EF]/30 to-[#9b87f5]/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D946EF]/20 to-[#9b87f5]/20 flex items-center justify-center text-[#D946EF] group-hover:from-[#D946EF]/30 group-hover:to-[#9b87f5]/30 transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-semibold text-lg">{item.title}</span>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="w-full border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF]/10 group rounded-xl"
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
      </div>
    </section>
  );
};

export default CommunitySection;
