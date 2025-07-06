import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  FileText, 
  TestTube, 
  Server,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Download,
  Play,
  Shield,
  Database,
  Globe
} from "lucide-react";

interface LaunchChecklist {
  documentation: {
    completed: boolean;
    items: Array<{ name: string; status: 'complete' | 'partial' | 'pending' }>;
  };
  testing: {
    completed: boolean;
    coverage: number;
    items: Array<{ name: string; status: 'passed' | 'failed' | 'pending' }>;
  };
  deployment: {
    completed: boolean;
    environment: 'staging' | 'production' | 'none';
    items: Array<{ name: string; status: 'configured' | 'pending' | 'error' }>;
  };
  monitoring: {
    completed: boolean;
    systems: Array<{ name: string; status: 'active' | 'inactive' | 'error' }>;
  };
}

const LaunchReadinessSystem: React.FC = () => {
  const [checklist, setChecklist] = useState<LaunchChecklist>({
    documentation: {
      completed: false,
      items: [
        { name: "Technical Documentation", status: 'complete' },
        { name: "User Guides", status: 'complete' },
        { name: "API Documentation", status: 'partial' },
        { name: "Deployment Guide", status: 'complete' },
        { name: "Troubleshooting Guide", status: 'pending' }
      ]
    },
    testing: {
      completed: false,
      coverage: 89.4,
      items: [
        { name: "Unit Tests", status: 'passed' },
        { name: "Integration Tests", status: 'passed' },
        { name: "E2E Tests", status: 'pending' },
        { name: "Performance Tests", status: 'passed' },
        { name: "Security Tests", status: 'failed' },
        { name: "Accessibility Tests", status: 'passed' }
      ]
    },
    deployment: {
      completed: false,
      environment: 'staging',
      items: [
        { name: "Production Environment", status: 'configured' },
        { name: "Database Migration", status: 'configured' },
        { name: "Environment Variables", status: 'pending' },
        { name: "SSL Certificates", status: 'configured' },
        { name: "CDN Configuration", status: 'pending' },
        { name: "Backup Systems", status: 'configured' }
      ]
    },
    monitoring: {
      completed: false,
      systems: [
        { name: "Error Tracking", status: 'active' },
        { name: "Performance Monitor", status: 'active' },
        { name: "Uptime Monitor", status: 'active' },
        { name: "Security Monitor", status: 'inactive' },
        { name: "Analytics Tracking", status: 'active' }
      ]
    }
  });

  const [launchReadiness, setLaunchReadiness] = useState(0);
  const [isLaunchReady, setIsLaunchReady] = useState(false);
  const [estimatedLaunch, setEstimatedLaunch] = useState<Date>(new Date(Date.now() + 86400000 * 3)); // 3 days from now

  useEffect(() => {
    // Calculate overall launch readiness
    const calculateReadiness = () => {
      let totalItems = 0;
      let completedItems = 0;

      // Documentation
      checklist.documentation.items.forEach(item => {
        totalItems++;
        if (item.status === 'complete') completedItems++;
        else if (item.status === 'partial') completedItems += 0.5;
      });

      // Testing
      checklist.testing.items.forEach(item => {
        totalItems++;
        if (item.status === 'passed') completedItems++;
      });

      // Deployment
      checklist.deployment.items.forEach(item => {
        totalItems++;
        if (item.status === 'configured') completedItems++;
      });

      // Monitoring
      checklist.monitoring.systems.forEach(system => {
        totalItems++;
        if (system.status === 'active') completedItems++;
      });

      const readiness = Math.round((completedItems / totalItems) * 100);
      setLaunchReadiness(readiness);
      setIsLaunchReady(readiness >= 95);

      // Update individual section completion
      setChecklist(prev => ({
        ...prev,
        documentation: {
          ...prev.documentation,
          completed: prev.documentation.items.every(item => item.status === 'complete')
        },
        testing: {
          ...prev.testing,
          completed: prev.testing.items.every(item => item.status === 'passed')
        },
        deployment: {
          ...prev.deployment,
          completed: prev.deployment.items.every(item => item.status === 'configured')
        },
        monitoring: {
          ...prev.monitoring,
          completed: prev.monitoring.systems.every(system => system.status === 'active')
        }
      }));
    };

    calculateReadiness();
  }, [checklist]);

  const updateItemStatus = (
    section: keyof LaunchChecklist,
    itemIndex: number,
    newStatus: string
  ) => {
    setChecklist(prev => {
      const updated = { ...prev };
      if (section === 'documentation') {
        updated.documentation.items[itemIndex].status = newStatus as any;
      } else if (section === 'testing') {
        updated.testing.items[itemIndex].status = newStatus as any;
      } else if (section === 'deployment') {
        updated.deployment.items[itemIndex].status = newStatus as any;
      } else if (section === 'monitoring') {
        updated.monitoring.systems[itemIndex].status = newStatus as any;
      }
      return updated;
    });
  };

  const generateLaunchReport = () => {
    const report = {
      timestamp: new Date().toISOString(),
      readinessScore: launchReadiness,
      isLaunchReady,
      estimatedLaunchDate: estimatedLaunch.toISOString(),
      checklist,
      recommendations: []
    };

    // Add recommendations based on current state
    if (!checklist.documentation.completed) {
      report.recommendations.push("Complete all documentation before launch");
    }
    if (!checklist.testing.completed) {
      report.recommendations.push("Address all failing tests");
    }
    if (!checklist.deployment.completed) {
      report.recommendations.push("Finalize deployment configuration");
    }
    if (!checklist.monitoring.completed) {
      report.recommendations.push("Activate all monitoring systems");
    }

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `launch-readiness-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
      case 'passed':
      case 'configured':
      case 'active':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'partial':
      case 'pending':
      case 'inactive':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed':
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
      case 'passed':
      case 'configured':
      case 'active':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'partial':
      case 'pending':
      case 'inactive':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'failed':
      case 'error':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Launch Readiness Overview */}
      <Card className="border-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Launch Readiness</h3>
                <p className="text-sm text-gray-300">Production deployment status</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${isLaunchReady ? 'text-green-400' : 'text-yellow-400'}`}>
                {launchReadiness}%
              </div>
              <div className="text-sm text-gray-400">
                {isLaunchReady ? 'Ready to Launch' : 'Preparing'}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={launchReadiness} className="h-3" />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Launch Preparation</span>
              <span>Estimated: {estimatedLaunch.toLocaleDateString()}</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Launch Checklist Tabs */}
      <Tabs defaultValue="documentation" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="documentation" className="px-6 py-3">
            <FileText className="w-4 h-4 mr-2" />
            Docs
          </TabsTrigger>
          <TabsTrigger value="testing" className="px-6 py-3">
            <TestTube className="w-4 h-4 mr-2" />
            Testing
          </TabsTrigger>
          <TabsTrigger value="deployment" className="px-6 py-3">
            <Server className="w-4 h-4 mr-2" />
            Deploy
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="px-6 py-3">
            <Activity className="w-4 h-4 mr-2" />
            Monitor
          </TabsTrigger>
        </TabsList>

        {/* Documentation Checklist */}
        <TabsContent value="documentation" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Documentation</h3>
                </div>
                <Badge className={checklist.documentation.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                  {checklist.documentation.completed ? 'Complete' : 'In Progress'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.documentation.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <span className="text-white">{item.name}</span>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testing Checklist */}
        <TabsContent value="testing" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TestTube className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Testing Suite</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-500/20 text-blue-300">
                    {checklist.testing.coverage}% Coverage
                  </Badge>
                  <Badge className={checklist.testing.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                    {checklist.testing.completed ? 'All Passed' : 'Some Failed'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.testing.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <span className="text-white">{item.name}</span>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Deployment Checklist */}
        <TabsContent value="deployment" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Deployment Pipeline</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-purple-500/20 text-purple-300">
                    {checklist.deployment.environment}
                  </Badge>
                  <Badge className={checklist.deployment.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                    {checklist.deployment.completed ? 'Ready' : 'Configuring'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.deployment.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <span className="text-white">{item.name}</span>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Monitoring Systems */}
        <TabsContent value="monitoring" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Monitoring Systems</h3>
                </div>
                <Badge className={checklist.monitoring.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                  {checklist.monitoring.completed ? 'All Active' : 'Partial'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.monitoring.systems.map((system, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(system.status)}
                      <span className="text-white">{system.name}</span>
                    </div>
                    <Badge className={getStatusColor(system.status)}>
                      {system.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Launch Actions */}
      <Card className="border-0 bg-white/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Launch Actions</h3>
              <p className="text-sm text-gray-400">
                {isLaunchReady 
                  ? 'All systems ready. You can proceed with launch.' 
                  : `${100 - launchReadiness}% remaining before launch readiness.`
                }
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button onClick={generateLaunchReport}>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button 
                className={`${isLaunchReady ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'}`}
                disabled={!isLaunchReady}
              >
                <Play className="w-4 h-4 mr-2" />
                {isLaunchReady ? 'Launch to Production' : 'Not Ready'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LaunchReadinessSystem;