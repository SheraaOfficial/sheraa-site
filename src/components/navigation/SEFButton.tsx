import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
interface SEFButtonProps {
  path: string;
}
export const SEFButton: React.FC<SEFButtonProps> = ({
  path
}) => {
  return <motion.div whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} className="relative">
      <Link to={path} className="relative ml-3 py-3 bg-gradient-to-r from-sheraa-sef-primary via-purple-600 to-sheraa-sef-secondary text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-white/20 px-0relative flex items-center space-x-2 z-10">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-sheraa-sef-primary/80 to-sheraa-sef-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute text-xs" initial={{
          x: `${20 + i * 15}%`,
          y: `${10 + Math.sin(i) * 40}%`,
          opacity: 0.6,
          scale: 0.8
        }} animate={{
          y: [`${10 + Math.sin(i) * 40}%`, `${Math.sin(i + 1) * 60}%`, `${10 + Math.sin(i) * 40}%`],
          opacity: [0.6, 1, 0.6],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.2
        }}>
              {i % 2 === 0 ? '✨' : '⭐'}
            </motion.div>)}
        </div>
        
        <span className="">
          <motion.div animate={{
          rotate: [0, 360]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}>
            <Star className="w-5 h-5 fill-current px-0 mx-0 my-0" />
          </motion.div>
          <span className="text-lg font-extrabold tracking-wide">SEF</span>
          <motion.div animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </span>
        
        {/* Pulsing border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-colors duration-300" />
      </Link>
    </motion.div>;
};