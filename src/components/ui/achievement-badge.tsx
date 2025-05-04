
import React from 'react';
import { Eye, Download, Share2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export type AchievementType = 'explorer' | 'collector' | 'expert' | 'contributor';

interface AchievementBadgeProps {
  type: AchievementType;
  level: 1 | 2 | 3;
  achieved?: boolean;
  className?: string;
  showTooltip?: boolean;
}

export const AchievementBadge = ({ 
  type, 
  level = 1, 
  achieved = false,
  className,
  showTooltip = true
}: AchievementBadgeProps) => {
  const getIcon = (type: AchievementType) => {
    switch (type) {
      case 'explorer': return <Eye className="h-3 w-3" />;
      case 'collector': return <Download className="h-3 w-3" />;
      case 'contributor': return <Share2 className="h-3 w-3" />;
      case 'expert': return <Star className="h-3 w-3" />;
    }
  };
  
  const getColor = (type: AchievementType) => {
    switch (type) {
      case 'explorer': 
        return {
          bg: achieved ? 'bg-blue-500' : 'bg-gray-300',
          text: achieved ? 'text-blue-500' : 'text-gray-400',
          border: achieved ? 'border-blue-500' : 'border-gray-300'
        };
      case 'collector': 
        return {
          bg: achieved ? 'bg-green-500' : 'bg-gray-300',
          text: achieved ? 'text-green-500' : 'text-gray-400',
          border: achieved ? 'border-green-500' : 'border-gray-300'
        };
      case 'contributor': 
        return {
          bg: achieved ? 'bg-purple-500' : 'bg-gray-300',
          text: achieved ? 'text-purple-500' : 'text-gray-400',
          border: achieved ? 'border-purple-500' : 'border-gray-300'
        };
      case 'expert': 
        return {
          bg: achieved ? 'bg-amber-500' : 'bg-gray-300',
          text: achieved ? 'text-amber-500' : 'text-gray-400',
          border: achieved ? 'border-amber-500' : 'border-gray-300'
        };
    }
  };
  
  const getTitle = (type: AchievementType, level: number) => {
    const levelSuffix = level > 1 ? ` ${level}` : '';
    switch (type) {
      case 'explorer': return `Resource Explorer${levelSuffix}`;
      case 'collector': return `Resource Collector${levelSuffix}`;
      case 'contributor': return `Community Contributor${levelSuffix}`;
      case 'expert': return `Sheraa Expert${levelSuffix}`;
    }
  };
  
  const getDescription = (type: AchievementType, level: number) => {
    switch (type) {
      case 'explorer': 
        return level === 1 ? 'View 5 different resources' : 
               level === 2 ? 'View 10 different resources' : 
                             'View 15 different resources';
      case 'collector': 
        return level === 1 ? 'Download 3 resources' : 
               level === 2 ? 'Download 6 resources' : 
                             'Download 9 resources';
      case 'contributor': 
        return level === 1 ? 'Share 1 resource' : 
               level === 2 ? 'Share 3 resources' : 
                             'Share 5 resources';
      case 'expert': 
        return level === 1 ? 'Complete your first resource' : 
               level === 2 ? 'Complete 5 resources' : 
                             'Complete 10 resources';
    }
  };
  
  const colors = getColor(type);
  const badge = (
    <div 
      className={cn(
        'relative flex items-center justify-center w-6 h-6 rounded-full border-2',
        achieved ? 'opacity-100' : 'opacity-60',
        colors.border,
        className
      )}
    >
      <div className={cn('absolute inset-0.5 rounded-full flex items-center justify-center', colors.bg, achieved ? 'text-white' : 'text-gray-100')}>
        {getIcon(type)}
      </div>
      
      {level > 1 && (
        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-white flex items-center justify-center text-[8px] font-bold">
          {level}
        </div>
      )}
    </div>
  );
  
  if (!showTooltip) return badge;
  
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-[200px]">
          <div>
            <p className="font-semibold">{getTitle(type, level)}</p>
            <p className="text-xs text-muted-foreground">{getDescription(type, level)}</p>
            <p className="text-xs mt-1 font-medium">{achieved ? 'Achieved' : 'Locked'}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
