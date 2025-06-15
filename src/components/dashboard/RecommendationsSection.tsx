
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Award, Star, ArrowRight } from 'lucide-react';

interface Recommendation {
  id: string;
  type: 'program' | 'event' | 'resource' | 'connection';
  title: string;
  description: string;
  relevance: number;
  actionUrl: string;
  actionText: string;
}

interface UserProgress {
  profileCompletion: number;
  applicationsSubmitted: number;
  eventsAttended: number;
  networkConnections: number;
  achievementsUnlocked: string[];
}

interface RecommendationsSectionProps {
  mockRecommendations: Recommendation[];
  userProgress: UserProgress;
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ 
  mockRecommendations, 
  userProgress 
}) => {
  return (
    <div className="space-y-6">
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Recommended for You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRecommendations.slice(0, 3).map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-medium text-sm line-clamp-1">{rec.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {rec.relevance}%
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {rec.description}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={rec.actionUrl}>
                    {rec.actionText}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userProgress.achievementsUnlocked.slice(0, 4).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-2 rounded-lg bg-yellow-50 border border-yellow-200"
              >
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-yellow-800">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
