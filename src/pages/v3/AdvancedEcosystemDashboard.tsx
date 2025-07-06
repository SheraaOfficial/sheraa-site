import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Database, 
  Globe, 
  Shield,
  Zap,
  BarChart3,
  Settings,
  Users
} from "lucide-react";
import RealTimeDataSync from "@/components/v3/performance/RealTimeDataSync";
import PerformanceMonitor from "@/components/v3/performance/PerformanceMonitor";
import APIIntegrationLayer from "@/components/v3/integration/APIIntegrationLayer";
import AdvancedSecurityFeatures from "@/components/v3/security/AdvancedSecurityFeatures";

const AdvancedEcosystemDashboard: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [activeUsers, setActiveUsers] = useState(1247);
  const [systemHealth, setSystemHealth] = useState(98.7);

  const handleOptimizationSuggestion = (suggestions: string[]) => {
    console.log('Optimization suggestions received:', suggestions);
    // In real implementation, this would trigger automated optimizations
    // or notify the development team
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#475569] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Advanced Ecosystem Dashboard
          </h1>
          <p className="text-gray-300">
            Phase 4: Advanced Integration & Performance Optimization
          </p>
        </motion.div>

        {/* System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">System Status</h3>
                    <p className="text-sm text-gray-300">Real-time ecosystem monitoring</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    Operational
                  </Badge>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{systemHealth}%</div>
                    <div className="text-sm text-gray-400">Health Score</div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <Card className="border-0 bg-blue-500/20">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-green-500/20">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-purple-500/20">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">180+</div>
                <div className="text-sm text-gray-300">Startups</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-orange-500/20">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">140+</div>
                <div className="text-sm text-gray-300">Partners</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Advanced Features Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Tabs defaultValue="performance" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-fit mx-auto">
              <TabsTrigger value="performance" className="px-6 py-3">
                <Zap className="w-4 h-4 mr-2" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="data-sync" className="px-6 py-3">
                <Database className="w-4 h-4 mr-2" />
                Data Sync
              </TabsTrigger>
              <TabsTrigger value="integrations" className="px-6 py-3">
                <Globe className="w-4 h-4 mr-2" />
                Integrations
              </TabsTrigger>
              <TabsTrigger value="security" className="px-6 py-3">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>

            {/* Performance Monitoring */}
            <TabsContent value="performance" className="space-y-6">
              <PerformanceMonitor onOptimizationSuggestion={handleOptimizationSuggestion} />
            </TabsContent>

            {/* Real-Time Data Sync */}
            <TabsContent value="data-sync" className="space-y-6">
              <RealTimeDataSync 
                isConnected={isConnected}
                onConnectionChange={setIsConnected}
              />
            </TabsContent>

            {/* API Integration Layer */}
            <TabsContent value="integrations" className="space-y-6">
              <APIIntegrationLayer />
            </TabsContent>

            {/* Advanced Security */}
            <TabsContent value="security" className="space-y-6">
              <AdvancedSecurityFeatures />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-gray-400 text-sm">
            Phase 4 Complete: Advanced Ecosystem Integration & Performance Optimization
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge className="bg-green-500/20 text-green-300">Real-time Data</Badge>
            <Badge className="bg-blue-500/20 text-blue-300">Performance Optimized</Badge>
            <Badge className="bg-purple-500/20 text-purple-300">Mobile Enhanced</Badge>
            <Badge className="bg-orange-500/20 text-orange-300">API Integrated</Badge>
            <Badge className="bg-red-500/20 text-red-300">Security Hardened</Badge>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedEcosystemDashboard;