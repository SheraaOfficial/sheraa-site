
import React, { useEffect, useState } from "react";

interface LazyComponentProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const LazyComponent = ({ component: Component, ...props }: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={ref} style={{ minHeight: 100 }}>
      {isVisible ? <Component {...props} /> : null}
    </div>
  );
};

export default LazyComponent;
