
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Sparkles } from "lucide-react";
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

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Sparkles className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Program Matcher</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Find Your Perfect Sheraa Program
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Answer a few questions and we'll recommend the best program to support your entrepreneurial journey.
            </p>
          </motion.div>

          {/* Back to Programs Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="text-sheraa-primary hover:text-sheraa-primary/80">
              <Link to="/programs" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Programs
              </Link>
            </Button>
          </motion.div>

          {/* Eligibility Checker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
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

          {/* Additional Help */}
          {!showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Card className="max-w-lg mx-auto bg-sheraa-light/50 border-sheraa-primary/20">
                <div className="p-6">
                  <Star className="w-8 h-8 text-sheraa-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Need Help Deciding?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our team is here to help you find the perfect program for your needs.
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-sheraa-primary/30 text-sheraa-primary">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default EligibilityPage;
