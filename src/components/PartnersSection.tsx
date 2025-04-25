import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Bee'ah",
    category: "Sustainability",
    logo: "/partners/beeah.svg"
  },
  {
    name: "Air Arabia",
    category: "Travel & Tourism",
    logo: "/partners/air-arabia.svg"
  },
  {
    name: "Crescent Enterprises",
    category: "Social Entrepreneurship",
    logo: "/partners/crescent.svg"
  },
  {
    name: "Sharjah Media City",
    category: "Creative Economy",
    logo: "/partners/media-city.svg"
  },
  {
    name: "Sandooq Al Watan",
    category: "Emirati Innovators",
    logo: "/partners/sandooq.svg"
  },
  {
    name: "SRTIP",
    category: "Deep Tech",
    logo: "/partners/srtip.svg"
  },
  {
    name: "Alef Group",
    category: "F&B and Retail",
    logo: "/partners/alef.svg"
  }
];

const PartnersSection = () => {
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-24 bg-gradient-to-b from-sheraa-background-soft to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Founding Partners
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600"
            >
              We collaborate with visionary partners who share our commitment to driving focused innovation across Sharjah's key sectors.
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="h-full p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-4 grayscale group-hover:grayscale-0 transition-all">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/96x96/sheraa-light/sheraa-primary?text=" + 
                          partner.name.charAt(0);
                      }}
                    />
                  </div>
                  <h3 className="text-center font-medium text-sheraa-dark">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    {partner.category}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Link 
              to="/community/partnerships" 
              className="inline-flex items-center gap-2 text-sheraa-primary hover:text-sheraa-secondary font-medium group"
            >
              Learn more about our partnerships
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
