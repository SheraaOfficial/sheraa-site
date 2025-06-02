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
  Star,
  ChevronDown,
  User,
  LogIn,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExperienceThemeSwitcher } from './ExperienceThemeSwitcher';

const MainNavigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 }, // New Phase 4 addition
    { 
      name: 'About', 
      path: '/about', 
      icon: Users,
      subItems: [
        { name: 'Our Story', path: '/about' },
        { name: 'Leadership', path: '/about/leadership' },
        { name: 'Board', path: '/about/board' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    { 
      name: 'Programs', 
      path: '/programs', 
      icon: BookOpen,
      subItems: [
        { name: 'Overview', path: '/programs' },
        { name: 'S3 Incubator', path: '/programs/s3-incubator' },
        { name: 'Startup Dojo', path: '/programs/startup-dojo' },
        { name: 'Start Young', path: '/programs/start-young' },
        { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' },
        { name: 'Deal Dock', path: '/programs/deal-dock' }
      ]
    },
    { 
      name: 'Community', 
      path: '/community', 
      icon: Users,
      subItems: [
        { name: 'Overview', path: '/community' },
        { name: 'Join', path: '/community/join' },
        { name: 'Partnerships', path: '/community/partnerships' },
        { name: 'Startups', path: '/community/startups' }
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources', 
      icon: FileText,
      subItems: [
        { name: 'Overview', path: '/resources' },
        { name: 'Guides & Toolkits', path: '/resources/guides' },
        { name: 'Advisory', path: '/resources/advisory' },
        { name: 'Articles', path: '/resources/articles' },
        { name: 'Impact Reports', path: '/resources/impact-reports' },
        { name: 'Blog', path: '/blog' },
        { name: 'Podcast', path: '/podcast' },
        { name: 'Reports', path: '/reports' }
      ]
    },
    { 
      name: 'Events', 
      path: '/events', 
      icon: Calendar,
      subItems: [
        { name: 'Overview', path: '/events' },
        { name: 'Upcoming Events', path: '/events/upcoming' },
        { name: 'Past Events', path: '/events/past' },
        { name: 'SEF', path: '/events/sef-landing' }
      ]
    },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'SEF', path: '/events/sef-landing', icon: Star, special: true },
  ];

  const isPathActive = (path: string, subItems?: any[]) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.img 
              src="/lovable-uploads/sheraa-logo.png" 
              alt="Sheraa" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 relative">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = isPathActive(item.path, item.subItems);
                const Icon = item.icon;
                const isSEF = item.special;
                const hasDropdown = item.subItems && item.subItems.length > 0;

                if (isSEF) {
                  return (
                    <Link key={item.name} to={item.path}>
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                        <Star className="w-3 h-3 animate-pulse" />
                      </motion.div>
                    </Link>
                  );
                }

                return (
                  <div 
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {hasDropdown ? (
                      <div
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                          isActive
                            ? 'text-sheraa-primary bg-sheraa-primary/10'
                            : 'text-gray-700 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
                        )}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                          isActive
                            ? 'text-sheraa-primary bg-sheraa-primary/10'
                            : 'text-gray-700 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
                        )}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Dropdown */}
                    {hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-[10000]"
                      >
                        <div className="p-2">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-sheraa-primary transition-colors">
                                {subItem.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <ExperienceThemeSwitcher />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </Button>
            <Button size="sm" className="bg-sheraa-primary hover:bg-sheraa-primary/90" asChild>
              <Link to="/auth" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ExperienceThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-sheraa-primary hover:bg-gray-200 transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
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
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const isActive = isPathActive(item.path, item.subItems);
                const Icon = item.icon;
                const isSEF = item.special;
                
                return (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mx-2",
                        isActive 
                          ? "text-white bg-sheraa-primary shadow-lg" 
                          : "text-gray-700 hover:text-sheraa-primary hover:bg-gray-100",
                        isSEF && !isActive && "bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-secondary/10"
                      )}
                    >
                      <Icon size={18} className={isSEF ? "text-sheraa-sef-primary" : ""} />
                      <span className={isSEF && !isActive ? "font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent" : ""}>
                        {item.name}
                      </span>
                      {isSEF && (
                        <motion.div
                          className="ml-auto"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ✨
                        </motion.div>
                      )}
                    </Link>
                    
                    {item.subItems && isActive && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-sheraa-primary transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Mobile Auth Links */}
              <div className="mx-2 mt-4 pt-4 border-t border-gray-200 space-y-2">
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-sheraa-primary hover:bg-gray-100 rounded-xl transition-all duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium bg-sheraa-primary text-white rounded-xl hover:bg-sheraa-primary/90 transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
