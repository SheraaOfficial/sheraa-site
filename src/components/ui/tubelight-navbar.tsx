import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface NavBarProps {
  items: {
    name: string;
    url: string;
    icon?: LucideIcon;
    highlight?: boolean;
  }[];
  className?: string;
}
export function NavBar({
  items,
  className
}: NavBarProps) {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return;
}