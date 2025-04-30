
import React from "react";
import { Progress } from "../ui/progress";

interface EligibilityProgressProps {
  currentStep: number;
  totalSteps: number;
}

const EligibilityProgress: React.FC<EligibilityProgressProps> = ({
  currentStep,
  totalSteps
}) => {
  // Ensure we don't divide by zero and cap progress at 100%
  const progressPercentage = totalSteps > 0 
    ? Math.min(Math.round((currentStep / totalSteps) * 100), 100)
    : 0;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs text-muted-foreground mb-2">
        <span>Progress</span>
        <span>{progressPercentage}% Complete</span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-muted"
        indicatorClassName="bg-sheraa-primary" 
      />
    </div>
  );
};

export default EligibilityProgress;
