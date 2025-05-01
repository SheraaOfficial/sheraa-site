
import React from "react";
import { Check, ArrowRight, RotateCcw, Sparkles as SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { TextRotate } from "@/components/ui/text-rotate";
import { Sparkles } from "@/components/ui/sparkles";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "@/components/ui/glowing-stars-card";
import { programBenefits } from "./eligibilityData";

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

  // Fun, witty messages based on program type
  const wittyMessages: { [key: string]: string[] } = {
    "startup-dojo": [
      "Welcome, young grasshopper! Your entrepreneurial journey begins!",
      "Think of this as your business boot camp, minus the push-ups!",
      "Startup Dojo: Where ideas meet reality (in the nicest way possible)"
    ],
    "startup-dojo-plus": [
      "You've got that special spark! Let's fan it into a flame!",
      "You're showing promise - we're here to help you keep those promises!",
      "Consider this your idea's growth spurt phase!"
    ],
    "s3-incubator": [
      "Ready for liftoff? Your startup's about to leave the atmosphere!",
      "$30,000 and zero equity? That's not a typo, we promise!",
      "You're not just building a startup, you're crafting your legacy!"
    ],
    "access-sharjah": [
      "Big problems need bold solutions - yours is ready for the spotlight!",
      "You're not just entering a market, you're about to transform it!",
      "Major clients are waiting for what you're building!"
    ],
    "sme-support": [
      "Established doesn't mean finished growing - your best chapter awaits!",
      "Think of us as your business's second wind!",
      "Experience meets innovation - a powerful combination!"
    ],
    "community-membership": [
      "Welcome to the club where connections become opportunities!",
      "Sometimes all you need is the right room - welcome in!",
      "You're officially part of Sharjah's innovation community!"
    ],
    "student-membership": [
      "Your student ID just got a whole new level of power!",
      "Campus entrepreneur? We've got your back!",
      "Learning and building - the ultimate student double major!"
    ],
    "early-stage-program": [
      "Every great business starts with that first crucial step!",
      "Ideas are great, but execution is everything - we're here to help!",
      "From concept to company - your journey begins now!"
    ]
  };

  // Get benefits from programBenefits imported from eligibilityData
  const benefits = programBenefits[program.id] || [];
  const wittyMessageOptions = wittyMessages[program.id] || ["We've found the perfect program for you!"];
  const randomWittyMessage = wittyMessageOptions[Math.floor(Math.random() * wittyMessageOptions.length)];

  // Make sure we have a valid link to redirect to
  const programLink = program.link || "/programs";

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="text-2xl font-bold mb-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Sparkles colors={["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA"]}>
              Your Perfect Match
            </Sparkles>
            
            <div className="h-16 mt-2 overflow-hidden text-xl">
              <TextRotate
                texts={wittyMessageOptions}
                mainClassName="text-sheraa-primary"
                rotationInterval={4000}
                staggerFrom="first"
                staggerDuration={0.02}
              />
            </div>
          </motion.div>
        </DialogTitle>
      </DialogHeader>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-4"
      >
        <GlowingStarsBackgroundCard className="rounded-xl mb-6">
          <div className="flex items-center justify-center mb-4 bg-sheraa-primary/10 w-12 h-12 rounded-full mx-auto">
            <SparklesIcon className="w-6 h-6 text-sheraa-primary" />
          </div>
          
          <GlowingStarsTitle className="text-center mb-2">
            {program.title}
          </GlowingStarsTitle>
          
          <GlowingStarsDescription className="text-center mb-6 mx-auto max-w-none">
            {program.description}
          </GlowingStarsDescription>

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
        </GlowingStarsBackgroundCard>
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
          >
            <Link to={programLink}>
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GradientButton>
        </div>
      </DialogFooter>
    </>
  );
};
