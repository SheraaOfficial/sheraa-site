
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  program?: string;
  achievement?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, program, achievement }, i) => (
                <div className="p-6 rounded-3xl border shadow-lg shadow-sheraa-primary/10 max-w-xs w-full bg-white dark:bg-gray-800" key={i}>
                  <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{text}</div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program && (
                      <Badge variant="soft-primary" size="sm">
                        {program}
                      </Badge>
                    )}
                    {achievement && (
                      <Badge variant="gradient" size="sm">
                        {achievement}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-900 dark:text-white">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-sm text-gray-600 dark:text-gray-400">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
