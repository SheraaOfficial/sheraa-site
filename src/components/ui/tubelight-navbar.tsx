
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavBarProps {
  items: {
    name: string;
    url: string;
    icon?: LucideIcon;
    highlight?: boolean;
  }[];
  className?: string;
}

export function NavBar({
  items,
  className
}: NavBarProps) {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  return (
    <nav className={cn("relative z-50", className)}>
      <div className="backdrop-blur-md bg-white/10 dark:bg-slate-900/40 border border-slate-200/20 dark:border-slate-800/20 rounded-full px-4 py-2 shadow-lg">
        <ul className="flex items-center space-x-1">
          {items.map((item, index) => {
            const isActive = location.pathname === item.url;
            const Icon = item.icon;
            
            return (
              <motion.li 
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="hoverBackground"
                    className={cn(
                      "absolute inset-0 bg-white/20 dark:bg-slate-800/50 rounded-full border border-slate-200/10 dark:border-slate-700/30 backdrop-blur-sm z-0",
                      item.highlight ? "bg-gradient-to-r from-purple-500/40 to-orange-500/40 border-purple-300/20 dark:border-purple-700/20" : ""
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <Link
                  to={item.url}
                  className={cn(
                    "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2 rounded-full",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    item.highlight ? "text-purple-50" : ""
                  )}
                >
                  {Icon && <Icon size={16} className="shrink-0" />}
                  <span>{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        item.highlight 
                          ? "bg-gradient-to-r from-purple-600/80 to-orange-600/80 border-purple-500/30 shadow-lg shadow-purple-500/20" 
                          : "bg-white/20 dark:bg-slate-700/60 border border-slate-200/10 dark:border-slate-600/30"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
