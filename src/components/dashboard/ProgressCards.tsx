
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { User, BookOpen, Calendar, Users } from 'lucide-react';

interface UserProgress {
  profileCompletion: number;
  applicationsSubmitted: number;
  eventsAttended: number;
  networkConnections: number;
  achievementsUnlocked: string[];
}

interface ProgressCardsProps {
  userProgress: UserProgress;
}

export const ProgressCards: React.FC<ProgressCardsProps> = ({ userProgress }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-sheraa-primary/10 p-2 rounded-full">
                <User className="w-5 h-5 text-sheraa-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Profile</p>
                <p className="font-semibold">{userProgress.profileCompletion}% Complete</p>
              </div>
            </div>
            <Progress value={userProgress.profileCompletion} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-2xl font-bold">{userProgress.applicationsSubmitted}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Events</p>
                <p className="text-2xl font-bold">{userProgress.eventsAttended}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Connections</p>
                <p className="text-2xl font-bold">{userProgress.networkConnections}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
