
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface EligibilityCheckerButtonProps {
  variant?: "default" | "gradient" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  className?: string;
}

const EligibilityCheckerButton: React.FC<EligibilityCheckerButtonProps> = ({
  variant = "default",
  size = "md", 
  text = "Check My Eligibility",
  className
}) => {
  const baseClasses = "inline-flex items-center gap-2 font-bold transition-all duration-300";
  
  const variantClasses = {
    default: "bg-sheraa-primary hover:bg-sheraa-primary/90",
    gradient: "bg-gradient-to-r from-sheraa-primary to-sheraa-secondary hover:shadow-xl",
    outline: "border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10"
  };

  return (
    <Button 
      asChild 
      size={size}
      variant={variant === "outline" ? "outline" : "default"}
      className={cn(
        baseClasses,
        variant !== "outline" && variantClasses[variant],
        variant === "outline" && variantClasses.outline,
        className
      )}
    >
      <Link to="/eligibility">
        <Target className="w-5 h-5" />
        <span>{text}</span>
        <Zap className="w-4 h-4 animate-pulse" />
      </Link>
    </Button>
  );
};

export default EligibilityCheckerButton;
