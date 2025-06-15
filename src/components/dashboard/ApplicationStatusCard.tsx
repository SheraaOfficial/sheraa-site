
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  FileText,
  ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn';

interface Application {
  id: string;
  program_name: string;
  status: ApplicationStatus;
  created_at: string;
  submitted_at: string | null;
}

interface ApplicationStatusCardProps {
  applications: Application[];
}

const getStatusIcon = (status: ApplicationStatus) => {
  switch (status) {
    case 'draft': return <FileText className="w-4 h-4" />;
    case 'submitted': return <Clock className="w-4 h-4" />;
    case 'under_review': return <AlertCircle className="w-4 h-4" />;
    case 'accepted': return <CheckCircle2 className="w-4 h-4" />;
    case 'rejected': return <XCircle className="w-4 h-4" />;
    default: return <FileText className="w-4 h-4" />;
  }
};

const getStatusColor = (status: ApplicationStatus) => {
  switch (status) {
    case 'draft': return 'bg-gray-100 text-gray-800';
    case 'submitted': return 'bg-blue-100 text-blue-800';
    case 'under_review': return 'bg-yellow-100 text-yellow-800';
    case 'accepted': return 'bg-green-100 text-green-800';
    case 'rejected': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const ApplicationStatusCard: React.FC<ApplicationStatusCardProps> = ({ applications }) => {
  const navigate = useNavigate();
  
  const draftApplications = applications.filter(app => app.status === 'draft');
  const activeApplications = applications.filter(app => app.status !== 'draft');
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          My Applications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {applications.length === 0 ? (
          <div className="text-center py-6">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-3">No applications yet</p>
            <Button onClick={() => navigate('/programs')}>
              Browse Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        ) : (
          <>
            {draftApplications.length > 0 && (
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Continue Application</h4>
                {draftApplications.slice(0, 2).map((app) => (
                  <div key={app.id} className="border rounded-lg p-3 mb-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(app.status)}
                        <span className="font-medium text-sm">{app.program_name}</span>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <Progress value={30} className="h-2 mb-2" />
                    <Button size="sm" variant="outline" className="w-full">
                      Continue Application
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {activeApplications.length > 0 && (
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Active Applications</h4>
                {activeApplications.slice(0, 3).map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-2 border rounded mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(app.status)}
                      <div>
                        <p className="font-medium text-sm">{app.program_name}</p>
                        <p className="text-xs text-gray-500">
                          {app.submitted_at ? 
                            `Submitted ${new Date(app.submitted_at).toLocaleDateString()}` :
                            `Created ${new Date(app.created_at).toLocaleDateString()}`
                          }
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
            
            {applications.length > 3 && (
              <Button variant="ghost" className="w-full" onClick={() => navigate('/applications')}>
                View All Applications ({applications.length})
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
