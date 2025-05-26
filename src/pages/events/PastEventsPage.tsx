
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft,
  Play,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const PastEventsPage: React.FC = () => {
  const pastEvents = [
    {
      title: "Sharjah Entrepreneurship Festival 2025",
      description: "Record-breaking edition bringing together 14,000+ attendees, 300+ speakers from 45 countries, and 250+ activities.",
      date: "January 31 - February 1, 2025",
      location: "SRTIP, Sharjah",
      attendees: "14,000+",
      type: "Festival",
      highlights: ["320+ investor meetings", "AED 700k+ in pitch prizes", "45 countries represented"],
      hasVideo: true,
      hasGallery: true
    },
    {
      title: "S3 Incubator Cohort 4 Demo Day",
      description: "Outstanding presentation by 12 innovative startups from our latest S3 Incubator cohort, attracting significant investor interest.",
      date: "December 10, 2024",
      location: "Sheraa HQ, SRTIP",
      attendees: "250+",
      type: "Demo Day",
      highlights: ["12 startups pitched", "$2M+ investment interest", "85% investor satisfaction"],
      hasVideo: true,
      hasGallery: false
    },
    {
      title: "Access Sharjah Challenge 2024",
      description: "Global competition focused on AgriTech and Livestock Health, with winners implementing POCs with major Sharjah entities.",
      date: "September 15-17, 2024",
      location: "Multiple Venues, Sharjah",
      attendees: "500+",
      type: "Challenge",
      highlights: ["50+ global applicants", "AED 250k+ in grants", "6 POC implementations"],
      hasVideo: false,
      hasGallery: true
    },
    {
      title: "Startup Dojo Summer 2024",
      description: "Intensive 8-week program for 30 university students, with 81% Emirati participation and outstanding graduation results.",
      date: "June 1 - July 26, 2024",
      location: "AUS & UOS Hubs",
      attendees: "30 Students",
      type: "Program",
      highlights: ["81% Emirati participation", "15 business ideas developed", "90% completion rate"],
      hasVideo: false,
      hasGallery: true
    }
  ];

  const typeColors = {
    "Festival": "bg-sheraa-sef-primary/10 text-sheraa-sef-primary border-sheraa-sef-primary/20",
    "Demo Day": "bg-sheraa-primary/10 text-sheraa-primary border-sheraa-primary/20",
    "Challenge": "bg-green-100 text-green-700 border-green-200",
    "Program": "bg-orange-100 text-orange-700 border-orange-200"
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
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
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Past Events</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Our Event Legacy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the impactful events we've hosted, celebrating the achievements, 
              connections made, and innovations sparked within our vibrant ecosystem.
            </p>
          </motion.div>

          {/* Events Timeline */}
          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <Card className="border border-purple-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={typeColors[event.type as keyof typeof typeColors]}>
                            {event.type}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Users className="w-4 h-4 text-purple-600" />
                            {event.attendees} Attendees
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-gray-700">
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                            Event Highlights
                          </h4>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3 lg:min-w-[200px]">
                        {event.hasVideo && (
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                            <Play className="w-4 h-4" />
                            Watch Highlights
                          </Button>
                        )}
                        {event.hasGallery && (
                          <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                            View Gallery
                          </Button>
                        )}
                        <Button variant="outline" className="text-gray-600 hover:bg-gray-50">
                          Event Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Events Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Events Impact by Numbers</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">50,000+</div>
                    <div className="text-lg text-white/90">Total Attendees</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">1,000+</div>
                    <div className="text-lg text-white/90">Speakers Featured</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <div className="text-lg text-white/90">Startups Showcased</div>
                  </div>
                </div>
                <p className="text-lg text-white/80">
                  Our events continue to be catalysts for innovation, connection, and growth 
                  within the Sharjah entrepreneurship ecosystem and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PastEventsPage;
