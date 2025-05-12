
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { usePreloadImages } from "@/hooks/use-image-performance";
import { useIsMobile } from "@/hooks/useDeviceDetection";

// Sheraa uploaded images
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
  {
    url: "/lovable-uploads/1c771ddf-b819-4587-bd05-7547b8dca2b5.png",
    title: "Sheraa Workshop Group",
  },
  {
    url: "/lovable-uploads/5c7170ff-c318-404d-82fa-af5c349154db.png",
    title: "Sheraa Presentation",
  },
  {
    url: "/lovable-uploads/93efd6a3-c496-43d2-9401-ad6821c1352b.png",
    title: "Sheraa Award Winners",
  },
];

export function FloatingImages() {
  const [isClient, setIsClient] = useState(false);
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  
  // Memoize optimized images with even more aggressive reduction for mobile
  const optimizedImages = useMemo(() => {
    // On mobile low-end devices, show only 1-2 images
    if (isMobile && devicePerformance === 'low') {
      return sheraaImages.slice(0, 2);
    }
    // On mobile mid/high devices, show 3 images
    else if (isMobile) {
      return sheraaImages.slice(0, 3);
    }
    // On desktop low-end devices, show 3 images
    else if (devicePerformance === 'low') {
      return sheraaImages.slice(0, 3);
    }
    // Desktop mid/high devices get all images
    return sheraaImages;
  }, [devicePerformance, isMobile]);

  // Preload images with lower priority on mobile
  const { loadedImages, isImageLoaded } = usePreloadImages(
    optimizedImages.map(img => img.url),
    !isMobile // High priority only on desktop
  );

  // Only render on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything on server-side
  if (!isClient) return null;

  // Use reduced motion for mobile
  const sensitivity = isMobile 
    ? (devicePerformance === 'low' ? 0 : -0.1) 
    : (devicePerformance === 'low' ? -0.2 : -0.5);

  return (
    <Floating 
      sensitivity={sensitivity}
      className="h-full w-full absolute inset-0"
    >
      <AnimatePresence>
        {optimizedImages.map((image, index) => (
          <FloatingElement
            key={image.title}
            depth={getImageDepth(index, isMobile)}
            className={getPositionClass(index, isMobile)}
          >
            <motion.img
              src={image.url} 
              alt={image.title}
              className={`${getSizeClass(index, isMobile)} object-cover ${isMobile ? '' : 'hover:scale-105'} duration-200 ${isMobile ? '' : 'cursor-pointer'} transition-transform ${getRotationClass(index)} shadow-2xl rounded-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageLoaded(image.url) ? 1 : 0 }}
              transition={{ delay: isMobile ? 0 : 0.1 * index }}
              loading="lazy"
              decoding="async"
            />
          </FloatingElement>
        ))}
      </AnimatePresence>
    </Floating>
  );
}

// Helper functions with enhanced logic for more images and mobile optimization
function getImageDepth(index: number, isMobile: boolean): number {
  // Much simpler depth for mobile - either foreground or background
  if (isMobile) {
    return index % 2 === 0 ? 0.5 : 1;
  }
  
  // Create more depth variation for new images
  if (index < 5) {
    return index === 0 || index === 4 ? 0.5 : index === 1 || index === 3 ? 1 : 4;
  }
  // New images depth
  return index % 2 === 0 ? 0.7 : 1.2;
}

// Helper functions to reduce repetition
function getPositionClass(index: number, isMobile: boolean): string {
  // Simplified positions for mobile
  if (isMobile) {
    switch(index) {
      case 0: return "top-[25%] left-[5%]";
      case 1: return "top-[15%] right-[5%]";
      case 2: return "bottom-[15%] left-[15%]";
      default: return "hidden"; // Hide additional images on mobile
    }
  }
  
  // Desktop positions
  switch(index) {
    case 0: return "top-[15%] left-[2%] md:top-[25%] md:left-[5%]";
    case 1: return "top-[0%] left-[8%] md:top-[6%] md:left-[11%]";
    case 2: return "top-[90%] left-[6%] md:top-[80%] md:left-[8%]";
    case 3: return "top-[0%] left-[87%] md:top-[2%] md:left-[83%]";
    case 4: return "top-[78%] left-[83%] md:top-[68%] md:left-[83%]";
    // New positions for additional images
    case 5: return "top-[20%] right-[15%] md:top-[30%] md:right-[10%]";
    case 6: return "top-[50%] left-[70%] md:top-[45%] md:left-[65%]";
    case 7: return "top-[65%] left-[30%] md:top-[60%] md:left-[25%]";
    default: return "";
  }
}

function getSizeClass(index: number, isMobile: boolean): string {
  // Smaller sizes for mobile to improve performance
  if (isMobile) {
    switch(index) {
      case 0: return "w-16 h-12";
      case 1: return "w-24 h-20";
      case 2: return "w-28 h-28";
      default: return "w-0 h-0"; // Hide additional images on mobile
    }
  }
  
  // Desktop sizes
  switch(index) {
    case 0: return "w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24";
    case 1: return "w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48";
    case 2: return "w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64";
    case 3: return "w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56";
    case 4: return "w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80";
    // New sizes for additional images
    case 5: return "w-36 h-24 sm:w-44 sm:h-32 md:w-52 md:h-40 lg:w-56 lg:h-44";
    case 6: return "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52";
    case 7: return "w-48 h-36 sm:w-56 sm:h-44 md:w-64 md:h-48 lg:w-72 lg:h-54";
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
    // New rotations for additional images
    case 5: return "-rotate-[8deg]";
    case 6: return "rotate-[5deg]";
    case 7: return "-rotate-[2deg]";
    default: return "";
  }
}
