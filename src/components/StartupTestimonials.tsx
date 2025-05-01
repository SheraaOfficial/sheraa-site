
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./ui/testimonial-card";
import { ParallaxSection } from "./ParallaxProvider";

const testimonials = [
  {
    author: {
      name: "Sarah Al Madani",
      company: "HalaHi",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      impact: "500K+ Users Reached"
    },
    text: "Sheraa was instrumental in our growth journey. Their mentorship and connections helped us scale across the MENA region, turning our vision into reality."
  },
  {
    author: {
      name: "Mohammed Abbas",
      company: "Intuitive",
      role: "Co-founder",
      image: "/placeholder.svg",
      impact: "AI Solutions Deployed in 3 Countries"
    },
    text: "The Sheraa ecosystem provided us with more than just funding - it gave us a strong foundation, invaluable market insights, and a supportive community of fellow entrepreneurs."
  },
  {
    author: {
      name: "Fatima Hassan",
      company: "EcoTech",
      role: "Founder",
      image: "/placeholder.svg",
      impact: "40% Carbon Reduction Achievement"
    },
    text: "Through Sheraa's Access Sharjah Challenge, we secured our first major corporate partnership. Their belief in sustainable innovation made all the difference."
  }
];

const StartupTestimonials = () => {
  return (
    <ParallaxSection 
      direction="up" 
      scrollMultiplier={0.12}
      spring={true}
      damping={20}
    >
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent" />
        
        <div className="container mx-auto">
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

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: [0, -10, 0, 10, 0] }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
              >
                {[...Array(2)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      author={testimonial.author}
                      text={testimonial.text}
                    />
                  ))
                ))}
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default StartupTestimonials;
