
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Users, BookOpen, Calendar, Phone, Star, ChevronDown, Sparkles } from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
  special?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    name: 'About',
    path: '/about',
    icon: Users,
    subItems: [
      {
        name: 'Our Story',
        path: '/about',
        description: 'Learn about our mission'
      },
      {
        name: 'Leadership',
        path: '/about/leadership',
        description: 'Meet our executive team'
      },
      {
        name: 'Board',
        path: '/about/board',
        description: 'Our advisory board'
      }
    ]
  },
  {
    name: 'Programs',
    path: '/programs',
    icon: BookOpen,
    subItems: [
      {
        name: 'S3 Incubator',
        path: '/programs/s3-incubator',
        description: 'Our flagship program'
      },
      {
        name: 'Startup Dojo',
        path: '/programs/startup-dojo',
        description: 'Youth entrepreneurship'
      },
      {
        name: 'Access Challenge',
        path: '/programs/access-sharjah-challenge',
        description: 'Global competition'
      }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      {
        name: 'Upcoming',
        path: '/events/upcoming',
        description: 'Join our next events'
      },
      {
        name: 'Past Events',
        path: '/events/past',
        description: 'Event highlights'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Phone
  },
  {
    name: 'SEF',
    path: '/events/sef-landing',
    icon: Star,
    special: true
  }
];

export const SophisticatedNavigation: React.FC = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isPathActive = (path: string, subItems?: NavigationItem['subItems']) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-4 mt-4">
        <motion.div
          className={cn(
            "relative overflow-hidden transition-all duration-500 mx-auto max-w-7xl",
            scrolled
              ? "bg-white/95 backdrop-blur-3xl border border-gray-200/50 shadow-2xl rounded-2xl py-3"
              : "bg-white/80 backdrop-blur-xl border border-gray-200/30 shadow-xl rounded-xl py-4"
          )}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Enhanced gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/5 via-transparent to-sheraa-teal/5 pointer-events-none" />
          
          <div className="flex items-center justify-between px-8 relative z-10">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
              >
                <img 
                  src="/lovable-uploads/sheraa-logo.png" 
                  alt="Sheraa" 
                  className="h-12 w-auto drop-shadow-lg" 
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Sheraa
                </div>
                <div className="text-xs text-gray-500 -mt-1">Entrepreneurship Center</div>
              </motion.div>
            </Link>

            {/* Enhanced Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => {
                const isActive = isPathActive(item.path, item.subItems);
                const Icon = item.icon;
                const isSEF = item.special;

                return (
                  <div key={item.name} className="relative group">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                      onMouseLeave={() => {
                        if (!item.subItems) setActiveDropdown(null);
                      }}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden",
                          isActive
                            ? "text-white shadow-lg"
                            : "text-gray-700 hover:text-sheraa-primary",
                          isSEF && "bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-secondary/10"
                        )}
                      >
                        {/* Enhanced active background */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-sheraa-primary to-sheraa-teal"
                            layoutId="activeBackground"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        
                        {/* Enhanced hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div
                          className={cn(
                            "relative z-10 transition-all duration-300",
                            isSEF && "text-sheraa-sef-primary"
                          )}
                          whileHover={{ scale: 1.1, rotate: isSEF ? 360 : 0 }}
                          transition={{ duration: isSEF ? 0.6 : 0.2 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        
                        <span
                          className={cn(
                            "relative z-10 transition-all duration-300",
                            isSEF && "font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent"
                          )}
                        >
                          {item.name}
                        </span>
                        
                        {item.subItems && (
                          <ChevronDown className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                        )}
                        
                        {isSEF && (
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="relative z-10"
                          >
                            <Sparkles className="h-4 w-4" />
                          </motion.div>
                        )}
                      </Link>
                    </motion.div>

                    {/* Enhanced Dropdown with better visibility and z-index */}
                    <AnimatePresence>
                      {item.subItems && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/98 backdrop-blur-3xl border border-gray-200/60 shadow-2xl rounded-2xl overflow-hidden min-w-80 z-[9999]"
                          style={{ 
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(20px)"
                          }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-sheraa-primary/10 hover:to-sheraa-teal/10 transition-all duration-300 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="font-medium text-gray-900 group-hover:text-sheraa-primary transition-colors">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-sm text-gray-500 mt-1">
                                      {subItem.description}
                                    </div>
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 text-sheraa-primary hover:from-sheraa-primary/20 hover:to-sheraa-teal/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
