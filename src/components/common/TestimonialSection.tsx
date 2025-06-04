
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, User } from 'lucide-react';

export interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  startup?: string;
  program?: string;
  achievement?: string;
  quote: string;
  image?: string;
}

interface TestimonialSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'carousel' | 'grid' | 'single';
  backgroundVariant?: 'default' | 'gradient' | 'colored';
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  subtitle,
  testimonials,
  variant = 'carousel',
  backgroundVariant = 'default'
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const backgroundClasses = {
    default: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-50 to-cyan-50',
    colored: 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white'
  };

  if (variant === 'carousel') {
    return (
      <section className={`py-16 ${backgroundClasses[backgroundVariant]}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold mb-6 ${backgroundVariant === 'colored' ? 'text-white' : ''}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl max-w-3xl mx-auto ${
                backgroundVariant === 'colored' ? 'text-white/90' : 'text-gray-600'
              }`}>
                {subtitle}
              </p>
            )}
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className={`${
              backgroundVariant === 'colored' 
                ? 'bg-white/10 backdrop-blur-sm border-white/20 text-white' 
                : 'bg-white border border-blue-200'
            }`}>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    backgroundVariant === 'colored' 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal'
                  }`}>
                    <User className={`w-10 h-10 ${backgroundVariant === 'colored' ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{testimonials[activeTestimonial].name}</h4>
                  {testimonials[activeTestimonial].company && (
                    <div className={`font-medium mb-1 ${
                      backgroundVariant === 'colored' ? 'text-white/90' : 'text-sheraa-primary'
                    }`}>
                      {testimonials[activeTestimonial].company}
                    </div>
                  )}
                  {testimonials[activeTestimonial].role && (
                    <div className={`text-sm mb-4 ${
                      backgroundVariant === 'colored' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {testimonials[activeTestimonial].role}
                    </div>
                  )}
                  {testimonials[activeTestimonial].achievement && (
                    <div className={`text-sm px-3 py-1 rounded-full inline-block mb-4 ${
                      backgroundVariant === 'colored' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {testimonials[activeTestimonial].achievement}
                    </div>
                  )}
                </div>
                
                <blockquote className="text-lg italic text-center mb-6">
                  <Quote className={`w-8 h-8 mx-auto mb-4 ${
                    backgroundVariant === 'colored' ? 'text-white/60' : 'text-blue-400'
                  }`} />
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial 
                          ? (backgroundVariant === 'colored' ? 'bg-white' : 'bg-sheraa-primary')
                          : (backgroundVariant === 'colored' ? 'bg-white/30' : 'bg-gray-300')
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${backgroundClasses[backgroundVariant]}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-6 h-6 text-sheraa-primary mb-4" />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company || testimonial.startup}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
