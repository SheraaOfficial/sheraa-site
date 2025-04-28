
interface GlowProps {
  variant?: "top" | "bottom";
  className?: string;
}

export function Glow({ variant = "top", className }: GlowProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none mix-blend-normal ${
        variant === "top" ? "-top-48" : "-bottom-48"
      } ${className}`}
    >
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sheraa-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[600px] h-[400px] bg-sheraa-orange/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
