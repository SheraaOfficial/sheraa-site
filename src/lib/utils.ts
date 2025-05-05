import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// These animations are used by the enhanced badges and buttons
// Add the following CSS styles to the tailwind config
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

// Augment the cn function with a memoization layer for frequently used class combinations
const classNameCache = new Map<string, string>();
const MAX_CACHE_SIZE = 100;

const memoizedCn = (...inputs: ClassValue[]) => {
  // Only use caching for simple use cases to avoid memory issues
  if (inputs.length <= 2 && typeof inputs[0] === 'string') {
    // Create a cache key from the inputs
    const cacheKey = inputs.join('||');
    
    // Check if the result is already cached
    if (classNameCache.has(cacheKey)) {
      return classNameCache.get(cacheKey)!;
    }
    
    // Calculate result and store in cache
    const result = cn(...inputs);
    
    // Only cache if we haven't exceeded the max cache size
    if (classNameCache.size < MAX_CACHE_SIZE) {
      classNameCache.set(cacheKey, result);
    }
    
    return result;
  }
  
  // For more complex cases, use the original function
  return cn(...inputs);
};

// Export the enhanced version
export { memoizedCn as cn };
