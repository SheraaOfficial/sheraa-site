
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { EligibilityResult } from "./EligibilityResult";
import QuestionRenderer from "./QuestionRenderer";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";
import { 
  eligibilityQuestions, 
  programRecommendations 
} from "./eligibilityData";
import { 
  getCurrentQuestion, 
  getRecommendedProgram, 
  getTotalQuestionsForPersona 
} from "./eligibilityUtils";

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

  // Get the current question to display
  const currentQuestion = getCurrentQuestion(answers, currentStep, persona);
  
  // Get total questions for progress calculation
  const totalSteps = getTotalQuestionsForPersona(persona);

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg md:max-w-xl">
        {!showResult ? (
          <>
            <DialogHeader 
              persona={persona} 
              currentStep={currentStep + 1}
              totalSteps={totalSteps}
            />

            <AnimatePresence mode="wait">
              {currentQuestion && (
                <QuestionRenderer
                  key={currentQuestion.id}
                  question={currentQuestion}
                  answers={answers}
                  onAnswerChange={handleAnswerChange}
                />
              )}
            </AnimatePresence>

            <DialogFooter
              onBack={handleBack}
              onNext={handleNext}
              canGoBack={currentStep > 0 || !!persona}
              isLastQuestion={!!isLastQuestion}
              hasValidAnswers={hasValidAnswers}
            />
          </>
        ) : (
          <EligibilityResult 
            program={getRecommendedProgram(answers, programRecommendations)} 
            onReset={handleReset}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EligibilityCheckerDialog;
