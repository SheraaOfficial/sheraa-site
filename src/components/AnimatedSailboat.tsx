
import { Sailboat } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedSailboat = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
        rotate: [-2, 2, -2]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute right-10 top-20 text-sheraa-primary/30"
    >
      <Sailboat size={120} />
    </motion.div>
  );
};

export default AnimatedSailboat;
