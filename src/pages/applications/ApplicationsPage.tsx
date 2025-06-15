import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn';

interface Application {
  id: string;
  program_name: string;
  status: ApplicationStatus;
  created_at: string;
  submitted_at: string | null;
  form_data: any;
  updated_at: string;
}

const ApplicationsPage: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    if (user) {
      loadApplications();
    }
  }, [user]);

  const loadApplications = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error loading applications:', error);
      toast({
        title: "Failed to load applications",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWithdrawApplication = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: 'withdrawn' })
        .eq('id', applicationId)
        .eq('user_id', user?.id);

      if (error) throw error;

      toast({
        title: "Application withdrawn",
        description: "Your application has been withdrawn successfully."
      });

      loadApplications();
    } catch (error) {
      toast({
        title: "Failed to withdraw application",
        variant: "destructive"
      });
    }
  };

  const handleDeleteDraft = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', applicationId)
        .eq('user_id', user?.id);

      if (error) throw error;

      toast({
        title: "Draft deleted",
        description: "Your draft application has been deleted."
      });

      loadApplications();
    } catch (error) {
      toast({
        title: "Failed to delete draft",
        variant: "destructive"
      });
    }
  };

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'draft': return <FileText className="w-4 h-4" />;
      case 'submitted': return <Clock className="w-4 h-4" />;
      case 'under_review': return <AlertCircle className="w-4 h-4" />;
      case 'accepted': return <CheckCircle2 className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'withdrawn': return <XCircle className="w-4 h-4" />;
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
      case 'withdrawn': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.program_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const groupedApplications = {
    drafts: filteredApplications.filter(app => app.status === 'draft'),
    active: filteredApplications.filter(app => ['submitted', 'under_review'].includes(app.status)),
    completed: filteredApplications.filter(app => ['accepted', 'rejected', 'withdrawn'].includes(app.status))
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="grid gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Applications</h1>
            <p className="text-gray-600">Manage and track your program applications</p>
          </div>
          <Button 
            onClick={() => navigate('/programs')}
            className="mt-4 md:mt-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Application
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedStatus === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus('all')}
                >
                  All ({applications.length})
                </Button>
                <Button
                  variant={selectedStatus === 'draft' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus('draft')}
                >
                  Drafts ({groupedApplications.drafts.length})
                </Button>
                <Button
                  variant={selectedStatus === 'submitted' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus('submitted')}
                >
                  Active ({groupedApplications.active.length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications Content */}
        <Tabs value={selectedStatus === 'all' ? 'overview' : selectedStatus} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-2xl font-bold">{applications.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">In Progress</p>
                      <p className="text-2xl font-bold">{groupedApplications.active.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Accepted</p>
                      <p className="text-2xl font-bold">
                        {applications.filter(app => app.status === 'accepted').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Drafts</p>
                      <p className="text-2xl font-bold">{groupedApplications.drafts.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredApplications.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No applications found</p>
                    <Button onClick={() => navigate('/programs')} className="mt-4">
                      Start Your First Application
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredApplications.slice(0, 5).map((app) => (
                      <ApplicationCard 
                        key={app.id} 
                        application={app}
                        onWithdraw={handleWithdrawApplication}
                        onDelete={handleDeleteDraft}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tab contents would be similar */}
        </Tabs>
      </div>
    </MainLayout>
  );
};

// Application Card Component
const ApplicationCard: React.FC<{
  application: Application;
  onWithdraw: (id: string) => void;
  onDelete: (id: string) => void;
}> = ({ application, onWithdraw, onDelete }) => {
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

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {getStatusIcon(application.status)}
            <div>
              <h3 className="font-medium">{application.program_name}</h3>
              <p className="text-sm text-gray-500">
                {application.status === 'draft' 
                  ? `Created ${new Date(application.created_at).toLocaleDateString()}`
                  : application.submitted_at 
                  ? `Submitted ${new Date(application.submitted_at).toLocaleDateString()}`
                  : `Updated ${new Date(application.updated_at).toLocaleDateString()}`
                }
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(application.status)}>
            {application.status.replace('_', ' ')}
          </Badge>
          
          <div className="flex gap-1">
            {application.status === 'draft' && (
              <>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => onDelete(application.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </>
            )}
            
            {['submitted', 'under_review'].includes(application.status) && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onWithdraw(application.id)}
              >
                Withdraw
              </Button>
            )}
            
            <Button size="sm" variant="outline">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
