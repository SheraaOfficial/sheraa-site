import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MarketIntel {
  category: string;
  insights: string[];
  lastUpdated: string;
}

interface MarketIntelligenceTabProps {
  intelligence: MarketIntel[];
}

const MarketIntelligenceTab: React.FC<MarketIntelligenceTabProps> = ({ intelligence }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
          Real-Time Market Intelligence
        </h3>
        <p className="text-gray-600">
          Stay ahead with live market trends, regulatory updates, and competitive analysis
        </p>
      </div>

      <div className="grid gap-6">
        {intelligence.map((intel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#1E293B]">
                    {intel.category}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    Updated {intel.lastUpdated}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {intel.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{insight}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketIntelligenceTab;