
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials, getTestimonialsByType } from '@/data/testimonials';
import { ModernButton } from '@/components/ui/modern-button';
import type { Testimonial } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | Testimonial['type']>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : getTestimonialsByType(activeFilter);

  const filters = [
    { key: 'all' as const, label: 'All Stories' },
    { key: 'founder' as const, label: 'Founders' },
    { key: 'mentor' as const, label: 'Mentors' },
    { key: 'partner' as const, label: 'Partners' },
    { key: 'investor' as const, label: 'Investors' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= filteredTestimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, filteredTestimonials.length - 3) : prev - 1
    );
  };

  const visibleTestimonials = filteredTestimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark dark:to-sheraa-dark/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Success Stories from Our Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from the founders, mentors, partners, and investors who are building the future through Sheraa's ecosystem.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <ModernButton
              key={filter.key}
              variant={activeFilter === filter.key ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => {
                setActiveFilter(filter.key);
                setCurrentIndex(0);
              }}
              className="mb-2"
            >
              {filter.label}
            </ModernButton>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          {filteredTestimonials.length > 3 && (
            <div className="flex justify-center gap-4">
              <ModernButton
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </ModernButton>
              <ModernButton
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                disabled={currentIndex + 3 >= filteredTestimonials.length}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </ModernButton>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to write your own success story?
          </p>
          <ModernButton variant="primary" size="lg">
            Apply to Our Programs
          </ModernButton>
        </motion.div>
      </div>
    </section>
  );
};
