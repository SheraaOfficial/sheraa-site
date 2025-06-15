
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Profile } from '@/contexts/AuthContext';
import { User } from '@supabase/supabase-js';

interface WelcomeHeaderProps {
  user: User;
  profile: Profile;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ user, profile }) => {
  const userInitials = profile?.first_name && profile.last_name ? 
    `${profile.first_name[0]}${profile.last_name[0]}` : (user.email?.[0] || 'U').toUpperCase();

  return (
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
  );
};
