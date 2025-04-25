
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              <p className="text-lg text-gray-600">
                Discover how Sheraa's initiatives are transforming Sharjah's entrepreneurial landscape and creating opportunities for innovators across the region.
              </p>
            </motion.div>

            {/* Content placeholder - this would be replaced with actual report content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-center text-gray-600">
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
