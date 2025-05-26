
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { EventCard } from "./components/EventCard";

const UpcomingEventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Sharjah Entrepreneurship Festival 2026",
      description: "The region's largest celebration of entrepreneurship bringing together global changemakers, investors, and innovators.",
      date: "January 31 - February 1, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "SRTIP, Sharjah",
      attendees: "14,000+ Expected",
      type: "Festival",
      featured: true,
      registrationOpen: true
    },
    {
      title: "S3 Incubator Demo Day",
      description: "Showcase of the latest S3 Incubator cohort presenting their innovative startups to investors and industry leaders.",
      date: "March 15, 2025",
      time: "4:00 PM - 8:00 PM", 
      location: "Sheraa HQ, SRTIP",
      attendees: "200+ Expected",
      type: "Demo Day",
      featured: false,
      registrationOpen: true
    },
    {
      title: "Startup Dojo Summer Program Launch",
      description: "8-week intensive program launch for university students to transform ideas into viable entrepreneurial solutions.",
      date: "June 1, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "AUS Campus Hub",
      attendees: "50+ Students",
      type: "Program Launch",
      featured: false,
      registrationOpen: false
    },
    {
      title: "Access Sharjah Challenge 2025",
      description: "Global competition for growth-stage startups to address real-world challenges in Sharjah's key sectors.",
      date: "September 10-12, 2025",
      time: "Full Day Event",
      location: "Multiple Venues, Sharjah",
      attendees: "500+ Participants",
      type: "Challenge",
      featured: false,
      registrationOpen: false
    }
  ];

  const typeColors = {
    "Festival": "bg-sheraa-sef-primary/10 text-sheraa-sef-primary border-sheraa-sef-primary/20",
    "Demo Day": "bg-sheraa-primary/10 text-sheraa-primary border-sheraa-primary/20",
    "Program Launch": "bg-orange-100 text-orange-700 border-orange-200",
    "Challenge": "bg-green-100 text-green-700 border-green-200"
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6 text-sheraa-primary hover:bg-sheraa-primary/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Events</span>
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Calendar className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Upcoming Events</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              What's Coming Next
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for upcoming events designed to inspire, educate, and connect 
              entrepreneurs across the Sharjah ecosystem and beyond.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                index={index}
                typeColors={typeColors}
              />
            ))}
          </div>

          {/* Stay Updated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-none max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
                <p className="text-xl mb-8 text-white/90">
                  Subscribe to our newsletter and be the first to know about upcoming events, 
                  registration openings, and exclusive opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    Subscribe to Newsletter
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/contact" className="flex items-center gap-2">
                      Contact Events Team
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpcomingEventsPage;
