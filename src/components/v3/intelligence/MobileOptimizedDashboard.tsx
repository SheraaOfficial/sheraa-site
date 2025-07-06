import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Tablet, 
  Monitor,
  Globe,
  MessageSquare,
  Calendar,
  TrendingUp,
  Users,
  Phone,
  Mail
} from "lucide-react";

interface MobileOptimizedDashboardProps {
  deviceType: 'mobile' | 'tablet' | 'desktop';
  isUAE: boolean;
}

const MobileOptimizedDashboard: React.FC<MobileOptimizedDashboardProps> = ({ 
  deviceType, 
  isUAE 
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const regionalFeatures = {
    UAE: {
      whatsappIntegration: true,
      arabicSupport: true,
      governmentLinks: true,
      localEvents: true,
      currency: 'AED',
      businessHours: '8AM-6PM GST'
    },
    International: {
      whatsappIntegration: false,
      arabicSupport: false,
      governmentLinks: false,
      localEvents: false,
      currency: 'USD',
      businessHours: 'Varies by timezone'
    }
  };

  const currentRegion = isUAE ? 'UAE' : 'International';
  const features = regionalFeatures[currentRegion];

  const deviceOptimizations = {
    mobile: {
      layout: 'single-column',
      touchTargets: 'large',
      navigation: 'bottom-tabs',
      features: ['swipe-gestures', 'voice-input', 'offline-mode']
    },
    tablet: {
      layout: 'two-column',
      touchTargets: 'medium',
      navigation: 'side-tabs',
      features: ['split-view', 'drag-drop', 'multi-touch']
    },
    desktop: {
      layout: 'multi-column',
      touchTargets: 'small',
      navigation: 'top-tabs',
      features: ['keyboard-shortcuts', 'multiple-windows', 'advanced-filters']
    }
  };

  const currentDevice = deviceOptimizations[deviceType];

  return (
    <div className="space-y-6">
      {/* Device & Region Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
      >
        <div className="flex items-center space-x-3">
          {deviceType === 'mobile' && <Smartphone className="w-5 h-5 text-blue-400" />}
          {deviceType === 'tablet' && <Tablet className="w-5 h-5 text-blue-400" />}
          {deviceType === 'desktop' && <Monitor className="w-5 h-5 text-blue-400" />}
          <div>
            <p className="text-white font-medium">
              {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} Experience
            </p>
            <p className="text-gray-300 text-sm">
              Optimized for {currentRegion} users
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-gray-300" />
          <span className="text-white text-sm">{currentRegion}</span>
        </div>
      </motion.div>

      {/* Mobile-First Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className={`grid grid-cols-4 w-full ${
          deviceType === 'mobile' ? 'h-12' : 'h-10'
        }`}>
          <TabsTrigger value="overview" className={deviceType === 'mobile' ? 'text-xs' : 'text-sm'}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {deviceType === 'mobile' ? 'Stats' : 'Overview'}
          </TabsTrigger>
          <TabsTrigger value="connections" className={deviceType === 'mobile' ? 'text-xs' : 'text-sm'}>
            <Users className="w-4 h-4 mr-1" />
            {deviceType === 'mobile' ? 'Connect' : 'Network'}
          </TabsTrigger>
          <TabsTrigger value="communication" className={deviceType === 'mobile' ? 'text-xs' : 'text-sm'}>
            <MessageSquare className="w-4 h-4 mr-1" />
            {deviceType === 'mobile' ? 'Chat' : 'Messages'}
          </TabsTrigger>
          <TabsTrigger value="calendar" className={deviceType === 'mobile' ? 'text-xs' : 'text-sm'}>
            <Calendar className="w-4 h-4 mr-1" />
            {deviceType === 'mobile' ? 'Meet' : 'Schedule'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className={`grid gap-4 ${
            deviceType === 'mobile' ? 'grid-cols-1' : 
            deviceType === 'tablet' ? 'grid-cols-2' : 'grid-cols-3'
          }`}>
            {/* Key Metrics */}
            <Card className="border-0 bg-gradient-to-br from-green-500/20 to-blue-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">94%</div>
                  <div className="text-sm text-gray-300">Match Score</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-sm text-gray-300">Active Deals</div>
                </div>
              </CardContent>
            </Card>

            {deviceType !== 'mobile' && (
              <Card className="border-0 bg-gradient-to-br from-orange-500/20 to-red-500/20">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">${features.currency === 'AED' ? '12.5M' : '3.4M'}</div>
                    <div className="text-sm text-gray-300">Portfolio Value</div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Regional Features */}
          {isUAE && (
            <Card className="border-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20">
              <CardHeader className="pb-2">
                <h3 className="text-lg font-bold text-white">UAE Business Hub</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">WhatsApp Business</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">Arabic Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <div className="text-center py-8">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Smart Networking
            </h3>
            <p className="text-gray-300 mb-6">
              AI-powered connections optimized for {deviceType} experience
            </p>
            <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
              Find Connections
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <div className="space-y-4">
            {/* Regional Communication Options */}
            {isUAE ? (
              <>
                <Card className="border-0 bg-green-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-medium text-white">WhatsApp Business</p>
                          <p className="text-sm text-gray-300">Preferred in UAE</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-blue-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-blue-400" />
                        <div>
                          <p className="font-medium text-white">Voice Call</p>
                          <p className="text-sm text-gray-300">Business hours: {features.businessHours}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-0 bg-blue-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-blue-400" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-sm text-gray-300">Professional communication</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="text-center py-8">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Schedule Meetings
            </h3>
            <p className="text-gray-300 mb-6">
              Time zone: {isUAE ? 'GST (GMT+4)' : 'Auto-detect'}
            </p>
            <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
              Book Meeting
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Device-Specific Features */}
      <Card className="border-0 bg-white/5">
        <CardHeader>
          <h3 className="text-lg font-bold text-white">
            {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} Features
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {currentDevice.features.map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileOptimizedDashboard;