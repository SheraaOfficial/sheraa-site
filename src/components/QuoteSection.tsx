
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.95, 1]);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-sheraa-primary/10 via-transparent to-sheraa-teal/10">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-sheraa-primary/20 blur-3xl hidden md:block"
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
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-sheraa-teal/20 blur-3xl hidden md:block"
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
          <AspectRatio 
            ratio={16/9} 
            className="glass-card p-4 md:p-12 border border-sheraa-primary/20 bg-white/30 backdrop-blur-md shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex flex-col justify-center px-4 md:px-8"
            >
              <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2">
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
                  <Quote className="w-8 h-8 md:w-16 md:h-16 text-sheraa-orange opacity-60" />
                </motion.div>
              </div>
              
              <blockquote className="text-lg md:text-3xl lg:text-4xl font-medium text-sheraa-primary leading-relaxed mb-4 md:mb-8 min-h-[120px] md:min-h-[200px] flex items-center justify-center">
                "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-2 md:mt-6"
              >
                <p className="text-base md:text-xl font-semibold text-sheraa-orange">
                  Sara Al Nuaimi
                </p>
                <p className="text-xs md:text-base text-sheraa-dark/60 font-medium">
                  Chief Executive Officer, Sheraa
                </p>
              </motion.div>
            </motion.div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
