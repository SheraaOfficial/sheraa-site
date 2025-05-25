
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Globe } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-primary via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sheraa-teal/20 rounded-full blur-3xl" />
        
        {/* Floating Icons */}
        {[Rocket, Users, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10"
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Build the
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join Sharjah's thriving entrepreneurship ecosystem. Whether you're a student with an idea, 
            a startup ready to scale, or a partner looking to innovate, your journey starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold group">
              <Link to="/programs" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
              <Link to="/community/join">
                Join Our Community
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <Link 
              to="/programs/s3-incubator" 
              className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Rocket className="w-8 h-8 text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Apply to S3 Incubator</h3>
              <p className="text-sm text-white/80">Get $30k equity-free funding</p>
            </Link>
            
            <Link 
              to="/events/sef" 
              className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Users className="w-8 h-8 text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Register for SEF 2026</h3>
              <p className="text-sm text-white/80">Don't miss the region's largest festival</p>
            </Link>
            
            <Link 
              to="/programs/access-sharjah" 
              className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Globe className="w-8 h-8 text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Access Sharjah Challenge</h3>
              <p className="text-sm text-white/80">Win POC grants & market access</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
