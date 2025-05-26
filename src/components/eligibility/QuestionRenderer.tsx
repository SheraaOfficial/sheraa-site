
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "./eligibilityData";
import { CheckCircle2, Circle } from "lucide-react";

interface QuestionRendererProps {
  question: Question;
  answers: Record<string, string | string[]>;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  answers,
  onAnswerChange,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="py-4"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <motion.h3 
          className="text-lg font-medium mb-3 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {question.text}
        </motion.h3>
        
        {question.type === "radio" && question.options && (
          <RadioGroup
            value={answers[question.id] as string || ""}
            onValueChange={(value) => onAnswerChange(question.id, value)}
            className="flex flex-col space-y-3"
          >
            <AnimatePresence>
              {question.options.map((option, index) => (
                <motion.div 
                  key={option.id} 
                  variants={itemVariants}
                  custom={index}
                  className="flex items-center space-x-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 hover:bg-sheraa-primary/5 dark:hover:bg-sheraa-primary/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 4px 20px rgba(0, 51, 102, 0.1)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAnswerChange(question.id, option.id)}
                >
                  <RadioGroupItem value={option.id} id={option.id} className="border-sheraa-primary text-sheraa-primary" />
                  <Label 
                    htmlFor={option.id} 
                    className="flex-1 cursor-pointer font-medium text-gray-800 dark:text-gray-200 group-hover:text-sheraa-primary transition-colors"
                  >
                    {option.label}
                  </Label>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: answers[question.id] === option.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-sheraa-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </RadioGroup>
        )}

        {question.type === "checkbox" && question.options && (
          <div className="flex flex-col space-y-3">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sheraa-primary/10 text-sheraa-primary text-sm font-medium mb-2 w-fit"
            >
              <Circle className="w-3 h-3" />
              Select all that apply
            </motion.div>
            <AnimatePresence>
              {question.options.map((option, index) => {
                const currentAnswers = answers[question.id] as string[] || [];
                const isSelected = currentAnswers.includes(option.id);
                
                return (
                  <motion.div 
                    key={option.id}
                    variants={itemVariants}
                    custom={index}
                    className="flex items-center space-x-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 hover:bg-sheraa-primary/5 dark:hover:bg-sheraa-primary/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 4px 20px rgba(0, 51, 102, 0.1)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (isSelected) {
                        onAnswerChange(
                          question.id,
                          currentAnswers.filter(id => id !== option.id)
                        );
                      } else {
                        onAnswerChange(
                          question.id,
                          [...currentAnswers, option.id]
                        );
                      }
                    }}
                  >
                    <Checkbox
                      id={option.id}
                      checked={isSelected}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          onAnswerChange(
                            question.id,
                            [...currentAnswers, option.id]
                          );
                        } else {
                          onAnswerChange(
                            question.id,
                            currentAnswers.filter(id => id !== option.id)
                          );
                        }
                      }}
                      className="border-sheraa-primary data-[state=checked]:bg-sheraa-primary"
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="flex-1 cursor-pointer font-medium text-gray-800 dark:text-gray-200 group-hover:text-sheraa-primary transition-colors"
                    >
                      {option.label}
                    </Label>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isSelected ? 1 : 0,
                        scale: isSelected ? 1 : 0.8
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-sheraa-primary" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default QuestionRenderer;
