
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

type SEFEventCardProps = {
  hasRevealed: boolean;
};

export const SEFEventCard: React.FC<SEFEventCardProps> = ({ hasRevealed }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={hasRevealed ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }}
    >
      <Card className="overflow-hidden shadow-xl border-white/30 backdrop-blur-xl bg-white/20 text-white 
        hover:shadow-[0_0_30px_rgba(155,135,245,0.25)] transition-all duration-500 relative group">
        
        {/* Top gradient bar with sparkles */}
        <div className="h-2.5 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] relative overflow-hidden">
          <div className="absolute inset-0">
            <Sparkles colors={["#ffffff", "#ffffff", "#E5DEFF"]} count={5} />
          </div>
        </div>
        
        {/* Animated glow on hover */}
        <div className="absolute -inset-[100px] bg-[radial-gradient(ellipse_at_center,rgba(155,135,245,0.15)_0%,transparent_70%)] 
          opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>
        
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-xl font-bold flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-[#D6BCFA] mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">SEF'26</span>
            </div>
            <Button 
              onClick={handleAddToCalendar}
              variant="outline" 
              size="sm" 
              className="text-sm font-normal text-white border-white/40 px-3 py-1.5 bg-white/10 rounded-full 
                hover:bg-white/20 hover:shadow-glow-sm transition-all duration-300"
            >
              Mark Your Calendar
            </Button>
          </CardTitle>
          <CardDescription className="text-white/90 font-medium">Where We Belong</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 transition-colors group-hover:bg-white/30">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-white/70 mb-0.5">Date</div>
              <div className="font-medium">January 31 - February 1, 2026</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 transition-colors group-hover:bg-white/30">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-white/70 mb-0.5">Location</div>
              <div className="font-medium">SRTI Park, Sharjah</div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-3 py-4 relative z-10">
          <GradientButton 
            asChild 
            variant="shimmer" 
            size="lg" 
            className="w-full shadow-lg hover:shadow-xl"
          >
            <Link to="/events/sef/register" className="font-bold">Register Now</Link>
          </GradientButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
