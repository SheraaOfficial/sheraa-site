
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 via-transparent to-[#D946EF]/5" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-[#9b87f5]/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-[#D946EF]/10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <AspectRatio ratio={16/5} className="bg-white/50 backdrop-blur-xl rounded-3xl p-12 shadow-lg border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex flex-col justify-center"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Quote className="w-16 h-16 text-[#9b87f5] opacity-20" />
                </motion.div>
              </div>
              
              <blockquote className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] bg-clip-text text-transparent leading-relaxed mb-8">
                "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <p className="text-xl font-semibold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                  Sara Al Nuaimi
                </p>
                <p className="text-gray-600 font-medium">Chief Executive Officer, Sheraa</p>
              </motion.div>
            </motion.div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
