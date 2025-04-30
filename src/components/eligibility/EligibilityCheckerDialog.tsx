
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EligibilityResult } from "./EligibilityResult";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface EligibilityCheckerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Question {
  id: string;
  text: string;
  type: "radio" | "checkbox" | "multi-select";
  options?: {
    id: string;
    label: string;
    persona?: string;
  }[];
  dependsOn?: {
    questionId: string;
    answerId: string;
  };
}

interface ProgramRecommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  criteria: {
    [key: string]: string[] | boolean;
  };
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

  // Define all questions for the eligibility flow
  const questions: Question[] = [
    {
      id: "persona",
      text: "Which of the following best describes you?",
      type: "radio",
      options: [
        { id: "student", label: "Student or recent graduate with a business idea", persona: "student" },
        { id: "founder", label: "Founder of an early-stage startup", persona: "founder" },
        { id: "established", label: "Leader of an established business seeking growth", persona: "sme" },
        { id: "global", label: "Innovator with a solution to global/local challenges", persona: "global" }
      ]
    },
    // Student path questions
    {
      id: "studentStage",
      text: "What stage is your idea at?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "student" },
      options: [
        { id: "concept", label: "Just a concept, not yet developed" },
        { id: "prototype", label: "Working on a prototype/MVP" },
        { id: "validated", label: "MVP with some user validation" }
      ]
    },
    {
      id: "studentUniversity",
      text: "Are you currently enrolled in a university in the UAE?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "student" },
      options: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" }
      ]
    },
    // Founder path questions
    {
      id: "founderStage",
      text: "What stage is your startup at?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "founder" },
      options: [
        { id: "ideaStage", label: "Idea stage, no product yet" },
        { id: "mvp", label: "MVP built, seeking product-market fit" },
        { id: "revenue", label: "Generating revenue, looking to scale" }
      ]
    },
    {
      id: "founderFunding",
      text: "What is your current funding situation?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "founder" },
      options: [
        { id: "bootstrap", label: "Self-funded/Bootstrapped" },
        { id: "seed", label: "Pre-seed/Seed funding raised" },
        { id: "series", label: "Series A or beyond" }
      ]
    },
    {
      id: "founderTech",
      text: "Is your business model tech-enabled?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "founder" },
      options: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" }
      ]
    },
    {
      id: "founderLocation",
      text: "Are you willing to operate in Sharjah/UAE?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "founder" },
      options: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" }
      ]
    },
    // SME path questions
    {
      id: "smeSize",
      text: "How many employees does your business have?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "sme" },
      options: [
        { id: "micro", label: "1-9 employees" },
        { id: "small", label: "10-49 employees" },
        { id: "medium", label: "50-249 employees" },
        { id: "large", label: "250+ employees" }
      ]
    },
    {
      id: "smeAge",
      text: "How long has your business been operating?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "sme" },
      options: [
        { id: "new", label: "Less than 2 years" },
        { id: "established", label: "2-5 years" },
        { id: "mature", label: "More than 5 years" }
      ]
    },
    {
      id: "smeSector",
      text: "Which sector does your business operate in?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "sme" },
      options: [
        { id: "manufacturing", label: "Manufacturing/CPG" },
        { id: "creative", label: "Creative Industries" },
        { id: "sustainability", label: "Sustainability" },
        { id: "edtech", label: "EdTech" },
        { id: "other", label: "Other" }
      ]
    },
    // Global innovator path questions
    {
      id: "globalSector",
      text: "Which sector does your solution address?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "global" },
      options: [
        { id: "agritech", label: "AgriTech/Food Security" },
        { id: "sustainability", label: "Sustainability/Waste Management" },
        { id: "creative", label: "Creative Industries" },
        { id: "other", label: "Other" }
      ]
    },
    {
      id: "globalMarket",
      text: "Have you validated your solution in any market?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "global" },
      options: [
        { id: "yes", label: "Yes, in one or more markets" },
        { id: "limited", label: "Limited validation so far" },
        { id: "no", label: "No validation yet" }
      ]
    },
    {
      id: "globalExpansion",
      text: "Are you interested in expanding to Sharjah/UAE?",
      type: "radio",
      dependsOn: { questionId: "persona", answerId: "global" },
      options: [
        { id: "yes", label: "Yes, that's a priority market" },
        { id: "maybe", label: "Open to it, but not a priority" },
        { id: "no", label: "Not at this time" }
      ]
    },
  ];

  // Define program recommendations based on criteria
  const programRecommendations: ProgramRecommendation[] = [
    {
      id: "startup-dojo",
      title: "Startup Dojo",
      description: "An 8-week summer incubation program focused on transforming student ideas into viable entrepreneurial solutions through hands-on training and mentorship.",
      link: "/programs/start-young",
      criteria: {
        persona: ["student"],
        studentStage: ["concept", "prototype"],
        studentUniversity: ["yes"]
      }
    },
    {
      id: "startup-dojo-plus",
      title: "Startup Dojo+",
      description: "An intensive accelerator program for top-performing teams emerging from Startup Dojo, offering bespoke attention to help validate and build concepts further.",
      link: "/programs/start-young",
      criteria: {
        persona: ["student"],
        studentStage: ["validated"],
        studentUniversity: ["yes"]
      }
    },
    {
      id: "s3-incubator",
      title: "S3 Incubator",
      description: "Sharjah Startup Studio provides equity-free funding and support to help tech-enabled startups achieve product-market fit and scale effectively over six months.",
      link: "/programs/s3-incubator",
      criteria: {
        persona: ["founder"],
        founderStage: ["mvp", "revenue"],
        founderTech: ["yes"],
        founderLocation: ["yes"]
      }
    },
    {
      id: "access-sharjah",
      title: "Access Sharjah Challenge",
      description: "A global competition inviting growth-stage startups to address real-world challenges faced by leading entities in Sharjah, with POC grants and direct market access.",
      link: "/programs/access-sharjah",
      criteria: {
        persona: ["global"],
        globalMarket: ["yes", "limited"],
        globalExpansion: ["yes", "maybe"]
      }
    },
    {
      id: "sme-support",
      title: "SME Support",
      description: "Tailored resources and connections for established Small and Medium Enterprises seeking growth and innovation support within Sharjah.",
      link: "/programs/sme-support",
      criteria: {
        persona: ["sme"],
        smeSize: ["micro", "small", "medium"],
        smeSector: ["manufacturing", "creative", "sustainability", "edtech", "other"]
      }
    },
    {
      id: "community-membership",
      title: "Sheraa Community Membership",
      description: "Access essential resources, co-working spaces, and our vibrant network to support your entrepreneurial journey on flexible terms.",
      link: "/community/join",
      criteria: {
        persona: ["founder", "sme", "global"],
        founderLocation: ["yes", undefined],
        globalExpansion: ["yes", "maybe", undefined]
      }
    }
  ];

  // Get current question based on steps and previous answers
  const getCurrentQuestion = () => {
    return questions.filter(question => {
      // Handle questions with dependencies
      if (question.dependsOn) {
        const { questionId, answerId } = question.dependsOn;
        return answers[questionId] === answerId;
      }
      // Handle first question (no dependencies)
      return !question.dependsOn;
    })[currentStep];
  };

  const currentQuestion = getCurrentQuestion();

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
      const nextQuestions = questions.filter(question => {
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
  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Get recommended program based on answers
  const getRecommendedProgram = () => {
    for (const program of programRecommendations) {
      let isMatch = true;

      for (const [criteriaKey, allowedValues] of Object.entries(program.criteria)) {
        if (answers[criteriaKey] !== undefined) {
          if (Array.isArray(allowedValues)) {
            // Fix: Check if the current answer is included in the allowed values array
            if (!allowedValues.includes(answers[criteriaKey] as string)) {
              isMatch = false;
              break;
            }
          } else if (allowedValues !== answers[criteriaKey]) {
            // This is for boolean criteria
            isMatch = false;
            break;
          }
        }
      }

      if (isMatch) {
        return program;
      }
    }

    // Default to community membership if no specific match
    return programRecommendations.find(p => p.id === "community-membership");
  };

  // Reset the form
  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setPersona(null);
  };

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
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
              <motion.div
                key={currentQuestion?.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                className="py-4"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">{currentQuestion?.text}</h3>
                  
                  {currentQuestion?.type === "radio" && currentQuestion.options && (
                    <RadioGroup
                      value={answers[currentQuestion.id] as string || ""}
                      onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                      className="flex flex-col space-y-3"
                    >
                      {currentQuestion.options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer font-medium">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {currentQuestion?.type === "checkbox" && (
                    <div className="flex flex-col space-y-3">
                      <Label className="text-sm text-muted-foreground mb-1">
                        Select all that apply
                      </Label>
                      {currentQuestion.options?.map((option) => {
                        const currentAnswers = answers[currentQuestion.id] as string[] || [];
                        return (
                          <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50">
                            <Checkbox
                              id={option.id}
                              checked={currentAnswers.includes(option.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAnswerChange(
                                    currentQuestion.id,
                                    [...(currentAnswers as string[]), option.id]
                                  );
                                } else {
                                  handleAnswerChange(
                                    currentQuestion.id,
                                    (currentAnswers as string[]).filter(id => id !== option.id)
                                  );
                                }
                              }}
                            />
                            <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
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
                {persona && currentStep === questions.filter(q => {
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
            program={getRecommendedProgram()} 
            onReset={handleReset}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EligibilityCheckerDialog;
