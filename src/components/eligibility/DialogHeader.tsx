
import React from "react";
import { DialogHeader as ShardcnDialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles } from "@/components/ui/sparkles";
import EligibilityProgress from "./EligibilityProgress";

interface DialogHeaderProps {
  persona: string | null;
  currentStep: number;
  totalSteps: number;
  showProgress?: boolean;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ 
  persona, 
  currentStep, 
  totalSteps,
  showProgress = true
}) => {
  return (
    <ShardcnDialogHeader>
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
      
      {showProgress && persona && (
        <EligibilityProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
        />
      )}
    </ShardcnDialogHeader>
  );
};

export default DialogHeader;
