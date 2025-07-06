import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, ArrowRight, Zap } from "lucide-react";

interface UserProfile {
  interests: string[];
  sector?: string;
  stage?: string;
}

interface CrossPersonaIntelligenceProps {
  currentPersona: string;
  userProfile: UserProfile;
}

const CrossPersonaIntelligence: React.FC<CrossPersonaIntelligenceProps> = ({ 
  currentPersona,
  userProfile 
}) => {
  const connections = [
    {
      from: "Students",
      to: "Entrepreneurs", 
      connection: "Graduate from Startup Dojo to S3 Incubator",
      strength: 85
    },
    {
      from: "Entrepreneurs",
      to: "Community",
      connection: "Join ecosystem as mentor after success",
      strength: 70
    },
    {
      from: "Community",
      to: "Stakeholders",
      connection: "Discover investment opportunities",
      strength: 60
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="text-center">
        <Badge className="bg-[hsl(var(--sheraa-accent))/20] text-[hsl(var(--sheraa-accent))] border-[hsl(var(--sheraa-accent))/30] mb-4">
          <Network className="w-4 h-4 mr-2" />
          Cross-Persona Intelligence
        </Badge>
        <h3 className="text-2xl font-bold text-white mb-2">
          Discover Your Ecosystem Connections
        </h3>
        <p className="text-white/60">
          See how different journeys interconnect within SHERAA
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {connections.map((connection, index) => (
          <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-white/80">
                  {connection.from}
                </span>
                <ArrowRight className="w-4 h-4 text-white/60" />
                <span className="text-sm font-medium text-white/80">
                  {connection.to}
                </span>
              </div>
              
              <p className="text-white/70 text-sm mb-4">
                {connection.connection}
              </p>
              
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-[hsl(var(--sheraa-primary))] mr-2" />
                <span className="text-sm font-bold text-[hsl(var(--sheraa-primary))]">
                  {connection.strength}% Success Rate
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default CrossPersonaIntelligence;