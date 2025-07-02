import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Target, TrendingUp, DollarSign, Clock } from "lucide-react";

interface QuizQuestion {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  options: {
    id: string;
    text: string;
    value: string;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: "stage",
    title: "What stage is your startup currently in?",
    icon: Target,
    options: [
      { id: "idea", text: "Just an idea (validation needed)", value: "idea" },
      { id: "mvp", text: "MVP ready (need funding & scaling)", value: "mvp" },
      { id: "revenue", text: "Revenue-generating (need growth acceleration)", value: "revenue" },
      { id: "established", text: "Established business (seeking expansion)", value: "established" }
    ]
  },
  {
    id: "challenge",
    title: "What's your biggest challenge right now?",
    icon: TrendingUp,
    options: [
      { id: "validation", text: "Turning my idea into a real business", value: "validation" },
      { id: "funding", text: "Finding the right funding partners", value: "funding" },
      { id: "scaling", text: "Scaling operations efficiently", value: "scaling" },
      { id: "markets", text: "Breaking into new markets", value: "markets" }
    ]
  },
  {
    id: "funding",
    title: "How much funding are you seeking?",
    icon: DollarSign,
    options: [
      { id: "early", text: "AED 25,000 - 50,000 (early validation)", value: "early" },
      { id: "growth", text: "AED 100,000 - 500,000 (growth capital)", value: "growth" },
      { id: "scale", text: "AED 500,000+ (scaling investment)", value: "scale" },
      { id: "guidance", text: "I need guidance on funding strategy", value: "guidance" }
    ]
  }
];

const ProgramMatchingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;
    
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: selectedAnswer
    }));

    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] || "");
    }
  };

  const getRecommendedProgram = () => {
    const stage = answers.stage;
    const challenge = answers.challenge;
    
    if (stage === "idea" || challenge === "validation") {
      return {
        name: "S3 Startup Studio",
        description: "Our 6-month S3 program is designed specifically for founders like you who need comprehensive support to scale from idea to investment-ready business.",
        benefits: [
          "Personalized 1:1 mentorship (25+ hours)",
          "AED 3M+ in software perks & discounts",
          "Investor network access (Demo Day)",
          "Legal & regulatory guidance",
          "Peer founder community"
        ],
        cta: "Start Your S3 Application",
        link: "/programs/s3-incubator"
      };
    }
    
    return {
      name: "Access Sharjah Challenge",
      description: "Perfect for growth-stage startups ready to tackle real market challenges and secure significant funding opportunities.",
      benefits: [
        "Up to AED 136,000 in prize funding",
        "Direct partnership opportunities",
        "Market validation with industry leaders",
        "Expert panel mentorship",
        "Regional expansion support"
      ],
      cta: "View Current Challenges",
      link: "/programs/access-sharjah-challenge"
    };
  };

  if (showResult) {
    const program = getRecommendedProgram();
    
    return (
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-[#A0826D]/20 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-[#A0826D]" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Perfect Match: {program.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {program.description}
              </p>
            </div>

            <div className="text-left max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits For Your Stage:</h3>
              <ul className="space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A0826D] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#A0826D] hover:bg-[#8A6F5B] text-white px-8 py-4 text-lg font-bold w-full sm:w-auto"
              >
                <a href={program.link}>
                  {program.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setSelectedAnswer("");
                }}
                className="w-full sm:w-auto"
              >
                Retake Quiz
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  const CurrentIcon = questions[currentQuestion].icon;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Question */}
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-[#A0826D]/20 rounded-full flex items-center justify-center mx-auto">
                <CurrentIcon className="w-6 h-6 text-[#A0826D]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {questions[currentQuestion].title}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === option.value
                      ? "border-[#A0826D] bg-[#A0826D]/5"
                      : "border-gray-200 hover:border-[#A0826D]/50 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-gray-900">{option.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="flex items-center gap-2 bg-[#A0826D] hover:bg-[#8A6F5B]"
              >
                {isLastQuestion ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ProgramMatchingQuiz;