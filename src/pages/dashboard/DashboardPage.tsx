
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { UserDashboard } from '@/components/dashboard/UserDashboard';
import { AnalyticsDashboard } from '@/components/dashboard/AnalyticsDashboard';
import { ProjectManagement } from '@/components/projects/ProjectManagement';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { 
  LayoutDashboard, 
  BarChart3, 
  FolderKanban, 
  Search, 
  Bell,
  User,
  TrendingUp
} from 'lucide-react';

const DashboardPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <MainLayout
      seoTitle="Dashboard - Sheraa"
      seoDescription="Manage your entrepreneurial journey with Sheraa's comprehensive dashboard"
    >
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header with Quick Actions */}
        <div className="border-b bg-white/80 backdrop-blur-lg sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Manage your entrepreneurial journey</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSearch(true)}
                  className="flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowNotifications(true)}
                  className="flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <UserDashboard />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <AnalyticsDashboard />
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <ProjectManagement />
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
                  <p className="text-gray-600 mb-4">
                    Your entrepreneurial journey performance and growth metrics.
                  </p>
                  <AnalyticsDashboard />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Project Insights</h3>
                  <p className="text-gray-600 mb-4">
                    Track your project progress and team collaboration.
                  </p>
                  <ProjectManagement viewMode="list" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Global Components */}
        <GlobalSearch isOpen={showSearch} onClose={() => setShowSearch(false)} />
        <NotificationCenter isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
