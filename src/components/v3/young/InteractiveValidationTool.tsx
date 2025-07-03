
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, TrendingUp, Award, Rocket, Lightbulb, Star } from "lucide-react";

interface ValidationStep {
  id: number;
  title: string;
  emoji: string;
  question: string;
  options: Array<{
    text: string;
    score: number;
    feedback: string;
  }>;
  tip: string;
}

const validationSteps: ValidationStep[] = [
  {
    id: 1,
    title: "Problem Detection",
    emoji: "🔍",
    question: "What problem are you solving?",
    options: [
      { text: "Something that annoys me daily 😤", score: 25, feedback: "Personal pain points often make the best businesses!" },
      { text: "I heard people complaining about it 👂", score: 20, feedback: "Good listening skills! Market research is key." },
      { text: "I see a gap in the market 📊", score: 15, feedback: "Market gaps are opportunities, but validate demand first." },
      { text: "Not sure yet 🤷‍♀️", score: 5, feedback: "No worries! Let's help you discover your problem." }
    ],
    tip: "The best startups solve real problems that people actually have!"
  },
  {
    id: 2,
    title: "Target Market",
    emoji: "🎯",
    question: "Who would pay for this solution?",
    options: [
      { text: "Students like me 🎓", score: 25, feedback: "Know your audience! Student market is huge." },
      { text: "Young professionals 💼", score: 25, feedback: "Great market with spending power!" },
      { text: "Everyone needs this! 🌍", score: 10, feedback: "Be careful! 'Everyone' usually means 'no one'." },
      { text: "Businesses & companies 🏢", score: 20, feedback: "B2B can be profitable, but requires different approach." }
    ],
    tip: "A clear target market beats trying to serve everyone!"
  },
  {
    id: 3,
    title: "Competition Check",
    emoji: "⚔️",
    question: "How do people solve this now?",
    options: [
      { text: "Expensive/complicated solutions 💸", score: 25, feedback: "Perfect! You can be the simple, affordable option." },
      { text: "They do it manually 🤲", score: 25, feedback: "Automation opportunity! People will pay for convenience." },
      { text: "They just deal with it 😫", score: 20, feedback: "Unmet need! You could be the first solution." },
      { text: "No solution exists 🚫", score: 15, feedback: "Interesting! But why doesn't a solution exist? Dig deeper." }
    ],
    tip: "Competition validates your market - no competitors might mean no market!"
  },
  {
    id: 4,
    title: "Execution Readiness",
    emoji: "🚀",
    question: "How ready are you to build this?",
    options: [
      { text: "I have the skills! 💪", score: 25, feedback: "Confidence is key! You've got this." },
      { text: "I can learn as I go 📚", score: 25, feedback: "Growth mindset! That's the entrepreneurial spirit." },
      { text: "I need help 🤝", score: 20, feedback: "Smart! Knowing when to ask for help is crucial." },
      { text: "Just an idea for now 💭", score: 15, feedback: "Ideas are the start! Time to take action." }
    ],
    tip: "You don't need to know everything - just be willing to learn!"
  }
];

const InteractiveValidationTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Array<{ stepId: number; score: number; feedback: string }>>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const progress = ((currentStep + 1) / validationSteps.length) * 100;
  const currentStepData = validationSteps[currentStep];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    
    const option = currentStepData.options[optionIndex];
    const newAnswer = {
      stepId: currentStepData.id,
      score: option.score,
      feedback: option.feedback
    };
    
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    setTotalScore(newAnswers.reduce((sum, answer) => sum + answer.score, 0));
    
    // Auto-advance after showing feedback
    setTimeout(() => {
      if (currentStep < validationSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const getResultData = () => {
    const percentage = (totalScore / 100) * 100;
    
    if (percentage >= 80) {
      return {
        level: "Startup Ready! 🚀",
        color: "young-gradient-success",
        icon: Rocket,
        message: "Your idea has serious potential! Time to start building.",
        actionText: "Apply to S3 Incubator",
        badges: ["High Potential", "Market Ready", "Execution Ready"]
      };
    } else if (percentage >= 60) {
      return {
        level: "Promising Idea 💡",
        color: "young-gradient-energy", 
        icon: Lightbulb,
        message: "You're on the right track! A bit more refinement and you'll be ready.",
        actionText: "Join Startup Dojo",
        badges: ["Good Foundation", "Needs Refinement", "Getting There"]
      };
    } else {
      return {
        level: "Early Explorer 🌱",
        color: "young-gradient-dopamine",
        icon: Star,
        message: "Everyone starts somewhere! Let's develop your idea together.",
        actionText: "Explore Resources",
        badges: ["Just Starting", "Learning Mode", "Potential Unlocked"]
      };
    }
  };

  const resetTool = () => {
    setCurrentStep(0);
    setAnswers([]);
    setTotalScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  if (showResult) {
    const result = getResultData();
    const ResultIcon = result.icon;
    
    return (
      <div className="max-w-md mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          {/* Score Circle */}
          <div className="relative">
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
                  strokeDasharray={`${totalScore}, 100`}
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
                <span className="text-3xl font-bold text-white">{totalScore}</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <Card className={`${result.color} border-0 text-white`}>
            <CardContent className="p-6 text-center">
              <ResultIcon className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{result.level}</h2>
              <p className="mb-4 opacity-90">{result.message}</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {result.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold mb-4">
                {result.actionText}
              </Button>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={resetTool} variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
              Try Again
            </Button>
            <Button className="flex-1 young-gradient-dopamine text-white">
              Get My Roadmap
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">💡 Idea Validator</h2>
          <div className="text-sm text-white/60">
            {currentStep + 1}/{validationSteps.length}
          </div>
        </div>
        <Progress value={progress} className="h-2 mb-2" />
        <div className="text-center text-white/80 text-sm">
          {Math.round(progress)}% Complete
        </div>
      </div>

      {/* Current Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          {/* Step Header */}
          <div className="text-center">
            <div className="text-4xl mb-2">{currentStepData.emoji}</div>
            <h3 className="text-xl font-bold text-white mb-2">{currentStepData.title}</h3>
            <p className="text-lg text-white/90">{currentStepData.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentStepData.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={selectedOption !== null}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 text-left rounded-2xl border transition-all duration-200 ${
                  selectedOption === index
                    ? 'young-gradient-success border-white/40 text-white'
                    : 'young-glass-card border-white/20 text-white hover:border-white/40'
                } ${selectedOption !== null && selectedOption !== index ? 'opacity-50' : ''}`}
              >
                {option.text}
              </motion.button>
            ))}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="young-glass-card p-4 rounded-2xl border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Great choice!</p>
                    <p className="text-white/80 text-sm">
                      {currentStepData.options[selectedOption].feedback}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tip */}
          <div className="young-glass-card p-4 rounded-2xl border border-white/20">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-blue-400 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Pro Tip</p>
                <p className="text-white/80 text-sm">{currentStepData.tip}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InteractiveValidationTool;
