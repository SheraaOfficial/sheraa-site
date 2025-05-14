
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, BookOpen, Mic, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: "Innovation Showcase",
    description: "Discover groundbreaking solutions from startups across every industry vertical."
  },
  {
    icon: Award,
    title: "Global Recognition",
    description: "Gain visibility on an international stage and connect with media and potential partners."
  },
  {
    icon: Users,
    title: "Investor Connections",
    description: "Meet with VCs, angel investors, and corporate innovators looking for the next big opportunity."
  },
  {
    icon: BookOpen,
    title: "Knowledge Exchange",
    description: "Learn from industry pioneers and thought leaders through keynotes, panels, and workshops."
  },
  {
    icon: Mic,
    title: "Pitch Competitions",
    description: "Compete for significant funding and showcase your venture to a captive audience."
  },
  {
    icon: Sparkles,
    title: "Cultural Celebration",
    description: "Experience a fusion of entrepreneurship, art, music, and local culture."
  }
];

const SEFFeatures = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#292D3E]">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[25rem] h-[25rem] bg-purple-500/10 rounded-full filter blur-[120px] opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-[25rem] h-[25rem] bg-orange-500/10 rounded-full filter blur-[120px] opacity-60" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white mb-4">
            Why Attend SEF'26
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            An Unforgettable Experience
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            SEF'26 offers immersive experiences designed to inspire, connect, and empower 
            entrepreneurs at every stage of their journey.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 
                transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] p-3 rounded-lg w-12 h-12 
                flex items-center justify-center mb-5">
                <feature.icon className="text-white h-5 w-5" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 flex-grow">{feature.description}</p>
              
              <div className="h-1 w-12 bg-gradient-to-r from-[#9b87f5] to-[#F97316] rounded-full mt-5"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFeatures;
