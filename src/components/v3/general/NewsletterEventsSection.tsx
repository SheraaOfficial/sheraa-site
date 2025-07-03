
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  ExternalLink,
  Plus,
  CheckCircle
} from "lucide-react";

const NewsletterEventsSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [eventFilter, setEventFilter] = useState("All");

  const filters = ["All", "Workshops", "Networking", "Speaker Series", "Online", "In-person"];

  const upcomingEvents = [
    {
      id: 1,
      title: "Entrepreneurship 101: Getting Started",
      type: "Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Sheraa HQ, SRTIP",
      attendees: 24,
      maxAttendees: 30,
      isOnline: false,
      description: "Perfect for beginners looking to understand the basics of starting a business."
    },
    {
      id: 2,
      title: "Coffee & Connections Morning",
      type: "Networking",
      date: "March 22, 2024",
      time: "9:00 AM - 11:00 AM", 
      location: "American University of Sharjah",
      attendees: 18,
      maxAttendees: 25,
      isOnline: false,
      description: "Casual networking over coffee with fellow entrepreneurs and mentors."
    },
    {
      id: 3,
      title: "Tech Startups: Building Your MVP",
      type: "Speaker Series",
      date: "March 29, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      attendees: 45,
      maxAttendees: 100,
      isOnline: true,
      description: "Learn from successful tech entrepreneurs about building your first product."
    },
    {
      id: 4,
      title: "Pitch Practice Session",
      type: "Workshop",
      date: "April 5, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "University of Sharjah",
      attendees: 12,
      maxAttendees: 20,
      isOnline: false,
      description: "Practice your pitch and get feedback from experienced entrepreneurs."
    },
    {
      id: 5,
      title: "Women in Entrepreneurship Panel",
      type: "Speaker Series",
      date: "April 12, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Online",
      attendees: 67,
      maxAttendees: 150,
      isOnline: true,
      description: "Inspiring stories and advice from successful female entrepreneurs."
    },
    {
      id: 6,
      title: "Business Model Canvas Workshop",
      type: "Workshop",
      date: "April 19, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Sheraa HQ, SRTIP",
      attendees: 8,
      maxAttendees: 15,
      isOnline: false,
      description: "Hands-on workshop to create and refine your business model."
    }
  ];

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const filteredEvents = eventFilter === "All" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => 
        eventFilter === "Online" ? event.isOnline :
        eventFilter === "In-person" ? !event.isOnline :
        event.type === eventFilter
      );

  return (
    <section className="py-16 bg-[#A0826D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Stay Connected & Informed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our newsletter and attend events to stay updated with the latest 
            in entrepreneurship and connect with the community.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-[#A0826D] mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#374151]">Weekly Newsletter</h3>
                    <p className="text-gray-600">Join 3,000+ subscribers</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Get weekly entrepreneurship insights, upcoming events, success stories, 
                  and exclusive resources delivered to your inbox.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-700 mb-1">Successfully Subscribed!</h4>
                    <p className="text-green-600 text-sm">
                      Check your email for a welcome message and your first newsletter.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0826D]/50 focus:border-[#A0826D]"
                      />
                      <Button
                        onClick={handleSubscribe}
                        className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white px-6"
                      >
                        Subscribe
                      </Button>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      ✓ Weekly insights • ✓ Event updates • ✓ Success stories • ✓ Easy unsubscribe
                    </div>
                  </div>
                )}

                {/* Newsletter Preview */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Latest Newsletter Preview:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• "5 Common Startup Mistakes and How to Avoid Them"</div>
                    <div>• Community Spotlight: Sarah's EdTech Success</div>
                    <div>• Upcoming: March Entrepreneurship Workshop Series</div>
                    <div>• Resource: Free Business Plan Template</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Events Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-8 h-8 text-[#A0826D] mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#374151]">Upcoming Events</h3>
                      <p className="text-gray-600">Join us for learning and networking</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Event Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {filters.map((filter) => (
                    <Button
                      key={filter}
                      size="sm"
                      variant={eventFilter === filter ? "default" : "outline"}
                      onClick={() => setEventFilter(filter)}
                      className={
                        eventFilter === filter 
                          ? "bg-[#A0826D] hover:bg-[#A0826D]/90 text-white" 
                          : "border-[#A0826D]/30 text-[#A0826D] hover:bg-[#A0826D]/10"
                      }
                    >
                      {filter}
                    </Button>
                  ))}
                </div>

                {/* Events List */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredEvents.slice(0, 4).map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#A0826D]/30 hover:bg-[#A0826D]/5 transition-all duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-[#374151] text-sm">{event.title}</h4>
                        <Badge
                          variant="secondary"
                          className={
                            event.isOnline 
                              ? "bg-blue-100 text-blue-700" 
                              : "bg-green-100 text-green-700"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3">{event.description}</p>
                      
                      <div className="space-y-2 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-2" />
                          {event.attendees}/{event.maxAttendees} attending
                        </div>
                      </div>
                      
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-[#A0826D] hover:bg-[#A0826D]/90 text-white"
                      >
                        Register Now
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Calendar Actions */}
                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
                  >
                    View Full Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Suggest Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterEventsSection;
