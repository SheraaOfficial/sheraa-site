
import { Sailboat } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedSailboat = () => {
  const isMobile = useIsMobile();

  const floatAnimation = {
    x: [0, 20, 0, -20, 0],
    y: [0, -15, 0, -10, 0],
    rotate: [-3, 3, -2, 2, -3]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.2,
        ...floatAnimation
      }}
      transition={{ 
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${isMobile ? 'right-0 top-10' : 'right-10 top-20'} pointer-events-none`}
    >
      <Sailboat size={isMobile ? 60 : 120} className="text-sheraa-primary" />
    </motion.div>
  );
};

export default AnimatedSailboat;
