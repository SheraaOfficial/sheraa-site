
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, Clock, MapPin, Users, 
  ExternalLink, Bell, Filter, Search
} from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Startup Pitch Night #12",
      date: "December 28, 2024",
      time: "6:00 PM - 8:30 PM",
      location: "Sheraa HQ, SRTIP",
      description: "Watch early-stage startups pitch to a panel of investors and ecosystem partners. Open networking follows.",
      type: "Networking",
      capacity: "150 seats",
      price: "Free",
      status: "Registration Open",
      agenda: ["6:00 PM - Registration & Networking", "6:30 PM - Startup Pitches", "7:30 PM - Investor Panel", "8:00 PM - Networking"]
    },
    {
      title: "Fundraising Masterclass with Regional VCs",
      date: "January 8, 2025",
      time: "2:00 PM - 5:00 PM", 
      location: "AUS Hub",
      description: "Learn the fundamentals of raising capital from Series A VCs operating in the MENA region.",
      type: "Workshop",
      capacity: "50 seats",
      price: "AED 100",
      status: "Early Bird",
      agenda: ["2:00 PM - Introduction to Fundraising", "3:00 PM - Pitch Deck Workshop", "4:00 PM - Q&A with VCs", "4:30 PM - 1:1 Sessions"]
    },
    {
      title: "Women in Entrepreneurship Panel",
      date: "January 15, 2025", 
      time: "7:00 PM - 9:00 PM",
      location: "UOS Hub",
      description: "Celebrating women entrepreneurs and discussing challenges and opportunities in building inclusive ecosystems.",
      type: "Panel Discussion",
      capacity: "100 seats", 
      price: "Free",
      status: "Registration Soon",
      agenda: ["7:00 PM - Welcome & Networking", "7:30 PM - Panel Discussion", "8:30 PM - Q&A", "9:00 PM - Closing Networking"]
    },
    {
      title: "Tech Startup Demo Day",
      date: "January 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Sheraa HQ, SRTIP", 
      description: "S3 Incubator cohort presents their progress and solutions to potential customers and investors.",
      type: "Demo Day",
      capacity: "200 seats",
      price: "Invite Only",
      status: "Confirmed",
      agenda: ["3:00 PM - Registration", "3:30 PM - Startup Demos", "5:00 PM - Investor Meetings", "5:30 PM - Networking"]
    },
    {
      title: "Digital Marketing for Startups Workshop",
      date: "February 5, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Virtual + Sheraa HQ",
      description: "Hands-on workshop covering digital marketing strategies specifically for early-stage startups.",
      type: "Workshop", 
      capacity: "75 seats",
      price: "AED 150",
      status: "Registration Open",
      agenda: ["10:00 AM - Digital Strategy", "11:00 AM - Social Media Marketing", "12:00 PM - Performance Analytics", "12:30 PM - Q&A"]
    },
    {
      title: "Corporate Innovation Challenge Finale",
      date: "February 12, 2025",
      time: "1:00 PM - 5:00 PM", 
      location: "SRTIP Auditorium",
      description: "Finalists present solutions to corporate challenges from partner companies with potential POC opportunities.",
      type: "Competition",
      capacity: "300 seats",
      price: "Free",
      status: "Registration Open",
      agenda: ["1:00 PM - Opening Ceremony", "1:30 PM - Finalist Presentations", "3:30 PM - Judging", "4:30 PM - Awards & Networking"]
    }
  ];

  const eventTypes = ["All Events", "Workshop", "Networking", "Panel Discussion", "Demo Day", "Competition"];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Join Our Upcoming<br />Events & Workshops
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Participate in workshops, webinars, pitch nights, and community events designed to enhance your skills and expand your network within the Sharjah entrepreneurship ecosystem.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Bell className="mr-2 w-4 h-4" />
                Get Event Notifications
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Event Type Filters */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {eventTypes.map((type, idx) => (
                <Badge 
                  key={idx}
                  variant={idx === 0 ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.status === 'Registration Open' ? 'bg-green-100 text-green-600' :
                          event.status === 'Early Bird' ? 'bg-blue-100 text-blue-600' :
                          event.status === 'Registration Soon' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{event.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          {event.capacity}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2">Agenda:</h4>
                        <ul className="space-y-1">
                          {event.agenda.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <div className="w-1 h-1 bg-sheraa-primary rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-semibold">Price: </span>
                          <span className={event.price === 'Free' ? 'text-green-600' : 'text-sheraa-primary'}>
                            {event.price}
                          </span>
                        </div>
                        
                        <Button 
                          variant={event.status === 'Registration Open' || event.status === 'Early Bird' ? 'default' : 'outline'}
                          className={event.status === 'Registration Open' || event.status === 'Early Bird' ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10'}
                          disabled={event.status === 'Registration Soon'}
                        >
                          {event.status === 'Registration Soon' ? 'Coming Soon' : 
                           event.status === 'Confirmed' ? 'View Details' :
                           'Register Now'}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-12">
                  <Calendar className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Never Miss an Event</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Subscribe to our event newsletter and be the first to know about upcoming workshops, networking events, and exclusive invitations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                    />
                    <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Subscribe
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Event updates • No spam • Unsubscribe anytime
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default UpcomingEvents;
