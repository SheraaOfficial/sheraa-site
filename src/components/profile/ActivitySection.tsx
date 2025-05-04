
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivitySectionProps {
  userId: string | number;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ userId }) => {
  // This is a placeholder component
  return (
    <div className="space-y-4">
      <Card>
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
