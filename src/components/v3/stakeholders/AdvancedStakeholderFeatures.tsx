import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain,
  TrendingUp,
  Shield,
  Handshake,
  Globe,
  BookOpen,
  DollarSign,
  Users,
  FileText,
  ArrowRight,
  Star,
  Calendar,
  MapPin
} from "lucide-react";

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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                  AI-Powered Deal Matching
                </h3>
                <p className="text-gray-600">
                  Advanced algorithms match your investment thesis with high-potential startups
                </p>
              </div>

              <div className="grid gap-6">
                {smartMatches.map((match, index) => (
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
            </TabsContent>

            {/* Cultural Protocols */}
            <TabsContent value="cultural-protocols" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                  Cultural Business Integration
                </h3>
                <p className="text-gray-600">
                  Navigate regional business culture and relationship-building protocols
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {culturalProtocols.map((protocol, index) => (
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
            </TabsContent>

            {/* Market Intelligence */}
            <TabsContent value="market-intelligence" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                  Real-Time Market Intelligence
                </h3>
                <p className="text-gray-600">
                  Stay ahead with live market trends, regulatory updates, and competitive analysis
                </p>
              </div>

              <div className="grid gap-6">
                {marketIntelligence.map((intel, index) => (
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