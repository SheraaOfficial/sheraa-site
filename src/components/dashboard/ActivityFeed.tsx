
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BookOpen, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface DashboardActivity {
  id: string;
  type: 'application';
  title: string;
  description: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'in-progress';
}

interface ActivityFeedProps {
  recentActivity: DashboardActivity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ recentActivity }) => {
  const getStatusIcon = (status: DashboardActivity['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4 text-blue-600" />;
    }
  };

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.length > 0 ? recentActivity.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm">{activity.title}</h4>
                  {getStatusIcon(activity.status)}
                </div>
                <p className="text-sm text-gray-600 capitalize">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimeAgo(activity.timestamp)}
                </p>
              </div>
            </motion.div>
          )) : <p className="text-gray-500 text-sm">No recent activity to show.</p>}
        </div>
      </CardContent>
    </Card>
  );
};
