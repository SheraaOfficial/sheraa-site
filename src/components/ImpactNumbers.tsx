
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const ImpactNumbers = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create a springier motion value for smoother animations
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15
  });
  
  // Enhanced background effects
  const bgOpacity = useTransform(springScroll, [0, 0.5, 1], [0.3, 1, 0.3]);
  const rotate = useTransform(springScroll, [0, 0.5, 1], [0, 12, 24]);
  const rotate2 = useTransform(springScroll, [0, 0.5, 1], [0, -8, -16]);
  const rotate3 = useTransform(springScroll, [0, 0.5, 1], [0, 15, 0]);
  const scale = useTransform(springScroll, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  
  // Add horizontal movement for more dynamic effect
  const shift = useTransform(springScroll, [0, 0.5, 1], [-20, 0, 20]);
  
  // Convert the previous stats into the format needed for the new feature component
  const features = [
    {
      title: "Startups",
      description: isMobile ? "Supported" : "Building impactful ventures across sectors",
      subtext: "52% women-led",
      value: "180+",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Revenue",
      description: isMobile ? "Generated" : "By our portfolio companies",
      subtext: "71% survival rate",
      value: "$248M+",
      icon: <IconCurrencyDollar className="w-6 h-6" />,
    },
    {
      title: "Jobs",
      description: isMobile ? "Created" : "Contributing to economic growth",
      subtext: "Regional impact",
      value: "1900+",
      icon: <IconRouteAltLeft className="w-6 h-6" />,
    },
    {
      title: "Partners",
      description: isMobile ? "Connected" : "Strong network of collaborators",
      subtext: "18k+ youth trained",
      value: "140+",
      icon: <IconCloud className="w-6 h-6" />,
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ 
          opacity: bgOpacity,
          background: "radial-gradient(circle at center, rgba(0,51,102,0.08) 0%, rgba(255,255,255,0) 70%)",
          scale,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[800px] h-[800px] border border-sheraa-primary/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[600px] h-[600px] border border-sheraa-secondary/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate: rotate2,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[400px] h-[400px] border border-sheraa-teal/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate: rotate3,
          scale: useTransform(springScroll, [0, 0.5, 1], [0.8, 1.2, 0.9]),
        }}
      />
      
      {/* Added pulsing background orbs */}
      <motion.div
        className="absolute -z-10 w-32 h-32 rounded-full bg-sheraa-primary/5 blur-2xl"
        style={{
          left: '15%',
          top: '20%',
          scale: useTransform(springScroll, [0, 0.5, 1], [0.8, 1.3, 1]),
          x: useTransform(springScroll, [0, 1], [0, -50]),
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-48 h-48 rounded-full bg-sheraa-teal/5 blur-3xl"
        style={{
          right: '20%',
          bottom: '25%',
          scale: useTransform(springScroll, [0, 0.5, 1], [1, 0.7, 1.1]),
          x: useTransform(springScroll, [0, 1], [0, 70]),
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: "-100px"
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Creating Lasting Change
          </h2>
          {!isMobile && (
            <motion.p 
              className="text-gray-600 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We measure our success through the achievements of our founders and ecosystem growth.
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto"
          style={{
            x: shift
          }}
        >
          {features.map((feature, index) => (
            <Feature 
              key={feature.title} 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              subtext={feature.subtext}
              value={feature.value}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: "-100px"
          }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 70
          }}
        >
          <Button 
            asChild 
            variant="gradient" 
            className="group"
            size="lg"
          >
            <Link to="/about/impact" className="flex items-center gap-2">
              View Impact Report 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
  subtext,
  value
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  subtext: string;
  value: string;
}) => {
  // Create spring config for hover animations
  const springConfig = { type: "spring", stiffness: 300, damping: 20 };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, ...springConfig }}
      whileHover={{ scale: 1.05, transition: { ...springConfig } }}
      className={cn(
        "flex flex-col lg:border-r py-10 px-4 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "border-gray-100 dark:border-neutral-800"
      )}
    >
      {/* Enhanced hover effect with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-sheraa-primary/5 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 rounded-lg"
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="mb-2 relative z-10 px-6 text-sheraa-primary"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 px-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: 0.2 + index * 0.15, ...springConfig } 
        }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          {value}
        </span>
      </motion.div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <motion.div 
          className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-300 ease-out origin-center"
          whileHover={{ height: 32 }}
        />
        <motion.span 
          className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-sheraa-dark"
          whileHover={{ x: 8 }}
        >
          {title}
        </motion.span>
      </div>
      
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-6">
        {description}
      </p>
      
      <motion.div 
        className="inline-flex items-center text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mt-2 mx-6"
        whileHover={{ 
          scale: 1.05,
          background: "rgba(0, 51, 102, 0.2)",
        }}
        transition={{ ...springConfig }}
      >
        <span>{subtext}</span>
      </motion.div>
    </motion.div>
  );
};

export default ImpactNumbers;
