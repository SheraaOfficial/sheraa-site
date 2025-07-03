
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  Target, 
  Search, 
  UserPlus, 
  DollarSign, 
  FileText, 
  TrendingUp,
  Clock,
  Award,
  MessageCircle
} from "lucide-react";

const InteractiveLearningHub: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Entrepreneurship Myths vs Reality",
      type: "Quiz format",
      icon: BookOpen,
      difficulty: "Beginner",
      time: "15 min",
      progress: 0,
      description: "Bust common myths and understand what entrepreneurship really involves",
      color: "#F59E0B"
    },
    {
      id: 2,
      title: "Types of Businesses You Can Start",
      type: "Interactive explorer",
      icon: Target,
      difficulty: "Beginner",
      time: "20 min",
      progress: 0,
      description: "Explore different business models and find what fits your style",
      color: "#A0826D"
    },
    {
      id: 3,
      title: "From Idea to Business Model",
      type: "Step-by-step guide",
      icon: TrendingUp,
      difficulty: "Beginner",
      time: "30 min",
      progress: 0,
      description: "Learn how to transform your idea into a viable business plan",
      color: "#059669"
    },
    {
      id: 4,
      title: "Understanding Your Market",
      type: "Research tools",
      icon: Search,
      difficulty: "Intermediate",
      time: "25 min",
      progress: 0,
      description: "Master market research techniques and validate demand",
      color: "#DC2626"
    },
    {
      id: 5,
      title: "Building Your First Team",
      type: "Collaboration simulator",
      icon: UserPlus,
      difficulty: "Intermediate",
      time: "35 min",
      progress: 0,
      description: "Learn how to find, hire, and work with your first team members",
      color: "#7C3AED"
    },
    {
      id: 6,
      title: "Funding Your Dreams",
      type: "Option comparison tool",
      icon: DollarSign,
      difficulty: "Intermediate",
      time: "40 min",
      progress: 0,
      description: "Understand different funding options and which fits your business",
      color: "#0891B2"
    },
    {
      id: 7,
      title: "Legal and Business Basics",
      type: "Checklist format",
      icon: FileText,
      difficulty: "Beginner",
      time: "20 min",
      progress: 0,
      description: "Essential legal steps and business registration processes",
      color: "#EA580C"
    },
    {
      id: 8,
      title: "Growing and Scaling",
      type: "Case study analysis",
      icon: TrendingUp,
      difficulty: "Intermediate",
      time: "45 min",
      progress: 0,
      description: "Study real growth strategies and scaling challenges",
      color: "#16A34A"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#FEFBF7] to-[#A0826D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Entrepreneurship 101 - Interactive Course
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Master the fundamentals through hands-on learning. Track your progress 
            and earn certificates as you build your entrepreneurial knowledge.
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>0 of 8 completed</span>
            </div>
            <Progress value={0} className="h-2" />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <Card 
                className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
              >
                <CardHeader className="pb-4">
                  {/* Module Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${module.color}20` }}
                  >
                    <module.icon
                      className="w-6 h-6"
                      style={{ color: module.color }}
                    />
                  </div>

                  {/* Module Title */}
                  <h3 className="text-lg font-bold text-[#374151] group-hover:text-[#A0826D] transition-colors mb-2">
                    {module.title}
                  </h3>

                  {/* Module Type */}
                  <Badge 
                    variant="secondary" 
                    className="w-fit text-xs"
                    style={{ backgroundColor: `${module.color}15`, color: module.color }}
                  >
                    {module.type}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.time}
                    </div>
                    <Badge
                      variant={module.difficulty === "Beginner" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {module.difficulty}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-1" />
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full bg-[#A0826D] hover:bg-[#A0826D]/90 text-white"
                    >
                      {module.progress === 0 ? "Start Module" : "Continue"}
                    </Button>
                    
                    {selectedModule === module.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-[#A0826D] border-[#A0826D]/30"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Ask Community
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full text-gray-600"
                        >
                          <Award className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#A0826D]/10">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-[#A0826D] mr-3" />
              <h3 className="text-xl font-bold text-[#374151]">Learn with the Community</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join study groups, participate in discussions, and learn alongside 5,000+ 
              other aspiring entrepreneurs. Knowledge grows when shared!
            </p>
            <Button className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
              Join Community Discussions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveLearningHub;
