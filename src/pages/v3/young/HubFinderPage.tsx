
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Wifi, Coffee, Calendar, Star, Navigation } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  openHours: string;
  capacity: number;
  currentOccupancy: number;
  rating: number;
  distance: string;
  image: string;
  events: string[];
  tags: string[];
}

const mockHubs: Hub[] = [
  {
    id: "1",
    name: "Sheraa HQ - SRTIP",
    location: "Sharjah Research Technology and Innovation Park",
    address: "University City, Sharjah, UAE",
    description: "Our flagship hub with state-of-the-art facilities, maker space, and innovation labs. Perfect for deep tech startups and research-based ventures.",
    amenities: ["High-speed WiFi", "Meeting Rooms", "Maker Space", "Podcast Studio", "Printing", "Coffee Bar"],
    openHours: "24/7 Access",
    capacity: 150,
    currentOccupancy: 87,
    rating: 4.9,
    distance: "2.3 km",
    image: "/lovable-uploads/sheraa-logo.png",
    events: ["Pitch Night", "Tech Talks", "Networking Mixer"],
    tags: ["Deep Tech", "Research", "Innovation"]
  },
  {
    id: "2",
    name: "Sheraa @ AUS",
    location: "American University of Sharjah",
    address: "Ground Floor, Library Building, AUS",
    description: "University-integrated hub fostering student entrepreneurship. Collaborative space with academic mentorship and peer learning opportunities.",
    amenities: ["Study Rooms", "WiFi", "Printing", "Mentorship", "Library Access", "Cafe"],
    openHours: "6:00 AM - 11:00 PM",
    capacity: 80,
    currentOccupancy: 45,
    rating: 4.7,
    distance: "1.8 km",
    image: "/lovable-uploads/sheraa-logo.png",
    events: ["Startup Dojo", "Student Meetups", "Workshops"],
    tags: ["Student Hub", "Academic", "Collaborative"]
  },
  {
    id: "3",
    name: "Sheraa @ UOS",
    location: "University of Sharjah",
    address: "W3 Building, University of Sharjah",
    description: "Student-focused workspace promoting innovation and entrepreneurship within the academic environment. Great for team projects and ideation.",
    amenities: ["Group Spaces", "WiFi", "Presentation Screens", "Mentorship", "Campus Access"],
    openHours: "7:00 AM - 10:00 PM",
    capacity: 60,
    currentOccupancy: 32,
    rating: 4.6,
    distance: "3.1 km",
    image: "/lovable-uploads/sheraa-logo.png",
    events: ["Innovation Challenges", "Startup Competitions", "Workshops"],
    tags: ["Student Hub", "Innovation", "Competitions"]
  }
];

const HubFinderPage: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<Hub | null>(null);

  const getOccupancyColor = (occupancy: number, capacity: number) => {
    const percentage = (occupancy / capacity) * 100;
    if (percentage < 50) return "text-green-400";
    if (percentage < 80) return "text-yellow-400";
    return "text-red-400";
  };

  const getOccupancyStatus = (occupancy: number, capacity: number) => {
    const percentage = (occupancy / capacity) * 100;
    if (percentage < 50) return "Available";
    if (percentage < 80) return "Busy";
    return "Full";
  };

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              🏢 Find Your Perfect Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover Sheraa's innovation hubs across Sharjah. Find the perfect workspace 
              for your startup journey, connect with like-minded entrepreneurs, and access 
              world-class facilities.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-300">Hub Locations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold">290+</div>
                  <div className="text-sm text-gray-300">Total Capacity</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold">4.7</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Hubs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {mockHubs.map((hub, index) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl text-white mb-1">
                          {hub.name}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-sm text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span>{hub.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{hub.rating}</span>
                      </div>
                    </div>
                    
                    {/* Live Occupancy */}
                    <div className="bg-black/20 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">Live Occupancy</span>
                        <span className={`text-sm font-medium ${getOccupancyColor(hub.currentOccupancy, hub.capacity)}`}>
                          {getOccupancyStatus(hub.currentOccupancy, hub.capacity)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(hub.currentOccupancy / hub.capacity) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {hub.currentOccupancy} / {hub.capacity} occupied
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4">
                      {hub.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{hub.openHours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{hub.location}</span>
                      </div>
                    </div>
                    
                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-300 mb-2">Amenities:</div>
                      <div className="flex flex-wrap gap-1">
                        {hub.amenities.slice(0, 4).map(amenity => (
                          <span key={amenity} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {amenity}
                          </span>
                        ))}
                        {hub.amenities.length > 4 && (
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            +{hub.amenities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Upcoming Events */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-300 mb-2">Upcoming Events:</div>
                      <div className="space-y-1">
                        {hub.events.slice(0, 2).map(event => (
                          <div key={event} className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            <span>{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 young-gradient-dopamine text-white font-bold"
                        onClick={() => setSelectedHub(hub)}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Book Space
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
                <p className="text-gray-300 mb-6">
                  Not sure which hub is right for you? Our team can help you find the perfect 
                  workspace based on your startup's needs and stage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="young-gradient-energy text-white font-bold">
                    Get Personalized Recommendations
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Schedule a Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HubFinderPage;
