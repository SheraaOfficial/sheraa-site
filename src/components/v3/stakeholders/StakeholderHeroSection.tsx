import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, TrendingUp, Shield, Globe, ArrowRight, Play } from "lucide-react";

const StakeholderHeroSection: React.FC = () => {
  const achievements = [
    { value: "$248M+", label: "Portfolio Revenue", icon: TrendingUp },
    { value: "180+", label: "Startups Incubated", icon: Globe },
    { value: "71%", label: "Survival Rate", icon: Shield },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#1E293B]/95 to-[#374151] py-20 lg:py-28">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#F59E0B] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#F59E0B] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-[#F59E0B] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Authority Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30 px-4 py-2 text-sm font-medium">
                <Crown className="w-4 h-4 mr-2" />
                Under the Patronage of H.H. Dr. Sheikh Sultan Al Qasimi
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Partner with
                <span className="text-[#F59E0B] block sm:inline"> Sharjah's Innovation</span>
                <span className="block">Ecosystem</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Join government-backed initiatives driving economic diversification 
                through strategic partnerships and high-impact investments.
              </p>
              
              <p className="text-lg text-gray-400 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#F59E0B]" />
                Government-endorsed • Sharia-compliant options • GCC market access
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Access Investment Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Portfolio Review
              </Button>
            </motion.div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Government-Backed Performance
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        {achievement.value}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {achievement.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#F59E0B]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#F59E0B]/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Next Board Meeting
              </h4>
              <p className="text-gray-300 text-sm">
                Q4 Strategic Review • Portfolio Performance • New Partnerships
              </p>
              <p className="text-[#F59E0B] text-sm font-medium mt-2">
                Exclusive Stakeholder Access →
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderHeroSection;