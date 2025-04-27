
import { ArrowRight, Target } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const EligibilityChecker = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-sheraa-light rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa
-primary text-sm font-medium mb-6">
            Program Assessment
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-sheraa-dark mb-4"
              >
                Not sure which program fits you?
              </motion.h2>
              <p className="text-gray-600 text-lg">
                Take our quick assessment to find the perfect program for your entrepreneurial journey
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
              >
                Try Eligibility Checker
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
