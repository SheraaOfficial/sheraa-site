
import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface ActivitySectionProps {
  userId: string | number;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ userId }) => {
  const isMobile = useIsMobile();
  
  // Memoize component to prevent unnecessary re-renders
  const cardStyle = useMemo(() => ({
    position: 'relative' as const, // Fix framer-motion positioning warning
    width: isMobile ? '100%' : undefined
  }), [isMobile]);
  
  return (
    <div className="space-y-4" style={{ position: 'relative' }}>
      <Card style={cardStyle}>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No recent activity to display for user {userId}.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitySection;
