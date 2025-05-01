
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";

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
  );
};
