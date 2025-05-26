
import React from 'react';
import { NavigationItem } from './NavigationItem';
import { SEFButton } from './SEFButton';
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
  activeDropdown,
  onNavClick,
  onDropdownClose
}) => {
  return (
    <div className="hidden lg:flex items-center space-x-1">
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
            activeDropdown={activeDropdown}
            onItemClick={onNavClick}
            onDropdownClose={onDropdownClose}
          />
        );
      })}
    </div>
  );
};
