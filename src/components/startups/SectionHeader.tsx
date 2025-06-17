import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
const SectionHeader: React.FC = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.5
}} className="text-center mb-10 md:mb-14">
    <Badge variant="gradient-warm" animation="shimmer" className="mb-4 bg-sheraa-primary">
      Transforming Ideas into Impact
    </Badge>
    
    <h2 className="text-2xl md:text-4xl font-bold text-sheraa-dark mb-4 md:mb-6 leading-tight">
      Our <span className="text-sheraa-primary">Startups</span>
    </h2>
    
    <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base px-4 md:px-6 mb-2 md:mb-0">
      Meet the innovative ventures shaping the future through Sheraa's ecosystem. 
      These companies are creating real impact, driving innovation, and transforming 
      Sharjah's entrepreneurial landscape.
    </p>
  </motion.div>;
export default SectionHeader;