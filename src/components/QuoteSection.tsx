
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ParallaxImage from "./ParallaxImage";

const QuoteSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-sheraa-accent-light to-sheraa-accent">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
        alt="Professional meeting"
        speed={0.4}
        overlay="dark"
        overlayStrength="strong"
        position="center"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Quote className="w-12 h-12 text-white/40" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
          </blockquote>
          
          <div className="mt-6">
            <p className="text-lg font-semibold text-white">Sara Al Nuaimi</p>
            <p className="text-gray-200">Chief Executive Officer, Sheraa</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
