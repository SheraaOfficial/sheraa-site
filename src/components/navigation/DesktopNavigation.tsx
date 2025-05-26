
import React from 'react';
import { NavigationItem } from './NavigationItem';
import { SEFButton } from './SEFButton';
import { AuthButtons } from './AuthButtons';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationItem as NavItemType } from './types';

interface DesktopNavigationProps {
  navigationItems: NavItemType[];
  isPathActive: (path: string, subItems?: NavItemType['subItems']) => boolean;
  activeDropdown: string | null;
  onNavClick: (item: NavItemType) => void;
  onDropdownClose: () => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigationItems,
  isPathActive,
  onDropdownClose
}) => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      {/* Main Navigation */}
      <div className="flex items-center space-x-1">
        {navigationItems.map((item, index) => {
          if (item.special) {
            return <SEFButton key={item.name} path={item.path} />;
          }
          
          return (
            <NavigationItem
              key={item.name}
              item={item}
              index={index}
              isActive={isPathActive(item.path, item.subItems)}
              onDropdownClose={onDropdownClose}
            />
          );
        })}
      </div>
      
      {/* Right side items */}
      <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4">
        <LanguageSwitcher />
        <AuthButtons />
      </div>
    </div>
  );
};
