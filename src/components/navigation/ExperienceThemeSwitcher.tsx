
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperienceTheme } from '@/contexts/ExperienceThemeContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Star, 
  BarChart3, 
  ChevronDown,
  Sparkles,
  Building2
} from 'lucide-react';

export const ExperienceThemeSwitcher: React.FC = () => {
  const { theme, switchToMain, switchToSEF, switchToDashboard } = useExperienceTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const themes = [
    {
      id: 'main' as const,
      name: 'Sheraa Main',
      description: 'Programs & Community',
      icon: Building2,
      color: 'bg-sheraa-primary',
      textColor: 'text-sheraa-primary',
      route: '/',
      action: switchToMain
    },
    {
      id: 'sef' as const,
      name: 'SEF Festival',
      description: 'Events & Experience',
      icon: Star,
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
      textColor: 'text-purple-600',
      route: '/events/sef-landing',
      action: switchToSEF
    },
    {
      id: 'dashboard' as const,
      name: 'Dashboard',
      description: 'Analytics & Management',
      icon: BarChart3,
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      route: '/dashboard',
      action: switchToDashboard
    }
  ];

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  const handleThemeSwitch = (newTheme: typeof themes[0]) => {
    if (newTheme.id !== theme) {
      // Set theme first
      newTheme.action();
      // Then navigate to the route
      navigate(newTheme.route);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white dark:bg-gray-800 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <currentTheme.icon className={`w-4 h-4 ${currentTheme.textColor}`} />
        <span className="hidden md:inline font-medium">{currentTheme.name}</span>
        <span className="md:hidden font-medium">Theme</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden z-[50000]"
          >
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 px-3 py-1">
                Switch Experience
              </div>
              {themes.map((themeOption, index) => {
                const Icon = themeOption.icon;
                const isActive = themeOption.id === theme;
                
                return (
                  <motion.button
                    key={themeOption.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleThemeSwitch(themeOption)}
                    className={`w-full p-3 rounded-lg transition-all duration-200 group ${
                      isActive 
                        ? 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${themeOption.color} bg-opacity-10`}>
                        <Icon className={`w-5 h-5 ${themeOption.textColor}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {themeOption.name}
                          </span>
                          {isActive && (
                            <Badge variant="secondary" className="text-xs">
                              Active
                            </Badge>
                          )}
                          {themeOption.id === 'sef' && (
                            <Sparkles className="w-3 h-3 text-purple-500" />
                          )}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {themeOption.description}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Quickly switch between different Sheraa experiences
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[49999]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
