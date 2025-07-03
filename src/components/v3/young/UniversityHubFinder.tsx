import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Calendar, 
  Trophy, 
  Star, 
  ExternalLink,
  Globe,
  Building2,
  TrendingUp,
  DollarSign
} from "lucide-react";

interface UniversityHub {
  id: string;
  name: string;
  shortName: string;
  location: string;
  address: string;
  activeMembers: number;
  focusAreas: string[];
  upcomingEvents: Event[];
  successStories: SuccessStory[];
  isVirtual?: boolean;
  coordinates?: { lat: number; lng: number };
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  description: string;
}

interface SuccessStory {
  metric: string;
  value: string;
  description: string;
}

const UniversityHubFinder = () => {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);

  const universityHubs: UniversityHub[] = [
    {
      id: "aus",
      name: "American University of Sharjah",
      shortName: "AUS",
      location: "Ground floor, across from library",
      address: "University City, Sharjah, UAE",
      activeMembers: 234,
      focusAreas: ["Tech", "Social Impact", "Creative Industries"],
      upcomingEvents: [
        {
          id: "1",
          title: "Startup Pitch Night",
          date: "Friday",
          time: "7PM",
          type: "Competition",
          description: "12 teams competing for AED 5,000 prize"
        },
        {
          id: "2",
          title: "Founder Q&A with Careem Alumni",
          date: "Saturday",
          time: "2PM",
          type: "Networking",
          description: "Learn from successful AUS graduates"
        },
        {
          id: "3",
          title: "Build Your MVP Workshop",
          date: "Wednesday",
          time: "6PM",
          type: "Workshop",
          description: "Hands-on coding session"
        }
      ],
      successStories: [
        { metric: "Startups Launched", value: "3", description: "this semester" },
        { metric: "Funding Raised", value: "AED 150K", description: "total by students" },
        { metric: "Competition Wins", value: "2nd place", description: "UAE University Startup Competition" }
      ],
      coordinates: { lat: 25.3140, lng: 55.4828 }
    },
    {
      id: "uos",
      name: "University of Sharjah",
      shortName: "UoS",
      location: "Innovation Center, 2nd floor",
      address: "University City, Sharjah, UAE",
      activeMembers: 187,
      focusAreas: ["Business", "Healthcare Innovation", "Sustainability"],
      upcomingEvents: [
        {
          id: "1",
          title: "Women in Entrepreneurship Panel",
          date: "Thursday",
          time: "7PM",
          type: "Panel",
          description: "Inspiring female founders share their stories"
        },
        {
          id: "2",
          title: "Sustainable Business Ideas Workshop",
          date: "Saturday",
          time: "10AM",
          type: "Workshop",
          description: "Create environmentally conscious ventures"
        },
        {
          id: "3",
          title: "Investor Speed Dating",
          date: "Sunday",
          time: "4PM",
          type: "Networking",
          description: "Practice your pitches with real investors"
        }
      ],
      successStories: [
        { metric: "Student Startups", value: "5", description: "in incubation" },
        { metric: "Pre-seed Funding", value: "AED 200K", description: "secured by students" },
        { metric: "Regional Champions", value: "1st place", description: "sustainability challenge" }
      ],
      coordinates: { lat: 25.3095, lng: 55.4899 }
    },
    {
      id: "virtual",
      name: "Virtual Hub",
      shortName: "Global",
      location: "Online Community",
      address: "For international students & distance learners",
      activeMembers: 156,
      focusAreas: ["Digital Business", "Online Communities", "Global Markets"],
      upcomingEvents: [
        {
          id: "1",
          title: "Virtual Co-working Session",
          date: "Daily",
          time: "8PM GST",
          type: "Co-working",
          description: "Study and work together online"
        },
        {
          id: "2",
          title: "International Market Research Workshop",
          date: "Tuesday",
          time: "9PM GST",
          type: "Workshop",
          description: "Explore global opportunities"
        },
        {
          id: "3",
          title: "Global Pitch Competition",
          date: "Friday",
          time: "7PM GST",
          type: "Competition",
          description: "Monthly competition for all countries"
        }
      ],
      successStories: [
        { metric: "Countries Represented", value: "12", description: "active members from" },
        { metric: "Cross-border Collaborations", value: "8", description: "international partnerships" },
        { metric: "Time Zone Coverage", value: "24/7", description: "global community support" }
      ],
      isVirtual: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "competition": return "bg-red-500";
      case "workshop": return "bg-blue-500";
      case "networking": return "bg-green-500";
      case "panel": return "bg-purple-500";
      case "co-working": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-4 young-gradient-text">
          🎓 Find Your Campus Community
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connect with entrepreneurial students at your university and join exciting programs happening right on campus!
        </p>
      </div>

      {/* Interactive Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative">
            {/* Map Pins */}
            {universityHubs.filter(hub => !hub.isVirtual).map((hub, index) => (
              <motion.div
                key={hub.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`absolute cursor-pointer ${
                  hub.id === "aus" ? "top-1/3 left-1/3" : "top-1/2 right-1/3"
                }`}
                onClick={() => setSelectedHub(selectedHub === hub.id ? null : hub.id)}
              >
                <div className={`w-8 h-8 young-gradient-dopamine rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                  selectedHub === hub.id ? "animate-pulse scale-125" : ""
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-semibold">
                    {hub.shortName}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Virtual Hub Indicator */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold">Virtual Hub Available</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* University Hubs Grid */}
      <div className="grid gap-6">
        {universityHubs.map((hub, index) => (
          <motion.div
            key={hub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
              selectedHub === hub.id ? "ring-2 ring-purple-400 young-dopamine-shadow" : ""
            }`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold ${
                      hub.isVirtual ? "young-gradient-success" : "young-gradient-dopamine"
                    }`}>
                      {hub.isVirtual ? <Globe className="w-8 h-8" /> : <Building2 className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{hub.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{hub.location}</span>
                      </div>
                      <div className="text-sm text-gray-500">{hub.address}</div>
                    </div>
                  </div>
                  
                  {hub.isVirtual && (
                    <Badge variant="outline" className="text-blue-600 border-blue-300">
                      Global Access
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Hub Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-semibold">MEMBERS</span>
                    </div>
                    <div className="text-xl font-bold">{hub.activeMembers}</div>
                    <div className="text-xs text-gray-500">active students</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-semibold">EVENTS</span>
                    </div>
                    <div className="text-xl font-bold">{hub.upcomingEvents.length}</div>
                    <div className="text-xs text-gray-500">this week</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-semibold">SUCCESS</span>
                    </div>
                    <div className="text-xl font-bold">{hub.successStories[0].value}</div>
                    <div className="text-xs text-gray-500">{hub.successStories[0].description}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-orange-600 mb-1">
                      <Star className="w-4 h-4" />
                      <span className="text-xs font-semibold">FOCUS</span>
                    </div>
                    <div className="text-sm font-bold">{hub.focusAreas[0]}</div>
                    <div className="text-xs text-gray-500">+ {hub.focusAreas.length - 1} more</div>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {hub.focusAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Upcoming Events:</div>
                  <div className="space-y-2">
                    {hub.upcomingEvents.slice(0, 3).map((event, index) => (
                      <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge className={`${getEventTypeColor(event.type)} text-white text-xs`}>
                            {event.type}
                          </Badge>
                          <div>
                            <div className="font-semibold text-sm">{event.title}</div>
                            <div className="text-xs text-gray-600">{event.description}</div>
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="font-semibold">{event.date}</div>
                          <div className="text-gray-500">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Stories */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Success Stories:</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {hub.successStories.map((story, index) => (
                      <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">{story.value}</div>
                        <div className="text-xs text-green-600 font-medium">{story.metric}</div>
                        <div className="text-xs text-gray-600">{story.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 young-gradient-dopamine text-white font-bold">
                    {hub.isVirtual ? "Join Virtual Hub" : `Join ${hub.shortName} Hub`}
                  </Button>
                  <Button variant="outline" className="flex-shrink-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                  <Button variant="outline" className="flex-shrink-0">
                    <Users className="w-4 h-4 mr-2" />
                    Meet Members
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Join Virtual Hub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card className="border-0 young-gradient-success text-white shadow-2xl">
          <CardContent className="p-8 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Can't Find Your University?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join our Virtual Hub and connect with entrepreneurial students from around the world!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm opacity-90">Global Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Community Support</div>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
              <ExternalLink className="w-4 h-4 mr-2" />
              Join Virtual Hub
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default UniversityHubFinder;