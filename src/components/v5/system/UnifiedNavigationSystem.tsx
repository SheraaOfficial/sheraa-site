import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Navigation, 
  ArrowLeft, 
  Home, 
  Zap,
  Database,
  Shield,
  Settings,
  ChevronRight,
  Star,
  Activity
} from "lucide-react";

interface NavigationContext {
  personaType: 'young' | 'adult' | 'general' | 'stakeholder' | 'system';
  currentPath: string;
  previousPath: string;
  sessionPath: string[];
  crossPersonaAccess: boolean;
}

interface UnifiedNavigationSystemProps {
  onNavigationChange?: (context: NavigationContext) => void;
}

const UnifiedNavigationSystem: React.FC<UnifiedNavigationSystemProps> = ({ 
  onNavigationChange 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [navigationContext, setNavigationContext] = useState<NavigationContext>({
    personaType: 'general',
    currentPath: location.pathname,
    previousPath: '/',
    sessionPath: [location.pathname],
    crossPersonaAccess: false
  });

  const [showQuickAccess, setShowQuickAccess] = useState(false);
  const [systemHealth, setSystemHealth] = useState(98.7);

  // Quick access links for cross-persona navigation
  const quickAccessLinks = [
    {
      path: "/v3",
      label: "Ecosystem Hub",
      icon: Home,
      description: "Main persona selection",
      category: "core"
    },
    {
      path: "/v3/young",
      label: "Student Portal",
      icon: Star,
      description: "Youth innovation programs",
      category: "persona"
    },
    {
      path: "/v3/entrepreneurs",
      label: "Startup Hub",
      icon: Zap,
      description: "Founder resources & programs",
      category: "persona"
    },
    {
      path: "/v3/stakeholders",
      label: "Investor Portal",
      icon: Database,
      description: "Deal flow & analytics",
      category: "persona"
    },
    {
      path: "/v3/advanced-dashboard",
      label: "System Dashboard",
      icon: Activity,
      description: "Advanced system monitoring",
      category: "system"
    }
  ];

  useEffect(() => {
    // Detect persona type from URL
    const detectPersonaType = (path: string) => {
      if (path.includes('/v3/young')) return 'young';
      if (path.includes('/v3/entrepreneurs')) return 'adult';
      if (path.includes('/v3/stakeholders')) return 'stakeholder';
      if (path.includes('/v3/advanced-dashboard')) return 'system';
      return 'general';
    };

    const newContext: NavigationContext = {
      personaType: detectPersonaType(location.pathname),
      currentPath: location.pathname,
      previousPath: navigationContext.currentPath,
      sessionPath: [...navigationContext.sessionPath, location.pathname],
      crossPersonaAccess: navigationContext.sessionPath.length > 1
    };

    setNavigationContext(newContext);
    onNavigationChange?.(newContext);

    // Store navigation history
    localStorage.setItem('navigation_history', JSON.stringify(newContext.sessionPath));
    localStorage.setItem('current_persona', newContext.personaType);
  }, [location.pathname]);

  const handleSmartNavigation = (targetPath: string) => {
    // Enhanced navigation with context preservation
    const navigationData = {
      from: navigationContext.currentPath,
      to: targetPath,
      persona: navigationContext.personaType,
      timestamp: new Date().toISOString(),
      crossPersona: !targetPath.includes(navigationContext.personaType)
    };

    // Track navigation event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'navigate', {
        event_category: 'Navigation',
        event_label: `${navigationData.from} -> ${navigationData.to}`,
        custom_map: { cross_persona: navigationData.crossPersona }
      });
    }

    // Store navigation context
    sessionStorage.setItem('navigation_context', JSON.stringify(navigationData));
    
    navigate(targetPath);
  };

  const getPersonaColor = (personaType: string) => {
    switch (personaType) {
      case 'young': return 'from-green-500 to-teal-600';
      case 'adult': return 'from-blue-500 to-purple-600';
      case 'stakeholder': return 'from-amber-500 to-yellow-600';
      case 'system': return 'from-red-500 to-pink-600';
      default: return 'from-orange-500 to-red-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <Card className="border-0 bg-black/20 backdrop-blur-xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Navigation Context Display */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Navigation className="w-5 h-5 text-white" />
                <div className="text-sm">
                  <div className="text-white font-medium">
                    {navigationContext.personaType.charAt(0).toUpperCase() + 
                     navigationContext.personaType.slice(1)} Portal
                  </div>
                  <div className="text-gray-300 text-xs">
                    {navigationContext.crossPersonaAccess ? 'Cross-Persona Mode' : 'Single Persona'}
                  </div>
                </div>
              </div>

              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPersonaColor(navigationContext.personaType)}`} />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3">
              {/* Back Button */}
              {navigationContext.sessionPath.length > 1 && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}

              {/* System Health Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-300">{systemHealth}%</span>
              </div>

              {/* Quick Access Toggle */}
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowQuickAccess(!showQuickAccess)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Access Panel */}
          {showQuickAccess && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {quickAccessLinks.map((link) => (
                  <motion.button
                    key={link.path}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSmartNavigation(link.path)}
                    className={`p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left transition-all ${
                      navigationContext.currentPath === link.path ? 'ring-2 ring-white/30' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <link.icon className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">{link.label}</span>
                    </div>
                    <div className="text-xs text-gray-300">{link.description}</div>
                    <Badge className="mt-1 text-xs bg-white/10 text-white border-white/20">
                      {link.category}
                    </Badge>
                  </motion.button>
                ))}
              </div>

              {/* Session Statistics */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <div>
                  Session: {navigationContext.sessionPath.length} pages visited
                </div>
                <div className="flex items-center space-x-2">
                  <span>Cross-persona access:</span>
                  <Badge className={navigationContext.crossPersonaAccess ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'}>
                    {navigationContext.crossPersonaAccess ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UnifiedNavigationSystem;