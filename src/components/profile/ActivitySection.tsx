
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ActivitySection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <p className="text-gray-500">No recent activity</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySection;
