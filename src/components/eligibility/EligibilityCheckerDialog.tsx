
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { eligibilityQuestions } from "./eligibilityQuestions";
import { programRecommendations } from "./eligibilityPrograms";
import { getCurrentQuestion, getRecommendedProgram } from "./eligibilityUtils";
import { EligibilityResult } from "./EligibilityResult";
import QuestionRenderer from "./QuestionRenderer";

interface EligibilityCheckerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EligibilityCheckerDialog: React.FC<EligibilityCheckerDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [persona, setPersona] = useState<string | null>(null);

  const currentQuestion = getCurrentQuestion(eligibilityQuestions, answers, currentStep);

  // Handle next button click
  const handleNext = () => {
    const currentQuestionId = currentQuestion?.id;
    
    if (!currentQuestionId || !answers[currentQuestionId]) {
      toast({
        title: "Selection required",
        description: "Please make a selection to continue",
        variant: "destructive",
      });
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

  // Reset the form
  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setPersona(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg md:max-w-xl">
        {!showResult ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-2">
                {!persona ? (
                  <Sparkles>Find Your Perfect Sheraa Program</Sparkles>
                ) : (
                  <>Program Eligibility Checker</>
                )}
              </DialogTitle>
              <DialogDescription>
                {!persona 
                  ? "Let's find the right entrepreneurial support for your journey."
                  : "Answer a few questions to help us recommend the best program for you."}
              </DialogDescription>
            </DialogHeader>

            <AnimatePresence mode="wait">
              {currentQuestion && (
                <QuestionRenderer
                  question={currentQuestion}
                  answers={answers}
                  onAnswerChange={handleAnswerChange}
                />
              )}
            </AnimatePresence>

            <DialogFooter className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0 && !persona}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>

              <GradientButton onClick={handleNext} className="flex items-center gap-2">
                {persona && currentStep === eligibilityQuestions.filter(q => {
                  if (q.dependsOn) {
                    const { questionId, answerId } = q.dependsOn;
                    return answers[questionId] === answerId;
                  }
                  return false;
                }).length - 1 
                  ? "See Results" 
                  : "Next"}
                <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </DialogFooter>
          </>
        ) : (
          <EligibilityResult 
            program={getRecommendedProgram(programRecommendations, answers)} 
            onReset={handleReset}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EligibilityCheckerDialog;
