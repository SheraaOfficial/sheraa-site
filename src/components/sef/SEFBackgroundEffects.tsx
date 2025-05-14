
import React from "react";
import { motion } from "framer-motion";

export const SEFBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#292D3E] z-10"></div>
      
      {/* Glow effects */}
      <div className="absolute inset-0 z-10 opacity-80">
        <div className="absolute top-10 left-20 w-72 h-72 bg-[#9b87f5]/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#F97316]/20 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D6BCFA]/30 rounded-full filter blur-[80px]" />
      </div>
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [null, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3],
              scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Optional grid effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] 
        opacity-30 z-10"
      ></div>
    </>
  );
};
