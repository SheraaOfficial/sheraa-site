
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Sun,
  Moon,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocalStorage } from '@/hooks/use-local-storage';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  const navItems = [
    {
      title: 'About',
      subItems: [
        { title: 'About Sheraa', href: '/about', description: 'Our mission and vision' },
        { title: 'Why Sharjah', href: '/about/why-sharjah', description: 'Advantages of Sharjah' },
        { title: 'Our Impact', href: '/about/impact', description: 'Transforming entrepreneurship' },
        { title: 'Leadership Team', href: '/about/team', description: 'Meet our leaders' }
      ]
    },
    {
      title: 'Programs',
      subItems: [
        { title: 'All Programs', href: '/programs', description: 'Explore all programs' },
        { title: 'Startup Dojo', href: '/programs/startup-dojo', description: 'For student entrepreneurs' },
        { title: 'S3 Incubator', href: '/programs/s3-incubator', description: 'For early-stage startups' },
        { title: 'Access Sharjah Challenge', href: '/programs/access-sharjah-challenge', description: 'For growth-stage startups' },
        { title: 'SME Support', href: '/programs/sme-support', description: 'For established businesses' }
      ]
    },
    {
      title: 'Community',
      subItems: [
        { title: 'Join Community', href: '/community/join', description: 'Become part of our ecosystem' },
        { title: 'Startup Directory', href: '/community/startups', description: 'Explore our startups' },
        { title: 'Partnerships', href: '/community/partnerships', description: 'Collaborate with us' }
      ]
    },
    {
      title: 'Events',
      subItems: [
        { title: 'Upcoming Events', href: '/events/upcoming', description: 'Workshops and webinars' },
        { title: 'Past Events', href: '/events/past', description: 'Previous gatherings' }
      ]
    },
    {
      title: 'SEF',
      href: '/events/sef-landing',
      highlight: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-[#165A5A] to-[#C8A165] bg-clip-text text-transparent">
              SHERAA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg hover:shadow-xl'
                        : 'text-gray-700 dark:text-gray-200 hover:text-[#165A5A] hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button 
                    className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#165A5A] hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.title && item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {item.subItems.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-gray-900 dark:text-white text-sm">
                              {subItem.title}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Apply Button */}
            <Link 
              to="/eligibility"
              className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#165A5A] text-white font-medium text-sm hover:bg-[#165A5A]/90"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Apply</span>
            </Link>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Auth Buttons */}
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`block p-3 rounded-lg font-medium ${
                        item.highlight
                          ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white'
                          : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full p-3 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.title && item.subItems && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.subItems.map((subItem, index) => (
                              <Link
                                key={index}
                                to={subItem.href}
                                className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#165A5A] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                onClick={closeMenu}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              {/* Mobile Apply Button */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <Link 
                  to="/eligibility"
                  className="flex items-center justify-center space-x-2 w-full p-3 rounded-lg bg-[#165A5A] text-white font-medium"
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
    </nav>
  );
};

export default NavigationBar;
