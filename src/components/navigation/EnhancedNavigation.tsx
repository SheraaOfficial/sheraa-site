import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const EnhancedNavigation: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: t('nav.about'),
      path: '/about',
      dropdown: [
        { name: t('nav.about.overview'), path: '/about', desc: t('nav.about.overview.desc') },
        { name: t('nav.about.leadership'), path: '/about/leadership', desc: t('nav.about.leadership.desc') },
        { name: t('nav.about.board'), path: '/about/board', desc: t('nav.about.board.desc') }
      ]
    },
    {
      name: t('nav.programs'),
      path: '/programs',
      dropdown: [
        { name: t('nav.programs.overview'), path: '/programs', desc: t('nav.programs.overview.desc') },
        { name: t('nav.programs.s3'), path: '/programs/s3', desc: t('nav.programs.s3.desc') },
        { name: t('nav.programs.start-young'), path: '/programs/start-young', desc: t('nav.programs.start-young.desc') },
        { name: t('nav.programs.asc'), path: '/programs/asc', desc: t('nav.programs.asc.desc') }
      ]
    },
    {
      name: t('nav.community'),
      path: '/community',
      dropdown: [
        { name: t('nav.community.overview'), path: '/community', desc: t('nav.community.overview.desc') },
        { name: t('nav.community.membership'), path: '/community/membership', desc: t('nav.community.membership.desc') },
        { name: t('nav.community.startups'), path: '/portfolio', desc: t('nav.community.startups.desc') }
      ]
    },
    { name: 'Sheraa Startups', path: '/portfolio' },
    {
      name: t('nav.events'),
      path: '/events',
      dropdown: [
        { name: t('nav.events.overview'), path: '/events', desc: t('nav.events.overview.desc') },
        { name: t('nav.events.upcoming'), path: '/events/upcoming', desc: t('nav.events.upcoming.desc') },
        { name: t('nav.events.sef'), path: '/sef', desc: t('nav.events.sef.desc') }
      ]
    },
    { name: t('nav.sef'), path: '/sef' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/sheraa-logo.png" 
              alt="Sheraa" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                        isActive(item.path) 
                          ? 'text-sheraa-primary bg-sheraa-primary/10' 
                          : 'text-gray-700 hover:text-sheraa-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {dropdownItem.desc}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(item.path) 
                      ? 'text-sheraa-primary bg-sheraa-primary/10' 
                      : 'text-gray-700 hover:text-sheraa-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-6 py-2"
              asChild
            >
              <Link to="/apply">{t('form.apply')}</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100 py-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive(item.path) 
                        ? 'text-sheraa-primary bg-sheraa-primary/10' 
                        : 'text-gray-700 hover:text-sheraa-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-sheraa-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default EnhancedNavigation;