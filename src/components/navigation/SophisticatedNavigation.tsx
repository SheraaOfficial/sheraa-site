
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SophisticatedNavigationContainer } from './SophisticatedNavigationContainer';
import { SophisticatedLogo } from './SophisticatedLogo';
import { SophisticatedNavItem } from './SophisticatedNavItem';
import { SophisticatedMobileMenu } from './SophisticatedMobileMenu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { sophisticatedNavigationItems, SophisticatedNavigationItem } from './sophisticatedNavigationData';

export const SophisticatedNavigation: React.FC = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isPathActive = (path: string, subItems?: SophisticatedNavigationItem['subItems']) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  const handleMouseLeave = () => {
    // Delay closing to allow mouse movement between nav item and dropdown
    setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <SophisticatedNavigationContainer>
        <SophisticatedLogo />

        {/* Enhanced Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {sophisticatedNavigationItems.map((item, index) => {
            const isActive = isPathActive(item.path, item.subItems);

            return (
              <SophisticatedNavItem
                key={item.name}
                item={item}
                index={index}
                isActive={isActive}
                activeDropdown={activeDropdown}
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => {
                  if (!item.subItems) setActiveDropdown(null);
                }}
              />
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        <SophisticatedMobileMenu />
      </SophisticatedNavigationContainer>
    </div>
  );
};
