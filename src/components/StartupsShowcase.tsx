
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

// Using React.memo for performance optimization
const StartupCard = React.memo(({ startup, index, isMobile }: { startup: any, index: number, isMobile: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sheraa-soft group-hover:shadow-sheraa-medium transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <Avatar className={`${isMobile ? "w-10 h-10" : "w-16 h-16"} border-2 border-sheraa-primary/10 flex-shrink-0`}>
          <AvatarImage src={startup.image} alt={startup.name} />
          <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold text-lg md:text-xl">
            {startup.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h3 className="text-base md:text-xl font-bold text-sheraa-primary truncate">
            {startup.name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {/* Using our enhanced badges */}
            <Badge variant="soft-primary" animation="none" size="sm">
              {startup.sector}
            </Badge>
            <Badge variant="gradient-warm" animation="none" size="sm">
              {startup.achievement}
            </Badge>
            <Badge variant="soft-teal" animation="none" size="sm">
              {startup.impact}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 md:mb-6 line-clamp-3 text-xs md:text-base">
        {startup.description}
      </p>

      <div className="flex items-center gap-2 text-sheraa-primary">
        <Star className={`${isMobile ? "w-3.5 h-3.5" : "w-5 h-5"} flex-shrink-0`} />
        <span className="text-xs md:text-sm font-medium">{startup.stats}</span>
      </div>
    </div>
  </motion.div>
));

StartupCard.displayName = 'StartupCard';

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
          <Badge variant="gradient" animation="shimmer" className="mb-3 md:mb-4">
            Transforming Ideas into Impact
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-sheraa-dark mb-4 md:mb-6 leading-tight px-2">
            Our <span className="text-sheraa-primary">Startups</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg px-2">
            Meet the innovative ventures shaping the future through Sheraa's ecosystem. These companies are creating real impact, driving innovation, and transforming Sharjah's entrepreneurial landscape.
          </p>
        </motion.div>

        <div className="mb-10 md:mb-16 max-w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true, // Allow free-form dragging for smoother experience
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredStartups.map((startup, index) => (
                <CarouselItem key={startup.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <StartupCard startup={startup} index={index} isMobile={isMobile} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <div className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="bg-white" />
              </div>
              <div className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="bg-white" />
              </div>
            </div>
            
            {isMobile && (
              <div className="flex justify-center mt-6 gap-2">
                {featuredStartups.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-sheraa-primary' : 'bg-gray-300'}`} />
                ))}
              </div>
            )}
          </Carousel>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <Button 
            asChild
            size={isMobile ? "default" : "lg"} // Changed from xl to lg for better performance
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
            size={isMobile ? "default" : "lg"} // Changed from xl to lg
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

export default React.memo(StartupsShowcase);
