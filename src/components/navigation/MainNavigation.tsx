
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { 
      name: 'About', 
      path: '/about', 
      icon: Users,
      subItems: [
        { name: 'Our Story', path: '/about', description: 'Learn about our mission and vision' },
        { name: 'Leadership', path: '/about/leadership', description: 'Meet our leadership team' },
        { name: 'Board', path: '/about/board', description: 'Our distinguished board members' },
        { name: 'Careers', path: '/careers', description: 'Join our mission to empower entrepreneurs' }
      ]
    },
    { 
      name: 'Programs', 
      path: '/programs', 
      icon: BookOpen,
      subItems: [
        { name: 'Overview', path: '/programs', description: 'Explore all our programs' },
        { name: 'S3 Incubator', path: '/programs/s3-incubator', description: 'Our flagship 6-month incubation program' },
        { name: 'Start Young', path: '/programs/start-young', description: 'Youth entrepreneurship programs' },
        { name: 'Startup Dojo', path: '/programs/startup-dojo', description: 'Summer incubation for students' },
        { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge', description: 'Global competition for growth-stage startups' },
        { name: 'Deal Dock', path: '/programs/deal-dock', description: 'Exclusive investment platform for investors' },
        { name: 'SME Support', path: '/programs/sme-support', description: 'Support for established businesses' }
      ]
    },
    { 
      name: 'Community', 
      path: '/community', 
      icon: Users,
      subItems: [
        { name: 'Overview', path: '/community', description: 'Join our vibrant ecosystem' },
        { name: 'Membership', path: '/community/membership', description: 'Become a Sheraa member' },
        { name: 'Startups', path: '/community/startups', description: 'Explore our portfolio companies' },
        { name: 'Partnerships', path: '/community/partnerships', description: 'Partner with Sheraa' }
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources', 
      icon: FileText,
      subItems: [
        { name: 'Overview', path: '/resources', description: 'Access our resource library' },
        { name: 'Guides & Toolkits', path: '/resources/guides', description: 'Download practical resources' },
        { name: 'Advisory', path: '/resources/advisory', description: 'Get expert guidance' },
        { name: 'Articles', path: '/resources/articles', description: 'Read the latest insights' },
        { name: 'Impact Reports', path: '/resources/impact-reports', description: 'View our impact data' }
      ]
    },
    { 
      name: 'Events', 
      path: '/events', 
      icon: Calendar,
      subItems: [
        { name: 'Overview', path: '/events', description: 'Discover our events' },
        { name: 'Upcoming Events', path: '/events/upcoming', description: 'Join our upcoming events' },
        { name: 'Past Events', path: '/events/past', description: 'Browse past event highlights' },
        { name: 'SEF', path: '/events/sef-landing', description: 'Sharjah Entrepreneurship Festival' }
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

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent flickering
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

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
                    onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <div
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                          isActive || activeDropdown === item.name
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

                    {/* Enhanced Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-xl overflow-hidden z-[10000]"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="p-2">
                            {item.subItems?.map((subItem, index) => (
                              <motion.div
                                key={subItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block p-3 rounded-lg hover:bg-sheraa-primary/10 transition-all duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="font-medium text-gray-900 group-hover:text-sheraa-primary transition-colors text-sm">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 group-hover:text-sheraa-primary/70 mt-1">
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

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
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
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="ml-6 mt-2 space-y-1"
                        >
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
                        </motion.div>
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
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNavigation;
