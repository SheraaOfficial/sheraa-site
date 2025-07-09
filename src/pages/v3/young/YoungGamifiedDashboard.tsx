import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StartupChallengeArena, SwipeableFounderCards, AchievementSystem } from '@/components/v3/gamification';
import { CursorTrail, MagneticField, ProximityReveal } from '@/components/v3/interactions';
import { EnhancedMobileOptimizations } from '@/components/v3/mobile';
import { useInteractionMetrics } from '@/hooks/useInteractionMetrics';
import { Trophy, Users, Target, Star, Gamepad2, Heart } from 'lucide-react';

const YoungGamifiedDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  const { metrics, trackEvent } = useInteractionMetrics();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackEvent({ type: 'click', element: `tab-${tab}` });
  };

  const stats = [
    { label: 'Level', value: '12', icon: <Star className="w-5 h-5" />, color: 'text-yellow-400' },
    { label: 'XP', value: '2,450', icon: <Trophy className="w-5 h-5" />, color: 'text-sheraa-primary' },
    { label: 'Matches', value: '23', icon: <Heart className="w-5 h-5" />, color: 'text-pink-400' },
    { label: 'Challenges', value: '8', icon: <Target className="w-5 h-5" />, color: 'text-sheraa-teal' }
  ];

  return (
    <EnhancedMobileOptimizations
      enableHaptics={true}
      enableGestures={true}
      enableBatteryAware={true}
    >
      <MainLayout>
        <CursorTrail enabled={window.innerWidth >= 768} />
        
        <div className="min-h-screen bg-gradient-to-br from-sheraa-dark via-sheraa-dark/95 to-sheraa-primary/10">
          {/* Header */}
          <div className="container mx-auto px-4 pt-8 pb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Young Entrepreneur Hub 🚀
              </h1>
              <p className="text-sheraa-muted text-lg max-w-2xl mx-auto">
                Level up your entrepreneurial journey through challenges, connections, and achievements
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <MagneticField key={stat.label} strength={0.3} radius={120}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:border-sheraa-primary/50 transition-all duration-300"
                  >
                    <div className={`flex justify-center mb-2 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-sheraa-muted">
                      {stat.label}
                    </div>
                  </motion.div>
                </MagneticField>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 pb-8">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <MagneticField strength={0.2} radius={100}>
                <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                  <TabsTrigger 
                    value="challenges" 
                    className="data-[state=active]:bg-sheraa-primary data-[state=active]:text-white"
                  >
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Challenges
                  </TabsTrigger>
                  <TabsTrigger 
                    value="matching"
                    className="data-[state=active]:bg-sheraa-primary data-[state=active]:text-white"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Founder Match
                  </TabsTrigger>
                  <TabsTrigger 
                    value="achievements"
                    className="data-[state=active]:bg-sheraa-primary data-[state=active]:text-white"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Achievements
                  </TabsTrigger>
                </TabsList>
              </MagneticField>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="challenges" className="mt-0">
                    <ProximityReveal
                      revealContent={
                        <div className="text-center p-4">
                          <h3 className="font-bold text-white mb-2">Challenge Tips</h3>
                          <p className="text-sm text-sheraa-muted">
                            Start with easier challenges to build confidence and earn XP faster!
                          </p>
                        </div>
                      }
                      triggerDistance={150}
                    >
                      <StartupChallengeArena />
                    </ProximityReveal>
                  </TabsContent>

                  <TabsContent value="matching" className="mt-0">
                    <div className="max-w-2xl mx-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                          Find Your Co-Founder ❤️
                        </h2>
                        <p className="text-sheraa-muted">
                          Swipe through potential founding partners and build your dream team
                        </p>
                      </div>
                      
                      <MagneticField strength={0.1} radius={200}>
                        <SwipeableFounderCards />
                      </MagneticField>
                    </div>
                  </TabsContent>

                  <TabsContent value="achievements" className="mt-0">
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                          Your Achievement Gallery 🏆
                        </h2>
                        <p className="text-sheraa-muted">
                          Track your progress and unlock exclusive rewards
                        </p>
                      </div>
                      
                      <AchievementSystem />
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Interaction Metrics Display (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs max-w-xs"
            >
              <div className="font-bold mb-2">Interaction Metrics</div>
              <div>Total Interactions: {metrics.totalInteractions}</div>
              <div>Session Time: {metrics.averageSessionTime.toFixed(0)}s</div>
              <div>Performance: {metrics.performanceScore.toFixed(0)}%</div>
              <div className="mt-2 text-xs text-gray-300">
                Most Used: {Object.entries(metrics.popularElements)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 2)
                  .map(([element]) => element)
                  .join(', ') || 'None'}
              </div>
            </motion.div>
          )}
        </div>
      </MainLayout>
    </EnhancedMobileOptimizations>
  );
};

export default YoungGamifiedDashboard;