
import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 40,
  strokeWidth = 4,
  color = "stroke-sheraa-primary",
  bgColor = "stroke-gray-200",
  children,
  className,
  showPercentage = false
}) => {
  // Calculate circle parameters
  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(() => center - strokeWidth, [center, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const strokeDashoffset = useMemo(() => 
    circumference - (percentage / 100) * circumference, 
    [circumference, percentage]
  );

  return (
    <div 
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={bgColor}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={color}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (showPercentage && (
          <span className="text-xs font-medium">{Math.round(percentage)}%</span>
        ))}
      </div>
    </div>
  );
};
