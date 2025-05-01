
"use client"

import React from "react";
import { motion, MotionProps, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGroupProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  variants?: Variants;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  className?: string;
  children: React.ReactNode;
}

export function AnimatedGroup({
  variants = {
    initial: { 
      opacity: 0 
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    item: {
      opacity: 0, 
      y: 20,
    },
    itemAnimate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    }
  },
  initial = "initial",
  animate = "animate",
  transition,
  className,
  children,
  ...props
}: AnimatedGroupProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
