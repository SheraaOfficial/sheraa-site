
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
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
  
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  
  // Convert the previous stats into the format needed for the new feature component
  const features = [
    {
      title: "Startups",
      description: isMobile ? "Supported" : "Building impactful ventures across sectors",
      subtext: "52% women-led",
      value: "180+",
      icon: <IconTerminal2 />,
    },
    {
      title: "Revenue",
      description: isMobile ? "Generated" : "By our portfolio companies",
      subtext: "71% survival rate",
      value: "$248M+",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Jobs",
      description: isMobile ? "Created" : "Contributing to economic growth",
      subtext: "Regional impact",
      value: "1900+",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Partners",
      description: isMobile ? "Connected" : "Strong network of collaborators",
      subtext: "18k+ youth trained",
      value: "140+",
      icon: <IconCloud />,
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
          background: "radial-gradient(circle at center, rgba(0,51,102,0.08) 0%, rgba(255,255,255,0) 70%)"
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
          rotate: useTransform(scrollYProgress, [0, 1], [0, -12]),
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
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark to-sheraa-primary bg-clip-text text-transparent">
            Creating Lasting Change
          </h2>
          {!isMobile && (
            <p className="text-gray-600 leading-relaxed">
              We measure our success through the achievements of our founders and ecosystem growth.
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
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
        </div>

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
            once: true
          }}
          transition={{
            duration: 0.5
          }}
        >
          <Button 
            asChild 
            variant="gradient" 
            className="group"
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={cn(
        "flex flex-col lg:border-r py-10 px-4 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "border-gray-100 dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-sheraa-background-soft to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-sheraa-background-soft to-transparent pointer-events-none" />
      )}
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
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 px-6 text-sheraa-primary"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: 0.2 + index * 0.1, type: "spring" } 
        }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-sheraa-dark">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-6">
        {description}
      </p>
      <motion.div 
        className="inline-flex items-center text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mt-2 mx-6"
        whileHover={{ scale: 1.05 }}
      >
        <span>{subtext}</span>
      </motion.div>
    </motion.div>
  );
};

export default ImpactNumbers;
