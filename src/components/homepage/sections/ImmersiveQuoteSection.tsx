
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ImmersiveQuoteSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Generate floating elements
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sheraa-primary/10 via-white to-sheraa-teal/10 dark:from-sheraa-primary/20 dark:via-sheraa-dark dark:to-sheraa-teal/20"
    >
      {/* Immersive background */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sheraa-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sheraa-orange/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sheraa-teal/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating sparkles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-sheraa-primary/40"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main quote content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4"
        style={{ y: springY, opacity, scale }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-sheraa-primary/20 shadow-2xl"
            initial={{ rotateX: -15, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 bg-sheraa-primary/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-sheraa-orange/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Quote icon with animation */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 rounded-full flex items-center justify-center">
                  <Quote className="w-10 h-10 text-sheraa-primary" />
                </div>
                {/* Floating sparkles around quote */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-sheraa-orange rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}px`,
                      left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 30}px`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main quote */}
            <motion.blockquote
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.p 
                className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend 
                <span className="relative mx-2">
                  collective strength
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sheraa-orange to-sheraa-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.8 }}
                  />
                </span>
                and unity with 
                <span className="relative mx-2">
                  individual expression
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sheraa-teal to-sheraa-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                  />
                </span>
                and creativity."
              </motion.p>
              
              <motion.footer
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="w-16 h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full" />
                <div className="text-xl md:text-2xl font-semibold text-sheraa-primary">
                  H.E. Sheikha Bodour Bint Sultan Al Qasimi
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  Chairperson, Sheraa
                </div>
                
                {/* Decorative stars */}
                <div className="flex gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 2 + (i * 0.1), type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-sheraa-orange fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-sheraa-dark to-transparent" />
    </section>
  );
};
