
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Al-Mahmoud",
    role: "Founder & CEO, GreenTech Solutions",
    quote: "SEF was a game-changer for me. The connections I made and insights I gained helped take my startup to the next level. It's unlike any other entrepreneurship festival in the region.",
    avatar: "https://picsum.photos/seed/test1/200",
    company: "GreenTech Solutions"
  },
  {
    name: "Ahmed Hassan",
    role: "Co-founder, FinEdge",
    quote: "The energy at SEF is unmatched. From the inspirational speakers to the interactive workshops and networking opportunities, every moment is designed to spark innovation and foster meaningful connections.",
    avatar: "https://picsum.photos/seed/test2/200",
    company: "FinEdge"
  },
  {
    name: "Layla Qasim",
    role: "Serial Entrepreneur & Investor",
    quote: "After attending SEF for three consecutive years, I can confidently say it's the premier entrepreneurship event in the region. The quality of speakers and the networking opportunities are exceptional.",
    avatar: "https://picsum.photos/seed/test3/200",
    company: "Venture Capital Partners"
  },
  {
    name: "Michael Chen",
    role: "Founder, EduTech Innovations",
    quote: "SEF provided the perfect platform to showcase our edtech solution. The feedback and connections we made during those two days accelerated our growth by at least six months.",
    avatar: "https://picsum.photos/seed/test4/200",
    company: "EduTech Innovations"
  }
];

const SEFEnhancedTestimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 }
    });
  }, [active, controls]);

  return (
    <section className="py-20 px-4 relative overflow-hidden dark:bg-[#1A1F2C] bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#9b87f5]/10 rounded-full filter blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#F97316]/10 rounded-full filter blur-[120px] opacity-60" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium border border-white/20 dark:text-white text-indigo-800 mb-4">
            TESTIMONIALS
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter dark:text-white text-indigo-900 mb-6">
            WHAT ATTENDEES SAY
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto relative">
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 -left-4 z-20 lg:block hidden"
            onClick={prevTestimonial}
          >
            <motion.button
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </motion.button>
          </div>
          
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 -right-4 z-20 lg:block hidden"
            onClick={nextTestimonial}
          >
            <motion.button
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </motion.button>
          </div>
          
          <div ref={containerRef} className="overflow-hidden w-full">
            <motion.div
              key={active}
              animate={controls}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
            >
              <div className="lg:col-span-2 flex justify-center">
                <motion.div 
                  className="w-48 h-48 rounded-full overflow-hidden border-4 dark:border-white/20 border-indigo-200 shadow-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={testimonials[active].avatar} 
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </div>
              
              <div className="lg:col-span-3">
                <motion.div className="space-y-6">
                  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="mb-2 dark:text-white/20 text-indigo-200">
                    <path d="M40 20C29 20 20 29 20 40C20 51 29 60 40 60C40 60 38 80 20 80V90C50 90 50 60 50 60C50 49 41 40 30 40V20H40ZM80 20C69 20 60 29 60 40C60 51 69 60 80 60C80 60 78 80 60 80V90C90 90 90 60 90 60C90 49 81 40 70 40V20H80Z" fill="currentColor"/>
                  </svg>
                  
                  <motion.p 
                    className="text-2xl font-medium dark:text-white text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    "{testimonials[active].quote}"
                  </motion.p>
                  
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold dark:text-white text-indigo-900">{testimonials[active].name}</h4>
                    <p className="dark:text-white/60 text-gray-600">{testimonials[active].role}</p>
                    <p className="dark:text-[#9b87f5] text-indigo-600 font-medium">{testimonials[active].company}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-10 flex justify-center gap-3 lg:hidden">
          <motion.button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center dark:text-white text-indigo-800 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center dark:text-white text-indigo-800 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full ${active === index ? 'bg-[#9b87f5]' : 'dark:bg-white/20 bg-indigo-200'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEFEnhancedTestimonials;
