
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add the following CSS styles to your stylesheet or tailwind.config.js
// @keyframes float {
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-5px); }
//   100% { transform: translateY(0); }
// }
// .animate-float {
//   animation: float 2s ease-in-out infinite;
// }
// .animate-shimmer {
//   animation: shimmer 2s linear infinite;
// }
// @keyframes shimmer {
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// }
