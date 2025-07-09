import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Target, Zap, Crown, Award, Badge, Medal } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  unlockedAt?: Date;
  category: 'social' | 'learning' | 'challenge' | 'milestone';
}

const achievements: Achievement[] = [
  {
    id: 'first_match',
    title: 'First Connection',
    description: 'Make your first founder match',
    icon: <Star className="w-6 h-6" />,
    rarity: 'common',
    xpReward: 50,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    unlockedAt: new Date(),
    category: 'social'
  },
  {
    id: 'challenge_master',
    title: 'Challenge Master',
    description: 'Complete 10 startup challenges',
    icon: <Target className="w-6 h-6" />,
    rarity: 'rare',
    xpReward: 200,
    progress: 7,
    maxProgress: 10,
    unlocked: false,
    category: 'challenge'
  },
  {
    id: 'learning_streak',
    title: 'Knowledge Seeker',
    description: 'Maintain a 7-day learning streak',
    icon: <Zap className="w-6 h-6" />,
    rarity: 'epic',
    xpReward: 500,
    progress: 5,
    maxProgress: 7,
    unlocked: false,
    category: 'learning'
  },
  {
    id: 'legendary_founder',
    title: 'Legendary Founder',
    description: 'Reach Level 50 and complete all challenges',
    icon: <Crown className="w-6 h-6" />,
    rarity: 'legendary',
    xpReward: 1000,
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    category: 'milestone'
  }
];

export const AchievementSystem: React.FC = () => {
  const [activeAchievements, setActiveAchievements] = useState(achievements);
  const [newlyUnlocked, setNewlyUnlocked] = useState<Achievement | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-yellow-600';
    }
  };

  const getRarityBorder = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'border-gray-400';
      case 'rare': return 'border-blue-400';
      case 'epic': return 'border-purple-400';
      case 'legendary': return 'border-yellow-400';
    }
  };

  const triggerAchievement = (achievementId: string) => {
    const achievement = activeAchievements.find(a => a.id === achievementId);
    if (!achievement || achievement.unlocked) return;

    const updatedAchievement = {
      ...achievement,
      unlocked: true,
      unlockedAt: new Date(),
      progress: achievement.maxProgress
    };

    setActiveAchievements(prev => 
      prev.map(a => a.id === achievementId ? updatedAchievement : a)
    );

    setNewlyUnlocked(updatedAchievement);
    setShowNotification(true);

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: achievement.rarity === 'legendary' ? ['#FFD700', '#FFA500'] : 
              achievement.rarity === 'epic' ? ['#8B5CF6', '#A855F7'] :
              achievement.rarity === 'rare' ? ['#3B82F6', '#60A5FA'] :
              ['#6B7280', '#9CA3AF']
    });

    setTimeout(() => {
      setShowNotification(false);
      setNewlyUnlocked(null);
    }, 4000);
  };

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'social': return <Star className="w-4 h-4" />;
      case 'learning': return <Zap className="w-4 h-4" />;
      case 'challenge': return <Target className="w-4 h-4" />;
      case 'milestone': return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 ${
              achievement.unlocked 
                ? getRarityBorder(achievement.rarity)
                : 'border-white/20'
            } transition-all duration-300 ${
              !achievement.unlocked && achievement.progress > 0
                ? 'hover:border-sheraa-primary/50'
                : ''
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Rarity Glow */}
            {achievement.unlocked && (
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(achievement.rarity)} opacity-10 rounded-xl`}
              />
            )}

            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs text-sheraa-muted">
                {getCategoryIcon(achievement.category)}
                <span className="uppercase tracking-wider">
                  {achievement.category}
                </span>
              </div>
              <span className={`text-xs font-bold uppercase ${
                achievement.rarity === 'legendary' ? 'text-yellow-400' :
                achievement.rarity === 'epic' ? 'text-purple-400' :
                achievement.rarity === 'rare' ? 'text-blue-400' :
                'text-gray-400'
              }`}>
                {achievement.rarity}
              </span>
            </div>

            {/* Achievement Icon */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
              achievement.unlocked 
                ? `bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white`
                : 'bg-white/10 text-sheraa-muted'
            }`}>
              {achievement.icon}
            </div>

            {/* Achievement Info */}
            <h3 className={`font-semibold mb-2 ${
              achievement.unlocked ? 'text-white' : 'text-sheraa-muted'
            }`}>
              {achievement.title}
            </h3>
            
            <p className="text-sm text-sheraa-muted mb-4">
              {achievement.description}
            </p>

            {/* Progress Bar */}
            {!achievement.unlocked && (
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-sheraa-muted">Progress</span>
                  <span className="text-white">
                    {achievement.progress}/{achievement.maxProgress}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(achievement.progress / achievement.maxProgress) * 100}%` 
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            )}

            {/* XP Reward */}
            <div className="flex items-center justify-between">
              <span className="text-sheraa-primary font-semibold">
                +{achievement.xpReward} XP
              </span>
              {achievement.unlocked && achievement.unlockedAt && (
                <span className="text-xs text-sheraa-muted">
                  {achievement.unlockedAt.toLocaleDateString()}
                </span>
              )}
            </div>

            {/* Unlock Button (for testing) */}
            {!achievement.unlocked && achievement.progress < achievement.maxProgress && (
              <motion.button
                onClick={() => triggerAchievement(achievement.id)}
                className="mt-4 w-full py-2 px-4 bg-sheraa-primary/20 hover:bg-sheraa-primary/30 text-sheraa-primary rounded-lg text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Simulate Unlock
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && newlyUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-sheraa-dark to-sheraa-primary/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl z-50 max-w-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${getRarityColor(newlyUnlocked.rarity)} text-white`}>
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  Achievement Unlocked!
                </h4>
                <p className="text-sm text-sheraa-muted mb-1">
                  {newlyUnlocked.title}
                </p>
                <p className="text-xs text-sheraa-primary">
                  +{newlyUnlocked.xpReward} XP
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Summary */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          Achievement Progress
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['common', 'rare', 'epic', 'legendary'].map(rarity => {
            const count = activeAchievements.filter(a => 
              a.rarity === rarity && a.unlocked
            ).length;
            const total = activeAchievements.filter(a => a.rarity === rarity).length;
            
            return (
              <div key={rarity} className="text-center">
                <div className={`text-2xl font-bold ${
                  rarity === 'legendary' ? 'text-yellow-400' :
                  rarity === 'epic' ? 'text-purple-400' :
                  rarity === 'rare' ? 'text-blue-400' :
                  'text-gray-400'
                }`}>
                  {count}/{total}
                </div>
                <div className="text-sm text-sheraa-muted capitalize">
                  {rarity}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};