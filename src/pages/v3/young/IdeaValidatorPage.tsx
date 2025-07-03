
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Lightbulb, Target, Users, TrendingUp } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

const validationQuestions: Question[] = [
  {
    id: 1,
    question: "What problem does your idea solve?",
    options: [
      "A daily frustration I experience",
      "Something I heard others complain about",
      "A gap I noticed in the market",
      "I'm not sure yet"
    ],
    category: "Problem"
  },
  {
    id: 2,
    question: "Who would use your solution?",
    options: [
      "People like me (students/young professionals)",
      "Businesses and companies",
      "Families and parents",
      "Everyone could use it"
    ],
    category: "Market"
  },
  {
    id: 3,
    question: "How would people currently solve this problem?",
    options: [
      "They use a complicated/expensive solution",
      "They do it manually/the hard way",
      "They just live with the problem",
      "There's no current solution"
    ],
    category: "Competition"
  },
  {
    id: 4,
    question: "How confident are you in building this?",
    options: [
      "Very confident - I have the skills",
      "Somewhat confident - I can learn",
      "Not confident - I need help",
      "I just have the idea"
    ],
    category: "Execution"
  },
  {
    id: 5,
    question: "What's your biggest concern?",
    options: [
      "Finding customers",
      "Building the product",
      "Getting funding",
      "Competition"
    ],
    category: "Concerns"
  }
];

const IdeaValidatorPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [validationQuestions[currentQuestion].id]: answer
    }));

    if (currentQuestion < validationQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getValidationScore = () => {
    const answerValues = Object.values(answers);
    let score = 0;
    
    // Simple scoring logic
    answerValues.forEach((answer, index) => {
      if (index === 0 && answer.includes("daily frustration")) score += 20;
      if (index === 1 && answer.includes("People like me")) score += 15;
      if (index === 2 && answer.includes("complicated/expensive")) score += 20;
      if (index === 3 && answer.includes("Very confident")) score += 25;
      if (index === 4 && answer.includes("Finding customers")) score += 20;
    });
    
    return Math.min(score + 20, 100); // Ensure minimum score
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) {
      return {
        title: "🚀 Ready to Launch!",
        message: "Your idea shows strong potential. Time to start building!",
        action: "Apply to S3 Incubator",
        color: "young-gradient-success"
      };
    } else if (score >= 60) {
      return {
        title: "💡 Promising Idea",
        message: "Your idea has potential but needs some refinement.",
        action: "Join Startup Dojo",
        color: "young-gradient-energy"
      };
    } else {
      return {
        title: "🌱 Early Stage",
        message: "Great start! Let's develop your idea further.",
        action: "Explore Resources",
        color: "young-gradient-dopamine"
      };
    }
  };

  if (showResults) {
    const score = getValidationScore();
    const recommendation = getRecommendation(score);

    return (
      <MainLayout>
        <YoungEntrepreneurNavigation />
        <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white min-h-screen">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Your Idea Score
              </h1>
              
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${score}, 100`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{score}</span>
                  </div>
                </div>
              </div>

              <Card className={`${recommendation.color} border-0 mb-8`}>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    {recommendation.title}
                  </h2>
                  <p className="text-white/90 mb-4">{recommendation.message}</p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold">
                    {recommendation.action}
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardContent className="p-4 text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-bold mb-1">Next Steps</h3>
                    <p className="text-sm text-gray-300">Personalized roadmap</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-0">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-bold mb-1">Connect</h3>
                    <p className="text-sm text-gray-300">Find co-founders</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Try Again
                </Button>
                <Button className="young-gradient-dopamine text-white font-bold">
                  Get My Action Plan
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              💡 Idea Validator
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's see how ready your idea is for the world!
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mb-8">
              <div 
                className="young-gradient-dopamine h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / validationQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="text-sm text-gray-400 mb-8">
              Question {currentQuestion + 1} of {validationQuestions.length}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    {validationQuestions[currentQuestion].question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {validationQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple-400 transition-all duration-200 text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={goBack}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="text-sm text-gray-400">
              {Object.keys(answers).length} / {validationQuestions.length} answered
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default IdeaValidatorPage;
