
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
  Lightbulb,
  Star,
  ChevronDown,
  User,
  LogIn,
  BarChart3,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExperienceThemeSwitcher } from './ExperienceThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const EnhancedMainNavigation = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: t('nav.home'), path: '/', icon: Home },
    ...(user ? [{ name: t('nav.dashboard'), path: '/dashboard', icon: BarChart3 }] : []),
    { 
      name: t('nav.about'), 
      path: '/about', 
      icon: Users,
      subItems: [
        { name: t('nav.about.overview'), path: '/about', description: t('nav.about.overview.desc') },
        { name: t('nav.about.leadership'), path: '/about/leadership', description: t('nav.about.leadership.desc') },
        { name: t('nav.about.board'), path: '/about/board', description: t('nav.about.board.desc') }
      ]
    },
    { 
      name: t('nav.programs'), 
      path: '/programs', 
      icon: BookOpen,
      subItems: [
        { name: t('nav.programs.overview'), path: '/programs', description: t('nav.programs.overview.desc') },
        { name: t('nav.programs.s3'), path: '/programs/s3-incubator', description: t('nav.programs.s3.desc') },
        { name: t('nav.programs.start-young'), path: '/programs/start-young', description: t('nav.programs.start-young.desc') },
        { name: t('nav.programs.asc'), path: '/programs/access-sharjah-challenge', description: t('nav.programs.asc.desc') }
      ]
    },
    { 
      name: t('nav.community'), 
      path: '/community', 
      icon: Users,
      subItems: [
        { name: t('nav.community.overview'), path: '/community', description: t('nav.community.overview.desc') },
        { name: t('nav.community.membership'), path: '/community/membership', description: t('nav.community.membership.desc') },
        { name: t('nav.community.startups'), path: '/community/startups', description: t('nav.community.startups.desc') }
      ]
    },
    { 
      name: t('nav.insights'), 
      path: '/resources', 
      icon: Lightbulb,
      subItems: [
        { name: t('nav.insights.overview'), path: '/resources', description: t('nav.insights.overview.desc') },
        { name: t('nav.insights.guides'), path: '/resources/guides', description: t('nav.insights.guides.desc') },
        { name: t('nav.insights.articles'), path: '/resources/articles', description: t('nav.insights.articles.desc') }
      ]
    },
    { 
      name: t('nav.events'), 
      path: '/events', 
      icon: Calendar,
      subItems: [
        { name: t('nav.events.overview'), path: '/events', description: t('nav.events.overview.desc') },
        { name: t('nav.events.upcoming'), path: '/events/upcoming', description: t('nav.events.upcoming.desc') },
        { name: t('nav.events.sef'), path: '/events/sef-landing', description: t('nav.events.sef.desc') }
      ]
    },
    { name: t('nav.contact'), path: '/contact', icon: Phone },
    { name: t('nav.sef'), path: '/events/sef-landing', icon: Star, special: true },
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
    }, 150);
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl border-b shadow-lg transition-all duration-300",
      "bg-white/95 dark:bg-gray-900/95 border-gray-200/80 dark:border-gray-700/80",
      language === 'ar' && "font-arabic"
    )} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Text */}
          <Link to="/" className="flex items-center group">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {t('brand.name')}
            </motion.span>
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
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.name}</span>
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
                            : 'text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
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
                            : 'text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
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
                          className="absolute top-full left-0 mt-2 w-80 bg-white/98 dark:bg-gray-800/98 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/80 shadow-2xl rounded-xl overflow-hidden z-[10000]"
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
                                  <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-sheraa-primary transition-colors text-sm">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-sheraa-primary/70 mt-1">
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ExperienceThemeSwitcher />
            
            {user ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  {t('nav.signout')}
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth" className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    {t('nav.login')}
                  </Link>
                </Button>
                <Button size="sm" className="bg-sheraa-primary hover:bg-sheraa-primary/90" asChild>
                  <Link to="/auth" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {t('nav.signup')}
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ExperienceThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden border-t border-gray-200 dark:border-gray-700"
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
                            : "text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-gray-100 dark:hover:bg-gray-800",
                          isSEF && !isActive && "bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10",
                          language === 'ar' && "space-x-reverse"
                        )}
                      >
                        <Icon size={18} className={isSEF ? "text-sheraa-primary" : ""} />
                        <span className={isSEF && !isActive ? "font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent" : ""}>
                          {item.name}
                        </span>
                      </Link>
                      
                      {item.subItems && isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={cn("ml-6 mt-2 space-y-1", language === 'ar' && "mr-6 ml-0")}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sheraa-primary transition-colors duration-200"
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
                <div className="mx-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  {user ? (
                    <button
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      {t('nav.signout')}
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/auth"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
                      >
                        <LogIn className="w-4 h-4" />
                        {t('nav.login')}
                      </Link>
                      <Link
                        to="/auth"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium bg-sheraa-primary text-white rounded-xl hover:bg-sheraa-primary/90 transition-all duration-200"
                      >
                        <User className="w-4 h-4" />
                        {t('nav.signup')}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default EnhancedMainNavigation;
