import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Lock, 
  Eye,
  AlertTriangle,
  CheckCircle2,
  Key,
  Globe,
  Smartphone,
  Clock,
  Activity,
  Ban,
  FileText
} from "lucide-react";

interface SecurityEvent {
  id: string;
  type: 'login_attempt' | 'api_access' | 'data_access' | 'permission_change' | 'suspicious_activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  description: string;
  userAgent: string;
  ipAddress: string;
  location: string;
  resolved: boolean;
}

interface SecurityMetrics {
  threatLevel: 'low' | 'medium' | 'high';
  blockedAttempts: number;
  activeUsers: number;
  dataEncryption: number;
  complianceScore: number;
  vulnerabilities: number;
}

interface ComplianceStatus {
  gdpr: { status: 'compliant' | 'partial' | 'non-compliant'; score: number };
  uaeDataLaw: { status: 'compliant' | 'partial' | 'non-compliant'; score: number };
  iso27001: { status: 'compliant' | 'partial' | 'non-compliant'; score: number };
  soc2: { status: 'compliant' | 'partial' | 'non-compliant'; score: number };
}

const AdvancedSecurityFeatures: React.FC = () => {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([
    {
      id: '1',
      type: 'login_attempt',
      severity: 'medium',
      timestamp: new Date(Date.now() - 300000),
      description: 'Multiple failed login attempts detected',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      ipAddress: '192.168.1.100',
      location: 'Dubai, UAE',
      resolved: false
    },
    {
      id: '2',
      type: 'api_access',
      severity: 'low',
      timestamp: new Date(Date.now() - 600000),
      description: 'Unusual API access pattern detected',
      userAgent: 'API Client v2.1',
      ipAddress: '10.0.0.50',
      location: 'Sharjah, UAE',
      resolved: true
    },
    {
      id: '3',
      type: 'suspicious_activity',
      severity: 'high',
      timestamp: new Date(Date.now() - 900000),
      description: 'Potential data scraping attempt blocked',
      userAgent: 'curl/7.68.0',
      ipAddress: '185.220.101.5',
      location: 'Unknown',
      resolved: true
    }
  ]);

  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics>({
    threatLevel: 'medium',
    blockedAttempts: 45,
    activeUsers: 128,
    dataEncryption: 99.8,
    complianceScore: 94,
    vulnerabilities: 2
  });

  const [complianceStatus, setComplianceStatus] = useState<ComplianceStatus>({
    gdpr: { status: 'compliant', score: 98 },
    uaeDataLaw: { status: 'compliant', score: 96 },
    iso27001: { status: 'partial', score: 87 },
    soc2: { status: 'compliant', score: 92 }
  });

  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [auditLogEnabled, setAuditLogEnabled] = useState(true);

  useEffect(() => {
    // Simulate real-time security monitoring
    const interval = setInterval(() => {
      // Update metrics
      setSecurityMetrics(prev => ({
        ...prev,
        blockedAttempts: prev.blockedAttempts + Math.floor(Math.random() * 3),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        vulnerabilities: Math.max(0, prev.vulnerabilities + Math.floor(Math.random() * 2) - 1)
      }));

      // Occasionally add new security events
      if (Math.random() < 0.3) {
        const newEvent: SecurityEvent = {
          id: Date.now().toString(),
          type: ['login_attempt', 'api_access', 'data_access'][Math.floor(Math.random() * 3)] as any,
          severity: ['low', 'medium'][Math.floor(Math.random() * 2)] as any,
          timestamp: new Date(),
          description: 'Automated security check completed',
          userAgent: 'Security Scanner v1.0',
          ipAddress: '127.0.0.1',
          location: 'System',
          resolved: true
        };

        setSecurityEvents(prev => [newEvent, ...prev.slice(0, 9)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getComplianceColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'partial': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'non-compliant': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  const handleResolveEvent = (eventId: string) => {
    setSecurityEvents(prev => prev.map(event => 
      event.id === eventId ? { ...event, resolved: true } : event
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Security Overview */}
      <Card className="border-0 bg-gradient-to-r from-red-500/20 to-orange-500/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Security Center</h3>
                <p className="text-sm text-gray-300">Advanced threat protection and compliance monitoring</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-xl font-bold ${getThreatLevelColor(securityMetrics.threatLevel)}`}>
                {securityMetrics.threatLevel.toUpperCase()}
              </div>
              <div className="text-sm text-gray-400">Threat Level</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Security Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card className="border-0 bg-red-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{securityMetrics.blockedAttempts}</div>
              <div className="text-sm text-gray-300">Blocked Attempts</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-blue-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{securityMetrics.activeUsers}</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-green-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{securityMetrics.dataEncryption}%</div>
              <div className="text-sm text-gray-300">Data Encrypted</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-purple-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{securityMetrics.complianceScore}%</div>
              <div className="text-sm text-gray-300">Compliance Score</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-orange-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{securityMetrics.vulnerabilities}</div>
              <div className="text-sm text-gray-300">Vulnerabilities</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-cyan-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Management Tabs */}
      <Tabs defaultValue="events" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="events" className="px-6 py-3">
            <Activity className="w-4 h-4 mr-2" />
            Events
          </TabsTrigger>
          <TabsTrigger value="compliance" className="px-6 py-3">
            <FileText className="w-4 h-4 mr-2" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="access" className="px-6 py-3">
            <Key className="w-4 h-4 mr-2" />
            Access Control
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="px-6 py-3">
            <Eye className="w-4 h-4 mr-2" />
            Monitoring
          </TabsTrigger>
        </TabsList>

        {/* Security Events */}
        <TabsContent value="events" className="space-y-4">
          <div className="space-y-3">
            {securityEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="cursor-pointer"
              >
                <Card className="border-0 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {event.resolved ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        )}
                        <div>
                          <h4 className="font-medium text-white">{event.description}</h4>
                          <p className="text-sm text-gray-400">
                            {event.location} • {formatTimestamp(event.timestamp)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getSeverityColor(event.severity)}>
                          {event.severity}
                        </Badge>
                        {!event.resolved && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleResolveEvent(event.id)}
                          >
                            Resolve
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">IP Address:</span>
                        <span className="text-white ml-2">{event.ipAddress}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className="text-white ml-2">{event.type.replace('_', ' ')}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">User Agent:</span>
                        <span className="text-white ml-2 truncate">{event.userAgent}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Compliance Status */}
        <TabsContent value="compliance" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(complianceStatus).map(([standard, status]) => (
              <Card key={standard} className="border-0 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <h4 className="font-bold text-white uppercase">{standard}</h4>
                    </div>
                    <Badge className={getComplianceColor(status.status)}>
                      {status.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Compliance Score</span>
                        <span className="text-white">{status.score}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                          style={{ width: `${status.score}%` }}
                        />
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Access Control */}
        <TabsContent value="access" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-0 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-white">Multi-Factor Auth</span>
                  </div>
                  <Badge className={mfaEnabled ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                    {mfaEnabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Enhanced security with SMS, email, or authenticator app verification
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Configure MFA
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-white">Data Encryption</span>
                  </div>
                  <Badge className={encryptionEnabled ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                    {encryptionEnabled ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  AES-256 encryption for data at rest and in transit
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Manage Keys
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-white">Audit Logging</span>
                  </div>
                  <Badge className={auditLogEnabled ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                    {auditLogEnabled ? 'Recording' : 'Paused'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Comprehensive logging of all system activities and access
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  View Logs
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Monitoring */}
        <TabsContent value="monitoring" className="space-y-4">
          <div className="text-center py-12">
            <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Advanced Security Monitoring
            </h3>
            <p className="text-gray-300 mb-6">
              Real-time threat detection, behavioral analysis, and automated response systems
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-red-500 hover:bg-red-600">
                <Ban className="w-4 h-4 mr-2" />
                Block IP
              </Button>
              <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
                <Activity className="w-4 h-4 mr-2" />
                View Live Feed
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default AdvancedSecurityFeatures;