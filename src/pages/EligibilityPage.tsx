
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import EligibilityCheckerPageContent from "@/components/eligibility/EligibilityCheckerPageContent";
import { EligibilityPageHero } from "@/components/eligibility/EligibilityPageHero";
import { EligibilityPageBackground } from "@/components/eligibility/EligibilityPageBackground";
import { EligibilityPageFloatingElements } from "@/components/eligibility/EligibilityPageFloatingElements";
import { EligibilityPageHelpSection } from "@/components/eligibility/EligibilityPageHelpSection";
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

  const currentQuestion = getCurrentQuestion(answers, currentStep, persona);
  const totalSteps = getTotalQuestionsForPersona(persona);

  const handleNext = () => {
    const currentQuestionId = currentQuestion?.id;
    
    if (!currentQuestionId || !answers[currentQuestionId]) {
      return;
    }

    if (currentQuestionId === "persona") {
      const selectedOption = currentQuestion.options?.find(
        option => option.id === answers[currentQuestionId]
      );
      setPersona(selectedOption?.persona || null);
      setCurrentStep(0);
    } else {
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
        setShowResult(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (persona) {
      setPersona(null);
      setCurrentStep(0);
      const personaAnswer = answers.persona;
      setAnswers({ persona: personaAnswer as string });
    }
  };

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const hasValidAnswers = currentQuestion && answers[currentQuestion.id] ? true : false;

  const isLastQuestion = persona && 
    currentStep === eligibilityQuestions.filter(q => {
      if (q.dependsOn) {
        const { questionId, answerId } = q.dependsOn;
        return answers[questionId] === answerId;
      }
      return false;
    }).length - 1;

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setPersona(null);
  };
  
  const recommendedProgram = React.useMemo(() => {
    try {
      return getRecommendedProgram(answers, programRecommendations);
    } catch (error) {
      console.error("Error getting program recommendation:", error);
      return undefined;
    }
  }, [answers]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/30 to-sheraa-primary/10 dark:from-sheraa-dark/90 dark:via-sheraa-dark/70 dark:to-sheraa-primary/10 min-h-screen overflow-hidden">
        <EligibilityPageBackground />

        <motion.div 
          className="container relative z-10 mx-auto px-4 py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <EligibilityPageHero itemVariants={itemVariants} />

          <motion.div
            variants={itemVariants}
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

          <motion.div
            variants={itemVariants}
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

          <EligibilityPageHelpSection 
            showResult={showResult} 
            itemVariants={itemVariants}
          />

          <EligibilityPageFloatingElements />
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default EligibilityPage;
