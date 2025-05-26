
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MenuItem {
  icon: LucideIcon | React.FC;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

interface MenuItemProps {
  item: MenuItem;
  index: number;
  isActive: boolean;
  onItemClick?: (label: string) => void;
}

const itemVariants = {
  initial: { 
    scale: 1,
    y: 0
  },
  hover: { 
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
};

const glowVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    filter: "blur(8px)"
  },
  hover: {
    opacity: 1,
    scale: 1.2,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
  },
};

export const MenuItem: React.FC<MenuItemProps> = ({ item, index, isActive, onItemClick }) => {
  const Icon = item.icon;
  const isSEF = item.label === "SEF";

  return (
    <motion.li 
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <button
        onClick={() => onItemClick?.(item.label)}
        className="relative block w-full group"
      >
        <motion.div
          className="relative overflow-hidden rounded-xl"
          variants={itemVariants}
          initial="initial"
          whileHover="hover"
        >
          {/* Active background glow */}
          {isActive && (
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                background: item.gradient,
                borderRadius: "12px",
              }}
              variants={glowVariants}
              initial="initial"
              animate="hover"
            />
          )}
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, ${item.iconColor.replace('text-', '').replace('-500', '')}/10 0%, ${item.iconColor.replace('text-', '').replace('-500', '')}/20 50%, transparent 100%)`,
              borderRadius: "12px",
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Menu item content */}
          <div
            className={cn(
              "relative z-10 flex items-center gap-3 px-4 py-3 transition-all duration-300",
              "text-sm font-medium rounded-xl",
              isActive
                ? "text-white shadow-lg" 
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
              isSEF && !isActive && "bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-secondary/10"
            )}
          >
            <motion.span
              className={cn(
                "transition-all duration-300",
                isActive 
                  ? "text-white drop-shadow-sm" 
                  : cn(
                      item.iconColor,
                      "group-hover:scale-110 group-hover:drop-shadow-sm"
                    ),
                isSEF && "text-sheraa-sef-primary"
              )}
              whileHover={{ rotate: isSEF ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-5 w-5" />
            </motion.span>
            
            <span 
              className={cn(
                "transition-all duration-300",
                isActive && "drop-shadow-sm",
                isSEF && !isActive && "font-semibold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent"
              )}
            >
              {item.label}
            </span>
            
            {isSEF && !isActive && (
              <motion.span
                className="text-xs"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎪
              </motion.span>
            )}
          </div>
        </motion.div>
      </button>
    </motion.li>
  );
};
