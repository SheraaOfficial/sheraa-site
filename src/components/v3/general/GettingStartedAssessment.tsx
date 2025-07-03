
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CheckCircle, Target, Users, Clock, AlertCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: string;
    icon?: string;
  }>;
}

interface AssessmentResult {
  learningPaths: string[];
  communityGroups: string[];
  upcomingEvents: string[];
  programRecommendations: string[];
  mentorMatching: string[];
}

const GettingStartedAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What best describes your current situation?",
      options: [
        { text: "Student", value: "student", icon: "🎓" },
        { text: "Working Professional", value: "professional", icon: "💼" },
        { text: "Career Change", value: "career-change", icon: "🔄" },
        { text: "Retired", value: "retired", icon: "🌅" },
        { text: "Other", value: "other", icon: "🤔" }
      ]
    },
    {
      id: 2,
      question: "How much do you know about starting a business?",
      options: [
        { text: "Complete beginner", value: "beginner", icon: "🌱" },
        { text: "Some basic knowledge", value: "basic", icon: "📚" },
        { text: "Some experience", value: "experienced", icon: "💡" },
        { text: "Very experienced", value: "expert", icon: "🏆" }
      ]
    },
    {
      id: 3,
      question: "What interests you most?",
      options: [
        { text: "Technology & Innovation", value: "tech", icon: "💻" },
        { text: "Social Impact", value: "social", icon: "🌍" },
        { text: "Creative Industries", value: "creative", icon: "🎨" },
        { text: "Service Business", value: "service", icon: "🤝" },
        { text: "Product Development", value: "product", icon: "📦" },
        { text: "Not sure yet", value: "unsure", icon: "🤷" }
      ]
    },
    {
      id: 4,
      question: "What's your main goal?",
      options: [
        { text: "Learn about entrepreneurship", value: "learn", icon: "📖" },
        { text: "Network with like-minded people", value: "network", icon: "👥" },
        { text: "Start my own business", value: "start", icon: "🚀" },
        { text: "Change my career path", value: "career", icon: "🎯" },
        { text: "Explore investment opportunities", value: "invest", icon: "💰" }
      ]
    },
    {
      id: 5,
      question: "How much time can you dedicate?",
      options: [
        { text: "A few hours per week", value: "minimal", icon: "⏰" },
        { text: "Weekends only", value: "weekends", icon: "📅" },
        { text: "Part-time (10-20 hours/week)", value: "part-time", icon: "⏳" },
        { text: "Full-time commitment", value: "full-time", icon: "🕒" }
      ]
    },
    {
      id: 6,
      question: "What's your biggest concern?",
      options: [
        { text: "Lack of knowledge", value: "knowledge", icon: "📚" },
        { text: "Not enough money", value: "money", icon: "💸" },
        { text: "Limited time", value: "time", icon: "⏱️" },
        { text: "Fear of failure", value: "failure", icon: "😰" },
        { text: "Finding the right partners/team", value: "partners", icon: "👫" }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      generateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const generateResults = () => {
    // Generate personalized recommendations based on answers
    const mockResults: AssessmentResult = {
      learningPaths: [
        "Entrepreneurship Basics Course",
        "Business Model Canvas Workshop",
        "Market Research Fundamentals"
      ],
      communityGroups: [
        "Beginner Entrepreneurs Circle",
        "Tech Startup Discussion Group",
        "Weekly Mentor Sessions"
      ],
      upcomingEvents: [
        "Introduction to Business Planning - March 15",
        "Networking Coffee Morning - March 22",
        "Pitch Practice Session - March 29"
      ],
      programRecommendations: [
        "Startup Dojo (8-week program)",
        "Entrepreneurship Bootcamp",
        "One-on-One Mentorship Program"
      ],
      mentorMatching: [
        "Sarah A. - Tech Industry Veteran",
        "Ahmed M. - Serial Entrepreneur",
        "Fatima K. - Business Development Expert"
      ]
    };

    setResults(mockResults);
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults(null);
  };

  if (showResults && results) {
    return (
      <section className="py-16 bg-gradient-to-br from-[#FEFBF7] to-[#A0826D]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-500 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#374151]">
                Your Personalized Roadmap
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on your responses, here are our tailored recommendations to kickstart your entrepreneurial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Learning Paths */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <Target className="w-6 h-6 text-[#A0826D] mr-3" />
                    <h3 className="text-xl font-bold text-[#374151]">Suggested Learning Paths</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.learningPaths.map((path, index) => (
                      <div key={index} className="flex items-center p-3 bg-[#A0826D]/5 rounded-lg">
                        <div className="w-2 h-2 bg-[#A0826D] rounded-full mr-3" />
                        <span className="text-gray-700">{path}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
                    Start Learning Journey
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Groups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-[#A0826D] mr-3" />
                    <h3 className="text-xl font-bold text-[#374151]">Relevant Community Groups</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.communityGroups.map((group, index) => (
                      <div key={index} className="flex items-center p-3 bg-[#A0826D]/5 rounded-lg">
                        <div className="w-2 h-2 bg-[#A0826D] rounded-full mr-3" />
                        <span className="text-gray-700">{group}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
                    Join Communities
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#A0826D] mr-3" />
                    <h3 className="text-xl font-bold text-[#374151]">Upcoming Events</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center p-3 bg-[#A0826D]/5 rounded-lg">
                        <div className="w-2 h-2 bg-[#A0826D] rounded-full mr-3" />
                        <span className="text-gray-700">{event}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
                    Register for Events
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Program Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <AlertCircle className="w-6 h-6 text-[#A0826D] mr-3" />
                    <h3 className="text-xl font-bold text-[#374151]">Program Recommendations</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.programRecommendations.map((program, index) => (
                      <div key={index} className="flex items-center p-3 bg-[#A0826D]/5 rounded-lg">
                        <div className="w-2 h-2 bg-[#A0826D] rounded-full mr-3" />
                        <span className="text-gray-700">{program}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
                    Explore Programs
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button
              onClick={resetAssessment}
              variant="outline"
              className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
            >
              Take Assessment Again
            </Button>
            <Button className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
              Save My Roadmap
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#FEFBF7] to-[#A0826D]/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Find Your Perfect Starting Point
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Answer a few quick questions to get personalized recommendations 
            for your entrepreneurial journey.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <h3 className="text-2xl font-bold text-[#374151] text-center">
                  {questions[currentQuestion].question}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        answers[currentQuestion] === option.value
                          ? "border-[#A0826D] bg-[#A0826D]/10 text-[#A0826D]"
                          : "border-gray-200 hover:border-[#A0826D]/50 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <span className="font-medium">{option.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    variant="outline"
                    className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10 disabled:opacity-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!answers[currentQuestion]}
                    className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white disabled:opacity-50"
                  >
                    {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GettingStartedAssessment;
