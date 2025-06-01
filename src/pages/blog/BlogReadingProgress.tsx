
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle } from 'lucide-react';

interface BlogReadingProgressProps {
  articleId: string;
  estimatedReadTime: number;
}

export const BlogReadingProgress: React.FC<BlogReadingProgressProps> = ({
  articleId,
  estimatedReadTime
}) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById(`article-${articleId}`);
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const documentHeight = article.offsetHeight;
      
      const scrolled = Math.max(0, -rect.top);
      const viewableHeight = Math.min(documentHeight, windowHeight + scrolled);
      const progressPercentage = Math.min(100, (viewableHeight / documentHeight) * 100);
      
      setProgress(progressPercentage);
      
      if (progressPercentage >= 90 && !isCompleted) {
        setIsCompleted(true);
        // Store reading completion in localStorage
        const completedArticles = JSON.parse(localStorage.getItem('completedArticles') || '[]');
        if (!completedArticles.includes(articleId)) {
          completedArticles.push(articleId);
          localStorage.setItem('completedArticles', JSON.stringify(completedArticles));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleId, isCompleted]);

  return (
    <div className="fixed top-20 right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border z-50 w-64">
      <div className="flex items-center gap-2 mb-3">
        {isCompleted ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <Clock className="h-5 w-5 text-gray-500" />
        )}
        <span className="text-sm font-medium">
          {isCompleted ? 'Article Completed!' : `${estimatedReadTime} min read`}
        </span>
      </div>
      
      <Progress value={progress} className="h-2 mb-2" />
      
      <div className="text-xs text-gray-500">
        {Math.round(progress)}% complete
      </div>
    </div>
  );
};
