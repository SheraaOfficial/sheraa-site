
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);
  const rotation = useTransform(scrollYProgress, [0.2, 0.4], [15, 0]);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9b87f5" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* 3D Shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#9b87f5] to-purple-400 rounded-2xl opacity-20"
        animate={{ 
          rotateX: [0, 45, 0],
          rotateY: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-tr from-[#D946EF] to-pink-400 rounded-full opacity-20 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, scale, rotateZ: rotation }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <AspectRatio ratio={16/5} className="bg-white/30 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 hover:border-white/30 transition-all">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex flex-col justify-center"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
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
                  className="relative"
                >
                  <div className="absolute inset-0 bg-[#9b87f5]/30 rounded-full blur-xl transform scale-150" />
                  <Quote className="w-20 h-20 text-[#9b87f5] relative z-10" />
                </motion.div>
              </div>
              
              <blockquote className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] bg-clip-text text-transparent leading-relaxed mb-8">
                "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 relative"
              >
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent mb-6" />
                <p className="text-2xl font-semibold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
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
