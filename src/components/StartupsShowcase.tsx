
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

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
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sheraa-primary/10 px-4 py-1.5 rounded-full text-sheraa-primary text-sm font-medium mb-4">
            Transforming Ideas into Impact
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sheraa-dark mb-6 leading-tight">
            Our <span className="text-sheraa-primary">Startups</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Meet the innovative ventures shaping the future through Sheraa's ecosystem. These companies are creating real impact, driving innovation, and transforming Sharjah's entrepreneurial landscape.
          </p>
        </motion.div>

        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredStartups.map((startup, index) => (
                <CarouselItem key={startup.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sheraa-soft group-hover:shadow-sheraa-medium transition-all duration-300 border border-gray-100">
                      <div className="absolute -top-3 -right-3">
                        <Badge variant="accent" className="shadow-lg">
                          Featured
                        </Badge>
                      </div>

                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16 border-2 border-sheraa-primary/10">
                            <AvatarImage src={startup.image} alt={startup.name} />
                            <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold text-xl">
                              {startup.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-bold text-sheraa-primary">
                              {startup.name}
                            </h3>
                            <Badge variant="secondary" className="mt-2">
                              {startup.sector}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {startup.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sheraa-orange">
                          <Award className="w-5 h-5" />
                          <span className="text-sm font-medium">{startup.achievement}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sheraa-teal">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-sm font-medium">{startup.impact}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sheraa-primary">
                          <Star className="w-5 h-5" />
                          <span className="text-sm font-medium">{startup.stats}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 bg-white" />
              <CarouselNext className="-right-4 bg-white" />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Button 
            asChild
            size="xl"
            className="bg-sheraa-primary hover:bg-sheraa-primary/90 w-full md:w-auto"
          >
            <Link to="/community/startups" className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="xl"
            className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10 w-full md:w-auto"
          >
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Our Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupsShowcase;
