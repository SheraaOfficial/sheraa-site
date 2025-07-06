import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Handshake, Globe } from "lucide-react";

interface CulturalProtocol {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface CulturalProtocolsTabProps {
  protocols: CulturalProtocol[];
}

const CulturalProtocolsTab: React.FC<CulturalProtocolsTabProps> = ({ protocols }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
          Cultural Business Integration
        </h3>
        <p className="text-gray-600">
          Navigate regional business culture and relationship-building protocols
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {protocols.map((protocol, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-4">
                  <protocol.icon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h4 className="text-lg font-bold text-[#1E293B] mb-2">
                  {protocol.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {protocol.description}
                </p>
                <ul className="space-y-2">
                  {protocol.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mr-3" />
                      {feature}
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

export default CulturalProtocolsTab;