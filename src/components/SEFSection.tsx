import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Star, Layout, Mic, Award, Ticket, BookOpen } from "lucide-react";
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
  const stats = [{
    value: "14,000+",
    label: "Attendees",
    icon: Users
  }, {
    value: "300+",
    label: "Global Speakers",
    icon: Mic
  }, {
    value: "250+",
    label: "Activities",
    icon: Calendar
  }, {
    value: "10+",
    label: "Zones",
    icon: Layout
  }];
  const experienceZones = [{
    name: "STARTUP TOWN",
    description: "Building the Future Together",
    icon: Star
  }, {
    name: "MADE IN SHARJAH",
    description: "Honoring Local Talent",
    icon: Award
  }, {
    name: "INVESTORS LOUNGE",
    description: "Connect with Capital",
    icon: Users
  }, {
    name: "SEF ACADEMY",
    description: "Learning at Every Level",
    icon: BookOpen
  }, {
    name: "PITCH COMPETITION",
    description: "Showcase Your Ideas",
    icon: Mic
  }, {
    name: "IMPACT ZONE",
    description: "Where Inspiration Meets Purpose",
    icon: Star
  }];
  return <ParallaxSection direction="up" scrollMultiplier={0.2} className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <section ref={sectionRef} className="relative bg-gradient-to-br from-sheraa-light to-white rounded-3xl shadow-lg overflow-hidden" id="sef-section">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary"></div>
        
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`inline-block py-2 px-4 bg-sheraa-primary/10 text-sheraa-primary rounded-full border border-sheraa-primary/20 transition-all duration-500 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <span className="text-sm font-medium tracking-wide">
                  SHARJAH ENTREPRENEURSHIP FESTIVAL
                </span>
              </div>
              
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-sheraa-dark transition-all duration-700 delay-100 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL RETURNS JANUARY 2026
              </h2>
              
              <p className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                To the 14,000+ attendees, 300+ global speakers, and every entrepreneur, innovator, and explorer 
                who made SEF 2025 a record-breaking success—Thank You. Your passion, ideas, and energy turned 
                SEF'25 into a festival of firsts.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <Button asChild size="lg" className="group">
                  <Link to="/events/sef/register" className="flex items-center gap-2">Register for SEF'26</Link>
                </Button>
                
                <Button asChild size="lg" variant="outline">
                  <Link to="/events/sef/agenda">Explore SEF'25 agenda</Link>
                </Button>
              </div>
              
              {/* Experience Zones Cards */}
              <div className="pt-6">
                <h3 className={`text-xl font-semibold mb-4 transition-all duration-700 delay-400 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>SEF'26 Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceZones.map((zone, index) => <Card key={index} className={`border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all group hover:shadow-md transform hover:translate-y-[-2px] ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`} style={{
                  transitionDelay: `${400 + index * 50}ms`
                }}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-sheraa-primary/10 p-2 rounded-full">
                            <zone.icon className="w-4 h-4 text-sheraa-primary" />
                          </div>
                          <CardTitle className="text-sm sm:text-base">{zone.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 pb-4 pt-0">
                        <p className="text-xs text-gray-500">{zone.description}</p>
                      </CardContent>
                    </Card>)}
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              {/* Event Card */}
              <Card className={`overflow-hidden shadow-lg border-sheraa-primary/20 transition-all duration-1000 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-x-8"}`}>
                <div className="h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold flex items-center justify-between">
                    <span>SEF'26</span>
                    <span className="text-sm font-normal text-sheraa-primary px-2 py-1 bg-sheraa-primary/5 rounded-md">Mark Your Calenders</span>
                  </CardTitle>
                  <CardDescription>Where We Belong</CardDescription>
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
                </CardContent>
                
                <CardFooter className="flex-col space-y-3 py-[13px]">
                  <Button asChild className="w-full">
                    <Link to="/events/sef/register">Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Stats Grid */}
              <div>
                <h3 className="text-xl font-bold my-[16px]">What to expect at SEF'26</h3>
                <div className={`grid grid-cols-2 gap-3 transition-all duration-1000 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                  {stats.map((stat, index) => <Card key={index} className={`border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all transform hover:translate-y-[-2px] hover:shadow-md ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 scale-95"}`} style={{
                  transitionDelay: `${500 + index * 100}ms`
                }}>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <stat.icon className="w-5 h-5 text-sheraa-primary mb-2" />
                          <span className="text-xl md:text-2xl font-bold text-sheraa-primary">{stat.value}</span>
                          <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className={`transition-all duration-1000 delay-600 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-2">
                  {["Agenda", "Speakers", "Experience", "Who Should Attend", "Be Part of SEF"].map((link, index) => <Link key={index} to={`/events/sef/${link.toLowerCase().replace(/\s+/g, '-')}`} className="px-3 py-1.5 bg-gray-100 hover:bg-sheraa-primary/10 text-gray-700 hover:text-sheraa-primary rounded-full text-sm transition-all">
                      {link}
                    </Link>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>;
};
export default SEFSection;