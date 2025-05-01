
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ImpactReport = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-sheraa-light to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-sheraa-primary/10 text-sheraa-primary text-sm font-medium mb-4">
                Impact Report 2024
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent">
                Catalyzing Innovation &amp; Growth
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover how Sheraa's initiatives are transforming Sharjah's entrepreneurial landscape and creating opportunities for innovators across the region.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <Button
                  asChild
                  variant="shimmer"
                  size="xl"
                  className="group"
                >
                  <Link to="/lovable-uploads/sheraa-impact-report-2024.pdf" target="_blank" download="Sheraa-Impact-Report-2024.pdf">
                    <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Full Report (PDF)
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <motion.div 
                className="p-6 rounded-xl bg-[#F2FCE2] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">30+</div>
                <div className="text-sm text-gray-600">Global Partnerships</div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-[#FEF7CD] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">12</div>
                <div className="text-sm text-gray-600">Industry Sectors</div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-[#E5DEFF] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">4</div>
                <div className="text-sm text-gray-600">Innovation Hubs</div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-[#FFDEE2] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">25+</div>
                <div className="text-sm text-gray-600">Corporate Partners</div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-[#FDE1D3] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">5K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-[#D3E4FD] bg-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sheraa-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </motion.div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                Impact report content will be displayed here. This is a placeholder for the detailed impact report page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactReport;
