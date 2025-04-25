
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-16 bg-sheraa-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Quote className="w-12 h-12 text-sheraa-primary/20" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
            "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
          </blockquote>
          
          <div className="mt-6">
            <p className="text-lg font-semibold text-sheraa-primary">Sara Al Nuaimi</p>
            <p className="text-gray-600">Chief Executive Officer, Sheraa</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
