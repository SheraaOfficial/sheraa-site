
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Phone, Target, Zap, Sparkles } from "lucide-react";

export const ProgramsCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-primary via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sheraa-teal/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Sparkles, Target, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            style={{
              left: `${10 + index * 30}%`,
              top: `${20 + index * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8"
          >
            <Target className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-sm font-semibold text-white">Ready to Launch?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Entrepreneurial Journey?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Choose the program that matches your stage and goals. Our team is here to guide you 
            through the application process and help you find the perfect fit for your venture's success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold group shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link to="/eligibility" className="flex items-center gap-2">
                Find Your Perfect Program
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">
                Speak with Our Experts
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Enhanced Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <Link 
            to="/programs/s3-incubator" 
            className="p-8 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-3 text-xl">Apply to S3 Incubator</h3>
            <p className="text-sm text-white/80 mb-4">Get $30k equity-free funding and 6-month comprehensive support</p>
            <div className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            to="/resources" 
            className="p-8 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-3 text-xl">Download Resources</h3>
            <p className="text-sm text-white/80 mb-4">Access comprehensive guides, templates, and startup toolkits</p>
            <div className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm">
              <span>Get Resources</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            to="/contact" 
            className="p-8 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-3 text-xl">Schedule a Consultation</h3>
            <p className="text-sm text-white/80 mb-4">Speak with our program advisors for personalized guidance</p>
            <div className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm">
              <span>Book Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* Additional CTA Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Apply Now?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">Rolling</div>
                <div className="text-sm text-white/80">Applications Open</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">Fast</div>
                <div className="text-sm text-white/80">2-Week Review Process</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">Free</div>
                <div className="text-sm text-white/80">Application & Assessment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
