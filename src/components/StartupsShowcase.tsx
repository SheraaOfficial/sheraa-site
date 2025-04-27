
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Rocket, Users, Upload } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

const featuredStartups = [
  {
    name: "Green Future Project",
    description: "Pioneering sustainable solutions for environmental challenges across the UAE. Our innovative approach combines technology with eco-conscious practices.",
    sector: "Sustainability",
    achievement: "Winner - Access Sharjah Challenge",
    image: "/placeholder.svg"
  },
  {
    name: "Arabee",
    description: "Revolutionary Arabic language learning platform using AI and gamification to make education engaging and effective for modern learners.",
    sector: "EdTech",
    achievement: "Successfully scaled across MENA",
    image: "/placeholder.svg"
  },
  {
    name: "KRISPR",
    description: "Transforming the future of food technology with innovative solutions for sustainable agriculture and food production systems.",
    sector: "FoodTech",
    achievement: "Raised $2M in funding",
    image: "/placeholder.svg"
  },
  {
    name: "Manhat",
    description: "Innovative water technology solutions addressing water scarcity through sustainable desalination processes.",
    sector: "WaterTech",
    achievement: "Patent-pending technology",
    image: "/placeholder.svg"
  }
];

const StartupsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-sheraa-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-4"
          >
            Innovation Hub
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-sheraa-dark mb-4"
          >
            Our Startups
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Meet the innovative ventures shaping the future through Sheraa's ecosystem
          </motion.p>
        </div>

        <div className="mb-12">
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
                    className="bg-white rounded-xl p-6 shadow-sheraa-soft hover:shadow-sheraa-medium transition-all duration-300 h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={startup.image} alt={startup.name} />
                          <AvatarFallback>{startup.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold text-sheraa-primary">
                            {startup.name}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            {startup.sector}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{startup.description}</p>
                    <div className="flex items-center gap-2 text-sheraa-orange">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">{startup.achievement}</span>
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

        <div className="flex justify-center gap-6 flex-wrap">
          <Button 
            asChild
            className="bg-sheraa-primary hover:bg-sheraa-primary/90"
          >
            <Link to="/community/startups" className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10"
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
