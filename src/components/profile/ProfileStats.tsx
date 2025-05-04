
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileStatsProps {
  posts: number;
  connections: number;
  projects: number;
}

const ProfileStats = ({ posts, connections, projects }: ProfileStatsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Profile Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-sheraa-primary">
              {posts}
            </p>
            <p className="text-sm text-gray-600">Posts</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-sheraa-primary">
              {connections}
            </p>
            <p className="text-sm text-gray-600">Connections</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-sheraa-primary">
              {projects}
            </p>
            <p className="text-sm text-gray-600">Projects</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-sheraa-primary">
              {Math.floor(Math.random() * 100) + 1}
            </p>
            <p className="text-sm text-gray-600">Profile Views</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileStats;
