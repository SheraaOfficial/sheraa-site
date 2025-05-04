
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { useDevicePerformance } from "@/hooks/use-mobile";

// Replace with Sheraa uploaded images
const sheraaImages = [
  {
    url: "/lovable-uploads/a7594ccb-820e-40d4-addc-1cf4dfebadfe.png",
    title: "Sheraa Team Member",
  },
  {
    url: "/lovable-uploads/962e9262-6759-495c-ad9e-5f8fc0043698.png",
    title: "Sheraa Workshop Session",
  },
  {
    url: "/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png",
    title: "Sheraa Panel Discussion",
  },
  {
    url: "/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png",
    title: "Sheraa Startup Team",
  },
  {
    url: "/lovable-uploads/78dc4101-2481-4c13-a19f-62dbefeae768.png",
    title: "Sheraa Award Ceremony",
  },
];

export function FloatingImages() {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(sheraaImages.length).fill(false));
  const [isClient, setIsClient] = useState(false);
  const devicePerformance = useDevicePerformance();
  const imageRefs = useRef<Array<{ src: string; loading: boolean }>>([]);

  // Only render on client-side
  useEffect(() => {
    setIsClient(true);
    // Initialize image refs with default values
    imageRefs.current = sheraaImages.map(image => ({
      src: image.url,
      loading: true
    }));
  }, []);

  // Reduce the number of images based on device performance
  const optimizedImages = devicePerformance === 'low' ? sheraaImages.slice(0, 3) : sheraaImages;

  const handleImageLoad = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  // Don't render anything on server-side
  if (!isClient) return null;

  return (
    <Floating 
      sensitivity={devicePerformance === 'low' ? -0.2 : -0.5} 
      className="h-full w-full absolute inset-0"
    >
      {optimizedImages.map((image, index) => {
        // Use the precomputed image src from refs instead of a hook
        return (
          <FloatingElement
            key={image.title}
            depth={index === 0 || index === 4 ? 0.5 : index === 1 || index === 3 ? 1 : 4}
            className={getPositionClass(index)}
          >
            <motion.img
              src={image.url} // Directly use the image URL
              alt={image.title}
              className={`${getSizeClass(index)} object-cover hover:scale-105 duration-200 cursor-pointer transition-transform ${getRotationClass(index)} shadow-2xl rounded-xl ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedImages[index] ? 1 : 0 }}
              transition={{ delay: 0.1 * index }}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
          </FloatingElement>
        );
      })}
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
