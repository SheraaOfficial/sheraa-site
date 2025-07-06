import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain,
  TrendingUp,
  Shield,
  Handshake,
  Globe,
  DollarSign,
  FileText,
  ArrowRight
} from "lucide-react";
import SmartMatchingTab from "./SmartMatchingTab";
import CulturalProtocolsTab from "./CulturalProtocolsTab";
import MarketIntelligenceTab from "./MarketIntelligenceTab";

const AdvancedStakeholderFeatures: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const smartMatches = [
    {
      id: 1,
      startup: "SustainaTech MENA",
      sector: "Sustainability",
      matchScore: 94,
      investmentRange: "$1.5M - $3M",
      reason: "Aligned with your sustainability portfolio focus",
      traction: "500K ARR, 40% MoM growth",
      location: "Dubai, expanding to Sharjah",
      nextMeeting: "Board presentation scheduled"
    },
    {
      id: 2,
      startup: "EduBridge Arabia",
      sector: "EdTech",
      matchScore: 89,
      investmentRange: "$800K - $1.2M",
      reason: "Strong MENA market penetration strategy",
      traction: "10K+ active users, B2B2C model",
      location: "Sharjah-based, AUS partnership",
      nextMeeting: "Due diligence review pending"
    },
    {
      id: 3,
      startup: "HealthLink GCC",
      sector: "HealthTech",
      matchScore: 87,
      investmentRange: "$2M - $4M", 
      reason: "Government healthcare digitalization alignment",
      traction: "3 hospital partnerships, regulatory approval",
      location: "Multi-emirate expansion",
      nextMeeting: "Regulatory compliance assessment"
    }
  ];

  const culturalProtocols = [
    {
      title: "Wasta Network Integration",
      description: "Leverage personal connections and referral systems",
      icon: Handshake,
      features: [
        "Family business relationship mapping",
        "Government contact facilitation", 
        "Cross-generational partnership building",
        "Cultural bridge consulting"
      ]
    },
    {
      title: "Islamic Finance Compliance",
      description: "Sharia-compliant investment structures and guidance",
      icon: Shield,
      features: [
        "Mudarabah partnership models",
        "Sukuk investment opportunities",
        "Halal sector focus (food, finance, lifestyle)",
        "Islamic scholars advisory panel"
      ]
    },
    {
      title: "GCC Market Facilitation", 
      description: "Cross-border expansion and regional partnerships",
      icon: Globe,
      features: [
        "Saudi Vision 2030 alignment",
        "Kuwait investment authority connections",
        "Bahrain FinTech hub partnerships",
        "Oman diversification opportunities"
      ]
    }
  ];

  const marketIntelligence = [
    {
      category: "MENA Startup Trends",
      insights: [
        "FinTech sector leads with 34% of total funding in Q4 2024",
        "Sustainability startups show 180% YoY growth",
        "B2B SaaS adoption accelerating across GCC markets",
        "Government digital transformation creating new opportunities"
      ],
      lastUpdated: "2 hours ago"
    },
    {
      category: "Regulatory Updates",
      insights: [
        "UAE announces new AI governance framework",
        "Sharjah launches SME digital transformation grants",
        "Central Bank expands FinTech regulatory sandbox",
        "New foreign ownership laws effective Q1 2025"
      ],
      lastUpdated: "4 hours ago"
    },
    {
      category: "Competitive Intelligence",
      insights: [
        "Regional VCs deployed $2.8B in 2024 (15% increase)",
        "Corporate venture arms increasingly active",
        "Government funds allocating 25% to emerging tech",
        "International investors showing renewed MENA interest"
      ],
      lastUpdated: "6 hours ago"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4"
          >
            Advanced Intelligence & Cultural Integration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            AI-powered deal matching, cultural business protocols, and real-time 
            market intelligence for sophisticated stakeholders.
          </motion.p>
        </div>

        {/* Advanced Features Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="smart-matching" className="space-y-8">
            <TabsList className="grid grid-cols-4 w-fit mx-auto">
              <TabsTrigger value="smart-matching" className="px-6 py-3">
                <Brain className="w-4 h-4 mr-2" />
                Smart Matching
              </TabsTrigger>
              <TabsTrigger value="cultural-protocols" className="px-6 py-3">
                <Handshake className="w-4 h-4 mr-2" />
                Cultural Protocols
              </TabsTrigger>
              <TabsTrigger value="market-intelligence" className="px-6 py-3">
                <TrendingUp className="w-4 h-4 mr-2" />
                Market Intel
              </TabsTrigger>
              <TabsTrigger value="portfolio-analytics" className="px-6 py-3">
                <DollarSign className="w-4 h-4 mr-2" />
                Portfolio Analytics
              </TabsTrigger>
            </TabsList>

            {/* Smart Matching */}
            <TabsContent value="smart-matching" className="space-y-6">
              <SmartMatchingTab matches={smartMatches} />
            </TabsContent>

            {/* Cultural Protocols */}
            <TabsContent value="cultural-protocols" className="space-y-6">
              <CulturalProtocolsTab protocols={culturalProtocols} />
            </TabsContent>

            {/* Market Intelligence */}
            <TabsContent value="market-intelligence" className="space-y-6">
              <MarketIntelligenceTab intelligence={marketIntelligence} />
            </TabsContent>

            {/* Portfolio Analytics */}
            <TabsContent value="portfolio-analytics" className="space-y-6">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                  Advanced Portfolio Analytics
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive ROI tracking, risk assessment, and performance benchmarking
                </p>
                <Button className="bg-[#F59E0B] hover:bg-[#F59E0B]/90">
                  Access Analytics Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedStakeholderFeatures;