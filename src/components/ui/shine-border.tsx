
"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowDown, ArrowUp, Shapes, Send, Check, Repeat, Download } from "lucide-react";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid h-full w-full place-items-center rounded-3xl bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-3xl before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2">
      {children}
    </div>
  );
}

export function TimelineEvent({
  label,
  message,
  icon,
  isLast = false,
}: Event & {
  isLast?: boolean;
}) {
  const iconMap = {
    "arrow-down": ArrowDown,
    "arrow-up": ArrowUp,
    "shapes": Shapes,
    "send": Send,
    "check": Check,
    "repeat": Repeat,
    "download": Download,
  };
  
  const Icon = iconMap[icon.name as keyof typeof iconMap] || Shapes;
  
  return (
    <div className="group relative -m-2 flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor
          )}
        >
          <Icon className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{label}</p>
        </div>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="w-3xl">
      <TimelineContainer>
        {timeline.map((event, i) => (
          <TimelineEvent
            key={event.message}
            isLast={i === timeline.length - 1}
            {...event}
          />
        ))}
      </TimelineContainer>
    </div>
  );
}

interface Event {
  label: string;
  message: string;
  icon: {
    name: string;
    textColor: string;
    borderColor: string;
  };
}

const timeline = [
  {
    label: "Register for SEF",
    message: "Choose your festival pass and complete registration for SEF 2026.",
    icon: {
      name: "shapes",
      textColor: "text-sheraa-sef-primary",
      borderColor: "border-sheraa-sef-primary/40",
    },
  },
  {
    label: "Plan Your Journey",
    message: "Explore zones, speakers, and activities to create your personalized SEF experience.",
    icon: {
      name: "send",
      textColor: "text-sheraa-sef-accent",
      borderColor: "border-sheraa-sef-accent/40",
    },
  },
  {
    label: "Attend SEF 2026",
    message: "Join 14,000+ attendees for two days of innovation and networking.",
    icon: {
      name: "check",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500/40",
    },
  },
  {
    label: "Connect & Collaborate",
    message: "Build lasting relationships with entrepreneurs, investors, and industry leaders.",
    icon: {
      name: "repeat",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "Transform Your Vision",
    message: "Take home insights, connections, and tools to accelerate your entrepreneurial journey.",
    icon: {
      name: "download",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
] satisfies Event[];

export { ShineBorder, Timeline };
