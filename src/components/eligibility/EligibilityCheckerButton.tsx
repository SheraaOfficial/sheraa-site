
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EligibilityCheckerDialog from "./EligibilityCheckerDialog";
import { useToast } from "@/hooks/use-toast";

interface EligibilityCheckerButtonProps {
  variant?: "gradient" | "default";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  useDialog?: boolean;
  text?: string;
  onBeforeOpen?: () => boolean;
}

const EligibilityCheckerButton: React.FC<EligibilityCheckerButtonProps> = ({
  variant = "gradient",
  size = "default",
  className = "",
  useDialog = true,
  text = "Try Eligibility Checker",
  onBeforeOpen
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    if (useDialog) {
      // Check if there's a pre-open condition to verify
      if (onBeforeOpen && !onBeforeOpen()) {
        // If condition fails, don't open dialog
        return;
      }
      
      setIsOpen(true);
    }
    // If not using dialog, the link will navigate directly
  };

  const buttonContent = (
    <>
      <span className="whitespace-nowrap">{text}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
    </>
  );

  if (useDialog) {
    const ButtonComponent = variant === "gradient" ? GradientButton : Button;
    
    return (
      <>
        <ButtonComponent
          size={size as any}
          className={`flex items-center gap-2 group ${className}`}
          onClick={handleClick}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          {buttonContent}
        </ButtonComponent>

        <EligibilityCheckerDialog 
          open={isOpen} 
          onOpenChange={setIsOpen} 
        />
      </>
    );
  }

  // When using as a direct link
  if (variant === "gradient") {
    return (
      <GradientButton
        asChild
        size={size as any}
        className={`flex items-center gap-2 group ${className}`}
      >
        <Link to="/eligibility" aria-label="Open eligibility checker">
          {buttonContent}
        </Link>
      </GradientButton>
    );
  }

  return (
    <Button
      asChild
      size={size}
      className={`flex items-center gap-2 group ${className}`}
    >
      <Link to="/eligibility" aria-label="Open eligibility checker">
        {buttonContent}
      </Link>
    </Button>
  );
};

export default React.memo(EligibilityCheckerButton);
