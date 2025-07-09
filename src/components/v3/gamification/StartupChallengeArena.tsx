import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Target, Clock, Users, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'idea' | 'pitch' | 'business' | 'marketing';
  timeLimit: number; // in minutes
  xpReward: number;
  participants: number;
  maxParticipants: number;
}

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Elevator Pitch Lightning Round',
    description: 'Create and deliver a 60-second elevator pitch for your startup idea',
    difficulty: 'easy',
    category: 'pitch',
    timeLimit: 15,
    xpReward: 100,
    participants: 23,
    maxParticipants: 50
  },
  {
    id: '2',
    title: 'Market Research Sprint',
    description: 'Conduct rapid market analysis and present actionable insights',
    difficulty: 'medium',
    category: 'business',
    timeLimit: 45,
    xpReward: 250,
    participants: 15,
    maxParticipants: 30
  },
  {
    id: '3',
    title: 'Creative Problem Solving',
    description: 'Solve a real-world business challenge with innovative thinking',
    difficulty: 'hard',
    category: 'idea',
    timeLimit: 90,
    xpReward: 500,
    participants: 8,
    maxParticipants: 20
  }
];

export const StartupChallengeArena: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [userScore, setUserScore] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [streak, setStreak] = useState(3);

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
    }
  };

  const getCategoryIcon = (category: Challenge['category']) => {
    switch (category) {
      case 'idea': return <Zap className="w-4 h-4" />;
      case 'pitch': return <Target className="w-4 h-4" />;
      case 'business': return <Trophy className="w-4 h-4" />;
      case 'marketing': return <Star className="w-4 h-4" />;
    }
  };

  const joinChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    // Simulate joining animation
    setTimeout(() => {
      setUserScore(prev => prev + challenge.xpReward);
      setStreak(prev => prev + 1);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sheraa-dark via-sheraa-dark/95 to-sheraa-primary/10 p-6">
      {/* Header with User Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Startup Challenge Arena
            </h1>
            <p className="text-sheraa-muted">
              Compete, learn, and level up your entrepreneurial skills
            </p>
          </div>
          
          {/* User Stats */}
          <div className="flex gap-4">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-sheraa-muted">Level</div>
              <div className="text-2xl font-bold text-white">{userLevel}</div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-sheraa-muted">XP</div>
              <div className="text-2xl font-bold text-sheraa-primary">{userScore}</div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-sheraa-muted">Streak</div>
              <div className="text-2xl font-bold text-sheraa-teal">{streak} 🔥</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-sheraa-primary/50 transition-all duration-300"
          >
            {/* Challenge Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                {getCategoryIcon(challenge.category)}
                <span className="text-xs uppercase tracking-wider text-sheraa-muted">
                  {challenge.category}
                </span>
              </div>
              <span className={`text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty.toUpperCase()}
              </span>
            </div>

            {/* Challenge Content */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {challenge.title}
            </h3>
            <p className="text-sm text-sheraa-muted mb-4 line-clamp-2">
              {challenge.description}
            </p>

            {/* Challenge Stats */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-sheraa-muted">
                  <Clock className="w-3 h-3" />
                  {challenge.timeLimit} min
                </span>
                <span className="text-sheraa-primary font-semibold">
                  +{challenge.xpReward} XP
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-sheraa-muted">
                    <Users className="w-3 h-3" />
                    Participants
                  </span>
                  <span className="text-white">
                    {challenge.participants}/{challenge.maxParticipants}
                  </span>
                </div>
                <Progress 
                  value={(challenge.participants / challenge.maxParticipants) * 100}
                  className="h-1"
                />
              </div>
            </div>

            {/* Join Button */}
            <Button
              onClick={() => joinChallenge(challenge)}
              className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 text-white"
              disabled={challenge.participants >= challenge.maxParticipants}
            >
              {challenge.participants >= challenge.maxParticipants ? 'Full' : 'Join Challenge'}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Active Challenge Modal */}
      <AnimatePresence>
        {selectedChallenge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedChallenge(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-sheraa-dark border border-white/20 rounded-xl p-8 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Challenge Started! 🚀
              </h2>
              <p className="text-sheraa-muted mb-6">
                You've joined "{selectedChallenge.title}". Get ready to showcase your skills!
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sheraa-primary">
                    {selectedChallenge.timeLimit}
                  </div>
                  <div className="text-xs text-sheraa-muted">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sheraa-teal">
                    +{selectedChallenge.xpReward}
                  </div>
                  <div className="text-xs text-sheraa-muted">XP Reward</div>
                </div>
              </div>

              <Button
                onClick={() => setSelectedChallenge(null)}
                className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90"
              >
                Let's Go!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};