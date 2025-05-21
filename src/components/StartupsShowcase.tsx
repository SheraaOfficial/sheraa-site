
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import SectionHeader from "./startups/SectionHeader";
import StartupsCarousel from "./startups/StartupsCarousel";
const StartupsShowcase: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader />
        <StartupsCarousel />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-4 md:mt-8">
          <Button asChild size={isMobile ? "default" : "lg"} className="bg-sheraa-coral hover:bg-sheraa-coral/90 w-full sm:w-auto">
            <Link to="/community/startups" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Explore All Startups
            </Link>
          </Button>
          
          <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="border-sheraa-coral text-sheraa-coral hover:bg-sheraa-coral/10 w-full sm:w-auto">
            <Link to="/community/join" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Join Our Community
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default React.memo(StartupsShowcase);
