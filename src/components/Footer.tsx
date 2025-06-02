
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const programs = [
    { name: 'S3 Incubator', path: '/programs/s3-incubator' },
    { name: 'Start Young', path: '/programs/start-young' },
    { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' },
    { name: 'SME Support', path: '/programs/sme-support' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/lovable-uploads/sheraa-logo.png" alt="Sheraa" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower changemakers to build impactful businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    to={program.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sheraa-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Sheraa HQ</p>
                  <p className="text-sm">Sharjah Research Technology<br />& Innovation Park, Sharjah, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                <a href="tel:+97165094000" className="text-gray-300 hover:text-white transition-colors">
                  +971 6 509 4000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                <a href="mailto:info@sheraa.ae" className="text-gray-300 hover:text-white transition-colors">
                  info@sheraa.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Sheraa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
