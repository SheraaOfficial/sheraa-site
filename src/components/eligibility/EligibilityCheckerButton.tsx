
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import EligibilityCheckerDialog from "./EligibilityCheckerDialog";

interface EligibilityCheckerButtonProps {
  variant?: "gradient" | "default";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
}

const EligibilityCheckerButton: React.FC<EligibilityCheckerButtonProps> = ({
  variant = "gradient",
  size = "default",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {variant === "gradient" ? (
        <GradientButton
          size={size as any}
          className={`flex items-center gap-2 group ${className}`}
          onClick={() => setIsOpen(true)}
        >
          <span>Try Eligibility Checker</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </GradientButton>
      ) : (
        <Button
          size={size}
          className={`flex items-center gap-2 group ${className}`}
          onClick={() => setIsOpen(true)}
        >
          <span>Try Eligibility Checker</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      )}

      <EligibilityCheckerDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default EligibilityCheckerButton;
