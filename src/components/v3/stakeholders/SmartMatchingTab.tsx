import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ArrowRight } from "lucide-react";

interface SmartMatch {
  id: number;
  startup: string;
  sector: string;
  matchScore: number;
  investmentRange: string;
  reason: string;
  traction: string;
  location: string;
  nextMeeting: string;
}

interface SmartMatchingTabProps {
  matches: SmartMatch[];
}

const SmartMatchingTab: React.FC<SmartMatchingTabProps> = ({ matches }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
          AI-Powered Deal Matching
        </h3>
        <p className="text-gray-600">
          Advanced algorithms match your investment thesis with high-potential startups
        </p>
      </div>

      <div className="grid gap-6">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B]">
                        {match.startup}
                      </h4>
                      <p className="text-sm text-gray-600">{match.sector}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-700 mb-2">
                      {match.matchScore}% Match
                    </Badge>
                    <p className="text-lg font-bold text-[#1E293B]">
                      {match.investmentRange}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Match Reason</p>
                    <p className="font-medium text-sm">{match.reason}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Traction</p>
                    <p className="font-medium text-sm">{match.traction}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-sm">{match.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#F59E0B]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{match.nextMeeting}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Schedule Meeting
                    </Button>
                    <Button size="sm" className="bg-[#1E293B] hover:bg-[#1E293B]/90">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartMatchingTab;