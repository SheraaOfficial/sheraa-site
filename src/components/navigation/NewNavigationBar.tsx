
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Compass, 
  TrendingUp, 
  Users, 
  Calendar, 
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface NavLink {
  title: string;
  href: string;
  description?: string;
}

interface NavSection {
  title: string;
  icon: React.ComponentType<any>;
  links: NavLink[];
}

const NewNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  // Navigation sections
  const navSections: NavSection[] = [
    {
      title: 'Home',
      icon: Home,
      links: [
        { title: 'About Sheraa', href: '/about', description: 'Learn about our mission and vision' },
        { title: 'Our Impact', href: '/about/impact', description: 'See how we are changing the ecosystem' },
        { title: 'Why Sharjah', href: '/about/why-sharjah', description: 'Discover the advantages of Sharjah' },
        { title: 'Leadership Team', href: '/about/team', description: 'Meet our visionary leaders' },
        { title: 'Careers', href: '/careers', description: 'Join our mission' }
      ]
    },
    {
      title: 'Programs',
      icon: TrendingUp,
      links: [
        { title: 'All Programs', href: '/programs', description: 'Explore all our entrepreneurship programs' },
        { title: 'Startup Dojo', href: '/programs/startup-dojo', description: 'For student entrepreneurs' },
        { title: 'S3 Incubator', href: '/programs/s3-incubator', description: 'For early-stage startups' },
        { title: 'Access Sharjah Challenge', href: '/programs/access-sharjah-challenge', description: 'For growth-stage startups' },
        { title: 'Deal Dock', href: '/programs/deal-dock', description: 'For startups seeking investments' },
        { title: 'SME Support', href: '/programs/sme-support', description: 'For established businesses' }
      ]
    },
    {
      title: 'Community',
      icon: Users,
      links: [
        { title: 'Join Our Community', href: '/community/join', description: 'Become part of our ecosystem' },
        { title: 'Startup Directory', href: '/community/startups', description: 'Explore our portfolio startups' },
        { title: 'Partnerships', href: '/community/partnerships', description: 'Collaborate with Sheraa' },
        { title: 'Founder Portal', href: '/community/founder-portal', description: 'Exclusive resources for founders' }
      ]
    },
    {
      title: 'Events',
      icon: Calendar,
      links: [
        { title: 'Upcoming Events', href: '/events/upcoming', description: 'Workshops, webinars & more' },
        { title: 'Past Events', href: '/events/past', description: 'Our previous community gatherings' }
      ]
    },
    {
      title: 'SEF',
      icon: Sparkles,
      links: [
        { title: 'SEF 2026', href: '/events/sef-landing', description: 'Sharjah Entrepreneurship Festival' }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e: React.MouseEvent, sectionTitle: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === sectionTitle ? null : sectionTitle);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50 group"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-[#165A5A] to-[#C8A165] bg-clip-text text-transparent">
              SHERAA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navSections.map((section) => (
              <div 
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(section.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeDropdown === section.title
                      ? 'text-[#165A5A] bg-[#165A5A]/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-[#165A5A] hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                  <ChevronDown 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === section.title ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === section.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-[10000]"
                    >
                      <div className="p-2">
                        {section.links.map((link, index) => (
                          <Link
                            key={index}
                            to={link.href}
                            className="block p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-gray-900 dark:text-white text-sm">
                              {link.title}
                            </div>
                            {link.description && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {link.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Apply Link */}
            <Link 
              to="/eligibility"
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-[#165A5A] text-white font-medium text-sm transition-all duration-200 hover:bg-[#165A5A]/90 hover:shadow-md ml-4"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Apply</span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Auth Buttons - Desktop */}
            {!loggedInUser && (
              <div className="hidden lg:flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" asChild className="bg-[#C8A165] hover:bg-[#C8A165]/90">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            )}

            {/* User Avatar - Desktop */}
            {loggedInUser && (
              <Link to="/profile" className="hidden lg:block">
                <div className="w-8 h-8 rounded-full bg-[#165A5A]/20 flex items-center justify-center text-[#165A5A] font-semibold text-sm">
                  {loggedInUser.name?.[0] || 'U'}
                </div>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
              {navSections.map((section) => (
                <div key={section.title} className="mb-4">
                  <button
                    onClick={(e) => handleDropdownClick(e, section.title)}
                    className="flex items-center justify-between w-full p-3 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5" />
                      <span>{section.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === section.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === section.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-1 overflow-hidden"
                      >
                        {section.links.map((link, index) => (
                          <Link
                            key={index}
                            to={link.href}
                            className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#165A5A] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            onClick={closeMenu}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Apply Button */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <Link 
                  to="/eligibility"
                  className="flex items-center space-x-3 p-3 rounded-md bg-[#165A5A] text-white font-medium w-full"
                  onClick={closeMenu}
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Apply</span>
                </Link>
              </div>

              {/* Mobile Auth */}
              {!loggedInUser && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/login" onClick={closeMenu}>Login</Link>
                  </Button>
                  <Button className="w-full bg-[#C8A165] hover:bg-[#C8A165]/90" asChild>
                    <Link to="/signup" onClick={closeMenu}>Get Started</Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NewNavigationBar;
