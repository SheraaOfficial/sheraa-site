import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { linkedin, Twitter, Instagram, Facebook, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0A0D14] to-[#1F2937] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9b87f5]/50 to-transparent" />
      
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#9b87f5]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#D946EF]/10 blur-3xl" />
      
      <div className="container mx-auto px-6 pt-24 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: About */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                <span className="text-[#9b87f5]">SH</span>
                <span className="text-white">ERAA</span>
              </h2>
              <p className="mb-8 text-gray-300 text-lg leading-relaxed">
                Sharjah Entrepreneurship Center (Sheraa) is a government entity that 
                aims to build a world-class entrepreneurship ecosystem in Sharjah, 
                supporting entrepreneurs from ideation to growth.
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#9b87f5]" />
                  <a href="mailto:info@sheraa.ae" className="text-gray-300 hover:text-white">info@sheraa.ae</a>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-[#9b87f5] transition-all">
                    <linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-[#9b87f5] transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-[#9b87f5] transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-[#9b87f5] transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#9b87f5] rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#9b87f5] rounded-full mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#9b87f5] rounded-full mr-2"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#9b87f5] rounded-full mr-2"></span>
                  Events & Media
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#9b87f5] rounded-full mr-2"></span>
                  Community
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/programs/startup-dojo" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#D946EF] rounded-full mr-2"></span>
                  Startup Dojo
                </Link>
              </li>
              <li>
                <Link to="/programs/s3-incubator" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#D946EF] rounded-full mr-2"></span>
                  S3 Incubator
                </Link>
              </li>
              <li>
                <Link to="/programs/build-ventures" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#D946EF] rounded-full mr-2"></span>
                  Build Ventures
                </Link>
              </li>
              <li>
                <Link to="/programs/access-sharjah-challenge" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#D946EF] rounded-full mr-2"></span>
                  Access Sharjah
                </Link>
              </li>
              <li>
                <Link to="/events/sef" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-[#D946EF] rounded-full mr-2"></span>
                  SEF
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for updates on events, programs, and ecosystem news.</p>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-4 pr-12 py-6 rounded-xl focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-gradient-to-tr from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] p-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">By subscribing, you agree to our Privacy Policy.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sheraa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-400 hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
