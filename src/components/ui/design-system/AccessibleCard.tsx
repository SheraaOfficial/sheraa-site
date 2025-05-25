
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useMotion } from './MotionProvider';

interface AccessibleCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  tabIndex?: number;
}

export const AccessibleCard: React.FC<AccessibleCardProps> = ({
  children,
  className,
  interactive = false,
  href,
  onClick,
  ariaLabel,
  tabIndex = 0
}) => {
  const { scaleIn } = useMotion();
  
  const baseClasses = cn(
    'card-base',
    {
      'card-interactive focus-visible': interactive,
      'cursor-pointer': interactive && (href || onClick)
    },
    className
  );

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (interactive && (event.key === 'Enter' || event.key === ' ') && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  const content = (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "spring" }}
      className={baseClasses}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={interactive ? tabIndex : undefined}
      role={interactive ? (onClick ? 'button' : 'link') : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </motion.div>
  );

  if (href && interactive) {
    return (
      <a href={href} className="block" tabIndex={-1}>
        {content}
      </a>
    );
  }

  return content;
};
