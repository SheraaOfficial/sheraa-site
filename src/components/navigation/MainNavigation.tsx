
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
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sparkles } from '@/components/ui/sparkles';

const MainNavigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
    { name: 'Careers', path: '/careers', icon: Briefcase },
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

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-gray-50/80 rounded-full px-2 py-1 backdrop-blur-sm">
              {navigationItems.map((item) => {
                const isActive = isPathActive(item.path, item.subItems);
                const Icon = item.icon;
                const isSEF = item.special;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group",
                        isActive 
                          ? "text-white bg-[#165A5A] shadow-lg" 
                          : "text-gray-700 hover:text-[#165A5A] hover:bg-white/80",
                        isSEF && !isActive && "text-transparent bg-clip-text bg-gradient-to-r from-[#165A5A] to-[#FF6B35]"
                      )}
                    >
                      {isSEF ? (
                        <Sparkles className="relative" colors={["#165A5A", "#FF6B35", "#9b87f5"]} size="sm" count={6}>
                          <Icon size={16} className="text-[#FF6B35]" />
                          <span className="font-bold bg-gradient-to-r from-[#165A5A] to-[#FF6B35] bg-clip-text text-transparent">
                            {item.name}
                          </span>
                        </Sparkles>
                      ) : (
                        <>
                          <Icon size={16} />
                          <span>{item.name}</span>
                          {hasSubItems && (
                            <ChevronDown 
                              size={14} 
                              className={cn(
                                "transition-transform duration-200",
                                hoveredItem === item.name && "rotate-180"
                              )} 
                            />
                          )}
                        </>
                      )}
                      
                      {isActive && !isSEF && (
                        <motion.div 
                          className="absolute inset-0 bg-[#165A5A] rounded-full -z-10"
                          layoutId="navbar-active"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasSubItems && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200/50 py-2 backdrop-blur-xl"
                      >
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#165A5A] transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
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
                          ? "text-white bg-[#165A5A] shadow-lg" 
                          : "text-gray-700 hover:text-[#165A5A] hover:bg-gray-100",
                        isSEF && !isActive && "bg-gradient-to-r from-[#165A5A]/10 to-[#FF6B35]/10"
                      )}
                    >
                      {isSEF ? (
                        <Sparkles colors={["#165A5A", "#FF6B35"]} size="sm" count={4}>
                          <Icon size={18} className="text-[#FF6B35]" />
                          <span className="font-bold bg-gradient-to-r from-[#165A5A] to-[#FF6B35] bg-clip-text text-transparent">
                            {item.name}
                          </span>
                        </Sparkles>
                      ) : (
                        <>
                          <Icon size={18} />
                          <span>{item.name}</span>
                        </>
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
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#165A5A] transition-colors duration-200"
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
    </nav>
  );
};

export default MainNavigation;
