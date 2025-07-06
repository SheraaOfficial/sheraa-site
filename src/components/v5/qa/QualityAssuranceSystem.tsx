import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Zap, 
  Users, 
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  Eye,
  Lock,
  Activity,
  FileText,
  Settings,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

interface QAMetrics {
  security: {
    vulnerabilities: {
      critical: number;
      high: number;
      medium: number;
      low: number;
    };
    score: number;
    lastScan: Date;
    penetrationTest: {
      completed: boolean;
      score: number;
      issues: number;
    };
  };
  performance: {
    lighthouse: number;
    loadTime: number;
    responseTime: number;
    uptime: number;
    lastTest: Date;
    loadTest: {
      completed: boolean;
      maxUsers: number;
      avgResponseTime: number;
    };
  };
  userAcceptance: {
    personas: Array<{
      name: string;
      tested: boolean;
      score: number;
      feedback: string[];
    }>;
    overallSatisfaction: number;
    completionRate: number;
  };
  checklist: {
    prelaunch: Array<{
      item: string;
      status: 'complete' | 'pending' | 'in-progress';
      priority: 'critical' | 'high' | 'medium' | 'low';
    }>;
    compliance: Array<{
      requirement: string;
      status: 'compliant' | 'partial' | 'non-compliant';
      details: string;
    }>;
  };
}

