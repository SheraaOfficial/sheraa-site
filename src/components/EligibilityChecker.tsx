
import { CheckSquare } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const EligibilityChecker = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-secondary/10 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-grid-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sheraa-light rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <CheckSquare className="text-sheraa-primary" size={24} />
                <h2 className="text-2xl font-bold text-sheraa-dark">Not sure which program fits you?</h2>
              </motion.div>
              <p className="text-gray-600 text-lg">
                Take our quick assessment to find the perfect program for your entrepreneurial journey
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg rounded-full"
              >
                Try Eligibility Checker
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
