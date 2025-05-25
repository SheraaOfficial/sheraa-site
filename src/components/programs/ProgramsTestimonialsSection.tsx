
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al Madani",
    title: "Founder & CEO, HalaHi",
    program: "S3 Incubator Graduate",
    image: "/placeholder.svg",
    quote: "Sheraa was instrumental in our growth journey. Their mentorship and connections helped us scale across the MENA region, turning our vision into reality with sustainable impact on communities.",
    rating: 5
  },
  {
    name: "Ahmed Al Zaabi",
    title: "Co-founder, EcoTech Solutions",
    program: "Access Sharjah Challenge Winner",
    image: "/placeholder.svg", 
    quote: "The Access Sharjah Challenge opened doors we never imagined. The direct market access and POC funding helped us validate our solution with major industry players.",
    rating: 5
  },
  {
    name: "Fatima Al Mansouri",
    title: "Student Entrepreneur",
    program: "Startup Dojo Alumni",
    image: "/placeholder.svg",
    quote: "Starting as a university student, Sheraa's youth programs gave me the confidence and skills to turn my idea into a real business. The mentorship was invaluable.",
    rating: 5
  }
];

export const ProgramsTestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/20 to-blue-50/30 dark:from-sheraa-dark/50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Success </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from founders who have transformed their ideas into successful ventures 
            through Sheraa's comprehensive program pathway.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-sheraa-primary/40 mb-4" />
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sheraa-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-sheraa-primary/20"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sheraa-dark dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-sheraa-primary font-medium">
                        {testimonial.program}
                      </p>
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
