
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al Madani",
    title: "Founder & CEO, TechFlow Solutions",
    program: "S3 Incubator Graduate",
    image: "/placeholder.svg",
    quote: "Sheraa was instrumental in our growth journey. Their mentorship, equity-free funding, and connections helped us scale across the MENA region, turning our vision into reality with sustainable impact on communities. The revenue-sharing model was perfect for maintaining ownership.",
    rating: 5,
    achievement: "$2M Revenue Generated",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    name: "Ahmed Al Zaabi",
    title: "Co-founder, EcoTech Solutions",
    program: "Access Sharjah Challenge Winner",
    image: "/placeholder.svg", 
    quote: "The Access Sharjah Challenge opened doors we never imagined. The direct market access and POC funding helped us validate our solution with major industry players. Working with BEEAH through the challenge was transformative for our sustainability startup.",
    rating: 5,
    achievement: "3 POC Implementations",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    name: "Fatima Al Mansouri",
    title: "Student Entrepreneur, AUS",
    program: "Startup Dojo Alumni",
    image: "/placeholder.svg",
    quote: "Starting as a university student, Sheraa's youth programs gave me the confidence and skills to turn my idea into a real business. The 8-week intensive program and mentorship were invaluable. Now I'm ready for the next stage with S3 Incubator.",
    rating: 5,
    achievement: "Commercial License Achieved",
    color: "from-purple-500/20 to-purple-600/20"
  }
];

export const ProgramsTestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/30 to-blue-50/40 dark:from-sheraa-dark/60 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-sheraa-teal/10 to-sheraa-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-800 shadow-sm backdrop-blur-sm mb-6"
          >
            <Award className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Founders Who </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Transformed Ideas
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from founders who have transformed their ideas into successful ventures 
            through Sheraa's comprehensive program pathway. Real stories, real impact, real success.
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
              className="relative group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-40`} />
                
                <CardContent className="p-8 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.achievement}
                    </div>
                  </div>

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-sheraa-primary/60 mb-4" />
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 flex items-center justify-center shadow-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sheraa-primary/40 to-sheraa-teal/40 flex items-center justify-center">
                        <span className="text-sheraa-primary font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-sheraa-dark dark:text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {testimonial.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-sheraa-primary" />
                        <p className="text-xs text-sheraa-primary font-semibold">
                          {testimonial.program}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-sheraa-primary rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonial stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-sheraa-dark dark:text-white mb-6">
              Program Success Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "71%", label: "Startup Survival Rate" },
                { number: "52%", label: "Women-Led Startups" },
                { number: "$171M+", label: "Capital Raised" },
                { number: "140+", label: "Ecosystem Partners" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
