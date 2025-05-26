
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Phone, 
  Briefcase,
  FileText,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MainNavigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Programs', path: '/programs', icon: BookOpen },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Resources', path: '/resources', icon: FileText },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'SEF', path: '/events/sef-landing', icon: Star },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/sheraa-logo.png" 
              alt="Sheraa" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                const isSEF = item.name === 'SEF';
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative",
                      isActive 
                        ? "text-[#165A5A] bg-[#165A5A]/10" 
                        : "text-gray-700 hover:text-[#165A5A] hover:bg-gray-100",
                      isSEF && "animate-pulse shadow-lg shadow-[#165A5A]/30 bg-gradient-to-r from-[#165A5A]/10 to-[#FF6B35]/10 border border-[#165A5A]/20"
                    )}
                  >
                    <Icon size={16} className={isSEF ? "text-[#FF6B35]" : ""} />
                    <span className={isSEF ? "font-bold text-[#165A5A]" : ""}>{item.name}</span>
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#165A5A]"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {isSEF && (
                      <motion.div
                        className="absolute inset-0 rounded-md bg-gradient-to-r from-[#165A5A]/20 to-[#FF6B35]/20 -z-10"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:text-[#165A5A] hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                const isSEF = item.name === 'SEF';
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-all duration-300 relative",
                      isActive 
                        ? "text-[#165A5A] bg-[#165A5A]/10" 
                        : "text-gray-700 hover:text-[#165A5A] hover:bg-gray-100",
                      isSEF && "animate-pulse shadow-lg shadow-[#165A5A]/30 bg-gradient-to-r from-[#165A5A]/10 to-[#FF6B35]/10 border border-[#165A5A]/20"
                    )}
                  >
                    <Icon size={18} className={isSEF ? "text-[#FF6B35]" : ""} />
                    <span className={isSEF ? "font-bold text-[#165A5A]" : ""}>{item.name}</span>
                    {isSEF && (
                      <motion.div
                        className="absolute inset-0 rounded-md bg-gradient-to-r from-[#165A5A]/20 to-[#FF6B35]/20 -z-10"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
