
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface NavGroup {
  title: string;
  links: { title: string; href: string; description?: string }[];
}

interface ImmersiveNavbarProps {
  onOpen?: () => void;
  onClose?: () => void;
}

const ImmersiveNavbar: React.FC<ImmersiveNavbarProps> = ({ onOpen, onClose }) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  const isDark = theme === 'dark';

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation groups
  const navGroups: Record<string, NavGroup> = {
    discover: {
      title: 'Discover',
      links: [
        { title: 'About Sheraa', href: '/about', description: 'Learn about our mission and vision' },
        { title: 'Our Impact', href: '/about/impact', description: 'See how we're changing the ecosystem' },
        { title: 'Why Sharjah', href: '/about/why-sharjah', description: 'Discover the advantages of Sharjah' }
      ]
    },
    programs: {
      title: 'Programs',
      links: [
        { title: 'All Programs', href: '/programs', description: 'Explore all our entrepreneurship programs' },
        { title: 'Startup Dojo', href: '/programs/startup-dojo', description: 'For student entrepreneurs' },
        { title: 'S3 Incubator', href: '/programs/s3-incubator', description: 'For early-stage startups' },
        { title: 'Access Sharjah Challenge', href: '/programs/access-sharjah-challenge', description: 'For growth-stage startups' },
        { title: 'Deal Dock', href: '/programs/deal-dock', description: 'For startups seeking investments' },
        { title: 'SME Support', href: '/programs/sme-support', description: 'For established businesses' }
      ]
    },
    community: {
      title: 'Community',
      links: [
        { title: 'Join Our Community', href: '/community/join', description: 'Become part of our ecosystem' },
        { title: 'Startup Directory', href: '/community/startups', description: 'Explore our portfolio startups' },
        { title: 'Partnerships', href: '/community/partnerships', description: 'Collaborate with Sheraa' },
        { title: 'Founder Portal', href: '/community/founder-portal', description: 'Exclusive resources for founders' }
      ]
    },
    events: {
      title: 'Events & Festival',
      links: [
        { title: 'SEF 2026', href: '/events/sef-landing', description: 'Sharjah Entrepreneurship Festival' },
        { title: 'Upcoming Events', href: '/events/upcoming', description: 'Workshops, webinars & more' },
        { title: 'Past Events', href: '/events/past', description: 'Our previous community gatherings' }
      ]
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (!isMenuOpen && onOpen) onOpen();
    if (isMenuOpen && onClose) onClose();
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleGroupHover = (group: string) => {
    setActiveGroup(group);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          scrolled 
            ? 'backdrop-blur-md bg-white/80 dark:bg-sheraa-dark/80 shadow-md' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-primary/70 bg-clip-text text-transparent">
              SHERAA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.keys(navGroups).map((key) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => handleGroupHover(key)}
                onMouseLeave={() => setActiveGroup(null)}
              >
                <button 
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    activeGroup === key 
                      ? "text-sheraa-primary dark:text-sheraa-primary" 
                      : "text-gray-800 dark:text-gray-200 hover:text-sheraa-primary dark:hover:text-sheraa-primary"
                  )}
                >
                  {navGroups[key].title}
                </button>
                
                <AnimatePresence>
                  {activeGroup === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 left-1/2 transform -translate-x-1/2 pt-2 w-64"
                    >
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="grid gap-2">
                          {navGroups[key].links.map((link, i) => (
                            <Link 
                              key={i} 
                              to={link.href}
                              className="block p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{link.title}</div>
                              {link.description && (
                                <div className="text-xs text-gray-500 dark:text-gray-400">{link.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link 
              to="/eligibility" 
              className="px-4 py-2 rounded-md bg-gradient-to-r from-sheraa-primary to-purple-500 text-white font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Apply
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {!loggedInUser && (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-white hover:text-sheraa-primary dark:hover:text-sheraa-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-1.5 text-sm font-medium bg-sheraa-primary/10 text-sheraa-primary rounded-md hover:bg-sheraa-primary/20 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {loggedInUser && (
              <Link to="/profile">
                <div className="w-8 h-8 rounded-full bg-sheraa-primary/20 flex items-center justify-center text-sheraa-primary font-semibold">
                  {loggedInUser.name?.[0] || 'U'}
                </div>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-4 py-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={handleMenuClose}>
                  <span className="text-2xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-primary/70 bg-clip-text text-transparent">
                    SHERAA
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {Object.keys(navGroups).map((key) => (
                  <div key={key} className="mb-6">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                      {navGroups[key].title}
                    </h4>
                    <div className="grid gap-2 pl-2">
                      {navGroups[key].links.map((link, i) => (
                        <Link
                          key={i}
                          to={link.href}
                          onClick={handleMenuClose}
                          className="block py-2 text-gray-700 dark:text-gray-300 hover:text-sheraa-primary dark:hover:text-sheraa-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mb-6">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                    Quick Links
                  </h4>
                  <div className="grid gap-2 pl-2">
                    <Link
                      to="/eligibility"
                      onClick={handleMenuClose}
                      className="block py-2 text-sheraa-primary font-medium"
                    >
                      Apply
                    </Link>
                    <Link
                      to="/contact"
                      onClick={handleMenuClose}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-sheraa-primary dark:hover:text-sheraa-primary"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {!loggedInUser && (
                <div className="py-4 grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    onClick={handleMenuClose}
                    className="w-full py-2 text-center text-sm font-medium text-sheraa-primary border border-sheraa-primary/30 rounded-md hover:bg-sheraa-primary/10"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={handleMenuClose}
                    className="w-full py-2 text-center text-sm font-medium bg-sheraa-primary text-white rounded-md hover:bg-sheraa-primary/90"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImmersiveNavbar;
