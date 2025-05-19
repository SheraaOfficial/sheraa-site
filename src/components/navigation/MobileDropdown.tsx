
import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDropdownProps {
  title: string;
  icon: LucideIcon;
  items: { title: string; href: string }[];
  isActive?: boolean;
}

const MobileDropdown: React.FC<MobileDropdownProps> = memo(({ 
  title, 
  icon: Icon, 
  items,
  isActive = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="py-2">
      <button
        className={cn(
          "flex w-full items-center justify-between py-2 text-base mobile-tap-target",
          isActive && "font-medium text-primary"
        )}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="text-lg">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`dropdown-${title.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 ml-5 space-y-2 border-l pl-4 border-gray-200 dark:border-gray-700">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-2 px-1 text-base hover:text-primary transition-colors mobile-tap-target"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

MobileDropdown.displayName = "MobileDropdown";

export default MobileDropdown;
