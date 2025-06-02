
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  Target, 
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Download,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  visitors: number;
  engagement: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; change: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  weeklyData: Array<{ day: string; views: number; visitors: number }>;
  userJourney: Array<{ step: string; users: number; dropOff: number }>;
}

export const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock analytics data
  const mockData: AnalyticsData = {
    pageViews: 45620,
    visitors: 12890,
    engagement: 4.2,
    conversionRate: 12.5,
    topPages: [
      { page: '/programs/s3-incubator', views: 8945, change: 15.2 },
      { page: '/events/sef-landing', views: 6720, change: -2.1 },
      { page: '/community/startups', views: 4580, change: 8.9 },
      { page: '/about', views: 3210, change: 5.4 },
      { page: '/programs', views: 2890, change: -1.2 }
    ],
    trafficSources: [
      { source: 'Direct', visitors: 5156, percentage: 40 },
      { source: 'Social Media', visitors: 3867, percentage: 30 },
      { source: 'Search Engines', visitors: 2578, percentage: 20 },
      { source: 'Referrals', visitors: 1289, percentage: 10 }
    ],
    weeklyData: [
      { day: 'Mon', views: 6200, visitors: 1800 },
      { day: 'Tue', views: 7100, visitors: 2100 },
      { day: 'Wed', views: 6800, visitors: 1950 },
      { day: 'Thu', views: 8200, visitors: 2400 },
      { day: 'Fri', views: 7500, visitors: 2200 },
      { day: 'Sat', views: 5200, visitors: 1500 },
      { day: 'Sun', views: 4600, visitors: 1340 }
    ],
    userJourney: [
      { step: 'Landing Page', users: 1000, dropOff: 0 },
      { step: 'Program Page', users: 750, dropOff: 25 },
      { step: 'Application Form', users: 450, dropOff: 40 },
      { step: 'Form Completion', users: 320, dropOff: 29 },
      { step: 'Submission', users: 280, dropOff: 13 }
    ]
  };

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData(mockData);
      setLoading(false);
    };
    loadData();
  }, [timeRange]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />;
  };

  const pieColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  if (loading || !data) {
    return (
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your website performance and user engagement</p>
        </div>
        <div className="flex items-center gap-3">
          <Tabs value={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              <TabsTrigger value="7d">7 Days</TabsTrigger>
              <TabsTrigger value="30d">30 Days</TabsTrigger>
              <TabsTrigger value="90d">90 Days</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Page Views</p>
                  <p className="text-2xl font-bold">{formatNumber(data.pageViews)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(15.2)}
                    <span className={`text-sm ${getChangeColor(15.2)}`}>+15.2%</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Visitors</p>
                  <p className="text-2xl font-bold">{formatNumber(data.visitors)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(8.7)}
                    <span className={`text-sm ${getChangeColor(8.7)}`}>+8.7%</span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Session</p>
                  <p className="text-2xl font-bold">{data.engagement}m</p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(3.2)}
                    <span className={`text-sm ${getChangeColor(3.2)}`}>+3.2%</span>
                  </div>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold">{data.conversionRate}%</p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(2.1)}
                    <span className={`text-sm ${getChangeColor(2.1)}`}>+2.1%</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Over Time */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Traffic Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={data.trafficSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="visitors"
                >
                  {data.trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {data.trafficSources.map((source, index) => (
                <div key={source.source} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: pieColors[index % pieColors.length] }}
                  ></div>
                  <span className="text-sm">{source.source}</span>
                  <Badge variant="outline" className="ml-auto">
                    {source.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{page.page}</p>
                    <p className="text-sm text-gray-600">{formatNumber(page.views)} views</p>
                  </div>
                  <div className={`flex items-center gap-1 ${getChangeColor(page.change)}`}>
                    {getChangeIcon(page.change)}
                    <span className="text-sm">{Math.abs(page.change)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Journey */}
        <Card>
          <CardHeader>
            <CardTitle>User Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.userJourney.map((step, index) => {
                const conversionRate = index === 0 ? 100 : (step.users / data.userJourney[0].users) * 100;
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{step.step}</span>
                      <div className="text-right">
                        <div className="text-sm font-medium">{step.users} users</div>
                        <div className="text-xs text-gray-500">{conversionRate.toFixed(1)}%</div>
                      </div>
                    </div>
                    <Progress value={conversionRate} className="h-2" />
                    {step.dropOff > 0 && (
                      <div className="text-xs text-red-600 mt-1">
                        -{step.dropOff}% drop-off
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
