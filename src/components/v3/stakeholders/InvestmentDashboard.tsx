import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  FileText,
  BarChart3,
  Target,
  Calendar,
  ArrowRight,
  Download,
  Eye
} from "lucide-react";

const InvestmentDashboard: React.FC = () => {
  const [selectedDeal, setSelectedDeal] = useState<number | null>(null);

  const dealPipeline = [
    {
      id: 1,
      company: "EcoTech Solutions",
      sector: "Sustainability",
      stage: "Series A",
      amount: "$2.5M",
      status: "Due Diligence",
      progress: 75,
      founded: 2022,
      revenue: "$500K ARR",
      description: "AI-powered waste management for smart cities"
    },
    {
      id: 2,
      company: "EdLearn Platform", 
      sector: "EdTech",
      stage: "Seed",
      amount: "$1.2M",
      status: "Term Sheet",
      progress: 60,
      founded: 2023,
      revenue: "$200K ARR",
      description: "Adaptive learning platform for MENA region"
    },
    {
      id: 3,
      company: "HealthBridge AI",
      sector: "HealthTech", 
      stage: "Pre-Seed",
      amount: "$800K",
      status: "Initial Review",
      progress: 30,
      founded: 2023,
      revenue: "Pre-revenue",
      description: "Telemedicine platform with Arabic language support"
    }
  ];

  const portfolioMetrics = [
    { label: "Active Investments", value: "24", change: "+3", icon: Target },
    { label: "Total Deployed", value: "$12.5M", change: "+$2.1M", icon: DollarSign },
    { label: "Portfolio Companies", value: "45", change: "+8", icon: Users },
    { label: "Avg. ROI", value: "3.2x", change: "+0.4x", icon: TrendingUp },
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
            Investment Intelligence Hub
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real-time portfolio analytics, deal pipeline management, and 
            strategic investment opportunities in Sharjah's ecosystem.
          </motion.p>
        </div>

        {/* Portfolio Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {portfolioMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-[#1E293B]">{metric.value}</p>
                    <p className="text-sm text-green-600 font-medium">{metric.change}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Investment Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="pipeline" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-fit mx-auto">
              <TabsTrigger value="pipeline" className="px-6 py-3">Deal Pipeline</TabsTrigger>
              <TabsTrigger value="portfolio" className="px-6 py-3">Portfolio</TabsTrigger>
              <TabsTrigger value="analytics" className="px-6 py-3">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="pipeline" className="space-y-6">
              <div className="grid gap-6">
                {dealPipeline.map((deal, index) => (
                  <motion.div
                    key={deal.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedDeal(deal.id === selectedDeal ? null : deal.id)}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1E293B]/10 flex items-center justify-center">
                              <BarChart3 className="w-6 h-6 text-[#1E293B]" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#1E293B]">{deal.company}</h3>
                              <p className="text-sm text-gray-600">{deal.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge 
                              className={`mb-2 ${
                                deal.status === 'Due Diligence' ? 'bg-orange-100 text-orange-700' :
                                deal.status === 'Term Sheet' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {deal.status}
                            </Badge>
                            <p className="text-lg font-bold text-[#1E293B]">{deal.amount}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-500">Sector</p>
                            <p className="font-medium">{deal.sector}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Stage</p>
                            <p className="font-medium">{deal.stage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Founded</p>
                            <p className="font-medium">{deal.founded}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Revenue</p>
                            <p className="font-medium">{deal.revenue}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{deal.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-[#F59E0B] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${deal.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              Review
                            </Button>
                            <Button size="sm" className="bg-[#1E293B] hover:bg-[#1E293B]/90">
                              <Download className="w-4 h-4 mr-2" />
                              DD Pack
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-[#1E293B]">Portfolio Overview</h3>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Detailed portfolio analytics and performance metrics</p>
                    <Button className="mt-4 bg-[#F59E0B] hover:bg-[#F59E0B]/90">
                      Access Full Report
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-[#1E293B]">Market Analytics</h3>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">MENA startup trends and competitive intelligence</p>
                    <Button className="mt-4 bg-[#F59E0B] hover:bg-[#F59E0B]/90">
                      View Analytics Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentDashboard;