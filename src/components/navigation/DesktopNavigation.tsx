
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationItem } from './types';
import { NavigationItem as NavItem } from './NavigationItem';
import { SEFButton } from './SEFButton';

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  isPathActive: (path: string, subItems?: NavigationItem['subItems']) => boolean;
  activeDropdown: string | null;
  onNavClick: (item: NavigationItem) => void;
  onDropdownClose: () => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigationItems,
  isPathActive,
  activeDropdown,
  onNavClick,
  onDropdownClose
}) => {
  const navigate = useNavigate();

  const handleItemClick = (item: NavigationItem) => {
    if (item.subItems && item.subItems.length > 0) {
      onNavClick(item);
    } else {
      navigate(item.path);
      onDropdownClose();
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/30 shadow-inner">
        {navigationItems.map((item, index) => {
          const isActive = isPathActive(item.path, item.subItems);
          return (
            <NavItem
              key={item.name}
              item={item}
              index={index}
              isActive={isActive}
              activeDropdown={activeDropdown}
              onItemClick={handleItemClick}
              onDropdownClose={onDropdownClose}
            />
          );
        })}
        
        <SEFButton path="/events/sef-landing" />
      </div>
    </div>
  );
};
