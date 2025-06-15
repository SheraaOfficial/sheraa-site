import React, { useState, useEffect, useMemo } from 'react';
import { useAuth, Profile } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { WelcomeHeader } from './WelcomeHeader';
import { ProgressCards } from './ProgressCards';
import { ActivityFeed } from './ActivityFeed';
import { RecommendationsSection } from './RecommendationsSection';
import { ApplicationStatusCard } from './ApplicationStatusCard';
import { ApplicationStatusTracker } from '../applications/ApplicationStatusTracker';
import { ApplicationQuickActions } from './ApplicationQuickActions';

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
  eventsAttended: number;
  networkConnections: number;
  achievementsUnlocked: string[];
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
  return profile?.profile_completion_score || 0;
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
      title: 'S3 Incubator Program',
      description: 'Based on your profile completion and interests, this program is perfect for you.',
      relevance: 95,
      actionUrl: '/programs/s3-incubator',
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

    // Set up real-time subscription for applications
    if (user) {
      const channel = supabase
        .channel('dashboard-applications')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'applications',
            filter: `user_id=eq.${user.id}`
          },
          () => {
            loadDashboardData(); // Refresh applications on changes
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
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

  if (loading || authLoading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-32"></div>
          ))}
        </div>
      </div>
    );
  }
  
  if (!user || !profile || !userProgress) {
    return (
      <div className="p-6 text-center">
        <p>Could not load dashboard data. Please try logging in again.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <WelcomeHeader user={user} profile={profile} />
      
      <ProgressCards userProgress={userProgress} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ActivityFeed recentActivity={recentActivity} />
          <ApplicationStatusCard applications={applications} />
        </div>

        <div className="space-y-6">
          <ApplicationQuickActions applications={applications} />
          <ApplicationStatusTracker />
          <RecommendationsSection 
            mockRecommendations={mockRecommendations} 
            userProgress={userProgress} 
          />
        </div>
      </div>
    </div>
  );
};
