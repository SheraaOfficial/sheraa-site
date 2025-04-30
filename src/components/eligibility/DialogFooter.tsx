
import React from "react";
import { DialogFooter as ShardcnDialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DialogFooterProps {
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  isLastQuestion: boolean;
  hasValidAnswers: boolean;
}

const DialogFooter: React.FC<DialogFooterProps> = ({ 
  onBack, 
  onNext, 
  canGoBack, 
  isLastQuestion,
  hasValidAnswers
}) => {
  return (
    <ShardcnDialogFooter className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={!canGoBack}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <GradientButton 
        onClick={onNext} 
        className="flex items-center gap-2"
        disabled={!hasValidAnswers}
      >
        {isLastQuestion ? "See Results" : "Next"}
        <ArrowRight className="h-4 w-4" />
      </GradientButton>
    </ShardcnDialogFooter>
  );
};

export default DialogFooter;
