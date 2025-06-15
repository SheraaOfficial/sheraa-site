import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, Profile } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
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

type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn';

interface Application {
  id: string;
  program_name: string;
  status: ApplicationStatus;
  created_at: string;
  submitted_at: string | null;
}

interface UserProgress {
  profileCompletion: number;
  applicationsSubmitted: number;
  eventsAttended: number; // Will be mock for now
  networkConnections: number; // Will be mock for now
  achievementsUnlocked: string[]; // Will be mock for now
}

interface DashboardActivity {
  id: string;
  type: 'application';
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

const getProfileCompletion = (profile: Profile | null) => {
  if (!profile) return 0;
  const fields = [profile.first_name, profile.last_name, profile.avatar_url, profile.headline];
  const completedFields = fields.filter(f => f).length;
  return Math.round((completedFields / fields.length) * 100);
};

export const UserDashboard: React.FC = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for features not yet implemented with backend
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
  ];

  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user) {
        if (!authLoading) setLoading(false);
        return;
      }
      setLoading(true);

      const { data, error } = await supabase
        .from('applications')
        .select('id, program_name, status, created_at, submitted_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching applications:", error);
      } else {
        setApplications(data as Application[]);
      }
      
      setLoading(false);
    };

    if (!authLoading) {
      loadDashboardData();
    }
  }, [user, authLoading]);

  const userProgress: UserProgress | null = useMemo(() => {
    if (!profile) return null;
    return {
      profileCompletion: getProfileCompletion(profile),
      applicationsSubmitted: applications.filter(a => a.status !== 'draft').length,
      eventsAttended: 5, // Mock
      networkConnections: 12, // Mock
      achievementsUnlocked: ['Profile Master', 'Early Adopter', 'Networker'] // Mock
    };
  }, [profile, applications]);

  const recentActivity: DashboardActivity[] = useMemo(() => {
    return applications.slice(0, 4).map(app => ({
      id: app.id,
      type: 'application',
      title: `${app.program_name} Application`,
      description: `Status: ${app.status.replace('_', ' ')}`,
      timestamp: new Date(app.submitted_at || app.created_at),
      status: app.status === 'submitted' || app.status === 'under_review' ? 'pending' : 'completed',
    }));
  }, [applications]);

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

  if (loading || authLoading) {
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
  
  if (!user || !profile || !userProgress) {
    return (
      <div className="p-6 text-center">
        <p>Could not load dashboard data. Please try logging in again.</p>
        <Button onClick={() => window.location.href = '/auth/login'} className="mt-4">Login</Button>
      </div>
    );
  }

  const userInitials = profile?.first_name && profile.last_name ? 
    `${profile.first_name[0]}${profile.last_name[0]}` : (user.email?.[0] || 'U').toUpperCase();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile?.avatar_url || ''} />
            <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary text-lg font-bold">
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {profile?.first_name || 'Entrepreneur'}!
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
                {recentActivity.length > 0 ? recentActivity.map((activity, index) => (
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
                      <p className="text-sm text-gray-600 capitalize">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTimeAgo(activity.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                )) : <p className="text-gray-500 text-sm">No recent activity to show.</p>}
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
                {mockRecommendations.slice(0, 3).map((rec, index) => (
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
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={rec.actionUrl}>
                        {rec.actionText}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
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
