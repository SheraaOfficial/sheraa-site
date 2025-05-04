
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useResourcesGame } from './ResourcesGameContext';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { Trophy } from 'lucide-react';
import { AchievementBadge } from '@/components/ui/achievement-badge';

export const ResourcesNav = () => {
  const location = useLocation();
  const { gameState } = useResourcesGame();
  
  const navigationItems = [
    { name: 'Overview', path: '/resources' },
    { name: 'Guides & Toolkits', path: '/resources/guides' },
    { name: 'Advisory', path: '/resources/advisory' },
    { name: 'Articles', path: '/resources/articles' },
    { name: 'Impact Reports', path: '/resources/impact-reports' },
  ];
  
  const totalAchievements = Object.values(gameState.achievements).filter(a => a.achieved).length;
  const completionPercentage = (totalAchievements / (4 * 3)) * 100; // 4 types, 3 levels each
  
  return (
    <div className="sticky top-16 z-30 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <nav className="flex items-center space-x-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-4 text-sm font-medium relative transition-colors hover:text-sheraa-primary",
                  isActive ? "text-sheraa-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sheraa-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              {Object.entries(gameState.achievements).map(([type, data]) => (
                data.achieved && (
                  <AchievementBadge 
                    key={type}
                    type={type as any}
                    level={data.level}
                    achieved={true}
                  />
                )
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-sheraa-light px-2 py-1 rounded-full">
            <ProgressCircle percentage={completionPercentage} size={32} strokeWidth={3}>
              <Trophy className="h-3.5 w-3.5 text-amber-600" />
            </ProgressCircle>
            <span className="text-xs font-medium ml-1">
              Level {gameState.level} ({gameState.points} pts)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
