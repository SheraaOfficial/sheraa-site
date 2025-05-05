
import React, { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useIsMobile } from "@/hooks/useDeviceDetection";

// Type definition for startup data
interface StartupData {
  name: string;
  description: string;
  sector: string;
  achievement: string;
  impact: string;
  image: string;
  stats: string;
}

// Enhanced StartupCard component with proper spacing and responsive design
const StartupCard: React.FC<{
  startup: StartupData;
  index: number;
  isMobile: boolean;
}> = React.memo(({ startup, index, isMobile }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sheraa-soft group-hover:shadow-sheraa-medium transition-all duration-300 border border-gray-100 overflow-hidden h-full">
      <div className="flex items-center gap-3 md:gap-4 mb-4">
        <Avatar className={`${isMobile ? "w-12 h-12" : "w-16 h-16"} border-2 border-sheraa-primary/10 flex-shrink-0`}>
          <AvatarImage src={startup.image} alt={startup.name} />
          <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold">
            {startup.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-sheraa-primary truncate">
            {startup.name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="soft-coral" animation="none" size="sm">
              {startup.sector}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        <Badge variant="gradient-warm" animation="none" size="sm">
          {startup.achievement}
        </Badge>
        <Badge variant="purple" animation="none" size="sm">
          {startup.impact}
        </Badge>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">
        {startup.description}
      </p>

      <div className="flex items-center gap-2 text-sheraa-primary mt-auto pt-2">
        <Star className={`${isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} flex-shrink-0`} />
        <span className="text-xs md:text-sm font-medium">{startup.stats}</span>
      </div>
    </div>
  </motion.div>
));
StartupCard.displayName = 'StartupCard';

// Sample data for featured startups
const featuredStartups: StartupData[] = [
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

const StartupsShowcase: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track current slide for pagination indicators
  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-purple-100 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <Badge 
            variant="gradient-warm" 
            animation="shimmer" 
            className="mb-3"
          >
            Transforming Ideas into Impact
          </Badge>
          
          <h2 className="text-2xl md:text-4xl font-bold text-sheraa-dark mb-4 leading-tight">
            Our <span className="text-sheraa-primary">Startups</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base px-2">
            Meet the innovative ventures shaping the future through Sheraa's ecosystem. 
            These companies are creating real impact, driving innovation, and transforming 
            Sharjah's entrepreneurial landscape.
          </p>
        </motion.div>

        <div className="mb-8 md:mb-12 max-w-full">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              dragFree: true
            }}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredStartups.map((startup, index) => (
                <CarouselItem 
                  key={startup.name} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full">
                    <StartupCard 
                      startup={startup} 
                      index={index} 
                      isMobile={isMobile} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
            
            {/* Mobile pagination indicators */}
            {isMobile && (
              <div className="flex justify-center mt-4 gap-2">
                {featuredStartups.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeIndex ? 'bg-sheraa-coral' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <Button 
            asChild 
            size={isMobile ? "default" : "lg"} 
            className="bg-sheraa-coral hover:bg-sheraa-coral/90 w-full sm:w-auto"
          >
            <Link to="/community/startups" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size={isMobile ? "default" : "lg"} 
            className="border-sheraa-coral text-sheraa-coral hover:bg-sheraa-coral/10 w-full sm:w-auto"
          >
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Join Our Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(StartupsShowcase);
