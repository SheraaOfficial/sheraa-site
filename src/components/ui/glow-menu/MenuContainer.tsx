
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

interface MenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  activeItem?: string;
  onItemClick?: (label: string) => void;
  children: React.ReactNode;
}

export const MenuContainer = React.forwardRef<HTMLDivElement, MenuContainerProps>(
  ({ className, children, ...props }, ref) => {
    const { 
      id, 
      style, 
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      role,
    } = props;

    return (
      <motion.nav
        ref={ref}
        id={id}
        style={style}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        role={role}
        className={cn(
          "relative p-1 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl",
          className,
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sheraa-primary/5 via-sheraa-teal/5 to-sheraa-primary/5 pointer-events-none" />
        
        <ul className="flex items-center gap-1 relative z-10">
          {children}
        </ul>
      </motion.nav>
    );
  },
);

MenuContainer.displayName = "MenuContainer";
