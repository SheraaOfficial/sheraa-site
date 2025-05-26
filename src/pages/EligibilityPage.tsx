
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Sparkles, Users, Target, Award, Zap } from "lucide-react";
import EligibilityCheckerPageContent from "@/components/eligibility/EligibilityCheckerPageContent";
import { 
  eligibilityQuestions, 
  programRecommendations 
} from "@/components/eligibility/eligibilityData";
import { 
  getCurrentQuestion, 
  getRecommendedProgram, 
  getTotalQuestionsForPersona 
} from "@/components/eligibility/eligibilityUtils";

const EligibilityPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [persona, setPersona] = useState<string | null>(null);

  // Get the current question to display
  const currentQuestion = getCurrentQuestion(answers, currentStep, persona);
  
  // Get total questions for progress calculation
  const totalSteps = getTotalQuestionsForPersona(persona);

  // Handle next button click
  const handleNext = () => {
    const currentQuestionId = currentQuestion?.id;
    
    if (!currentQuestionId || !answers[currentQuestionId]) {
      return;
    }

    // If it's the persona question, set the persona
    if (currentQuestionId === "persona") {
      const selectedOption = currentQuestion.options?.find(
        option => option.id === answers[currentQuestionId]
      );
      setPersona(selectedOption?.persona || null);
      setCurrentStep(0);
    } else {
      // Check if we have more questions for this persona
      const nextQuestions = eligibilityQuestions.filter(question => {
        if (question.dependsOn) {
          const { questionId, answerId } = question.dependsOn;
          return answers[questionId] === answerId;
        }
        return false;
      });

      if (currentStep < nextQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // No more questions, show result
        setShowResult(true);
      }
    }
  };

  // Handle back button click
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (persona) {
      // Reset to persona selection
      setPersona(null);
      setCurrentStep(0);
      // Clear answers specific to the persona
      const personaAnswer = answers.persona;
      setAnswers({ persona: personaAnswer as string });
    }
  };

  // Handle answer selection
  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Check if the current question has valid answers
  const hasValidAnswers = currentQuestion && answers[currentQuestion.id] ? true : false;

  // Check if this is the last question for the current persona
  const isLastQuestion = persona && 
    currentStep === eligibilityQuestions.filter(q => {
      if (q.dependsOn) {
        const { questionId, answerId } = q.dependsOn;
        return answers[questionId] === answerId;
      }
      return false;
    }).length - 1;

  // Reset the form
  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setPersona(null);
  };
  
  // Get recommended program safely
  const recommendedProgram = React.useMemo(() => {
    try {
      return getRecommendedProgram(answers, programRecommendations);
    } catch (error) {
      console.error("Error getting program recommendation:", error);
      return undefined;
    }
  }, [answers]);

  // Enhanced background particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/30 to-sheraa-primary/10 dark:from-sheraa-dark/90 dark:via-sheraa-dark/70 dark:to-sheraa-primary/10 min-h-screen overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          {/* Main gradient overlays */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sheraa-orange/20 to-sheraa-primary/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-sheraa-primary/20 dark:bg-sheraa-teal/30 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/15 to-sheraa-teal/15 border border-sheraa-primary/30 mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-sheraa-primary" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                AI-Powered Program Matcher
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Find Your Perfect
              <br />
              <motion.span
                className="inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #003366, #008080, #FF6600, #003366)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Sheraa Program
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Answer a few questions and our intelligent system will recommend the best program 
              to accelerate your entrepreneurial journey in Sharjah's thriving ecosystem.
            </motion.p>
          </motion.div>

          {/* Enhanced Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <Button 
              asChild 
              variant="ghost" 
              className="text-sheraa-primary hover:text-sheraa-primary/80 hover:bg-sheraa-primary/10 backdrop-blur-sm border border-sheraa-primary/20 rounded-full px-6"
            >
              <Link to="/programs" className="flex items-center gap-2 group">
                <motion.div
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                Back to Programs
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <EligibilityCheckerPageContent
              currentQuestion={currentQuestion}
              answers={answers}
              currentStep={currentStep}
              totalSteps={totalSteps}
              persona={persona}
              showResult={showResult}
              hasValidAnswers={hasValidAnswers}
              isLastQuestion={!!isLastQuestion}
              onAnswerChange={handleAnswerChange}
              handleNext={handleNext}
              handleBack={handleBack}
              handleReset={handleReset}
              recommendedProgram={recommendedProgram}
            />
          </motion.div>

          {/* Enhanced Help Section */}
          <AnimatePresence>
            {!showResult && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-center mt-16"
              >
                <Card className="max-w-lg mx-auto bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-xl border border-sheraa-primary/20 rounded-3xl shadow-2xl overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10 p-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-8 h-8 text-sheraa-primary" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                      Need Personal Guidance?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                      Our expert team is ready to provide personalized recommendations 
                      and answer any questions about our programs.
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild 
                        className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 text-white border-0 rounded-full px-8 shadow-lg"
                      >
                        <Link to="/contact" className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Contact Our Team
                          <Zap className="w-3 h-3 opacity-70" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced floating action buttons */}
          <motion.div
            className="fixed bottom-8 right-8 flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-sheraa-primary to-sheraa-teal rounded-full shadow-lg flex items-center justify-center cursor-pointer backdrop-blur-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Target className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EligibilityPage;
