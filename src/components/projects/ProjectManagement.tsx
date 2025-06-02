
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  MoreHorizontal,
  Filter,
  Search,
  Kanban,
  List,
  BarChart3,
  User,
  Flag
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  startDate: Date;
  dueDate: Date;
  team: Array<{ id: string; name: string; avatar?: string; role: string }>;
  tags: string[];
  tasks: Array<{
    id: string;
    title: string;
    completed: boolean;
    assignee?: string;
    dueDate?: Date;
  }>;
}

interface ProjectManagementProps {
  viewMode?: 'kanban' | 'list' | 'timeline';
}

export const ProjectManagement: React.FC<ProjectManagementProps> = ({ 
  viewMode: initialViewMode = 'kanban' 
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [viewMode, setViewMode] = useState(initialViewMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock projects data
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'S3 Incubator Application',
      description: 'Prepare and submit application for the S3 Incubator program',
      status: 'in-progress',
      priority: 'high',
      progress: 75,
      startDate: new Date('2024-01-15'),
      dueDate: new Date('2024-02-15'),
      team: [
        { id: '1', name: 'Ahmed Al-Rashid', role: 'Founder' },
        { id: '2', name: 'Sarah Johnson', role: 'Co-founder' }
      ],
      tags: ['Application', 'Funding'],
      tasks: [
        { id: '1', title: 'Complete business plan', completed: true },
        { id: '2', title: 'Prepare pitch deck', completed: true },
        { id: '3', title: 'Submit application', completed: false },
        { id: '4', title: 'Prepare for interview', completed: false }
      ]
    },
    {
      id: '2',
      title: 'Market Research Study',
      description: 'Conduct comprehensive market research for target audience',
      status: 'review',
      priority: 'medium',
      progress: 90,
      startDate: new Date('2024-01-01'),
      dueDate: new Date('2024-02-01'),
      team: [
        { id: '3', name: 'Maria Garcia', role: 'Research Lead' },
        { id: '4', name: 'John Smith', role: 'Analyst' }
      ],
      tags: ['Research', 'Strategy'],
      tasks: [
        { id: '5', title: 'Survey design', completed: true },
        { id: '6', title: 'Data collection', completed: true },
        { id: '7', title: 'Analysis', completed: true },
        { id: '8', title: 'Report writing', completed: false }
      ]
    },
    {
      id: '3',
      title: 'Product MVP Development',
      description: 'Build minimum viable product for beta testing',
      status: 'planning',
      priority: 'urgent',
      progress: 25,
      startDate: new Date('2024-02-01'),
      dueDate: new Date('2024-04-01'),
      team: [
        { id: '5', name: 'Alex Chen', role: 'Tech Lead' },
        { id: '6', name: 'Lisa Brown', role: 'Designer' },
        { id: '7', name: 'David Wilson', role: 'Developer' }
      ],
      tags: ['Development', 'MVP'],
      tasks: [
        { id: '9', title: 'Technical requirements', completed: true },
        { id: '10', title: 'UI/UX design', completed: false },
        { id: '11', title: 'Backend development', completed: false },
        { id: '12', title: 'Testing', completed: false }
      ]
    }
  ];

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'review': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Project['priority']) => {
    switch (priority) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'urgent': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityIcon = (priority: Project['priority']) => {
    return <Flag className={`w-4 h-4 ${getPriorityColor(priority)}`} />;
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const groupedProjects = {
    planning: filteredProjects.filter(p => p.status === 'planning'),
    'in-progress': filteredProjects.filter(p => p.status === 'in-progress'),
    review: filteredProjects.filter(p => p.status === 'review'),
    completed: filteredProjects.filter(p => p.status === 'completed')
  };

  const renderProjectCard = (project: Project) => (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -2 }}
      className="mb-4"
    >
      <Card className="cursor-pointer hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm line-clamp-1">{project.title}</h3>
              {getPriorityIcon(project.priority)}
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {project.description}
          </p>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">Progress</span>
                <span className="text-xs font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>
            
            <div className="flex items-center justify-between">
              <Badge variant="outline" className={`text-xs ${getStatusColor(project.status)}`}>
                {project.status.replace('-', ' ')}
              </Badge>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {project.dueDate.toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-1">
                {project.team.slice(0, 3).map((member, index) => (
                  <Avatar key={member.id} className="w-6 h-6 border-2 border-white">
                    <AvatarFallback className="text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {project.team.length > 3 && (
                  <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-gray-600">+{project.team.length - 3}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {project.tasks.filter(t => t.completed).length}/{project.tasks.length}
                </span>
              </div>
            </div>
            
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderKanbanView = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {Object.entries(groupedProjects).map(([status, projects]) => (
        <div key={status}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold capitalize">{status.replace('-', ' ')}</h3>
            <Badge variant="outline">{projects.length}</Badge>
          </div>
          <div className="space-y-4">
            <AnimatePresence>
              {projects.map(renderProjectCard)}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {filteredProjects.map(project => (
        <Card key={project.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  {getPriorityIcon(project.priority)}
                  <Badge variant="outline" className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Due: {project.dueDate.toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team.length} members
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    {project.tasks.filter(t => t.completed).length}/{project.tasks.length} tasks
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="w-24 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold">Project Management</h1>
          <p className="text-gray-600">Manage your entrepreneurial projects and track progress</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'kanban' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('kanban')}
              >
                <Kanban className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Views */}
      <div>
        {viewMode === 'kanban' && renderKanbanView()}
        {viewMode === 'list' && renderListView()}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {projects.length}
            </div>
            <div className="text-sm text-gray-600">Total Projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {projects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="text-sm text-gray-600">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-sheraa-primary">
              {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
            </div>
            <div className="text-sm text-gray-600">Avg Progress</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