const QualityAssuranceSystem: React.FC = () => {
  const [qaMetrics, setQaMetrics] = useState<QAMetrics>({
    security: {
      vulnerabilities: { critical: 0, high: 2, medium: 5, low: 8 },
      score: 92,
      lastScan: new Date(Date.now() - 3600000), // 1 hour ago
      penetrationTest: { completed: true, score: 88, issues: 3 }
    },
    performance: {
      lighthouse: 95,
      loadTime: 1.8,
      responseTime: 245,
      uptime: 99.8,
      lastTest: new Date(Date.now() - 1800000), // 30 minutes ago
      loadTest: { completed: true, maxUsers: 5000, avgResponseTime: 340 }
    },
    userAcceptance: {
      personas: [
        { name: "Young Entrepreneurs", tested: true, score: 88, feedback: ["Great onboarding", "Easy navigation"] },
        { name: "Adult Founders", tested: true, score: 92, feedback: ["Comprehensive features", "Professional feel"] },
        { name: "Stakeholders", tested: false, score: 0, feedback: [] },
        { name: "General Community", tested: true, score: 85, feedback: ["Intuitive design", "Fast loading"] }
      ],
      overallSatisfaction: 88.3,
      completionRate: 75
    },
    checklist: {
      prelaunch: [
        { item: "All critical bugs resolved", status: 'complete', priority: 'critical' },
        { item: "Performance benchmarks met", status: 'complete', priority: 'critical' },
        { item: "Security scan passed", status: 'complete', priority: 'critical' },
        { item: "Backup systems tested", status: 'in-progress', priority: 'high' },
        { item: "Load balancing configured", status: 'pending', priority: 'high' },
        { item: "Analytics tracking verified", status: 'complete', priority: 'medium' }
      ],
      compliance: [
        { requirement: "GDPR Compliance", status: 'compliant', details: "Privacy policy and consent mechanisms in place" },
        { requirement: "WCAG 2.1 AA", status: 'partial', details: "Minor accessibility improvements needed" },
        { requirement: "Data Protection", status: 'compliant', details: "Encryption and secure storage implemented" },
        { requirement: "Performance Standards", status: 'compliant', details: "All benchmarks exceeded" }
      ]
    }
  });

  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testProgress, setTestProgress] = useState(0);
  const [overallQAScore, setOverallQAScore] = useState(0);

  useEffect(() => {
    // Calculate overall QA score
    const calculateQAScore = () => {
      const securityWeight = 0.3;
      const performanceWeight = 0.25;
      const userAcceptanceWeight = 0.25;
      const complianceWeight = 0.2;

      const securityScore = qaMetrics.security.score;
      const performanceScore = qaMetrics.performance.lighthouse;
      const userAcceptanceScore = qaMetrics.userAcceptance.overallSatisfaction;
      
      const complianceScore = (qaMetrics.checklist.compliance.filter(item => 
        item.status === 'compliant').length / qaMetrics.checklist.compliance.length) * 100;

      const overall = Math.round(
        (securityScore * securityWeight) +
        (performanceScore * performanceWeight) +
        (userAcceptanceScore * userAcceptanceWeight) +
        (complianceScore * complianceWeight)
      );

      setOverallQAScore(overall);
    };

    calculateQAScore();
  }, [qaMetrics]);

  const runComprehensiveTest = async () => {
    setIsRunningTests(true);
    setTestProgress(0);

    // Simulate comprehensive testing process
    const testSteps = [
      { name: "Security Scan", duration: 2000 },
      { name: "Performance Test", duration: 3000 },
      { name: "Load Testing", duration: 4000 },
      { name: "User Journey Test", duration: 2500 },
      { name: "Compliance Check", duration: 1500 }
    ];

    let currentProgress = 0;
    const progressIncrement = 100 / testSteps.length;

    for (const step of testSteps) {
      await new Promise(resolve => setTimeout(resolve, step.duration));
      currentProgress += progressIncrement;
      setTestProgress(currentProgress);
    }

    // Update metrics with improved scores
    setQaMetrics(prev => ({
      ...prev,
      security: {
        ...prev.security,
        score: Math.min(100, prev.security.score + 2),
        lastScan: new Date()
      },
      performance: {
        ...prev.performance,
        lighthouse: Math.min(100, prev.performance.lighthouse + 1),
        lastTest: new Date()
      }
    }));

    setIsRunningTests(false);
    setTestProgress(100);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
      case 'compliant':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'in-progress':
      case 'partial':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'pending':
      case 'non-compliant':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
      case 'compliant':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in-progress':
      case 'partial':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'pending':
      case 'non-compliant':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500/20 text-red-300';
      case 'high':
        return 'bg-orange-500/20 text-orange-300';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'low':
        return 'bg-blue-500/20 text-blue-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* QA Overview */}
      <Card className="border-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Quality Assurance</h3>
                <p className="text-sm text-gray-300">Final system validation & launch preparation</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${overallQAScore >= 95 ? 'text-green-400' : overallQAScore >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                {overallQAScore}%
              </div>
              <div className="text-sm text-gray-400">Overall QA Score</div>
            </div>
          </div>
          
          {isRunningTests && (
            <div className="mt-4">
              <Progress value={testProgress} className="h-2" />
              <div className="text-xs text-gray-400 mt-1">Running comprehensive tests...</div>
            </div>
          )}
        </CardHeader>
      </Card>

      {/* QA Categories */}
      <Tabs defaultValue="security" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="security" className="px-6 py-3">
            <Lock className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="performance" className="px-6 py-3">
            <Zap className="w-4 h-4 mr-2" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="user-testing" className="px-6 py-3">
            <Users className="w-4 h-4 mr-2" />
            User Testing
          </TabsTrigger>
          <TabsTrigger value="checklist" className="px-6 py-3">
            <FileText className="w-4 h-4 mr-2" />
            Checklist
          </TabsTrigger>
        </TabsList>

        {/* Security Audit */}
        <TabsContent value="security" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-bold text-white">Vulnerability Scan</h3>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300">
                    Score: {qaMetrics.security.score}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-red-500/10 rounded">
                    <span className="text-white">Critical</span>
                    <Badge className="bg-red-500/20 text-red-300">{qaMetrics.security.vulnerabilities.critical}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-500/10 rounded">
                    <span className="text-white">High</span>
                    <Badge className="bg-orange-500/20 text-orange-300">{qaMetrics.security.vulnerabilities.high}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-500/10 rounded">
                    <span className="text-white">Medium</span>
                    <Badge className="bg-yellow-500/20 text-yellow-300">{qaMetrics.security.vulnerabilities.medium}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-500/10 rounded">
                    <span className="text-white">Low</span>
                    <Badge className="bg-blue-500/20 text-blue-300">{qaMetrics.security.vulnerabilities.low}</Badge>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-gray-400">
                  Last scan: {qaMetrics.security.lastScan.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-bold text-white">Penetration Test</h3>
                  </div>
                  <Badge className={qaMetrics.security.penetrationTest.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                    {qaMetrics.security.penetrationTest.completed ? 'Complete' : 'Pending'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Overall Score</span>
                      <span className="text-white font-bold">{qaMetrics.security.penetrationTest.score}%</span>
                    </div>
                    <Progress value={qaMetrics.security.penetrationTest.score} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issues Found</span>
                    <Badge className="bg-orange-500/20 text-orange-300">
                      {qaMetrics.security.penetrationTest.issues}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Performance Benchmarking */}
        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Performance Metrics</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Lighthouse Score</span>
                      <span className="text-white font-bold">{qaMetrics.performance.lighthouse}</span>
                    </div>
                    <Progress value={qaMetrics.performance.lighthouse} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Load Time</div>
                      <div className="text-white font-medium">{qaMetrics.performance.loadTime}s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Response Time</div>
                      <div className="text-white font-medium">{qaMetrics.performance.responseTime}ms</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Uptime</div>
                      <div className="text-white font-medium">{qaMetrics.performance.uptime}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Last Test</div>
                      <div className="text-white font-medium">{qaMetrics.performance.lastTest.toLocaleTimeString()}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Load Testing</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max Concurrent Users</span>
                    <span className="text-white font-bold">{qaMetrics.performance.loadTest.maxUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Response Time</span>
                    <span className="text-white font-bold">{qaMetrics.performance.loadTest.avgResponseTime}ms</span>
                  </div>
                  <Badge className={qaMetrics.performance.loadTest.completed ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                    {qaMetrics.performance.loadTest.completed ? 'Test Passed' : 'Test Pending'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* User Acceptance Testing */}
        <TabsContent value="user-testing" className="space-y-4">
          <Card className="border-0 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">User Acceptance Testing</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-500/20 text-blue-300">
                    {qaMetrics.userAcceptance.completionRate}% Complete
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300">
                    {qaMetrics.userAcceptance.overallSatisfaction}% Satisfaction
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qaMetrics.userAcceptance.personas.map((persona, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {persona.tested ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        )}
                        <span className="text-white font-medium">{persona.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {persona.tested && (
                          <Badge className="bg-green-500/20 text-green-300">
                            {persona.score}% Score
                          </Badge>
                        )}
                        <Badge className={persona.tested ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}>
                          {persona.tested ? 'Tested' : 'Pending'}
                        </Badge>
                      </div>
                    </div>
                    
                    {persona.feedback.length > 0 && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-400 mb-1">Feedback:</div>
                        <div className="flex flex-wrap gap-1">
                          {persona.feedback.map((feedback, feedbackIndex) => (
                            <Badge key={feedbackIndex} variant="outline" className="text-xs">
                              {feedback}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Launch Checklist */}
        <TabsContent value="checklist" className="space-y-4">
          <div className="grid gap-4">
            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Pre-Launch Checklist</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qaMetrics.checklist.prelaunch.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(item.status)}
                        <span className="text-white">{item.item}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Compliance Status</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qaMetrics.checklist.compliance.map((item, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(item.status)}
                          <span className="text-white font-medium">{item.requirement}</span>
                        </div>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* QA Actions */}
      <Card className="border-0 bg-white/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Quality Assurance Actions</h3>
              <p className="text-sm text-gray-400">
                {overallQAScore >= 95 
                  ? 'Excellent! All quality standards met. Ready for production.' 
                  : `QA Score: ${overallQAScore}%. Review failing tests and compliance issues.`
                }
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={runComprehensiveTest}
                disabled={isRunningTests}
                className="bg-blue-500 hover:bg-blue-600"
              >
                {isRunningTests ? (
                  <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isRunningTests ? 'Testing...' : 'Run Full QA Suite'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QualityAssuranceSystem;