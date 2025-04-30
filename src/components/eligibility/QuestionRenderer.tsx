
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Question } from "./eligibilityData";

interface QuestionRendererProps {
  question: Question;
  answers: Record<string, string | string[]>;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  answers,
  onAnswerChange,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={contentVariants}
      className="py-4"
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">{question.text}</h3>
        
        {question.type === "radio" && question.options && (
          <RadioGroup
            value={answers[question.id] as string || ""}
            onValueChange={(value) => onAnswerChange(question.id, value)}
            className="flex flex-col space-y-3"
          >
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="flex-1 cursor-pointer font-medium">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === "checkbox" && question.options && (
          <div className="flex flex-col space-y-3">
            <Label className="text-sm text-muted-foreground mb-1">
              Select all that apply
            </Label>
            {question.options.map((option) => {
              const currentAnswers = answers[question.id] as string[] || [];
              return (
                <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={option.id}
                    checked={currentAnswers.includes(option.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onAnswerChange(
                          question.id,
                          [...(currentAnswers), option.id]
                        );
                      } else {
                        onAnswerChange(
                          question.id,
                          (currentAnswers).filter(id => id !== option.id)
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
  );
};

export default QuestionRenderer;
