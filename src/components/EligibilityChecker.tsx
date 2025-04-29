
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonCta } from "./ui/button-cta";

const EligibilityChecker = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-sheraa-light rounded-2xl p-6 md:p-12 relative overflow-hidden">
          <div className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6">
            Program Assessment
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-sheraa-dark mb-4"
              >
                Not sure which program fits you?
              </motion.h2>
              <p className="text-gray-600 text-base md:text-lg">
                Take our quick assessment to find the perfect program for your entrepreneurial journey
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonCta 
                label="Try Eligibility Checker"
                className="w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
