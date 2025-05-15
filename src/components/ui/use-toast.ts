import { useToast as useToastOriginal, toast as toastOriginal } from "@/hooks/use-toast";

// Re-export to keep consistent with shadcn patterns
export const useToast = useToastOriginal;
export const toast = toastOriginal;
