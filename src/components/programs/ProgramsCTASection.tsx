
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Phone, Clock, DollarSign, CheckCircle, Calendar } from "lucide-react";

export const ProgramsCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform
            <span className="block text-yellow-300">Your Idea?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Take the first step toward building your dream business. 
            Our application is simple, fast, and completely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl">
              <Link to="/eligibility" className="flex items-center gap-2">
                Find My Program
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
              <Link to="/book-consultation">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Enhanced action cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          <Link 
            to="/programs/s3-incubator" 
            className="p-6 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-2 text-lg">$30k Funding</h3>
            <p className="text-sm text-white/80">Equity-free pre-seed funding for tech startups</p>
          </Link>
          
          <Link 
            to="/book-consultation" 
            className="p-6 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-2 text-lg">Free Consultation</h3>
            <p className="text-sm text-white/80">30-minute session with our program advisors</p>
          </Link>
          
          <Link 
            to="/resources" 
            className="p-6 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-2 text-lg">Free Resources</h3>
            <p className="text-sm text-white/80">Templates, guides, and tools to build your business</p>
          </Link>
          
          <Link 
            to="/contact" 
            className="p-6 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="font-bold mb-2 text-lg">Expert Guidance</h3>
            <p className="text-sm text-white/80">One-on-one consultation with our advisors</p>
          </Link>
        </motion.div>

        {/* Application process info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Simple Application Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">Free</div>
              </div>
              <div className="text-sm text-white/80">No application fees</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">2 Weeks</div>
              </div>
              <div className="text-sm text-white/80">Quick review process</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">Support</div>
              </div>
              <div className="text-sm text-white/80">Help throughout process</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">Network</div>
              </div>
              <div className="text-sm text-white/80">Access to community</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
