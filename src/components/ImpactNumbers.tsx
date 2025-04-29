
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
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
    <section className="py-16 md:py-24 bg-sheraa-background-DEFAULT relative overflow-hidden lg:py-[63px]">
      <div className="container mx-auto px-[60px]">
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
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
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
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
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
      <div className="mb-2 relative z-10 px-10 text-sheraa-primary">
        {icon}
      </div>
      <div className="text-5xl md:text-6xl font-bold mb-2 relative z-10 px-10 text-sheraa-primary">
        {value}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-sheraa-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-sheraa-dark">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
      <div className="inline-flex items-center text-xs font-medium text-sheraa-primary bg-sheraa-primary/10 px-3 py-1 rounded-full mt-2 mx-10">
        <span>{subtext}</span>
      </div>
    </motion.div>
  );
};

export default ImpactNumbers;
