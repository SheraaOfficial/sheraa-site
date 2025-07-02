
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, TrendingUp } from "lucide-react";

const featuredStartups = [
  {
    name: "EcoTech Solutions",
    description: "Making industries more sustainable",
    sector: "Sustainability",
    achievement: "40% Carbon Reduction",
    logo: "/placeholder.svg",
    badges: ["SHERAA ALUMNI", "SEF FEATURED"]
  },
  {
    name: "HealthAI",
    description: "AI-powered medical diagnostics",
    sector: "HealthTech", 
    achievement: "3 Countries",
    logo: "/placeholder.svg",
    badges: ["SHERAA BACKED", "S3 GRADUATE"]
  },
  {
    name: "EduFlow",
    description: "Personalized learning platform",
    sector: "EdTech",
    achievement: "500K+ Students",
    logo: "/placeholder.svg",
    badges: ["COMMUNITY MEMBER", "SHERAA ALUMNI"]
  },
  {
    name: "AgriSmart",
    description: "Smart farming solutions",
    sector: "AgriTech",
    achievement: "30% Higher Yields",
    logo: "/placeholder.svg",
    badges: ["SEF WINNER", "SHERAA BACKED"]
  }
];

export const StartupEcosystemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            sheraa startups
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real companies, real results. See how entrepreneurs like you are 
            building the future with Sheraa's support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredStartups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-6 text-center">
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
                        variant="gradient-warm" 
                        animation="pulse" 
                        size="sm" 
                        className="text-xs font-bold"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {startup.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {startup.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      {startup.sector}
                    </span>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400">
                      {startup.achievement}
                    </div>
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
              View All Startups
              <ExternalLink className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
