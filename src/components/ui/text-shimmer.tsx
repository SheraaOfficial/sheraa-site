
import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export const TextShimmer = ({ children, className }: TextShimmerProps) => {
  return (
    <span
      className={cn(
        "inline-flex animate-text-shimmer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};
