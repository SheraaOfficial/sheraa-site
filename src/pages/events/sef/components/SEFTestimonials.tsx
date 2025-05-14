
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/ui/sparkles';

const testimonials = [
  {
    quote: "SEF was a game-changer for my startup. The connections I made led directly to our seed funding round.",
    author: "Fatima Al Zaabi",
    role: "Founder & CEO, TechSolutions",
    image: "https://picsum.photos/seed/person1/100"
  },
  {
    quote: "The energy at SEF is unlike any other event in the region. It's where innovation truly comes alive.",
    author: "Ahmed Mahmoud",
    role: "Serial Entrepreneur",
    image: "https://picsum.photos/seed/person2/100"
  },
  {
    quote: "As an investor, SEF provides unparalleled access to the most promising startups in MENA.",
    author: "Sarah Johnson",
    role: "Partner, Venture Capital Firm",
    image: "https://picsum.photos/seed/person3/100"
  }
];

const SEFTestimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#9b87f5]/5"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#F97316]/5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Voices from Our Community
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from past attendees about their transformative experiences at the Sharjah Entrepreneurship Festival.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative"
            >
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-6xl text-[#9b87f5]/10 font-serif">"</div>
              
              <div className="relative z-10">
                <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#1A1F2C]">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-r from-[#9b87f5] to-[#F97316] p-1 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <Sparkles className="text-[#9b87f5]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1F2C]">Join 14,000+ Attendees</h3>
              </Sparkles>
              <p className="text-lg text-gray-600 max-w-2xl">
                Be part of the region's largest entrepreneurship gathering and create your own success story.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-[#9b87f5] to-[#F97316] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Reserve Your Spot
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFTestimonials;
