
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const ProgramsTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Al-Mahmoud",
      company: "EcoTech Solutions",
      program: "S3 Incubator",
      image: "photo-1494790108755-2616b612b786",
      quote: "Sheraa didn't just give us funding - they gave us a roadmap to success. The mentorship and market access were game-changers for our startup.",
      achievement: "Raised $2M Series A"
    },
    {
      name: "Ahmed Hassan",
      company: "FinFlow",
      program: "Access Sharjah Challenge", 
      image: "photo-1507003211169-0a1dd7228f2d",
      quote: "The direct access to government partners through ASC opened doors we never thought possible. We went from idea to POC in just 4 months.",
      achievement: "Secured govt contracts"
    },
    {
      name: "Fatima Al-Zahra",
      company: "EduTech Arabia",
      program: "Start Young → S3",
      image: "photo-1438761681033-6461ffad8d80",
      quote: "I started as a student in Start Young and now we're a million-dollar company. Sheraa believed in me before I believed in myself.",
      achievement: "$1M+ revenue"
    }
  ];

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Real founders, real results. See how our programs have transformed ideas into thriving businesses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-sheraa-primary mb-4 opacity-50" />
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=64&h=64`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-sheraa-primary/10 text-sheraa-primary px-2 py-1 rounded">
                    {testimonial.program}
                  </span>
                  <span className="text-green-600 font-medium">
                    {testimonial.achievement}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
