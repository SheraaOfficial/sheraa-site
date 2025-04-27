
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Rocket, Users } from "lucide-react";

const featuredStartups = [
  {
    name: "Green Future Project",
    description: "Sustainable solutions for a better tomorrow",
    sector: "Sustainability",
    achievement: "Winner - Access Sharjah Challenge"
  },
  {
    name: "Arabee",
    description: "Innovative Arabic language learning platform",
    sector: "EdTech",
    achievement: "Successfully scaled across MENA"
  },
  {
    name: "KRISPR",
    description: "Revolutionary food tech solutions",
    sector: "FoodTech",
    achievement: "Raised $2M in funding"
  }
];

const StartupsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-sheraa-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-4"
          >
            Our Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-sheraa-dark mb-4"
          >
            Success Stories from Our Startups
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover the innovative ventures that are transforming industries and creating impact through Sheraa's support
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredStartups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sheraa-soft hover:shadow-sheraa-medium transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-sheraa-primary">
                  {startup.name}
                </h3>
                <span className="bg-sheraa-light px-3 py-1 rounded-full text-sm text-sheraa-teal">
                  {startup.sector}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{startup.description}</p>
              <div className="flex items-center gap-2 text-sheraa-orange">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">{startup.achievement}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <Button 
            asChild
            className="bg-sheraa-primary hover:bg-sheraa-primary/90"
          >
            <Link to="/community/startups" className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10"
          >
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Our Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupsShowcase;
