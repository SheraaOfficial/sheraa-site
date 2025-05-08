
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import QuestionRenderer from "@/components/eligibility/QuestionRenderer";
import { EligibilityResult } from "@/components/eligibility/EligibilityResult";
import { Question, ProgramRecommendation } from "./eligibilityData";

interface EligibilityCheckerPageContentProps {
  currentQuestion: Question | undefined;
  answers: Record<string, string | string[]>;
  currentStep: number;
  totalSteps: number;
  persona: string | null;
  showResult: boolean;
  hasValidAnswers: boolean;
  isLastQuestion: boolean;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  recommendedProgram: ProgramRecommendation | undefined;
}

const EligibilityCheckerPageContent: React.FC<EligibilityCheckerPageContentProps> = ({
  currentQuestion,
  answers,
  currentStep,
  totalSteps,
  persona,
  showResult,
  hasValidAnswers,
  isLastQuestion,
  onAnswerChange,
  handleNext,
  handleBack,
  handleReset,
  recommendedProgram
}) => {
  return (
    <Card className="shadow-lg border-sheraa-primary/20">
      {!showResult ? (
        <>
          <CardHeader>
            <CardTitle className="text-2xl">
              {!persona ? "Tell us about yourself" : `Question ${currentStep + 1} of ${totalSteps}`}
            </CardTitle>
            <CardDescription>
              {!persona
                ? "Let's start by understanding which entrepreneurial path you're on."
                : "Help us understand your specific needs and goals."}
            </CardDescription>
            
            {persona && (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
                </div>
                <Progress value={((currentStep + 1) / totalSteps) * 100} className="h-2" />
              </div>
            )}
          </CardHeader>

          <CardContent className="pt-4">
            {currentQuestion && (
              <QuestionRenderer
                question={currentQuestion}
                answers={answers}
                onAnswerChange={onAnswerChange}
              />
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0 && !persona}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>

            <Button 
              onClick={handleNext} 
              disabled={!hasValidAnswers}
              className="bg-sheraa-primary text-white hover:bg-sheraa-primary/90 flex items-center gap-2"
            >
              {isLastQuestion ? "See Results" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </>
      ) : (
        <div className="p-6">
          <EligibilityResult 
            program={recommendedProgram} 
            onReset={handleReset}
            onClose={() => {}}
          />
        </div>
      )}
    </Card>
  );
};

export default EligibilityCheckerPageContent;
