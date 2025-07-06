import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Target, 
  Users, 
  Mouse,
  TrendingUp,
  Eye,
  Clock,
  Zap,
  Filter,
  Download,
  RefreshCw,
  AlertCircle
} from "lucide-react";

interface AnalyticsData {
  googleAnalytics: {
    sessions: number;
    users: number;
    pageViews: number;
    bounceRate: number;
    avgSessionDuration: number;
    conversionRate: number;
  };
  heatMapping: {
    clicksTracked: number;
    scrollDepth: number;
    hotspots: Array<{ element: string; clicks: number; engagement: number }>;
  };
  conversionFunnels: {
    stages: Array<{ name: string; users: number; dropoffRate: number }>;
    overallConversion: number;
  };
  abTesting: {
    activeTests: number;
    completedTests: number;
    significantResults: number;
    averageLift: number;
  };
}

const AdvancedAnalyticsIntegration: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    googleAnalytics: {
      sessions: 12547,
      users: 8932,
      pageViews: 45231,
      bounceRate: 34.2,
      avgSessionDuration: 285,
      conversionRate: 3.8
    },
    heatMapping: {
      clicksTracked: 89432,
      scrollDepth: 68.5,
      hotspots: [
        { element: "CTA Button", clicks: 2341, engagement: 87.2 },
        { element: "Navigation Menu", clicks: 5632, engagement: 65.4 },
        { element: "Program Cards", clicks: 3421, engagement: 78.9 }
      ]
    },
    conversionFunnels: {
      stages: [
        { name: "Landing Page", users: 10000, dropoffRate: 0 },
        { name: "Persona Selection", users: 7500, dropoffRate: 25 },
        { name: "Program View", users: 5250, dropoffRate: 30 },
        { name: "Application Start", users: 2625, dropoffRate: 50 },
        { name: "Application Complete", users: 1575, dropoffRate: 40 }
      ],
      overallConversion: 15.75
    },
    abTesting: {
      activeTests: 6,
      completedTests: 24,
      significantResults: 18,
      averageLift: 12.3
    }
  });

  const [realTimeUsers, setRealTimeUsers] = useState(247);
  const [isConnected, setIsConnected] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    // Initialize Google Analytics 4 if not already done
    const initializeGA4 = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // Load gtag script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date().toISOString());
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: 'Sheraa V3 Ecosystem',
          page_location: window.location.href,
          custom_map: {
            'persona_type': 'persona',
            'user_journey': 'journey_stage',
            'engagement_score': 'engagement'
          }
        });
      }
    };

    // Real-time data updates
    const updateRealTimeData = () => {
      setRealTimeUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
      setLastUpdate(new Date());
      
      // Update analytics data
      setAnalyticsData(prev => ({
        ...prev,
        googleAnalytics: {
          ...prev.googleAnalytics,
          sessions: prev.googleAnalytics.sessions + Math.floor(Math.random() * 50),
          users: prev.googleAnalytics.users + Math.floor(Math.random() * 30)
        }
      }));
    };

    initializeGA4();
    
    const interval = setInterval(updateRealTimeData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const trackCustomEvent = (eventName: string, parameters: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'V3_Ecosystem',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        custom_map: parameters.custom_data || {}
      });
    }
  };

  const exportAnalyticsData = () => {
    const dataToExport = {
      timestamp: new Date().toISOString(),
      analytics: analyticsData,
      realTimeUsers,
      exportType: 'complete_analytics_report'
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sheraa-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    trackCustomEvent('analytics_export', { label: 'Complete Report' });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Real-time Overview */}
      <Card className="border-0 bg-gradient-to-r from-green-500/20 to-blue-500/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Analytics Dashboard</h3>
                <p className="text-sm text-gray-300">Real-time insights & performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{realTimeUsers}</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="overview" className="px-6 py-3">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="heatmaps" className="px-6 py-3">
            <Mouse className="w-4 h-4 mr-2" />
            Heat Maps
          </TabsTrigger>
          <TabsTrigger value="conversions" className="px-6 py-3">
            <Target className="w-4 h-4 mr-2" />
            Conversions
          </TabsTrigger>
          <TabsTrigger value="testing" className="px-6 py-3">
            <Zap className="w-4 h-4 mr-2" />
            A/B Testing
          </TabsTrigger>
        </TabsList>

        {/* Google Analytics Overview */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <Card className="border-0 bg-blue-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.googleAnalytics.sessions.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Sessions</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-green-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.googleAnalytics.users.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Users</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-purple-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.googleAnalytics.pageViews.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Page Views</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-orange-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.googleAnalytics.bounceRate}%</div>
                  <div className="text-sm text-gray-300">Bounce Rate</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-cyan-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{formatDuration(analyticsData.googleAnalytics.avgSessionDuration)}</div>
                  <div className="text-sm text-gray-300">Avg Duration</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-pink-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.googleAnalytics.conversionRate}%</div>
                  <div className="text-sm text-gray-300">Conversion</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Heat Mapping */}
        <TabsContent value="heatmaps" className="space-y-4">
          <div className="grid gap-4">
            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-orange-400" />
                    <h3 className="text-lg font-bold text-white">User Interaction Heat Map</h3>
                  </div>
                  <div className="text-sm text-gray-400">
                    {analyticsData.heatMapping.clicksTracked.toLocaleString()} clicks tracked
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.heatMapping.hotspots.map((hotspot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium text-white">{hotspot.element}</div>
                        <div className="text-sm text-gray-400">{hotspot.clicks.toLocaleString()} clicks</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{hotspot.engagement}%</div>
                        <div className="text-sm text-gray-400">Engagement</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Average Scroll Depth</span>
                    <span className="text-xl font-bold text-blue-400">{analyticsData.heatMapping.scrollDepth}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Conversion Funnels */}
        <TabsContent value="conversions" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Conversion Funnel</h3>
                </div>
                <Badge className="bg-green-500/20 text-green-300">
                  {analyticsData.conversionFunnels.overallConversion}% Overall
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analyticsData.conversionFunnels.stages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-white">{stage.name}</div>
                          <div className="text-sm text-gray-400">{stage.users.toLocaleString()} users</div>
                        </div>
                      </div>
                      {stage.dropoffRate > 0 && (
                        <Badge className="bg-red-500/20 text-red-300">
                          -{stage.dropoffRate}% dropoff
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* A/B Testing Results */}
        <TabsContent value="testing" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-0 bg-blue-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.abTesting.activeTests}</div>
                  <div className="text-sm text-gray-300">Active Tests</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-green-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.abTesting.completedTests}</div>
                  <div className="text-sm text-gray-300">Completed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-purple-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{analyticsData.abTesting.significantResults}</div>
                  <div className="text-sm text-gray-300">Significant</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-orange-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">+{analyticsData.abTesting.averageLift}%</div>
                  <div className="text-sm text-gray-300">Avg Lift</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Export and Actions */}
      <Card className="border-0 bg-white/5">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Button size="sm" onClick={exportAnalyticsData}>
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button size="sm" variant="outline" onClick={() => setLastUpdate(new Date())}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdvancedAnalyticsIntegration;