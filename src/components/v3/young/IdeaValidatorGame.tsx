import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Trophy, Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import SocialShare from "./SocialShare";

interface Question {
  id: number;
  question: string;
  options: Array<{
    id: string;
    text: string;
    emoji: string;
    points: number;
    category: string;
  }>;
}

interface QuizResult {
  type: string;
  title: string;
  description: string;
  score: number;
  roadmap: string[];
  programs: string[];
  color: string;
}

const IdeaValidatorGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [categories, setCategories] = useState<Record<string, number>>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "What gets you most excited about changing the world?",
      options: [
        { id: "A", text: "Solving environmental problems", emoji: "🌱", points: 10, category: "sustainability" },
        { id: "B", text: "Creating cool technology", emoji: "💻", points: 10, category: "tech" },
        { id: "C", text: "Helping people connect", emoji: "🤝", points: 10, category: "social" },
        { id: "D", text: "Making beautiful experiences", emoji: "🎨", points: 10, category: "creative" },
        { id: "E", text: "Building financial solutions", emoji: "💰", points: 10, category: "fintech" }
      ]
    },
    {
      id: 2,
      question: "You have AED 1,000 and one weekend. What do you build?",
      options: [
        { id: "A", text: "A simple app solving a daily problem", emoji: "📱", points: 15, category: "tech" },
        { id: "B", text: "An online store for something you love", emoji: "🛍️", points: 15, category: "ecommerce" },
        { id: "C", text: "A YouTube channel sharing your passion", emoji: "📺", points: 15, category: "creative" },
        { id: "D", text: "An event bringing your community together", emoji: "🎪", points: 15, category: "social" },
        { id: "E", text: "A tutoring service for your best subject", emoji: "📚", points: 15, category: "education" }
      ]
    },
    {
      id: 3,
      question: "Your biggest challenge starting a business would be:",
      options: [
        { id: "A", text: "I don't know where to start", emoji: "😰", points: 5, category: "guidance" },
        { id: "B", text: "I don't have enough money", emoji: "💸", points: 10, category: "funding" },
        { id: "C", text: "I need a team but don't know anyone", emoji: "👥", points: 12, category: "team" },
        { id: "D", text: "I'm not sure people want my idea", emoji: "📈", points: 15, category: "validation" },
        { id: "E", text: "Understanding legal and business stuff", emoji: "⚖️", points: 8, category: "knowledge" }
      ]
    },
    {
      id: 4,
      question: "In 3 years, you want to be:",
      options: [
        { id: "A", text: "Running my business while finishing university", emoji: "🎓", points: 12, category: "student" },
        { id: "B", text: "A recognized young entrepreneur in my field", emoji: "🌟", points: 18, category: "recognition" },
        { id: "C", text: "Leading a company that helps solve global problems", emoji: "🌍", points: 20, category: "impact" },
        { id: "D", text: "Working at a tech company with startup experience", emoji: "💼", points: 10, category: "corporate" },
        { id: "E", text: "Launching my second or third company", emoji: "🚀", points: 25, category: "serial" }
      ]
    },
    {
      id: 5,
      question: "Your learning superpower is:",
      options: [
        { id: "A", text: "Watching videos and tutorials", emoji: "📹", points: 8, category: "visual" },
        { id: "B", text: "Learning from mentors and peers", emoji: "🤝", points: 15, category: "mentorship" },
        { id: "C", text: "Reading and researching everything", emoji: "📖", points: 10, category: "research" },
        { id: "D", text: "Building and experimenting hands-on", emoji: "🔨", points: 18, category: "practical" },
        { id: "E", text: "Taking courses and structured programs", emoji: "🎯", points: 12, category: "structured" }
      ]
    }
  ];

  const getResult = (): QuizResult => {
    const totalScore = score;
    const dominantCategory = Object.entries(categories).reduce((a, b) => 
      categories[a[0]] > categories[b[0]] ? a : b
    )[0];

    const results: Record<string, QuizResult> = {
      tech: {
        type: "TECH INNOVATOR",
        title: "You're passionate about using technology to solve real problems",
        description: "Your superpower is seeing how digital solutions can make life better.",
        score: totalScore,
        roadmap: [
          "Week 1: 🎯 Validate your idea with 20 potential users",
          "Week 2: 🔨 Build a simple prototype or mockup",
          "Week 3: 📊 Test with real people and gather feedback",
          "Week 4: 🚀 Apply to Sheraa's Startup Dojo program"
        ],
        programs: ["Startup Dojo", "University Innovation Hub", "Monthly Pitch Competition"],
        color: "young-gradient-dopamine"
      },
      social: {
        type: "COMMUNITY BUILDER",
        title: "You're driven to connect people and create positive social impact",
        description: "Your superpower is understanding human needs and building communities.",
        score: totalScore,
        roadmap: [
          "Week 1: 🎯 Interview 15 people about social challenges",
          "Week 2: 🤝 Organize a small community event",
          "Week 3: 📱 Create social media presence for your cause",
          "Week 4: 🚀 Apply to Access Sharjah Challenge"
        ],
        programs: ["Access Sharjah Challenge", "Social Impact Track", "Community Leadership Program"],
        color: "young-gradient-success"
      },
      sustainability: {
        type: "PLANET PROTECTOR",
        title: "You're passionate about environmental solutions and sustainability",
        description: "Your superpower is seeing opportunities to heal our planet.",
        score: totalScore,
        roadmap: [
          "Week 1: 🌱 Research environmental challenges in UAE",
          "Week 2: 💡 Design your sustainable solution concept",
          "Week 3: 🧪 Test your idea with small experiments",
          "Week 4: 🌍 Apply to Sustainability Track programs"
        ],
        programs: ["Sustainability Challenge", "Green Innovation Lab", "Climate Action Accelerator"],
        color: "young-gradient-success"
      },
      creative: {
        type: "CREATIVE DISRUPTOR",
        title: "You're passionate about beautiful experiences and creative solutions",
        description: "Your superpower is making complex things simple and beautiful.",
        score: totalScore,
        roadmap: [
          "Week 1: 🎨 Create portfolio of your creative work",
          "Week 2: 📱 Design user experience for your idea",
          "Week 3: 🎭 Test your creative concepts with audiences",
          "Week 4: 🚀 Apply to Creative Industries programs"
        ],
        programs: ["Creative Industries Track", "Design Thinking Workshop", "Media & Content Accelerator"],
        color: "young-gradient-energy"
      }
    };

    return results[dominantCategory] || results.tech;
  };

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers, option.id];
    setAnswers(newAnswers);
    setScore(score + option.points);
    
    setCategories(prev => ({
      ...prev,
      [option.category]: (prev[option.category] || 0) + 1
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const shareResult = () => {
    const result = getResult();
    if (navigator.share) {
      navigator.share({
        title: `I'm a ${result.type}!`,
        text: `I scored ${result.score}/100 on Sheraa's Idea Validator! ${result.description}`,
        url: window.location.href
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setCategories({});
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-6"
      >
        <Card className="border-0 shadow-2xl young-dopamine-shadow">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            </motion.div>
            
            <h2 className="text-3xl font-black mb-2 young-gradient-text">
              🎉 Congratulations!
            </h2>
            
            <Badge className={`${result.color} text-white px-4 py-2 text-lg mb-4`}>
              {result.type}
            </Badge>
            
            <p className="text-xl font-semibold mb-2">{result.title}</p>
            <p className="text-gray-600 mb-6">{result.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span className="font-bold">YOUR IDEA STRENGTH:</span>
              </div>
              <div className="text-4xl font-black young-gradient-text mb-2">
                {result.score}/100 🔥
              </div>
              <p className="text-sm text-gray-600">Your concept has serious potential! Here's how to level up...</p>
            </div>
            
            <div className="text-left mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                PERSONALIZED ROADMAP:
              </h3>
              <ul className="space-y-2">
                {result.roadmap.map((step, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-bold">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-left mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                RECOMMENDED SHERAA PROGRAMS:
              </h3>
              <ul className="space-y-1">
                {result.programs.map((program, index) => (
                  <li key={index} className="text-sm flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    {program}
                  </li>
                ))}
              </ul>
            </div>
            
            <SocialShare result={result} />
            
            <div className="grid grid-cols-2 gap-3 mb-6 mt-6">
              <Button 
                onClick={() => {
                  const url = '/v3/young/peer-matching';
                  window.location.href = url;
                }} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Find Co-founders
              </Button>
              <Button 
                onClick={() => {
                  toast({
                    title: "Downloading roadmap! 📋",
                    description: "Your personalized action plan is being prepared...",
                    duration: 3000,
                  });
                }}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Plan
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button 
                onClick={() => {
                  const url = '/programs/startup-dojo';
                  window.location.href = url;
                }}
                className="young-gradient-dopamine text-white font-bold"
              >
                Join Startup Dojo
              </Button>
              <Button variant="outline" onClick={resetQuiz}>
                Take Quiz Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {currentQuestion === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Card className="border-0 shadow-xl young-dopamine-shadow">
            <CardContent className="p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h1 className="text-3xl font-black mb-4 young-gradient-text">
                The Idea Validator Challenge
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Answer 5 quick questions to discover your startup superpower and get a personalized roadmap!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="text-left">
                  <h3 className="font-bold mb-2">RULES:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Be honest (no wrong answers!)</li>
                    <li>• Think big but realistic</li>
                    <li>• Have fun with it</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-2">REWARDS:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>🏆 Discover your entrepreneur type</li>
                    <li>📊 Get your idea strength score</li>
                    <li>🎁 Unlock personalized resources</li>
                    <li>📱 Share results with friends</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={() => setCurrentQuestion(1)}
                className="young-gradient-dopamine text-white font-bold px-8 py-4 h-14 text-lg animate-pulse"
              >
                START CHALLENGE
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Question {currentQuestion} of {questions.length}
              </span>
              <span className="text-sm font-semibold young-gradient-text">
                Score: {score} points
              </span>
            </div>
            <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
          </div>
          
          <Card className="border-0 shadow-xl young-dopamine-shadow mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {questions[currentQuestion - 1].question}
              </h2>
              
              <div className="grid gap-3">
                {questions[currentQuestion - 1].options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 text-left rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {option.emoji}
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">{option.id}) </span>
                        <span className="text-gray-700">{option.text}</span>
                        <div className="text-xs text-purple-600 font-medium">
                          +{option.points} points
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default IdeaValidatorGame;