
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, BookOpen, Calendar, User, Bell, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Profile } from '@/contexts/AuthContext';

interface QuickActionsProps {
  profile: Profile;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ profile }) => {
  const navigate = useNavigate();

  const getRecommendedAction = () => {
    const completion = profile.profile_completion_score || 0;
    
    if (completion < 50) {
      return {
        icon: User,
        text: 'Complete Profile',
        action: () => navigate('/profile-setup'),
        variant: 'default' as const
      };
    }
    
    return {
      icon: BookOpen,
      text: 'Apply to Program',
      action: null, // Will use dropdown
      variant: 'default' as const
    };
  };

  const primaryAction = getRecommendedAction();

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="space-y-2">
          {primaryAction.action ? (
            <Button 
              onClick={primaryAction.action} 
              className="w-full justify-start"
              variant={primaryAction.variant}
            >
              <primaryAction.icon className="w-4 h-4 mr-2" />
              {primaryAction.text}
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Apply to Program
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={() => navigate('/programs/s3-incubator/apply')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  S3 Incubator
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/programs/startup-dojo/apply')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Startup Dojo
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/programs/access-sharjah/apply')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Access Sharjah Challenge
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => navigate('/applications')}
          >
            <FileText className="w-4 h-4 mr-2" />
            View Applications
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => navigate('/book-consultation')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Consultation
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => navigate('/events')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Join Event
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
