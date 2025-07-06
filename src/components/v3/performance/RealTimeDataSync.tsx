import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Wifi, 
  WifiOff, 
  Database, 
  Clock,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

interface DataSyncStatus {
  startups: { status: 'synced' | 'syncing' | 'error'; lastUpdate: Date; count: number };
  investors: { status: 'synced' | 'syncing' | 'error'; lastUpdate: Date; count: number };
  events: { status: 'synced' | 'syncing' | 'error'; lastUpdate: Date; count: number };
  applications: { status: 'synced' | 'syncing' | 'error'; lastUpdate: Date; count: number };
}

interface RealTimeDataSyncProps {
  isConnected: boolean;
  onConnectionChange: (connected: boolean) => void;
}

const RealTimeDataSync: React.FC<RealTimeDataSyncProps> = ({ 
  isConnected, 
  onConnectionChange 
}) => {
  const [syncStatus, setSyncStatus] = useState<DataSyncStatus>({
    startups: { status: 'synced', lastUpdate: new Date(), count: 180 },
    investors: { status: 'synced', lastUpdate: new Date(), count: 45 },
    events: { status: 'synced', lastUpdate: new Date(), count: 12 },
    applications: { status: 'synced', lastUpdate: new Date(), count: 234 }
  });

  const [networkLatency, setNetworkLatency] = useState<number>(0);
  const [dataFreshness, setDataFreshness] = useState<'fresh' | 'stale' | 'offline'>('fresh');

  useEffect(() => {
    // Simulate real-time data synchronization
    const syncInterval = setInterval(() => {
      if (isConnected) {
        // Simulate random updates to different data types
        const dataTypes = ['startups', 'investors', 'events', 'applications'] as const;
        const randomType = dataTypes[Math.floor(Math.random() * dataTypes.length)];
        
        setSyncStatus(prev => ({
          ...prev,
          [randomType]: {
            ...prev[randomType],
            status: Math.random() > 0.95 ? 'error' : 'synced',
            lastUpdate: new Date(),
            count: prev[randomType].count + (Math.random() > 0.7 ? 1 : 0)
          }
        }));

        // Simulate network latency
        setNetworkLatency(Math.floor(Math.random() * 200) + 50);
        setDataFreshness('fresh');
      } else {
        setDataFreshness('offline');
      }
    }, 3000);

    // Check data freshness
    const freshnessCheck = setInterval(() => {
      const now = new Date();
      const oldestUpdate = Math.min(
        ...Object.values(syncStatus).map(status => now.getTime() - status.lastUpdate.getTime())
      );
      
      if (oldestUpdate > 300000) { // 5 minutes
        setDataFreshness('stale');
      }
    }, 60000);

    return () => {
      clearInterval(syncInterval);
      clearInterval(freshnessCheck);
    };
  }, [isConnected, syncStatus]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'synced': return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'syncing': return <Activity className="w-4 h-4 text-yellow-400 animate-pulse" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return <Database className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'synced': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'syncing': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'error': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const formatLastUpdate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Connection Status */}
      <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isConnected ? (
                <Wifi className="w-5 h-5 text-green-400" />
              ) : (
                <WifiOff className="w-5 h-5 text-red-400" />
              )}
              <div>
                <p className="font-medium text-white">
                  {isConnected ? 'Connected' : 'Offline'}
                </p>
                <p className="text-sm text-gray-300">
                  {isConnected ? `Latency: ${networkLatency}ms` : 'Check connection'}
                </p>
              </div>
            </div>
            <Badge className={getStatusColor(dataFreshness)}>
              {dataFreshness}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Data Sync Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(syncStatus).map(([type, status]) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="border-0 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  {getStatusIcon(status.status)}
                  <Badge variant="outline" className="text-xs">
                    {status.count}
                  </Badge>
                </div>
                <div>
                  <p className="font-medium text-white capitalize text-sm">
                    {type}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatLastUpdate(status.lastUpdate)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Sync Performance Metrics */}
      <Card className="border-0 bg-white/5">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="font-medium text-white">Sync Performance</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-white">{networkLatency}ms</div>
              <div className="text-xs text-gray-400">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">99.8%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">1.2MB</div>
              <div className="text-xs text-gray-400">Cache Size</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RealTimeDataSync;