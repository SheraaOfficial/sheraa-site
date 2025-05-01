
import React, { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layouts/MainLayout";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { eligibilityQuestions, programRecommendations } from "@/components/eligibility/eligibilityData";
import { getCurrentQuestion, getRecommendedProgram, getTotalQuestionsForPersona } from "@/components/eligibility/eligibilityUtils";
import { useToast } from "@/hooks/use-toast";
import EligibilityCheckerPageContent from "@/components/eligibility/EligibilityCheckerPageContent";

const EligibilityCheckerPage = () => {
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

  // Get recommended program
  const recommendedProgram = getRecommendedProgram(answers, programRecommendations);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Program Eligibility Checker</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Answer a few questions to help us recommend the most suitable Sheraa program for your entrepreneurial journey. 
            We've designed our programs to support entrepreneurs at every stage - from students with early ideas to 
            established businesses looking to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <EligibilityCheckerPageContent
              currentQuestion={currentQuestion}
              answers={answers}
              currentStep={currentStep}
              totalSteps={totalSteps}
              persona={persona}
              showResult={showResult}
              hasValidAnswers={hasValidAnswers}
              isLastQuestion={isLastQuestion}
              onAnswerChange={handleAnswerChange}
              handleNext={handleNext}
              handleBack={handleBack}
              handleReset={handleReset}
              recommendedProgram={recommendedProgram}
            />
          </div>

          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Why Take This Assessment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <p className="text-sm">Find the perfect program for your specific needs and stage</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <p className="text-sm">Save time by focusing on the most relevant opportunities</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <p className="text-sm">Understand the benefits each program offers</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <p className="text-sm">Discover resources you might not know about</p>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-sheraa-light/50 rounded-lg border border-sheraa-primary/20">
                  <h4 className="font-medium mb-2">Need More Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're unsure about which program is right for you, our team is here to help with personalized guidance.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="/contact">Contact Our Team</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EligibilityCheckerPage;
