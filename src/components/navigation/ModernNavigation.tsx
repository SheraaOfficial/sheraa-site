
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Phone, 
  FileText,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';
import { NavigationLogo } from './NavigationLogo';
import { NavigationItem as NavItem } from './NavigationItem';
import { SEFButton } from './SEFButton';
import { MobileNavigation } from './MobileNavigation';
import { MobileMenuButton } from './MobileMenuButton';
import { FloatingBackground } from './FloatingBackground';

const ModernNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <FloatingBackground />

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
          <div className="flex items-center justify-between h-16 px-6">
            <NavigationLogo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/30 shadow-inner">
                {navigationItems.map((item, index) => {
                  const isActive = isPathActive(item.path, item.subItems);
                  return (
                    <NavItem
                      key={item.name}
                      item={item}
                      index={index}
                      isActive={isActive}
                      activeDropdown={activeDropdown}
                      onItemClick={handleNavClick}
                      onDropdownClose={() => setActiveDropdown(null)}
                    />
                  );
                })}
                
                <SEFButton path={sefItem.path} />
              </div>
            </div>

            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          <MobileNavigation
            isOpen={isOpen}
            items={allNavigationItems}
            isPathActive={isPathActive}
            onItemClick={handleNavClick}
            onClose={() => setIsOpen(false)}
          />
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
