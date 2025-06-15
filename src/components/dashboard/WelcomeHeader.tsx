
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Profile } from '@/contexts/AuthContext';
import { User } from '@supabase/supabase-js';
import { QuickActions } from './QuickActions';

interface WelcomeHeaderProps {
  user: User;
  profile: Profile;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ user, profile }) => {
  const userInitials = profile?.first_name && profile.last_name ? 
    `${profile.first_name[0]}${profile.last_name[0]}` : (user.email?.[0] || 'U').toUpperCase();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
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
            {profile?.profile_completion_score && profile.profile_completion_score < 70 && (
              <p className="text-sm text-sheraa-primary mt-1">
                Complete your profile to unlock more opportunities
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <QuickActions profile={profile} />
      </div>
    </div>
  );
};
