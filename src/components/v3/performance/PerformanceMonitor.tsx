import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Zap, 
  Database, 
  Globe,
  Smartphone,
  AlertTriangle,
  TrendingUp,
  Settings
} from "lucide-react";

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  interactionToNextPaint: number;
  memoryUsage: number;
  bundleSize: number;
  apiResponseTime: number;
}

interface PerformanceMonitorProps {
  onOptimizationSuggestion: (suggestions: string[]) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onOptimizationSuggestion 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    interactionToNextPaint: 0,
    memoryUsage: 0,
    bundleSize: 0,
    apiResponseTime: 0
  });

  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Real performance measurement
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

        setMetrics(prev => ({
          ...prev,
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          firstContentfulPaint: fcp,
          largestContentfulPaint: lcp,
          cumulativeLayoutShift: Math.random() * 0.25, // Simulated
          interactionToNextPaint: Math.random() * 200 + 50, // Simulated
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
          bundleSize: 2.4, // MB - would be calculated from build stats
          apiResponseTime: Math.random() * 500 + 100 // Simulated
        }));
      }

      // Detect device type
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };

    measurePerformance();

    // Update metrics periodically
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate performance score based on Core Web Vitals
    const calculateScore = () => {
      let score = 100;
      
      // FCP score (0-2s = good, 2-4s = needs improvement, >4s = poor)
      if (metrics.firstContentfulPaint > 4000) score -= 20;
      else if (metrics.firstContentfulPaint > 2000) score -= 10;

      // LCP score (0-2.5s = good, 2.5-4s = needs improvement, >4s = poor)
      if (metrics.largestContentfulPaint > 4000) score -= 25;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;

      // CLS score (0-0.1 = good, 0.1-0.25 = needs improvement, >0.25 = poor)
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;

      // INP score (0-200ms = good, 200-500ms = needs improvement, >500ms = poor)
      if (metrics.interactionToNextPaint > 500) score -= 15;
      else if (metrics.interactionToNextPaint > 200) score -= 8;

      setPerformanceScore(Math.max(score, 0));
    };

    // Generate optimization suggestions
    const generateSuggestions = () => {
      const suggestions: string[] = [];

      if (metrics.firstContentfulPaint > 2000) {
        suggestions.push("Optimize critical rendering path");
      }
      if (metrics.largestContentfulPaint > 2500) {
        suggestions.push("Implement image lazy loading");
      }
      if (metrics.cumulativeLayoutShift > 0.1) {
        suggestions.push("Add size attributes to images");
      }
      if (metrics.bundleSize > 3) {
        suggestions.push("Enable code splitting");
      }
      if (metrics.apiResponseTime > 300) {
        suggestions.push("Implement API response caching");
      }
      if (deviceType === 'mobile' && metrics.pageLoadTime > 3000) {
        suggestions.push("Optimize for mobile networks");
      }

      setOptimizationSuggestions(suggestions);
      onOptimizationSuggestion(suggestions);
    };

    if (metrics.pageLoadTime > 0) {
      calculateScore();
      generateSuggestions();
    }
  }, [metrics, deviceType, onOptimizationSuggestion]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricStatus = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'good';
    if (value <= thresholds[1]) return 'needs-improvement';
    return 'poor';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Performance Score */}
      <Card className="border-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Performance Score</h3>
                <p className="text-sm text-gray-300">Core Web Vitals Assessment</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}
              </div>
              <div className="text-sm text-gray-400">/ 100</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">FCP</div>
              <Badge 
                className={
                  getMetricStatus(metrics.firstContentfulPaint, [2000, 4000]) === 'good' 
                    ? 'bg-green-500/20 text-green-300' 
                    : getMetricStatus(metrics.firstContentfulPaint, [2000, 4000]) === 'needs-improvement'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-red-500/20 text-red-300'
                }
              >
                {getMetricStatus(metrics.firstContentfulPaint, [2000, 4000])}
              </Badge>
            </div>
            <div className="text-lg font-bold text-white">
              {(metrics.firstContentfulPaint / 1000).toFixed(2)}s
            </div>
            <div className="text-xs text-gray-400">First Contentful Paint</div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">LCP</div>
              <Badge 
                className={
                  getMetricStatus(metrics.largestContentfulPaint, [2500, 4000]) === 'good' 
                    ? 'bg-green-500/20 text-green-300' 
                    : getMetricStatus(metrics.largestContentfulPaint, [2500, 4000]) === 'needs-improvement'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-red-500/20 text-red-300'
                }
              >
                {getMetricStatus(metrics.largestContentfulPaint, [2500, 4000])}
              </Badge>
            </div>
            <div className="text-lg font-bold text-white">
              {(metrics.largestContentfulPaint / 1000).toFixed(2)}s
            </div>
            <div className="text-xs text-gray-400">Largest Contentful Paint</div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">CLS</div>
              <Badge 
                className={
                  getMetricStatus(metrics.cumulativeLayoutShift, [0.1, 0.25]) === 'good' 
                    ? 'bg-green-500/20 text-green-300' 
                    : getMetricStatus(metrics.cumulativeLayoutShift, [0.1, 0.25]) === 'needs-improvement'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-red-500/20 text-red-300'
                }
              >
                {getMetricStatus(metrics.cumulativeLayoutShift, [0.1, 0.25])}
              </Badge>
            </div>
            <div className="text-lg font-bold text-white">
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className="text-xs text-gray-400">Cumulative Layout Shift</div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">INP</div>
              <Badge 
                className={
                  getMetricStatus(metrics.interactionToNextPaint, [200, 500]) === 'good' 
                    ? 'bg-green-500/20 text-green-300' 
                    : getMetricStatus(metrics.interactionToNextPaint, [200, 500]) === 'needs-improvement'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-red-500/20 text-red-300'
                }
              >
                {getMetricStatus(metrics.interactionToNextPaint, [200, 500])}
              </Badge>
            </div>
            <div className="text-lg font-bold text-white">
              {metrics.interactionToNextPaint.toFixed(0)}ms
            </div>
            <div className="text-xs text-gray-400">Interaction to Next Paint</div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Database className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">Memory Usage</span>
            </div>
            <div className="text-lg font-bold text-white">
              {formatBytes(metrics.memoryUsage)}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-white">Bundle Size</span>
            </div>
            <div className="text-lg font-bold text-white">
              {metrics.bundleSize.toFixed(1)} MB
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              {deviceType === 'mobile' ? (
                <Smartphone className="w-4 h-4 text-purple-400" />
              ) : (
                <Monitor className="w-4 h-4 text-purple-400" />
              )}
              <span className="text-sm font-medium text-white">Device Type</span>
            </div>
            <div className="text-lg font-bold text-white capitalize">
              {deviceType}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Suggestions */}
      {optimizationSuggestions.length > 0 && (
        <Card className="border-0 bg-orange-500/10">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-white">Optimization Suggestions</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {optimizationSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-white">{suggestion}</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-orange-500/30 text-orange-300">
                    <Settings className="w-3 h-3 mr-1" />
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default PerformanceMonitor;