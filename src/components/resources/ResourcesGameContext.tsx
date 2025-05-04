
import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import { ConfettiExplosion } from '@/components/ui/confetti-explosion';
import { AchievementBadge } from '@/components/ui/achievement-badge';

interface GameState {
  resourcesViewed: string[];
  resourcesDownloaded: string[];
  resourcesShared: string[];
  points: number;
  level: number;
  achievements: {
    explorer: { level: 1 | 2 | 3, achieved: boolean };
    collector: { level: 1 | 2 | 3, achieved: boolean };
    expert: { level: 1 | 2 | 3, achieved: boolean };
    contributor: { level: 1 | 2 | 3, achieved: boolean };
  };
}

interface GameContextValue {
  gameState: GameState;
  trackResourceView: (resourceId: string) => void;
  trackResourceDownload: (resourceId: string) => void;
  trackResourceShare: (resourceId: string) => void;
  resetProgress: () => void;
}

const initialState: GameState = {
  resourcesViewed: [],
  resourcesDownloaded: [],
  resourcesShared: [],
  points: 0,
  level: 1,
  achievements: {
    explorer: { level: 1, achieved: false },
    collector: { level: 1, achieved: false },
    expert: { level: 1, achieved: false },
    contributor: { level: 1, achieved: false }
  }
};

const ResourcesGameContext = createContext<GameContextValue | undefined>(undefined);

export const useResourcesGame = () => {
  const context = useContext(ResourcesGameContext);
  if (!context) {
    throw new Error('useResourcesGame must be used within a ResourcesGameProvider');
  }
  return context;
};

export const ResourcesGameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useLocalStorage<GameState>('sheraa-resources-game', initialState);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [newAchievement, setNewAchievement] = React.useState<null | {
    type: "explorer" | "collector" | "expert" | "contributor";
    level: 1 | 2 | 3;
  }>(null);

  const addPoints = (points: number) => {
    setGameState(prev => {
      const newPoints = prev.points + points;
      const newLevel = Math.floor(newPoints / 100) + 1;
      
      // Level up check
      if (newLevel > prev.level) {
        setTimeout(() => {
          setShowConfetti(true);
          toast.success(`Level Up! You're now level ${newLevel}`, {
            description: "Keep exploring to unlock more achievements",
            duration: 5000,
          });
        }, 500);
        setTimeout(() => setShowConfetti(false), 3500);
      }
      
      return {
        ...prev,
        points: newPoints,
        level: newLevel
      };
    });
  };

  const checkAchievements = () => {
    setGameState(prev => {
      const { resourcesViewed, resourcesDownloaded, resourcesShared } = prev;
      const newAchievements = { ...prev.achievements };
      
      // Explorer achievement
      if (resourcesViewed.length >= 5 && !newAchievements.explorer.achieved) {
        newAchievements.explorer = { level: 1, achieved: true };
        showAchievementToast('explorer', 1);
      } else if (resourcesViewed.length >= 10 && newAchievements.explorer.level === 1) {
        newAchievements.explorer = { level: 2, achieved: true };
        showAchievementToast('explorer', 2);
      } else if (resourcesViewed.length >= 15 && newAchievements.explorer.level === 2) {
        newAchievements.explorer = { level: 3, achieved: true };
        showAchievementToast('explorer', 3);
      }
      
      // Collector achievement
      if (resourcesDownloaded.length >= 3 && !newAchievements.collector.achieved) {
        newAchievements.collector = { level: 1, achieved: true };
        showAchievementToast('collector', 1);
      } else if (resourcesDownloaded.length >= 6 && newAchievements.collector.level === 1) {
        newAchievements.collector = { level: 2, achieved: true };
        showAchievementToast('collector', 2);
      } else if (resourcesDownloaded.length >= 9 && newAchievements.collector.level === 2) {
        newAchievements.collector = { level: 3, achieved: true };
        showAchievementToast('collector', 3);
      }
      
      // Contributor achievement
      if (resourcesShared.length >= 1 && !newAchievements.contributor.achieved) {
        newAchievements.contributor = { level: 1, achieved: true };
        showAchievementToast('contributor', 1);
      } else if (resourcesShared.length >= 3 && newAchievements.contributor.level === 1) {
        newAchievements.contributor = { level: 2, achieved: true };
        showAchievementToast('contributor', 2);
      } else if (resourcesShared.length >= 5 && newAchievements.contributor.level === 2) {
        newAchievements.contributor = { level: 3, achieved: true };
        showAchievementToast('contributor', 3);
      }
      
      return {
        ...prev,
        achievements: newAchievements
      };
    });
  };
  
  const showAchievementToast = (type: "explorer" | "collector" | "expert" | "contributor", level: 1 | 2 | 3) => {
    setNewAchievement({ type, level });
    setShowConfetti(true);
    
    const titles = {
      explorer: "Resource Explorer",
      collector: "Resource Collector",
      expert: "Sheraa Expert",
      contributor: "Community Contributor"
    };
    
    setTimeout(() => {
      toast.success(`Achievement Unlocked: ${titles[type]} ${level > 1 ? level : ''}`, {
        description: "Keep exploring to unlock more achievements",
        duration: 5000,
        icon: "🏆",
      });
    }, 500);
    
    setTimeout(() => {
      setShowConfetti(false);
      setNewAchievement(null);
    }, 3500);
  };

  const trackResourceView = (resourceId: string) => {
    setGameState(prev => {
      if (prev.resourcesViewed.includes(resourceId)) {
        return prev;
      }
      
      addPoints(5);
      
      return {
        ...prev,
        resourcesViewed: [...prev.resourcesViewed, resourceId]
      };
    });
    
    checkAchievements();
  };

  const trackResourceDownload = (resourceId: string) => {
    setGameState(prev => {
      if (prev.resourcesDownloaded.includes(resourceId)) {
        return prev;
      }
      
      addPoints(10);
      
      return {
        ...prev,
        resourcesDownloaded: [...prev.resourcesDownloaded, resourceId]
      };
    });
    
    checkAchievements();
  };

  const trackResourceShare = (resourceId: string) => {
    setGameState(prev => {
      if (prev.resourcesShared.includes(resourceId)) {
        return prev;
      }
      
      addPoints(15);
      
      return {
        ...prev,
        resourcesShared: [...prev.resourcesShared, resourceId]
      };
    });
    
    checkAchievements();
  };

  const resetProgress = () => {
    setGameState(initialState);
    toast.info("Progress reset", {
      description: "All your progress has been reset to zero"
    });
  };

  return (
    <ResourcesGameContext.Provider value={{
      gameState,
      trackResourceView,
      trackResourceDownload,
      trackResourceShare,
      resetProgress
    }}>
      {showConfetti && <ConfettiExplosion particleCount={150} duration={3000} />}
      {newAchievement && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white bg-opacity-80 backdrop-blur-sm p-10 rounded-xl shadow-2xl">
          <AchievementBadge 
            type={newAchievement.type} 
            level={newAchievement.level} 
            achieved={true}
            className="scale-[3]"
          />
        </div>
      )}
      {children}
    </ResourcesGameContext.Provider>
  );
};
