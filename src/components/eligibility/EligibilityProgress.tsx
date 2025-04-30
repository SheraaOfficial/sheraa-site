
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
  const progressPercentage = totalSteps > 0 
    ? Math.min(Math.round((currentStep / totalSteps) * 100), 100)
    : 0;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs text-muted-foreground mb-2">
        <span>Progress</span>
        <span>{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};

export default EligibilityProgress;
