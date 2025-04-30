
import { useState, useEffect, useRef } from "react";

export const useScrollDirection = (scrollY: number) => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    if (scrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (scrollY < lastScrollY.current) {
      setScrollDirection("up");
    }
    lastScrollY.current = scrollY;
  }, [scrollY]);

  return scrollDirection;
};
