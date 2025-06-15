
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Clock, CheckCircle } from 'lucide-react';

interface Application {
  id: string;
  program_name: string;
  status: 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn';
  created_at: string;
  submitted_at: string | null;
}

interface ApplicationQuickActionsProps {
  applications: Application[];
}

export const ApplicationQuickActions: React.FC<ApplicationQuickActionsProps> = ({ applications }) => {
  const navigate = useNavigate();
  
  const draftApplications = applications.filter(app => app.status === 'draft');
  const pendingApplications = applications.filter(app => 
    app.status === 'submitted' || app.status === 'under_review'
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={() => navigate('/programs')} 
          className="w-full flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Start New Application
        </Button>
        
        {draftApplications.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Continue Draft Applications</h4>
            {draftApplications.map(app => (
              <div key={app.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">{app.program_name}</span>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate(`/applications/${app.id}`)}
                >
                  Continue
                </Button>
              </div>
            ))}
          </div>
        )}
        
        {pendingApplications.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Pending Applications ({pendingApplications.length})
            </h4>
            {pendingApplications.map(app => (
              <div key={app.id} className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-sm">{app.program_name}</span>
                <Badge variant="secondary" className="capitalize">
                  {app.status.replace('_', ' ')}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
