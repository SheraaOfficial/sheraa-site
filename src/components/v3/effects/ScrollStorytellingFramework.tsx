import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface StoryChapter {
  id: string;
  title: string;
  content: React.ReactNode;
  triggerPoint: number; // 0 to 1, when this chapter should activate
  backgroundEffect?: React.ReactNode;
  duration?: number;
}

interface ScrollStorytellingProps {
  chapters: StoryChapter[];
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
  onChapterChange?: (chapterId: string) => void;
  className?: string;
}

export const ScrollStorytellingFramework: React.FC<ScrollStorytellingProps> = ({
  chapters,
  persona,
  onChapterChange,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<string>(chapters[0]?.id || '');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which chapter should be active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const currentChapter = chapters.find((chapter, index) => {
        const nextChapter = chapters[index + 1];
        return progress >= chapter.triggerPoint && 
               (!nextChapter || progress < nextChapter.triggerPoint);
      });

      if (currentChapter && currentChapter.id !== activeChapter) {
        setActiveChapter(currentChapter.id);
        onChapterChange?.(currentChapter.id);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, chapters, activeChapter, onChapterChange]);

  // Progress indicator transform
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getPersonaColors = () => {
    switch (persona) {
      case 'young':
        return {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          accent: '#EC4899'
        };
      case 'stakeholder':
        return {
          primary: '#F59E0B',
          secondary: '#EAB308',
          accent: '#F97316'
        };
      case 'adult':
        return {
          primary: '#64748B',
          secondary: '#475569',
          accent: '#374151'
        };
      default:
        return {
          primary: 'var(--sheraa-primary)',
          secondary: 'var(--sheraa-teal)',
          accent: 'var(--sheraa-secondary)'
        };
    }
  };

  const colors = getPersonaColors();

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-gray-200/50">
        <motion.div
          className="h-full"
          style={{
            width: progressWidth,
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`
          }}
        />
      </div>

      {/* Chapter Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-2">
        {chapters.map((chapter, index) => (
          <ChapterIndicator
            key={chapter.id}
            isActive={activeChapter === chapter.id}
            index={index}
            persona={persona}
            onClick={() => {
              const element = document.getElementById(`chapter-${chapter.id}`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>

      {/* Chapters */}
      <div className="space-y-0">
        {chapters.map((chapter, index) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            index={index}
            isActive={activeChapter === chapter.id}
            persona={persona}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

interface ChapterIndicatorProps {
  isActive: boolean;
  index: number;
  persona: string;
  onClick: () => void;
}

const ChapterIndicator: React.FC<ChapterIndicatorProps> = ({
  isActive,
  index,
  persona,
  onClick
}) => {
  const getPersonaStyle = () => {
    switch (persona) {
      case 'young':
        return isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
          : 'bg-gray-300 hover:bg-blue-300';
      case 'stakeholder':
        return isActive 
          ? 'bg-gradient-to-r from-amber-500 to-yellow-500' 
          : 'bg-gray-300 hover:bg-amber-300';
      case 'adult':
        return isActive 
          ? 'bg-gradient-to-r from-gray-600 to-slate-600' 
          : 'bg-gray-300 hover:bg-gray-400';
      default:
        return isActive 
          ? 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal' 
          : 'bg-gray-300 hover:bg-sheraa-light';
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${getPersonaStyle()}`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0.8, opacity: 0.6 }}
      animate={{ 
        scale: isActive ? 1.2 : 0.8, 
        opacity: isActive ? 1 : 0.6 
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="sr-only">Chapter {index + 1}</span>
    </motion.button>
  );
};

interface ChapterSectionProps {
  chapter: StoryChapter;
  index: number;
  isActive: boolean;
  persona: string;
  scrollProgress: any;
}

const ChapterSection: React.FC<ChapterSectionProps> = ({
  chapter,
  index,
  isActive,
  persona,
  scrollProgress
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20%" });

  // Chapter-specific scroll transforms
  const y = useTransform(
    scrollProgress,
    [chapter.triggerPoint - 0.1, chapter.triggerPoint + 0.1],
    [50, 0]
  );

  const opacity = useTransform(
    scrollProgress,
    [chapter.triggerPoint - 0.05, chapter.triggerPoint, chapter.triggerPoint + 0.3],
    [0, 1, 1]
  );

  const scale = useTransform(
    scrollProgress,
    [chapter.triggerPoint - 0.1, chapter.triggerPoint],
    [0.95, 1]
  );

  const getPersonaBackground = () => {
    switch (persona) {
      case 'young':
        return index % 2 === 0 
          ? 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
          : 'bg-gradient-to-br from-white via-blue-25 to-purple-25';
      case 'stakeholder':
        return index % 2 === 0 
          ? 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50'
          : 'bg-gradient-to-br from-white via-amber-25 to-yellow-25';
      case 'adult':
        return index % 2 === 0 
          ? 'bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100'
          : 'bg-gradient-to-br from-white via-gray-25 to-slate-25';
      default:
        return index % 2 === 0 
          ? 'bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/10'
          : 'bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/10';
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id={`chapter-${chapter.id}`}
      className={`min-h-screen relative overflow-hidden ${getPersonaBackground()}`}
      style={{ y, opacity, scale }}
    >
      {/* Background Effect */}
      {chapter.backgroundEffect && (
        <div className="absolute inset-0">
          {chapter.backgroundEffect}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          {chapter.content}
        </motion.div>
      </div>

      {/* Chapter transition indicator */}
      {isActive && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};