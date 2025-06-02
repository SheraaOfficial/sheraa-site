
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { 
  User, 
  Calendar, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Users, 
  Target,
  Clock,
  Star,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

interface UserProgress {
  profileCompletion: number;
  applicationsSubmitted: number;
  eventsAttended: number;
  networkConnections: number;
  skillsAcquired: string[];
  achievementsUnlocked: string[];
}

interface DashboardActivity {
  id: string;
  type: 'application' | 'event' | 'connection' | 'achievement';
  title: string;
  description: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'in-progress';
}

interface Recommendation {
  id: string;
  type: 'program' | 'event' | 'resource' | 'connection';
  title: string;
  description: string;
  relevance: number;
  actionUrl: string;
  actionText: string;
}

export const UserDashboard: React.FC = () => {
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [recentActivity, setRecentActivity] = useState<DashboardActivity[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockProgress: UserProgress = {
    profileCompletion: 85,
    applicationsSubmitted: 2,
    eventsAttended: 5,
    networkConnections: 12,
    skillsAcquired: ['Lean Startup', 'Pitch Deck Creation', 'Market Research', 'Financial Modeling'],
    achievementsUnlocked: ['Profile Master', 'Early Adopter', 'Networker', 'Event Enthusiast']
  };

  const mockActivity: DashboardActivity[] = [
    {
      id: '1',
      type: 'application',
      title: 'S3 Incubator Application',
      description: 'Application submitted and under review',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      status: 'pending'
    },
    {
      id: '2',
      type: 'event',
      title: 'SEF 2024 Registration',
      description: 'Successfully registered for the festival',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      status: 'completed'
    },
    {
      id: '3',
      type: 'connection',
      title: 'New Connection',
      description: 'Connected with Sarah Al-Mansouri',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      status: 'completed'
    },
    {
      id: '4',
      type: 'achievement',
      title: 'Achievement Unlocked',
      description: 'Earned the "Networker" badge',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      status: 'completed'
    }
  ];

  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      type: 'program',
      title: 'Access Sharjah Challenge',
      description: 'Based on your interest in sustainability, this challenge might be perfect for you.',
      relevance: 95,
      actionUrl: '/programs/access-sharjah-challenge',
      actionText: 'Learn More'
    },
    {
      id: '2',
      type: 'event',
      title: 'Startup Networking Mixer',
      description: 'Expand your network with fellow entrepreneurs in Sharjah.',
      relevance: 88,
      actionUrl: '/events/upcoming',
      actionText: 'Register'
    },
    {
      id: '3',
      type: 'resource',
      title: 'Business Model Canvas Guide',
      description: 'Perfect for your current stage of startup development.',
      relevance: 82,
      actionUrl: '/resources/guides',
      actionText: 'Download'
    }
  ];

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setUserProgress(mockProgress);
      setRecentActivity(mockActivity);
      setRecommendations(mockRecommendations);
      setLoading(false);
    };
    loadDashboardData();
  }, []);

  const getActivityIcon = (type: DashboardActivity['type']) => {
    switch (type) {
      case 'application': return <BookOpen className="w-4 h-4" />;
      case 'event': return <Calendar className="w-4 h-4" />;
      case 'connection': return <Users className="w-4 h-4" />;
      case 'achievement': return <Award className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: DashboardActivity['type']) => {
    switch (type) {
      case 'application': return 'bg-blue-100 text-blue-600';
      case 'event': return 'bg-purple-100 text-purple-600';
      case 'connection': return 'bg-green-100 text-green-600';
      case 'achievement': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: DashboardActivity['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4 text-blue-600" />;
    }
  };

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (loading || !userProgress) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const userInitials = loggedInUser ? 
    `${loggedInUser.firstName?.[0] || ''}${loggedInUser.lastName?.[0] || ''}` : 'U';

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={loggedInUser?.profileImage} />
            <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary text-lg font-bold">
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {loggedInUser?.firstName || 'Entrepreneur'}!
            </h1>
            <p className="text-gray-600">Here's your entrepreneurial journey overview</p>
          </div>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Quick Action
        </Button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sheraa-primary/10 p-2 rounded-full">
                  <User className="w-5 h-5 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Profile</p>
                  <p className="font-semibold">{userProgress.profileCompletion}% Complete</p>
                </div>
              </div>
              <Progress value={userProgress.profileCompletion} className="h-2" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold">{userProgress.applicationsSubmitted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Events</p>
                  <p className="text-2xl font-bold">{userProgress.eventsAttended}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Connections</p>
                  <p className="text-2xl font-bold">{userProgress.networkConnections}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{activity.title}</h4>
                        {getStatusIcon(activity.status)}
                      </div>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTimeAgo(activity.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations & Achievements */}
        <div className="space-y-6">
          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Recommended for You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendations.slice(0, 3).map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-medium text-sm line-clamp-1">{rec.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {rec.relevance}%
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {rec.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {rec.actionText}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {userProgress.achievementsUnlocked.slice(0, 4).map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-yellow-50 border border-yellow-200"
                  >
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Star className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium text-yellow-800">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
