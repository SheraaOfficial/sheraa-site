
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgramRecommendation, programBenefits } from "./eligibilityData";

interface EligibilityResultProps {
  program?: ProgramRecommendation;
  onReset: () => void;
  onClose: () => void;
}

export const EligibilityResult: React.FC<EligibilityResultProps> = ({ 
  program, 
  onReset,
  onClose,
}) => {
  if (!program) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
          <h3 className="text-2xl font-bold">No Specific Recommendation</h3>
          <p className="text-muted-foreground">
            Based on your answers, we don't have a specific program recommendation. 
            Please explore all our programs or contact us directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Try Again
          </Button>
          <Link to="/programs" onClick={onClose}>
            <GradientButton className="w-full sm:w-auto flex items-center gap-2">
              Explore All Programs <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
        <h3 className="text-2xl font-bold">We Found a Match!</h3>
        <p className="text-muted-foreground">
          Based on your answers, we recommend:
        </p>
      </div>

      <div className="bg-gradient-to-br from-sheraa-primary/5 to-sheraa-light/80 rounded-lg p-6 border border-sheraa-primary/10">
        <h4 className="text-xl font-bold text-sheraa-primary mb-2">{program.title}</h4>
        <p className="mb-4 text-muted-foreground">{program.description}</p>
        
        <div className="space-y-3">
          <h5 className="font-medium text-sm">Program Benefits:</h5>
          <ul className="space-y-2">
            {programBenefits[program.id]?.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Try Again
        </Button>
        
        <div className="flex gap-2">
          <Link to="/programs" onClick={onClose} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              All Programs
            </Button>
          </Link>
          
          <Link to={program.link} onClick={onClose} className="w-full sm:w-auto">
            <GradientButton className="w-full sm:w-auto flex items-center gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
