
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EligibilityCheckerDialog from "./EligibilityCheckerDialog";

interface EligibilityCheckerButtonProps {
  variant?: "gradient" | "default";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  useDialog?: boolean;
}

const EligibilityCheckerButton: React.FC<EligibilityCheckerButtonProps> = ({
  variant = "gradient",
  size = "default",
  className = "",
  useDialog = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (useDialog) {
      setIsOpen(true);
    }
    // If not using dialog, the link will navigate directly
  };

  if (useDialog) {
    return (
      <>
        {variant === "gradient" ? (
          <GradientButton
            size={size as any}
            className={`flex items-center gap-2 group ${className}`}
            onClick={handleClick}
          >
            <span>Try Eligibility Checker</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </GradientButton>
        ) : (
          <Button
            size={size}
            className={`flex items-center gap-2 group ${className}`}
            onClick={handleClick}
          >
            <span>Try Eligibility Checker</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        )}

        <EligibilityCheckerDialog open={isOpen} onOpenChange={setIsOpen} />
      </>
    );
  }

  return (
    <>
      {variant === "gradient" ? (
        <GradientButton
          asChild
          size={size as any}
          className={`flex items-center gap-2 group ${className}`}
        >
          <Link to="/eligibility">
            <span>Try Eligibility Checker</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </GradientButton>
      ) : (
        <Button
          asChild
          size={size}
          className={`flex items-center gap-2 group ${className}`}
        >
          <Link to="/eligibility">
            <span>Try Eligibility Checker</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      )}
    </>
  );
};

export default EligibilityCheckerButton;
