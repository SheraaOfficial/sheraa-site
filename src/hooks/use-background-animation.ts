
import { useMemo } from "react";
import { useIsMobile } from "./use-mobile";

export const useBackgroundAnimation = (scrollY: number) => {
  const isMobile = useIsMobile();
  
  const backgroundStyle = useMemo(() => ({
    background: `linear-gradient(${
      140 + (scrollY / (document.body.scrollHeight - window.innerHeight)) * 60
    }deg, rgba(0,51,102,${
      isMobile ? 0.03 : 0.05 + (scrollY / document.body.scrollHeight) * 0.1
    }) 0%, rgba(0,128,128,${
      isMobile ? 0.02 : 0.03 + (scrollY / document.body.scrollHeight) * 0.07
    }) 50%, rgba(255,102,0,${
      isMobile ? 0.01 : 0.02 + (scrollY / document.body.scrollHeight) * 0.05
    }) 100%)`,
  }), [isMobile, scrollY]);
  
  return backgroundStyle;
};
