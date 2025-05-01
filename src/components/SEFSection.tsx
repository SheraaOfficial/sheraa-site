
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const SEFSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px 0px"
  });
  const [hasRevealed, setHasRevealed] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isInView && !hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealed(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasRevealed]);

  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "300+", label: "Global Speakers", icon: Users },
    { value: "250+", label: "Activities", icon: Calendar },
    { value: "45+", label: "Countries", icon: MapPin }
  ];

  return (
    <ParallaxSection 
      direction="up" 
      scrollMultiplier={0.2} 
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12"
    >
      <section 
        ref={sectionRef} 
        className="relative bg-gradient-to-br from-sheraa-light to-white rounded-3xl shadow-lg overflow-hidden" 
        id="sef-section"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary"></div>
        
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div 
                className={`inline-block py-2 px-4 bg-sheraa-primary/10 text-sheraa-primary rounded-full border border-sheraa-primary/20 transition-all duration-500 ${
                  isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-sm font-medium tracking-wide">
                  SHARJAH ENTREPRENEURSHIP FESTIVAL
                </span>
              </div>
              
              <h2 
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-sheraa-dark transition-all duration-700 delay-100 ${
                  isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                }`}
              >
                Sharjah's Premier<br /> Innovation Summit
              </h2>
              
              <p 
                className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${
                  isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                }`}
              >
                Join thousands of entrepreneurs, investors, and thought leaders at SEF 2026. 
                Experience two transformative days of inspiration, connections, and 
                opportunities to accelerate your entrepreneurial journey.
              </p>
              
              {/* Stats Grid */}
              <div 
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
                  hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                }`}
              >
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border border-sheraa-primary/10 bg-white shadow-sm hover:shadow-md hover:border-sheraa-primary/20 transition-all duration-300 ${
                      hasRevealed ? "opacity-100 transform-none" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <stat.icon className="w-5 h-5 text-sheraa-primary mb-2" />
                      <span className="text-xl md:text-2xl font-bold text-sheraa-primary">{stat.value}</span>
                      <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-600 ${
                  hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                }`}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="group"
                >
                  <Link to="/events/sef/register" className="flex items-center gap-2">
                    <span>Register for SEF 2026</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                >
                  <Link to="/events/sef/agenda">Explore the agenda</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Content - Event Card */}
            <div 
              className={`transition-all duration-1000 ${
                hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-x-8"
              }`}
            >
              <Card className="overflow-hidden shadow-lg border-sheraa-primary/20">
                <div className="h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold flex items-center justify-between">
                    <span>SEF 2026</span>
                    <span className="text-sm font-normal text-sheraa-primary px-2 py-1 bg-sheraa-primary/5 rounded-md">
                      Register Now
                    </span>
                  </CardTitle>
                  <CardDescription>Where innovation meets opportunity</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-sheraa-primary/10 rounded-full p-2">
                      <Calendar className="w-5 h-5 text-sheraa-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Date</div>
                      <div className="font-medium">January 31 - February 1, 2026</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-sheraa-primary/10 rounded-full p-2">
                      <MapPin className="w-5 h-5 text-sheraa-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="font-medium">SRTI Park, Sharjah</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-sheraa-primary/10 rounded-full p-2">
                      <Users className="w-5 h-5 text-sheraa-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Expected Attendance</div>
                      <div className="font-medium">14,000+ Attendees</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex-col space-y-3">
                  <Button 
                    asChild
                    className="w-full group"
                  >
                    <Link to="/events/sef/register" className="flex items-center justify-center gap-2">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
                  >
                    <Link to="/events/sef">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
