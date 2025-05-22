
import React from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-950 to-[#131c38] text-white full-width-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png" alt="Sheraa Logo" className="h-10 w-auto mr-2" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">SHERAA</h2>
            </div>
            <p className="mb-6 text-gray-300 text-sm leading-relaxed">
              Sharjah Entrepreneurship Center (Sheraa) is a government entity that 
              aims to build a world-class entrepreneurship ecosystem in Sharjah, 
              supporting entrepreneurs from ideation to growth.
            </p>
            
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-sheraa-primary/80" />
                <span>+971 6 509 4000</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-sheraa-primary/80" />
                <span>info@sheraa.ae</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin size={16} className="text-sheraa-primary/80 mt-1" />
                <span>Sharjah Research Technology and Innovation Park, Sharjah, UAE</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/sherjahentrepreneurship" className="text-white hover:text-sheraa-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/sheraa_sharjah" className="text-white hover:text-sheraa-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/sheraa_sharjah" className="text-white hover:text-sheraa-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/sheraa.sharjah" className="text-white hover:text-sheraa-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-sheraa-primary/60 after:rounded-full after:-mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Programs
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Events & Media
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-sheraa-primary/60 after:rounded-full after:-mb-2">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs/startup-dojo" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Startup Dojo
                </Link>
              </li>
              <li>
                <Link to="/programs/s3-incubator" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>S3 Incubator
                </Link>
              </li>
              <li>
                <Link to="/programs/build-ventures" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Build Ventures
                </Link>
              </li>
              <li>
                <Link to="/programs/access-sharjah-challenge" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Access Sharjah Challenge
                </Link>
              </li>
              <li>
                <Link to="/events/sef" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                  <span className="text-xs text-sheraa-primary mr-2">→</span>Entrepreneurship Festival
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-sheraa-primary/60 after:rounded-full after:-mb-2">Stay Connected</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter for updates.</p>
            <div className="space-y-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 pr-12 focus:border-sheraa-primary/50 focus:ring-sheraa-primary/20" 
                />
                <button className="absolute right-0 top-0 h-full px-3 text-sheraa-primary">
                  <ArrowRight size={18} />
                </button>
              </div>
              <GradientButton variant="shimmer" size="default" className="w-full">
                Subscribe
              </GradientButton>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sheraa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
