import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const QuoteSection = () => {
  const {
    scrollYProgress
  } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.95, 1]);
  return <section className="">
      {/* Background with stronger contrast */}
      
      
      {/* Background elements with increased opacity */}
      <motion.div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-sheraa-primary/20 blur-3xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <motion.div className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-sheraa-teal/20 blur-3xl" animate={{
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} />

      
    </section>;
};
export default QuoteSection;