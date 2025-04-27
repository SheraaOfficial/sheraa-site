
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.95, 1]);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0066A1]/5 via-transparent to-[#00A3A3]/5">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-[#0066A1]/10 blur-3xl"
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
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-[#00A3A3]/10 blur-3xl"
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
          <AspectRatio ratio={16/5} className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-[0_8px_32px_rgba(0,102,161,0.1)] border border-[#0066A1]/10">
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
                  <Quote className="w-16 h-16 text-[#0066A1] opacity-20" />
                </motion.div>
              </div>
              
              <blockquote className="text-3xl md:text-4xl font-medium text-[#1A1F2C] leading-relaxed mb-8">
                "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <p className="text-xl font-semibold text-[#0066A1]">
                  Sara Al Nuaimi
                </p>
                <p className="text-[#1A1F2C]/60 font-medium">Chief Executive Officer, Sheraa</p>
              </motion.div>
            </motion.div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
