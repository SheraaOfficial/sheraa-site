
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, ArrowRight, ExternalLink } from "lucide-react";
import { OptimizedImage } from "@/components/ui/design-system/OptimizedImage";

const featuredStartups = [
  {
    name: "EcoTech Solutions",
    description: "Sustainable technology for carbon reduction",
    sector: "Sustainability",
    achievement: "40% Carbon Reduction",
    logo: "/placeholder.svg"
  },
  {
    name: "HealthAI",
    description: "AI-powered healthcare diagnostics",
    sector: "HealthTech", 
    achievement: "3 Countries Deployed",
    logo: "/placeholder.svg"
  },
  {
    name: "EduFlow",
    description: "Personalized learning platform",
    sector: "EdTech",
    achievement: "500K+ Students",
    logo: "/placeholder.svg"
  },
  {
    name: "AgriSmart",
    description: "Precision agriculture solutions",
    sector: "AgriTech",
    achievement: "30% Yield Increase",
    logo: "/placeholder.svg"
  }
];

export const StartupEcosystemSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/20 to-blue-50/30 dark:from-sheraa-dark/50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Innovation in </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. 
            Our portfolio spans key sectors, generating significant economic value and creating thousands of jobs.
          </p>
        </motion.div>

        {/* Featured Startups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredStartups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <OptimizedImage
                      src={startup.logo}
                      alt={startup.name}
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-sheraa-dark dark:text-white mb-2">
                    {startup.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {startup.description}
                  </p>
                  
                  <div className="space-y-2">
                    <span className="inline-block bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 rounded-full text-xs font-medium">
                      {startup.sector}
                    </span>
                    <div className="text-sm font-semibold text-sheraa-teal">
                      {startup.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-sheraa-dark rounded-3xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Success Story</span>
              </div>
              
              <h3 className="text-3xl font-bold text-sheraa-dark dark:text-white mb-4">
                From Idea to Impact
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Sheraa was instrumental in our growth journey. Their mentorship and connections 
                helped us scale across the MENA region, turning our vision into reality with 
                sustainable impact on communities."
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-sheraa-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-sheraa-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sheraa-dark dark:text-white">Sarah Al Madani</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Founder & CEO, HalaHi</div>
                </div>
              </div>
              
              <Button variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Case Study
              </Button>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="/placeholder.svg"
                alt="Success Story"
                className="w-full h-80 rounded-2xl object-cover"
                width={400}
                height={320}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/community/startups" className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10">
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Our Community
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
