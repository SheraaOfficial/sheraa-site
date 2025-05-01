
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

// Images relevant to Sheraa and entrepreneurship with lower resolution
const sheraaImages = [
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    title: "Business Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    title: "Startup Team",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    title: "Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    title: "Entrepreneur",
  },
  {
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    title: "Tech Innovation",
  },
];

export function FloatingImages() {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(sheraaImages.length).fill(false));
  const [isClient, setIsClient] = useState(false);

  // Only render on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageLoad = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  if (!isClient) return null;

  return (
    <Floating sensitivity={-0.5} className="h-full w-full absolute inset-0">
      {sheraaImages.map((image, index) => (
        <FloatingElement
          key={image.title}
          depth={index === 0 || index === 4 ? 0.5 : index === 1 || index === 3 ? 1 : 4}
          className={getPositionClass(index)}
        >
          <motion.img
            src={image.url}
            alt={image.title}
            className={`${getSizeClass(index)} object-cover hover:scale-105 duration-200 cursor-pointer transition-transform ${getRotationClass(index)} shadow-2xl rounded-xl ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages[index] ? 1 : 0 }}
            transition={{ delay: 0.1 * index }}
            loading="lazy"
            onLoad={() => handleImageLoad(index)}
          />
        </FloatingElement>
      ))}
    </Floating>
  );
}

// Helper functions to reduce repetition
function getPositionClass(index: number): string {
  switch(index) {
    case 0: return "top-[15%] left-[2%] md:top-[25%] md:left-[5%]";
    case 1: return "top-[0%] left-[8%] md:top-[6%] md:left-[11%]";
    case 2: return "top-[90%] left-[6%] md:top-[80%] md:left-[8%]";
    case 3: return "top-[0%] left-[87%] md:top-[2%] md:left-[83%]";
    case 4: return "top-[78%] left-[83%] md:top-[68%] md:left-[83%]";
    default: return "";
  }
}

function getSizeClass(index: number): string {
  switch(index) {
    case 0: return "w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24";
    case 1: return "w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48";
    case 2: return "w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64";
    case 3: return "w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56";
    case 4: return "w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80";
    default: return "";
  }
}

function getRotationClass(index: number): string {
  switch(index) {
    case 0: return "-rotate-[3deg]";
    case 1: return "-rotate-12";
    case 2: return "-rotate-[4deg]";
    case 3: return "rotate-[6deg]";
    case 4: return "rotate-[19deg]";
    default: return "";
  }
}
