
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Phone } from "lucide-react";

export const ProgramsCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-primary via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sheraa-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Entrepreneurial Journey?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Choose the program that matches your stage and goals. Our team is here to guide you 
            through the application process and help you find the perfect fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold group">
              <Link to="/eligibility" className="flex items-center gap-2">
                Find Your Program
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
              <Link to="/contact">
                Speak with Our Team
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <Link 
            to="/programs/s3-incubator" 
            className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center"
          >
            <Users className="w-10 h-10 text-yellow-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 text-lg">Apply to S3 Incubator</h3>
            <p className="text-sm text-white/80">Get $30k equity-free funding and 6-month support</p>
          </Link>
          
          <Link 
            to="/resources" 
            className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center"
          >
            <FileText className="w-10 h-10 text-yellow-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 text-lg">Download Resources</h3>
            <p className="text-sm text-white/80">Access guides, templates, and toolkits</p>
          </Link>
          
          <Link 
            to="/contact" 
            className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center"
          >
            <Phone className="w-10 h-10 text-yellow-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 text-lg">Schedule a Call</h3>
            <p className="text-sm text-white/80">Speak with our program advisors</p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
