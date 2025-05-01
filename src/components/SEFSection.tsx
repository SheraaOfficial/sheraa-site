
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Star, Layout, Mic, Award, Ticket, BookOpen } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Glow } from "@/components/ui/glow-effect";
import { Particles } from "@/components/ui/particles";
import { GradientButton } from "@/components/ui/gradient-button";
import { BorderBeam } from "@/components/ui/border-beam";

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

  const handleAddToCalendar = () => {
    // Create calendar event details
    const eventTitle = "Sharjah Entrepreneurship Festival (SEF'26)";
    const eventLocation = "SRTI Park, Sharjah";
    const eventDescription = "The region's largest entrepreneurship festival returns for SEF'26. Join thousands of entrepreneurs, innovators, and investors for two days of inspiration, learning, and connection.";
    const startDate = "20260131T080000"; // Jan 31, 2026, 8:00 AM
    const endDate = "20260201T180000"; // Feb 1, 2026, 6:00 PM

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
    
    // Create iCal file content
    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventTitle}
DTSTART:${startDate}
DTEND:${endDate}
DESCRIPTION:${eventDescription}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;
    
    // Create calendar options
    const calendarOptions = [
      { name: "Google Calendar", action: () => window.open(googleCalendarUrl, '_blank') },
      { name: "iCal / Outlook", action: () => {
        const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `SEF26_${startDate}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }},
      { name: "Add to device calendar", action: () => {
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          // For mobile devices, attempt to use the native calendar
          window.open(googleCalendarUrl, '_blank');
        } else {
          // Fallback to Google Calendar for desktop
          window.open(googleCalendarUrl, '_blank');
        }
      }}
    ];

    // Show toast with calendar options
    toast("Add to calendar", {
      description: "Choose your calendar app",
      action: (
        <div className="flex flex-col space-y-2 mt-2">
          {calendarOptions.map((option, i) => (
            <Button key={i} variant="outline" size="sm" onClick={option.action} className="w-full">
              {option.name}
            </Button>
          ))}
        </div>
      ),
      duration: 5000
    });
  };

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

  return (
    <ParallaxSection direction="up" scrollMultiplier={0.2} className="py-16 md:py-32 px-4 md:px-8 lg:px-12 overflow-visible">
      <section 
        ref={sectionRef} 
        className="relative rounded-3xl overflow-hidden"
        id="sef-section"
      >
        {/* Background with particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] opacity-90 z-0 overflow-hidden">
          <Particles
            className="absolute inset-0"
            quantity={75}
            staticity={30}
            color="#ffffff"
            ease={50}
          />
        </div>
        
        {/* Glow effect */}
        <Glow variant="center" className="z-10" />
        
        {/* Top border beam */}
        <BorderBeam 
          className="z-20" 
          colorFrom="#ffffff" 
          colorTo="#D6BCFA"
          size={300}
          duration={10}
        />
        
        <div className="container relative mx-auto px-4 md:px-8 py-20 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`inline-flex items-center py-2 px-4 bg-white text-[#8B5CF6] rounded-full transition-all duration-500 shadow-lg ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <span className="text-sm font-bold tracking-wide">
                  SHARJAH ENTREPRENEURSHIP FESTIVAL
                </span>
              </div>
              
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 delay-100 drop-shadow-lg ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL RETURNS JANUARY 2026
              </h2>
              
              <p className={`text-lg text-white/90 transition-all duration-700 delay-200 drop-shadow-md ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                To the 14,000+ attendees, 300+ global speakers, and every entrepreneur, innovator, and explorer 
                who made SEF 2025 a record-breaking success—Thank You. Your passion, ideas, and energy turned 
                SEF'25 into a festival of firsts.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <GradientButton asChild variant="shimmer" size="lg" className="group shadow-lg hover:shadow-xl">
                  <Link to="/events/sef/register" className="flex items-center gap-2 font-bold">
                    Register for SEF'26
                  </Link>
                </GradientButton>
                
                <Button asChild size="lg" variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30 backdrop-blur-sm">
                  <Link to="/events/sef/agenda">Explore SEF'25 agenda</Link>
                </Button>
              </div>
              
              {/* Experience Zones Cards */}
              <div className="pt-8">
                <h3 className={`text-xl font-semibold mb-4 text-white transition-all duration-700 delay-400 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                  SEF'26 Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceZones.map((zone, index) => (
                    <Card 
                      key={index} 
                      className={`border-white/30 hover:border-white backdrop-blur-md bg-white/20 hover:bg-white/30 text-white transition-all group hover:shadow-md transform hover:-translate-y-1 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
                      style={{
                        transitionDelay: `${400 + index * 75}ms`
                      }}
                    >
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-white/20 p-2 rounded-full">
                            <zone.icon className="w-4 h-4 text-white" />
                          </div>
                          <CardTitle className="text-sm sm:text-base">{zone.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 pb-4 pt-0">
                        <p className="text-xs text-white/80">{zone.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              {/* Event Card */}
              <Card className={`overflow-hidden shadow-xl border-white/30 backdrop-blur-md bg-white/20 text-white hover:shadow-2xl hover:bg-white/25 transition-all duration-1000 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-x-8"}`}>
                <div className="h-2 bg-gradient-to-r from-[#D6BCFA] to-white"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold flex items-center justify-between">
                    <span>SEF'26</span>
                    <Button 
                      onClick={handleAddToCalendar}
                      variant="outline" 
                      size="sm" 
                      className="text-sm font-normal text-white border-white/40 px-2 py-1 bg-white/10 rounded-md hover:bg-white/20"
                    >
                      Mark Your Calendar
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-white/80">Where We Belong</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Date</div>
                      <div className="font-medium">January 31 - February 1, 2026</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Location</div>
                      <div className="font-medium">SRTI Park, Sharjah</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex-col space-y-3 py-[13px]">
                  <GradientButton asChild size="lg" className="w-full">
                    <Link to="/events/sef/register">Register Now</Link>
                  </GradientButton>
                </CardFooter>
              </Card>
              
              {/* Stats Grid */}
              <div>
                <h3 className="text-xl font-bold my-[16px] text-white">What to expect at SEF'26</h3>
                <div className={`grid grid-cols-2 gap-3 transition-all duration-1000 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                  {stats.map((stat, index) => (
                    <Card 
                      key={index} 
                      className={`border-white/30 backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all transform hover:scale-105 hover:shadow-lg text-white ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 scale-95"}`}
                      style={{
                        transitionDelay: `${500 + index * 100}ms`
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <stat.icon className="w-6 h-6 text-white mb-2" />
                          <span className="text-xl md:text-3xl font-bold">{stat.value}</span>
                          <span className="text-xs text-white/80 mt-1">{stat.label}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className={`transition-all duration-1000 delay-600 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                <div className="flex flex-wrap gap-2">
                  {["Agenda", "Speakers", "Experience", "Who Should Attend", "Be Part of SEF"].map((link, index) => (
                    <Link 
                      key={index} 
                      to={`/events/sef/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm transition-all hover:shadow-md"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
