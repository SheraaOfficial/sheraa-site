
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { formatDistanceToNow } from "date-fns";
import { CalendarClock, MessageSquare, Heart } from "lucide-react";

interface ActivitySectionProps {
  userId: string | number;
}

const ActivitySection = ({ userId }: ActivitySectionProps) => {
  const [users] = useLocalStorage<any[]>("users", []);
  
  // Find current user
  const currentUser = users.find(u => u.id === userId);
  
  // Get recent activities - comments, likes, etc.
  // This is a placeholder that could be expanded with more activity types
  const getRecentActivities = () => {
    if (!currentUser) return [];
    
    const activities = [];
    
    // Add post creation activity
    if (currentUser.posts && currentUser.posts.length > 0) {
      const recentPosts = [...currentUser.posts]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3);
      
      recentPosts.forEach(post => {
        activities.push({
          type: 'post',
          content: `Created a new post: "${post.content.substring(0, 40)}${post.content.length > 40 ? '...' : ''}"`,
          timestamp: new Date(post.createdAt),
          icon: <MessageSquare className="h-4 w-4" />
        });
      });
    }
    
    return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 5);
  };
  
  const activities = getRecentActivities();
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="p-2 bg-sheraa-primary/10 rounded-full text-sheraa-primary">
                  {activity.icon || <CalendarClock className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm text-gray-700">{activity.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No recent activity</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySection;
