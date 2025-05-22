
import React from "react";
import { motion } from "framer-motion";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Sparkles } from "@/components/ui/sparkles";
import { Rocket, Lightbulb, TrendingUp, BarChart, Award } from "lucide-react";

type WordWithIconProps = {
  word: string;
  isActive: boolean;
  index: number;
}

const getIconForWord = (word: string) => {
  switch (word.toLowerCase()) {
    case "innovate":
      return <Lightbulb className="w-6 h-6 text-sheraa-orange" />;
    case "create":
      return <Rocket className="w-6 h-6 text-sheraa-primary" />;
    case "scale":
      return <TrendingUp className="w-6 h-6 text-sheraa-teal" />;
    case "transform":
      return <Award className="w-6 h-6 text-sheraa-primary" />;
    case "grow":
      return <BarChart className="w-6 h-6 text-sheraa-orange" />;
    default:
      return <Rocket className="w-6 h-6 text-sheraa-primary" />;
  }
};

const WordWithIcon: React.FC<WordWithIconProps> = ({ word, isActive, index }) => {
  const Icon = getIconForWord(word);
  
  return (
    <motion.span 
      key={index} 
      className="absolute font-bold flex items-center justify-center gap-3" 
      initial={{
        opacity: 0,
        y: 50
      }} 
      animate={{
        y: isActive ? 0 : index < 0 ? -50 : 50,
        opacity: isActive ? 1 : 0
      }} 
      transition={{
        type: "spring",
        stiffness: 50
      }}
    >
      {Icon}
      <Sparkles>
        <TextShimmer className="text-sheraa-primary dark:text-sheraa-primary">{word}</TextShimmer>
      </Sparkles>
      {Icon}
    </motion.span>
  );
};

interface RotatingWordsWithIconsProps {
  words: string[];
  activeIndex: number;
}

const RotatingWordsWithIcons: React.FC<RotatingWordsWithIconsProps> = ({ words, activeIndex }) => {
  return (
    <div className="h-[1.2em] relative flex justify-center overflow-hidden">
      {words.map((word, index) => (
        <WordWithIcon 
          key={index}
          word={word}
          isActive={activeIndex === index}
          index={index}
        />
      ))}
    </div>
  );
};

export default RotatingWordsWithIcons;
