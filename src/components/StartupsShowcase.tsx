
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

const featuredStartups = [
  {
    name: "Green Future Project",
    description: "Pioneering sustainable solutions for environmental challenges across the UAE. Our innovative approach combines technology with eco-conscious practices.",
    sector: "Sustainability",
    achievement: "Winner - Access Sharjah Challenge",
    impact: "Reduced carbon emissions by 40%",
    image: "/placeholder.svg",
    stats: "Raised $2.5M"
  },
  {
    name: "Arabee",
    description: "Revolutionary Arabic language learning platform using AI and gamification to make education engaging and effective for modern learners.",
    sector: "EdTech",
    achievement: "Successfully scaled across MENA",
    impact: "100,000+ Active Users",
    image: "/placeholder.svg",
    stats: "Present in 5 Countries"
  },
  {
    name: "KRISPR",
    description: "Transforming the future of food technology with innovative solutions for sustainable agriculture and food production systems.",
    sector: "FoodTech",
    achievement: "Raised $2M in funding",
    impact: "30% Yield Improvement",
    image: "/placeholder.svg",
    stats: "8 Patents Filed"
  },
  {
    name: "Manhat",
    description: "Innovative water technology solutions addressing water scarcity through sustainable desalination processes.",
    sector: "WaterTech",
    achievement: "Patent-pending technology",
    impact: "2M Liters Saved",
    image: "/placeholder.svg",
    stats: "Featured by UNESCO"
  }
];

// Convert the startup data to testimonial format
const startupsAsTestimonials = featuredStartups.map(startup => ({
  author: {
    name: startup.name,
    company: startup.sector,
    avatarSrc: startup.image,
    impact: startup.stats
  },
  text: startup.description,
  href: "#"
}));

const StartupsShowcase = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block bg-sheraa-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-sheraa-primary text-xs md:text-sm font-medium mb-3 md:mb-4">
            Transforming Ideas into Impact
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-sheraa-dark mb-4 md:mb-6 leading-tight px-2">
            Our <span className="text-sheraa-primary">Startups</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg px-2">
            Meet the innovative ventures shaping the future through Sheraa's ecosystem. These companies are creating real impact, driving innovation, and transforming Sharjah's entrepreneurial landscape.
          </p>
        </motion.div>

        <div className="mb-10 md:mb-16 max-w-full">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  startupsAsTestimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white/80 to-transparent" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <Button 
            asChild
            size={isMobile ? "default" : "xl"}
            className="bg-sheraa-primary hover:bg-sheraa-primary/90 w-full sm:w-auto text-xs md:text-base"
          >
            <Link to="/community/startups" className="flex items-center gap-2">
              <Star className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} flex-shrink-0`} />
              Explore All Startups
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size={isMobile ? "default" : "xl"}
            className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10 w-full sm:w-auto text-xs md:text-base"
          >
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} flex-shrink-0`} />
              Join Our Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupsShowcase;
