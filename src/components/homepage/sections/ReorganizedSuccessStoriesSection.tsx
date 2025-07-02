
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, TrendingUp, Award } from "lucide-react";

const featuredStartups = [
  {
    name: "EcoTech Solutions",
    description: "Revolutionary sustainable manufacturing processes",
    sector: "Sustainability",
    achievement: "40% Carbon Reduction",
    founder: "Sarah Al-Mahmoud",
    logo: "/placeholder.svg",
    badges: ["SHERAA ALUMNI", "SEF FEATURED"],
    story: "From university research to industry transformation"
  },
  {
    name: "HealthAI",
    description: "AI-powered medical diagnostics for early detection",
    sector: "HealthTech", 
    achievement: "3 Countries Expansion",
    founder: "Dr. Ahmed Hassan",
    logo: "/placeholder.svg",
    badges: ["SHERAA BACKED", "S3 GRADUATE"],
    story: "Saving lives through intelligent healthcare solutions"
  },
  {
    name: "EduFlow",
    description: "Personalized learning platform for MENA region",
    sector: "EdTech",
    achievement: "500K+ Students",
    founder: "Fatima Al-Zahra",
    logo: "/placeholder.svg",
    badges: ["COMMUNITY MEMBER", "SHERAA ALUMNI"],
    story: "Democratizing quality education across the region"
  },
  {
    name: "AgriSmart",
    description: "Smart farming solutions for sustainable agriculture",
    sector: "AgriTech",
    achievement: "30% Higher Yields",
    founder: "Mohammed Al-Rashid",
    logo: "/placeholder.svg",
    badges: ["SEF WINNER", "SHERAA BACKED"],
    story: "Feeding the future through precision agriculture"
  }
];

export const ReorganizedSuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-orange/10 border border-sheraa-orange/20 mb-6">
            <Award className="w-5 h-5 text-sheraa-orange" />
            <span className="text-sm font-medium text-sheraa-orange">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            sheraa startups
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Real companies, real results. See how entrepreneurs like you are 
            building the future with Sheraa's support.
          </p>
          
          {/* Key Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: "180+", label: "Startups Supported" },
              { number: "71%", label: "Survival Rate" },
              { number: "8", label: "Successful Exits" },
              { number: "$248M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Success Stories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredStartups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <CardContent className="p-6">
                  {/* Logo placeholder */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-sheraa-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sheraa-primary font-bold text-sm">
                        {startup.name.substring(0, 2)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {startup.badges.map((badge, badgeIdx) => (
                      <Badge 
                        key={badgeIdx} 
                        variant="outline" 
                        className="text-xs font-bold border-sheraa-primary/30 text-sheraa-primary"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {startup.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {startup.description}
                    </p>

                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      Founded by {startup.founder}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {startup.sector}
                      </span>
                      <div className="text-xs font-semibold text-green-600 dark:text-green-400">
                        {startup.achievement}
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      "{startup.story}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg" className="border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary hover:text-white px-8 py-6 text-lg font-medium">
            <Link to="/community/startups" className="flex items-center gap-2">
              View All Success Stories
              <ExternalLink className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
