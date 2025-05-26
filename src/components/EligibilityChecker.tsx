
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import EligibilityCheckerButton from "./eligibility/EligibilityCheckerButton";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Users, CheckCircle } from "lucide-react";

const EligibilityChecker = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 relative overflow-hidden" ref={containerRef}>
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sheraa-teal/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20">
                <Sparkles className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-medium text-sheraa-primary">AI-Powered Assessment</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent leading-tight">
                Find Your Perfect Program Match
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Not sure which program fits your startup stage? Our intelligent assessment analyzes your business, 
                goals, and current stage to recommend the ideal Sheraa program for your entrepreneurial journey.
              </p>

              <div className="space-y-3">
                {[
                  "Quick 2-minute assessment",
                  "Personalized program recommendations", 
                  "Stage-specific guidance",
                  "Direct application links"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EligibilityCheckerButton 
                  size="lg" 
                  variant="gradient"
                  text="Start Assessment"
                  className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                <Link 
                  to="/eligibility" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-sheraa-primary hover:text-sheraa-secondary transition-colors border border-sheraa-primary/30 rounded-lg hover:bg-sheraa-primary/5"
                >
                  <span>View All Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-sheraa-primary/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Smart Matching</h3>
                      <p className="text-sm text-gray-600">AI-powered recommendations</p>
                    </div>
                  </div>

                  {/* Mock assessment preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-sheraa-light/50 rounded-xl">
                      <span className="text-sm font-medium">Startup Stage</span>
                      <div className="w-24 h-2 bg-sheraa-primary/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-sheraa-primary rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-sheraa-light/50 rounded-xl">
                      <span className="text-sm font-medium">Funding Needs</span>
                      <div className="w-24 h-2 bg-sheraa-teal/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-sheraa-teal rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-sheraa-light/50 rounded-xl">
                      <span className="text-sm font-medium">Team Size</span>
                      <div className="w-24 h-2 bg-sheraa-orange/20 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-sheraa-orange rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Perfect Match Found</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Based on your profile, we recommend the <strong>S3 Incubator</strong> program
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sheraa-orange to-sheraa-secondary rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-sheraa-teal to-sheraa-primary rounded-full opacity-20 blur-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
