
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  featured = false 
}) => {
  const handleVideoPlay = () => {
    if (testimonial.videoUrl) {
      window.open(testimonial.videoUrl, '_blank');
    }
  };

  return (
    <ModernCard 
      variant="glass" 
      hover 
      className={`h-full ${featured ? 'border-sheraa-primary/30' : ''}`}
    >
      <ModernCardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {testimonial.videoUrl && (
              <button
                onClick={handleVideoPlay}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-sheraa-primary rounded-full flex items-center justify-center hover:bg-sheraa-primary/80 transition-colors"
                aria-label="Play video testimonial"
              >
                <Play className="w-3 h-3 text-white" />
              </button>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
              {testimonial.name}
            </h3>
            <p className="text-sm text-sheraa-primary font-medium">
              {testimonial.title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.company}
            </p>
          </div>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-sheraa-teal font-medium">{testimonial.program}</span>
            <span className="text-gray-500">{testimonial.year}</span>
          </div>
          
          {testimonial.achievements.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Key Achievements:
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                {testimonial.achievements.slice(0, 2).map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-sheraa-primary mr-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ModernCardContent>
    </ModernCard>
  );
};
