
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EligibilityChecker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics for smoother animations
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 15,
  });

  // Transform values for parallax effects
  const backgroundOpacity = useTransform(
    springScroll,
    [0, 0.5, 1],
    [0.7, 1, 0.7]
  );
  const backgroundScale = useTransform(
    springScroll,
    [0, 0.5, 1],
    [0.95, 1.05, 0.95]
  );
  const xOffset = useTransform(
    springScroll,
    [0, 0.5, 1],
    [-20, 0, 20]
  );
  const rotate = useTransform(
    springScroll,
    [0, 0.5, 1],
    [-1, 0, 1]
  );

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-sheraa-light rounded-2xl p-6 md:p-12 relative overflow-hidden"
          style={{
            scale: backgroundScale,
            rotate,
            x: xOffset,
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {/* Background gradient blobs */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-sheraa-primary/10 blur-3xl -top-20 -right-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: useTransform(springScroll, [0, 1], [0, 40]),
              y: useTransform(springScroll, [0, 1], [0, -30]),
            }}
          />

          <motion.div
            className="absolute w-48 h-48 rounded-full bg-sheraa-teal/10 blur-3xl -bottom-10 -left-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              x: useTransform(springScroll, [0, 1], [0, -30]),
              y: useTransform(springScroll, [0, 1], [0, 20]),
            }}
          />

          <div className="inline-block bg-sheraa-primary/15 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6 backdrop-blur-sm">
            Program Assessment
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
                className="text-2xl md:text-4xl font-bold text-sheraa-dark mb-4"
              >
                Not sure which program fits you?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                className="text-gray-600 text-base md:text-lg"
              >
                Take our quick assessment to find the perfect program for your entrepreneurial journey
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="flex items-center gap-2 w-full md:w-auto group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-sheraa-primary/20 rounded-lg"
                  animate={{
                    x: ["100%", "-100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">Try Eligibility Checker</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Button>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-6 right-6 h-40 w-40 border border-sheraa-teal/20 rounded-full opacity-30"
            style={{
              scale: useTransform(springScroll, [0, 0.5, 1], [0.8, 1.2, 0.9]),
            }}
          />
          
          <motion.div
            className="absolute bottom-6 left-10 h-20 w-20 border border-sheraa-primary/20 rounded-full opacity-20"
            style={{
              scale: useTransform(springScroll, [0, 0.5, 1], [1.2, 0.8, 1.1]),
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
