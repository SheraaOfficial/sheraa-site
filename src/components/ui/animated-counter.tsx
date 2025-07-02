import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric value from string
  const getNumericValue = (val: string | number): number => {
    if (typeof val === 'number') return val;
    // Remove non-numeric characters except decimal points
    const numericString = val.toString().replace(/[^\d.-]/g, '');
    return parseFloat(numericString) || 0;
  };

  const numericValue = getNumericValue(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 25,
    stiffness: 100,
    restDelta: 0.001
  });

  // Format number with separators
  const formatNumber = (num: number): string => {
    const formattedNum = num.toFixed(decimals);
    const parts = formattedNum.split('.');
    
    // Add thousand separators
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    
    return decimals > 0 ? parts.join('.') : parts[0];
  };

  // Preserve original formatting for non-numeric parts
  const preserveFormatting = (original: string, formatted: string): string => {
    if (typeof value !== 'string') return formatted;
    
    // Check for special characters in original that should be preserved
    const hasPlus = original.includes('+');
    const hasPercent = original.includes('%');
    const hasDollar = original.includes('$');
    const hasM = original.toLowerCase().includes('m');
    const hasK = original.toLowerCase().includes('k');
    
    let result = formatted;
    
    if (hasPlus && !result.includes('+')) result += '+';
    if (hasPercent && !result.includes('%')) result += '%';
    if (hasDollar && !result.includes('$')) result = '$' + result;
    if (hasM && !result.toLowerCase().includes('m')) result += 'M';
    if (hasK && !result.toLowerCase().includes('k')) result += 'K';
    
    return result;
  };

  useEffect(() => {
    if (!isInView) return;

    const unsubscribe = spring.on('change', (latest) => {
      const formatted = formatNumber(latest);
      const withFormatting = preserveFormatting(value.toString(), formatted);
      setDisplayValue(withFormatting);
    });

    // Start animation
    motionValue.set(numericValue);

    return () => unsubscribe();
  }, [isInView, numericValue, spring, motionValue, value, decimals, separator]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {prefix}
      <motion.span
        key={displayValue}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayValue}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

// Specialized counter for metrics with enhanced animations
interface MetricCounterProps extends AnimatedCounterProps {
  label: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  glowColor?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  label,
  icon: Icon,
  trend = 'neutral',
  trendValue,
  glowColor = 'rgb(59, 130, 246)',
  ...counterProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  };

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {Icon && (
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 150,
            damping: 12
          }}
        >
          <div 
            className="p-4 rounded-2xl"
            style={{
              background: `radial-gradient(circle, ${glowColor}20 0%, transparent 70%)`,
              boxShadow: `0 0 30px ${glowColor}30`
            }}
          >
            <Icon className={`w-8 h-8`} style={{ color: glowColor }} />
          </div>
        </motion.div>
      )}
      
      <motion.div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          filter: `drop-shadow(0 0 10px ${glowColor}50)`
        }}
      >
        <AnimatedCounter {...counterProps} />
      </motion.div>
      
      <motion.p
        className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {label}
      </motion.p>
      
      {trendValue && (
        <motion.div
          className={`text-sm font-medium ${trendColors[trend]}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          {trendValue}
        </motion.div>
      )}
    </motion.div>
  );
};