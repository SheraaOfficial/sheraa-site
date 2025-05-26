
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Phone, 
  FileText,
  Star,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';

const ModernNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for floating effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: '/', icon: Home },
    { 
      name: 'About', 
      path: '/about', 
      icon: Users,
      subItems: [
        { name: 'Our Story', path: '/about' },
        { name: 'Leadership', path: '/about/leadership' },
        { name: 'Board', path: '/about/board' }
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
        { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' }
      ]
    },
    { 
      name: 'Community', 
      path: '/community', 
      icon: Users,
      subItems: [
        { name: 'Overview', path: '/community' },
        { name: 'Join', path: '/community/join' },
        { name: 'Partnerships', path: '/community/partnerships' }
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
        { name: 'Impact Reports', path: '/resources/impact-reports' }
      ]
    },
    { 
      name: 'Events', 
      path: '/events', 
      icon: Calendar,
      subItems: [
        { name: 'Overview', path: '/events' },
        { name: 'Upcoming Events', path: '/events/upcoming' },
        { name: 'Past Events', path: '/events/past' }
      ]
    },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const sefItem: NavigationItem = { 
    name: 'SEF', 
    path: '/events/sef-landing', 
    icon: Star, 
    special: true 
  };

  const isPathActive = (path: string, subItems?: NavigationItem['subItems']) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  const handleNavClick = (item: NavigationItem) => {
    if (item.subItems && item.subItems.length > 0) {
      if (activeDropdown === item.name) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(item.name);
      }
    } else {
      navigate(item.path);
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  const allNavigationItems = [...navigationItems, sefItem];

  return (
    <>
      {/* Floating Background Orb */}
      <div 
        className="fixed pointer-events-none z-30 opacity-20 transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,102,0.3) 0%, rgba(0,128,128,0.15) 50%, transparent 70%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: '10%',
          left: '50%',
          marginLeft: '-200px',
          filter: 'blur(40px)',
        }}
      />

      <motion.nav 
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500",
          "max-w-6xl w-full mx-auto px-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className={cn(
            "relative overflow-hidden transition-all duration-500",
            scrolled 
              ? "bg-white/20 backdrop-blur-3xl border border-white/30 shadow-2xl rounded-3xl" 
              : "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl rounded-2xl"
          )}
          style={{
            background: scrolled 
              ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-sheraa-primary/30 rounded-full"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src="/lovable-uploads/sheraa-logo.png" 
                  alt="Sheraa" 
                  className="h-10 w-auto drop-shadow-lg"
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/30 shadow-inner">
                {navigationItems.map((item, index) => {
                  const isActive = isPathActive(item.path, item.subItems);
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="relative">
                      <motion.button
                        onClick={() => handleNavClick(item)}
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                          isActive
                            ? "text-white bg-gradient-to-r from-sheraa-primary to-sheraa-teal shadow-lg"
                            : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-sheraa-primary/80 hover:to-sheraa-teal/80"
                        )}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/30 to-sheraa-teal/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <motion.div
                          className="relative z-10"
                          animate={{ rotate: isActive ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span className="relative z-10">{item.name}</span>
                        {item.subItems && (
                          <motion.div
                            className="relative z-10"
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-3 h-3" />
                          </motion.div>
                        )}
                      </motion.button>
                      
                      {/* Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === item.name && item.subItems && (
                          <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-full mt-3 left-0 bg-white/95 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl overflow-hidden min-w-48 z-50"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                                whileHover={{ x: 8, backgroundColor: "rgba(0,51,102,0.1)" }}
                              >
                                <Link
                                  to={subItem.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block px-5 py-3 text-sm text-gray-700 hover:text-sheraa-primary transition-all duration-200 border-b border-gray-100/50 last:border-b-0 relative group"
                                >
                                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-sheraa-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                
                {/* SEF Special Button */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={sefItem.path}
                    className="relative ml-3 px-5 py-2.5 bg-gradient-to-r from-sheraa-sef-primary via-purple-600 to-sheraa-sef-secondary text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sheraa-sef-primary/80 to-sheraa-sef-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Sparkle effects */}
                    <div className="absolute inset-0">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-xs"
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${10 + Math.sin(i) * 30}%`,
                          }}
                        >
                          ✨
                        </motion.div>
                      ))}
                    </div>
                    
                    <span className="relative flex items-center space-x-2 z-10">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-4 h-4" />
                      </motion.div>
                      <span>SEF</span>
                      <motion.span
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        🎪
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-sheraa-primary transition-all duration-300 shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-xl rounded-b-2xl"
              >
                <div className="py-6 space-y-3 px-6">
                  {allNavigationItems.map((item, index) => {
                    const isActive = isPathActive(item.path, item.subItems);
                    const Icon = item.icon;
                    
                    return (
                      <motion.div 
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <button
                          onClick={() => handleNavClick(item)}
                          className={cn(
                            "w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 group",
                            isActive 
                              ? "text-white bg-gradient-to-r from-sheraa-primary to-sheraa-teal shadow-lg" 
                              : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-sheraa-primary/80 hover:to-sheraa-teal/80",
                            item.special && !isActive && "bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-secondary/20 border border-sheraa-sef-primary/30"
                          )}
                        >
                          <div className="flex items-center space-x-4">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className={cn(
                                "w-5 h-5",
                                item.special && !isActive && "text-sheraa-sef-primary"
                              )} />
                            </motion.div>
                            <span className={item.special && !isActive ? "font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent" : ""}>
                              {item.name}
                            </span>
                            {item.special && (
                              <motion.span
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                ✨
                              </motion.span>
                            )}
                          </div>
                          {item.subItems && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        
                        {/* Mobile Sub Items */}
                        {item.subItems && isActive && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="ml-6 mt-2 space-y-1"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                              >
                                <Link
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-sheraa-primary transition-colors duration-200 rounded-lg hover:bg-white/10"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
      
      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};

export default ModernNavigation;
