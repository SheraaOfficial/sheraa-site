
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Sun,
  Moon,
  ArrowRight,
  Home,
  Compass,
  TrendingUp,
  Users,
  Calendar,
  Sparkles,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<any>;
  subItems?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  highlight?: boolean;
}

const ModernNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  const navItems: NavItem[] = [
    {
      title: 'Home',
      icon: Home,
      subItems: [
        { title: 'About Sheraa', href: '/about', description: 'Our mission and vision' },
        { title: 'Why Sharjah', href: '/about/why-sharjah', description: 'Advantages of Sharjah' },
        { title: 'Our Impact', href: '/about/impact', description: 'Transforming entrepreneurship' },
        { title: 'Leadership Team', href: '/about/team', description: 'Meet our leaders' }
      ]
    },
    {
      title: 'Discover',
      icon: Compass,
      subItems: [
        { title: 'Programs Overview', href: '/programs', description: 'All our programs' },
        { title: 'Community', href: '/community', description: 'Join our ecosystem' },
        { title: 'Resources', href: '/resources', description: 'Guides and tools' },
        { title: 'Sharjah Perfume', href: '/perfume/sharjah-premium', description: 'Luxury fragrances' }
      ]
    },
    {
      title: 'Programs',
      icon: TrendingUp,
      subItems: [
        { title: 'Startup Dojo', href: '/programs/startup-dojo', description: 'For student entrepreneurs' },
        { title: 'S3 Incubator', href: '/programs/s3-incubator', description: 'For early-stage startups' },
        { title: 'Access Sharjah Challenge', href: '/programs/access-sharjah-challenge', description: 'For growth-stage startups' },
        { title: 'SME Support', href: '/programs/sme-support', description: 'For established businesses' }
      ]
    },
    {
      title: 'Community',
      icon: Users,
      subItems: [
        { title: 'Join Community', href: '/community/join', description: 'Become part of our ecosystem' },
        { title: 'Startup Directory', href: '/community/startups', description: 'Explore our startups' },
        { title: 'Partnerships', href: '/community/partnerships', description: 'Collaborate with us' },
        { title: 'Founder Portal', href: '/community/founder-portal', description: 'Exclusive resources' }
      ]
    },
    {
      title: 'Events',
      icon: Calendar,
      subItems: [
        { title: 'Upcoming Events', href: '/events/upcoming', description: 'Workshops and webinars' },
        { title: 'Past Events', href: '/events/past', description: 'Previous gatherings' }
      ]
    },
    {
      title: 'SEF',
      href: '/events/sef-landing',
      icon: Sparkles,
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
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#165A5A] via-[#C8A165] to-[#165A5A] bg-clip-text text-transparent">
                SHERAA
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#165A5A] to-[#C8A165] group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                        : location.pathname === item.href
                        ? 'text-[#165A5A] bg-[#165A5A]/10'
                        : 'text-gray-700 dark:text-gray-200 hover:text-[#165A5A] hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeDropdown === item.title
                        ? 'text-[#165A5A] bg-[#165A5A]/10'
                        : 'text-gray-700 dark:text-gray-200 hover:text-[#165A5A] hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                    {item.subItems && (
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.title && item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {item.subItems.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-[#165A5A] dark:group-hover:text-[#C8A165]">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {subItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#165A5A] dark:group-hover:text-[#C8A165] transform group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Apply Button - Desktop */}
            <Link 
              to="/eligibility"
              className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#165A5A] text-white font-medium text-sm transition-all duration-200 hover:bg-[#165A5A]/90 hover:shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Apply</span>
            </Link>

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
                <div className="w-8 h-8 rounded-full bg-[#165A5A]/20 flex items-center justify-center text-[#165A5A] font-semibold text-sm hover:bg-[#165A5A]/30 transition-colors">
                  {loggedInUser.name?.[0] || <User className="w-4 h-4" />}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 p-3 rounded-lg font-medium ${
                        item.highlight
                          ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white'
                          : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={closeMenu}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={(e) => handleDropdownClick(e, item.title)}
                        className="flex items-center justify-between w-full p-3 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.title ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.title && item.subItems && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 mt-2 space-y-1 overflow-hidden"
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
    </header>
  );
};

export default ModernNavigationBar;
