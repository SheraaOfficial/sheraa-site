
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Clock, Users, DollarSign, Lightbulb, Zap, Globe, Smartphone } from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  prize: string;
  duration: string;
  participants: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  deadline: string;
  isActive: boolean;
}

const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "Sustainable Future Challenge",
    description: "Create innovative solutions for environmental sustainability that can be implemented in Sharjah",
    category: "Sustainability",
    prize: "AED 25,000",
    duration: "6 weeks",
    participants: 127,
    difficulty: "Intermediate",
    icon: Globe,
    tags: ["Environment", "Innovation", "Impact"],
    deadline: "March 15, 2024",
    isActive: true
  },
  {
    id: "2",
    title: "EdTech Revolution",
    description: "Design the next generation of educational technology for young learners",
    category: "Education",
    prize: "AED 20,000",
    duration: "4 weeks",
    participants: 89,
    difficulty: "Beginner",
    icon: Lightbulb,
    tags: ["Education", "Technology", "Students"],
    deadline: "February 28, 2024",
    isActive: true
  },
  {
    id: "3",
    title: "Smart City Solutions",
    description: "Develop IoT solutions to make Sharjah smarter and more connected",
    category: "Technology",
    prize: "AED 30,000",
    duration: "8 weeks",
    participants: 156,
    difficulty: "Advanced",
    icon: Smartphone,
    tags: ["IoT", "Smart City", "Innovation"],
    deadline: "April 1, 2024",
    isActive: true
  }
];

const ChallengesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const categories = ["All", "Sustainability", "Education", "Technology"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredChallenges = mockChallenges.filter(challenge => {
    const categoryMatch = selectedCategory === "All" || challenge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              🏆 Young Innovator Challenges
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Compete with young entrepreneurs from around the world. Solve real problems, 
              win prizes, and build your startup portfolio!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold">AED 75K</div>
                  <div className="text-sm text-gray-300">Total Prizes</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold">372</div>
                  <div className="text-sm text-gray-300">Participants</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-300">Active Challenges</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-gray-300">Weeks Left</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-300 font-medium">Category:</span>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-300 font-medium">Difficulty:</span>
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedDifficulty === difficulty
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                          <challenge.icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      {challenge.isActive && (
                        <Badge className="bg-green-500 text-white">Active</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-white mb-2">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4">
                      {challenge.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {challenge.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <DollarSign className="w-4 h-4" />
                        <span>Prize: {challenge.prize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{challenge.participants} participants</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-4">
                      Deadline: {challenge.deadline}
                    </div>
                    
                    <Button className="w-full young-gradient-dopamine text-white font-bold">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Compete?</h2>
                <p className="text-gray-300 mb-6">
                  Join thousands of young innovators competing to solve real-world problems. 
                  Build your portfolio, win prizes, and make an impact!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="young-gradient-energy text-white font-bold">
                    Start Your First Challenge
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ChallengesPage;
