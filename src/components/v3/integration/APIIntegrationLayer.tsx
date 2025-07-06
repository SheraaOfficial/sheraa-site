import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Database, 
  Zap, 
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Settings,
  BarChart3,
  Key
} from "lucide-react";

interface APIEndpoint {
  name: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  status: 'active' | 'inactive' | 'error';
  responseTime: number;
  uptime: number;
  rateLimit: number;
  lastCalled: Date;
}

interface ExternalIntegration {
  name: string;
  service: string;
  status: 'connected' | 'disconnected' | 'error';
  apiKey: string;
  features: string[];
  usage: {
    current: number;
    limit: number;
    period: 'daily' | 'monthly';
  };
}

const APIIntegrationLayer: React.FC = () => {
  const [endpoints, setEndpoints] = useState<APIEndpoint[]>([
    {
      name: 'Startup Data',
      url: '/api/startups',
      method: 'GET',
      status: 'active',
      responseTime: 120,
      uptime: 99.8,
      rateLimit: 1000,
      lastCalled: new Date(Date.now() - 2000)
    },
    {
      name: 'Investor Matching',
      url: '/api/match-investors',
      method: 'POST',
      status: 'active',
      responseTime: 340,
      uptime: 98.5,
      rateLimit: 100,
      lastCalled: new Date(Date.now() - 5000)
    },
    {
      name: 'Event Management',
      url: '/api/events',
      method: 'GET',
      status: 'active',
      responseTime: 85,
      uptime: 99.9,
      rateLimit: 500,
      lastCalled: new Date(Date.now() - 1000)
    },
    {
      name: 'Application Submissions',
      url: '/api/applications',
      method: 'POST',
      status: 'error',
      responseTime: 0,
      uptime: 95.2,
      rateLimit: 200,
      lastCalled: new Date(Date.now() - 300000)
    }
  ]);

  const [integrations, setIntegrations] = useState<ExternalIntegration[]>([
    {
      name: 'WhatsApp Business API',
      service: 'Meta',
      status: 'connected',
      apiKey: 'whatsapp_***_key',
      features: ['Messaging', 'Media Upload', 'Template Messages'],
      usage: { current: 1240, limit: 5000, period: 'daily' }
    },
    {
      name: 'Google Analytics',
      service: 'Google',
      status: 'connected',
      apiKey: 'ga4_***_key',
      features: ['Event Tracking', 'User Analytics', 'Conversion Tracking'],
      usage: { current: 45000, limit: 100000, period: 'monthly' }
    },
    {
      name: 'SendGrid Email',
      service: 'Twilio',
      status: 'connected',
      apiKey: 'sg_***_key',
      features: ['Transactional Email', 'Templates', 'Analytics'],
      usage: { current: 2100, limit: 10000, period: 'monthly' }
    },
    {
      name: 'Slack Notifications',
      service: 'Slack',
      status: 'disconnected',
      apiKey: 'slack_***_key',
      features: ['Channel Notifications', 'Direct Messages', 'File Sharing'],
      usage: { current: 0, limit: 1000, period: 'daily' }
    }
  ]);

  const [apiMetrics, setApiMetrics] = useState({
    totalRequests: 15420,
    successRate: 98.7,
    averageResponseTime: 185,
    errorRate: 1.3,
    peakRPS: 45
  });

  useEffect(() => {
    // Simulate real-time API monitoring
    const interval = setInterval(() => {
      setEndpoints(prev => prev.map(endpoint => ({
        ...endpoint,
        responseTime: endpoint.status === 'active' 
          ? Math.floor(Math.random() * 300) + 50 
          : 0,
        lastCalled: endpoint.status === 'active' 
          ? new Date() 
          : endpoint.lastCalled
      })));

      setApiMetrics(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 10) + 1,
        averageResponseTime: Math.floor(Math.random() * 100) + 150,
        peakRPS: Math.floor(Math.random() * 20) + 35
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'connected':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'error':
      case 'disconnected':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'connected':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'error':
      case 'disconnected':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-500/20 text-blue-300';
      case 'POST': return 'bg-green-500/20 text-green-300';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-300';
      case 'DELETE': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const formatLastCalled = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* API Overview Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="border-0 bg-blue-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{apiMetrics.totalRequests.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Total Requests</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-green-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{apiMetrics.successRate}%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-purple-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{apiMetrics.averageResponseTime}ms</div>
              <div className="text-sm text-gray-300">Avg Response</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-orange-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{apiMetrics.errorRate}%</div>
              <div className="text-sm text-gray-300">Error Rate</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-cyan-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{apiMetrics.peakRPS}</div>
              <div className="text-sm text-gray-300">Peak RPS</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* API Management Tabs */}
      <Tabs defaultValue="endpoints" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-fit">
          <TabsTrigger value="endpoints" className="px-6 py-3">
            <Database className="w-4 h-4 mr-2" />
            Endpoints
          </TabsTrigger>
          <TabsTrigger value="integrations" className="px-6 py-3">
            <Globe className="w-4 h-4 mr-2" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="px-6 py-3">
            <BarChart3 className="w-4 h-4 mr-2" />
            Monitoring
          </TabsTrigger>
        </TabsList>

        {/* API Endpoints */}
        <TabsContent value="endpoints" className="space-y-4">
          <div className="grid gap-4">
            {endpoints.map((endpoint) => (
              <motion.div
                key={endpoint.name}
                whileHover={{ scale: 1.01 }}
                className="cursor-pointer"
              >
                <Card className="border-0 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(endpoint.status)}
                        <div>
                          <h4 className="font-bold text-white">{endpoint.name}</h4>
                          <p className="text-sm text-gray-400">{endpoint.url}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getMethodColor(endpoint.method)}>
                          {endpoint.method}
                        </Badge>
                        <Badge className={getStatusColor(endpoint.status)}>
                          {endpoint.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Response Time</p>
                        <p className="font-medium text-white">{endpoint.responseTime}ms</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Uptime</p>
                        <p className="font-medium text-white">{endpoint.uptime}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Rate Limit</p>
                        <p className="font-medium text-white">{endpoint.rateLimit}/hour</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Last Called</p>
                        <p className="font-medium text-white">{formatLastCalled(endpoint.lastCalled)}</p>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 space-x-2">
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3 mr-1" />
                        Configure
                      </Button>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Test
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* External Integrations */}
        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                whileHover={{ scale: 1.01 }}
                className="cursor-pointer"
              >
                <Card className="border-0 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(integration.status)}
                        <div>
                          <h4 className="font-bold text-white">{integration.name}</h4>
                          <p className="text-sm text-gray-400">{integration.service} Integration</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(integration.status)}>
                          {integration.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Key className="w-3 h-3 mr-1" />
                          {integration.apiKey}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Features</p>
                        <div className="flex flex-wrap gap-1">
                          {integration.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Usage ({integration.usage.period})</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              style={{ 
                                width: `${(integration.usage.current / integration.usage.limit) * 100}%` 
                              }}
                            />
                          </div>
                          <span className="text-sm text-white">
                            {integration.usage.current.toLocaleString()} / {integration.usage.limit.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3 mr-1" />
                        Configure
                      </Button>
                      {integration.status === 'disconnected' ? (
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          <Zap className="w-3 h-3 mr-1" />
                          Connect
                        </Button>
                      ) : (
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                          <RefreshCw className="w-3 h-3 mr-1" />
                          Sync
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Monitoring Dashboard */}
        <TabsContent value="monitoring" className="space-y-4">
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Advanced API Monitoring
            </h3>
            <p className="text-gray-300 mb-6">
              Real-time analytics, error tracking, and performance insights
            </p>
            <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
              <Shield className="w-4 h-4 mr-2" />
              View Analytics Dashboard
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default APIIntegrationLayer;