
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  Rss,
  Mic,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MenuBar } from '@/components/ui/glow-menu';

const MainNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
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

  const getCurrentActiveItem = () => {
    for (const item of navigationItems) {
      if (isPathActive(item.path, item.subItems)) {
        return item.name;
      }
    }
    return '';
  };

  const menuItems = navigationItems.map((item) => {
    const isActive = isPathActive(item.path, item.subItems);
    const isSEF = item.special;
    
    return {
      icon: item.icon,
      label: item.name,
      href: item.path,
      gradient: isSEF 
        ? "radial-gradient(circle, rgba(155,135,245,0.4) 0%, rgba(217,70,239,0.25) 50%, rgba(217,70,239,0) 100%)"
        : isActive 
          ? "radial-gradient(circle, rgba(0,51,102,0.3) 0%, rgba(0,128,128,0.15) 50%, rgba(0,128,128,0) 100%)"
          : "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.08) 50%, rgba(29,78,216,0) 100%)",
      iconColor: isSEF 
        ? "text-sheraa-sef-primary" 
        : isActive 
          ? "text-sheraa-primary" 
          : "text-blue-500",
    };
  });

  const handleItemClick = (label: string) => {
    const item = navigationItems.find(nav => nav.name === label);
    if (item) {
      if (item.subItems && item.subItems.length > 0) {
        // For items with subItems, toggle dropdown or navigate to main path
        if (activeDropdown === label) {
          setActiveDropdown(null);
        } else {
          setActiveDropdown(label);
        }
        // Also navigate to the main path
        navigate(item.path);
      } else {
        // For items without subItems, navigate directly
        navigate(item.path);
        setActiveDropdown(null);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
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

          {/* Centered Desktop Navigation with Glow Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 relative">
            <MenuBar
              items={menuItems}
              activeItem={getCurrentActiveItem()}
              onItemClick={handleItemClick}
              className="mx-auto"
            />
            
            {/* Dropdown Menu */}
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-xl overflow-hidden z-50"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              >
                {navigationItems
                  .find(item => item.name === activeDropdown)
                  ?.subItems?.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-sm text-gray-700 hover:text-sheraa-primary hover:bg-gray-50/80 transition-all duration-200 border-b border-gray-100/50 last:border-b-0"
                    >
                      {subItem.name}
                    </Link>
                  ))}
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-[#165A5A] hover:bg-gray-200 transition-all duration-200"
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
                    
                    {/* Mobile Sub Items */}
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
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default MainNavigation;
