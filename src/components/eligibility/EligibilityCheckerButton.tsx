
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
  text?: string;
}

const EligibilityCheckerButton: React.FC<EligibilityCheckerButtonProps> = ({
  variant = "gradient",
  size = "default",
  className = "",
  useDialog = true,
  text = "Try Eligibility Checker"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (useDialog) {
      setIsOpen(true);
    }
    // If not using dialog, the link will navigate directly
  };

  const buttonContent = (
    <>
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </>
  );

  if (useDialog) {
    return (
      <>
        {variant === "gradient" ? (
          <GradientButton
            size={size as any}
            className={`flex items-center gap-2 group ${className}`}
            onClick={handleClick}
          >
            {buttonContent}
          </GradientButton>
        ) : (
          <Button
            size={size}
            className={`flex items-center gap-2 group ${className}`}
            onClick={handleClick}
          >
            {buttonContent}
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
            {buttonContent}
          </Link>
        </GradientButton>
      ) : (
        <Button
          asChild
          size={size}
          className={`flex items-center gap-2 group ${className}`}
        >
          <Link to="/eligibility">
            {buttonContent}
          </Link>
        </Button>
      )}
    </>
  );
};

export default EligibilityCheckerButton;
