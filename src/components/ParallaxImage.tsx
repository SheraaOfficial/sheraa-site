
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

const ParallaxImage = ({ src, alt, className = "", speed = 0.5, overlay = true }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-[120%] -top-[10%] absolute"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 mix-blend-multiply" />
      )}
    </div>
  );
};

export default ParallaxImage;
