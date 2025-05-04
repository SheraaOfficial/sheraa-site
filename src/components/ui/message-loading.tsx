
import React from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageLoadingProps {
  className?: string;
}

export const MessageLoading = ({ className }: MessageLoadingProps) => {
  return (
    <div className={cn("flex items-center justify-center p-2", className)}>
      <Loader className="h-4 w-4 animate-spin text-muted-foreground" />
      <span className="ml-2 text-sm text-muted-foreground">Loading...</span>
    </div>
  );
};
