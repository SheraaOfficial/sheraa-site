
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Sarah Al Madani",
    company: "HalaHi",
    role: "Founder & CEO",
    quote: "Sheraa was instrumental in our growth journey. Their mentorship and connections helped us scale across the MENA region, turning our vision into reality.",
    image: "/placeholder.svg",
    rating: 5,
    impact: "500K+ Users Reached"
  },
  {
    name: "Mohammed Abbas",
    company: "Intuitive",
    role: "Co-founder",
    quote: "The Sheraa ecosystem provided us with more than just funding - it gave us a strong foundation, invaluable market insights, and a supportive community of fellow entrepreneurs.",
    image: "/placeholder.svg",
    rating: 5,
    impact: "AI Solutions Deployed in 3 Countries"
  },
  {
    name: "Fatima Hassan",
    company: "EcoTech",
    role: "Founder",
    quote: "Through Sheraa's Access Sharjah Challenge, we secured our first major corporate partnership. Their belief in sustainable innovation made all the difference.",
    image: "/placeholder.svg",
    rating: 5,
    impact: "40% Carbon Reduction Achievement"
  }
];

const StartupTestimonials = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sheraa-dark mb-4 md:mb-6">
            Hear from Our <span className="text-sheraa-primary">Startups</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Real stories from founders who transformed their ideas into thriving businesses through Sheraa's support and ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full relative group">
                {/* Frosted Glass Panel */}
                <div className="h-full backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl p-5 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/40">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 bg-sheraa-primary text-white p-2 md:p-3 rounded-full shadow-lg">
                    <Quote className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} fill-sheraa-orange text-sheraa-orange`} />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 italic line-clamp-4 md:line-clamp-none">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Impact Metric */}
                  <div className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 inline-block">
                    {testimonial.impact}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <Avatar className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} border-2 border-white/50`}>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-sheraa-primary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sheraa-dark text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs md:text-sm font-medium text-sheraa-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupTestimonials;
