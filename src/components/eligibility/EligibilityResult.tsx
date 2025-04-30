
import React from "react";
import { Check, ArrowRight, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface ProgramRecommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  criteria: {
    [key: string]: string[] | boolean;
  };
}

interface EligibilityResultProps {
  program: ProgramRecommendation | undefined;
  onReset: () => void;
  onClose: () => void;
}

export const EligibilityResult: React.FC<EligibilityResultProps> = ({ 
  program, 
  onReset,
  onClose
}) => {
  if (!program) {
    return (
      <div className="py-6 text-center">
        <h3 className="text-lg font-medium mb-4">No matching program found</h3>
        <p className="text-muted-foreground mb-6">
          Based on your answers, we couldn't find a specific match. Please contact us directly for personalized guidance.
        </p>
        <Button onClick={onReset}>Try Again</Button>
      </div>
    );
  }

  // Program recommendations based on the program ID
  const programBenefits: { [key: string]: string[] } = {
    "startup-dojo": [
      "8-week intensive entrepreneurial training",
      "Mentorship from industry experts",
      "Networking with peers and ecosystem players",
      "Pathway to further Sheraa programs",
      "Top teams may receive grants and business licenses"
    ],
    "startup-dojo-plus": [
      "Focused accelerator for promising ideas",
      "Bespoke mentorship and guidance",
      "Funding opportunities for top teams",
      "Fast-track to S3 Incubator consideration",
      "Showcase opportunities to partners and investors"
    ],
    "s3-incubator": [
      "$30,000 equity-free pre-seed funding",
      "6-month customized growth program",
      "Expert mentorship and operational support",
      "Free 1-year Sharjah business license",
      "Access to 30+ experienced mentors and Entrepreneurs-in-Residence"
    ],
    "access-sharjah": [
      "Equity-free POC grants (up to AED 250,000)",
      "Direct access to major industry clients",
      "Validation and credibility in the UAE market",
      "Support with licensing and setup in Sharjah",
      "Visibility at major regional tech events"
    ],
    "sme-support": [
      "Access to finance through preferential terms",
      "Market access and export development support",
      "Innovation and technology adoption assistance",
      "Capacity building and expert mentorship",
      "Integration into Sheraa's ecosystem network"
    ],
    "community-membership": [
      "Free co-working space access at Sheraa hubs",
      "Community platform access for networking",
      "Investor and partner introductions",
      "Expert mentor network access",
      "Subsidized free zone incorporation options"
    ]
  };

  const benefits = programBenefits[program.id] || [];

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Recommended Program
          </motion.div>
        </DialogTitle>
      </DialogHeader>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-4"
      >
        <div className="bg-sheraa-light border border-sheraa-primary/20 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-4 bg-sheraa-primary/10 w-12 h-12 rounded-full mx-auto">
            <Check className="w-6 h-6 text-sheraa-primary" />
          </div>
          <h3 className="text-xl font-semibold text-center text-sheraa-primary mb-2">
            {program.title}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {program.description}
          </p>

          <h4 className="font-medium text-sm mb-3">Program Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                <span className="text-sm">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <Button variant="outline" onClick={onReset} className="flex items-center gap-2 w-full sm:w-auto">
          <RotateCcw className="h-4 w-4" /> 
          Try Again
        </Button>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
          <GradientButton 
            asChild 
            className="flex items-center gap-2 w-full sm:w-auto"
            onClick={onClose}
          >
            <Link to={program.link}>
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GradientButton>
        </div>
      </DialogFooter>
    </>
  );
};
