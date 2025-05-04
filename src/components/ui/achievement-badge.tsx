
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Trophy, Award, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AchievementBadgeProps {
  type: "explorer" | "collector" | "expert" | "contributor";
  level?: 1 | 2 | 3;
  achieved?: boolean;
  className?: string;
}

export const AchievementBadge = ({
  type,
  level = 1,
  achieved = false,
  className
}: AchievementBadgeProps) => {
  const badges = {
    explorer: {
      icon: Star,
      title: "Resource Explorer",
      description: (lvl: number) => `Viewed ${lvl * 5} resources`,
      color: "from-blue-600 to-blue-300",
      colorLocked: "from-gray-400 to-gray-300",
    },
    collector: {
      icon: Award,
      title: "Resource Collector",
      description: (lvl: number) => `Downloaded ${lvl * 3} resources`,
      color: "from-purple-600 to-purple-300",
      colorLocked: "from-gray-400 to-gray-300",
    },
    expert: {
      icon: Trophy,
      title: "Sheraa Expert",
      description: (lvl: number) => `Accessed all key resources ${lvl} times`,
      color: "from-amber-600 to-amber-300",
      colorLocked: "from-gray-400 to-gray-300",
    },
    contributor: {
      icon: Sparkles,
      title: "Community Contributor",
      description: (lvl: number) => `Shared ${lvl} resources with others`,
      color: "from-green-600 to-green-300",
      colorLocked: "from-gray-400 to-gray-300",
    },
  };

  const { icon: Icon, title, description, color, colorLocked } = badges[type];

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn("relative", className)}>
            <motion.div 
              initial={achieved ? { scale: 0.8 } : { scale: 1 }}
              animate={achieved ? { scale: 1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Badge 
                variant="outline" 
                className={cn(
                  "p-1.5 border-2 bg-gradient-to-br",
                  achieved ? color : colorLocked,
                  achieved ? "text-white shadow-md" : "text-gray-500"
                )}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="font-medium text-xs">
                  {title} {level > 1 && Roman(level)}
                </span>
              </Badge>
              {achieved && (
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-300"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}
            </motion.div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="font-medium">{title} {level > 1 && Roman(level)}</p>
          <p className="text-xs text-muted-foreground">{description(level)}</p>
          {!achieved && <p className="text-xs mt-1 text-amber-500">Not yet achieved</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

function Roman(num: number): string {
  const romanNumerals = ["I", "II", "III", "IV", "V"];
  return romanNumerals[num - 1] || num.toString();
}
