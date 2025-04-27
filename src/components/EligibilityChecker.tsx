
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const EligibilityChecker = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#9b87f5]/10 via-[#D946EF]/5 to-[#9b87f5]/10 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl border border-[#9b87f5]/20"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-[#9b87f5]/20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -right-10 bottom-10 w-60 h-60 rounded-full bg-[#D946EF]/20 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full text-[#9b87f5] text-sm font-medium mb-6 gap-2 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Program Assessment</span>
              </div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-sheraa-dark mb-6"
              >
                Not sure which program fits you?
              </motion.h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Take our quick assessment to find the perfect program for your entrepreneurial journey. 
                Receive personalized recommendations based on your specific needs and stage.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] text-white px-8 py-8 text-xl rounded-2xl flex items-center gap-3 shadow-xl"
              >
                Try Eligibility Checker
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
