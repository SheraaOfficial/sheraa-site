
import React from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="sheraa-footer">
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png"
                alt="Sheraa Logo"
                className="h-8 w-auto mr-2"
              />
              <h2 className="text-xl font-bold text-white">SHERAA</h2>
            </div>
            <p className="mb-6 text-gray-300">
              Sharjah Entrepreneurship Center (Sheraa) is a government entity that 
              aims to build a world-class entrepreneurship ecosystem in Sharjah, 
              supporting entrepreneurs from ideation to growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-sheraa-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-sheraa-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-sheraa-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-sheraa-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white">Programs</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white">Resources</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white">Events & Media</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white">Community</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/startup-dojo" className="text-gray-300 hover:text-white">Startup Dojo</Link>
              </li>
              <li>
                <Link to="/programs/s3-incubator" className="text-gray-300 hover:text-white">S3 Incubator</Link>
              </li>
              <li>
                <Link to="/programs/build-ventures" className="text-gray-300 hover:text-white">Build Ventures</Link>
              </li>
              <li>
                <Link to="/programs/access-sharjah-challenge" className="text-gray-300 hover:text-white">Access Sharjah Challenge</Link>
              </li>
              <li>
                <Link to="/events/sef" className="text-gray-300 hover:text-white">Entrepreneurship Festival</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <GradientButton variant="default" size="default" className="w-full">
                Subscribe
              </GradientButton>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sheraa. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
