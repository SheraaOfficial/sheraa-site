
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, Users, Video, FileText, 
  ExternalLink, Search, Filter, Play
} from 'lucide-react';

const PastEvents: React.FC = () => {
  const pastEvents = [
    {
      title: "SEF 2024: Where We Belong",
      date: "February 1-2, 2024",
      location: "SRTIP, Sharjah",
      description: "The region's largest entrepreneurship festival brought together 14,000+ participants from 45 countries",
      type: "Festival",
      attendees: "14,000+",
      highlights: ["300+ global speakers", "320+ investor meetings", "45 countries represented"],
      materials: ["Event Recap Video", "Speaker Presentations", "Networking Report"],
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Startup Pitch Night #11",
      date: "November 28, 2024",
      location: "Sheraa HQ",
      description: "Monthly pitch event featuring 8 early-stage startups presenting to investors and mentors",
      type: "Networking",
      attendees: "120",
      highlights: ["8 startup pitches", "3 funding commitments", "60+ investor attendees"],
      materials: ["Pitch Recordings", "Startup Profiles", "Investor Feedback"],
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "AI in Business Masterclass",
      date: "November 15, 2024", 
      location: "AUS Hub",
      description: "Comprehensive workshop on integrating AI technologies into business operations and strategy",
      type: "Workshop",
      attendees: "45",
      highlights: ["Hands-on AI tools", "Case studies", "Implementation roadmaps"],
      materials: ["Workshop Materials", "AI Toolkit", "Implementation Guide"],
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Women Founders Breakfast",
      date: "October 25, 2024",
      location: "UOS Hub", 
      description: "Networking breakfast celebrating women entrepreneurs and discussing growth strategies",
      type: "Networking",
      attendees: "35",
      highlights: ["Panel discussion", "Mentorship matching", "Funding opportunities"],
      materials: ["Panel Recording", "Mentorship Guide", "Resource Directory"],
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "S3 Cohort 8 Demo Day",
      date: "October 10, 2024",
      location: "SRTIP Auditorium",
      description: "S3 Incubator startups presented their progress and solutions to potential investors and customers",
      type: "Demo Day", 
      attendees: "180",
      highlights: ["12 startup demos", "$2.5M funding secured", "15 corporate partnerships"],
      materials: ["Demo Recordings", "Startup Profiles", "Investment Summary"],
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Sustainable Tech Summit",
      date: "September 20, 2024",
      location: "Virtual + Sheraa HQ",
      description: "Focus on sustainability and clean technology innovations in the MENA region",
      type: "Summit",
      attendees: "250",
      highlights: ["Sustainability panel", "Clean tech showcase", "Policy discussions"],
      materials: ["Summit Recordings", "Policy Brief", "Startup Directory"],
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ];

  const eventTypes = ["All Events", "Festival", "Workshop", "Networking", "Demo Day", "Summit"];
  const years = ["2024", "2023", "2022", "All Years"];

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
                Browse Past Event<br />Highlights & Insights
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Explore recordings, presentations, and key takeaways from our previous events. Access valuable content and insights from industry leaders and successful entrepreneurs.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search past events..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Type:</span>
                {eventTypes.map((type, idx) => (
                  <Badge 
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1 text-xs ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Year:</span>
                {years.map((year, idx) => (
                  <Badge 
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1 text-xs ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                  >
                    {year}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pastEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=600&h=300`}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          {event.attendees}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Calendar className="w-3 h-3" />
                        {event.date} • {event.location}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {event.highlights.map((highlight, highlightIdx) => (
                            <li key={highlightIdx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <div className="w-1 h-1 bg-sheraa-primary rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2">Available Materials:</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.materials.map((material, materialIdx) => (
                            <Badge key={materialIdx} variant="outline" className="text-xs cursor-pointer hover:bg-sheraa-primary/10">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                          <Video className="w-3 h-3 mr-1" />
                          Watch
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                          <FileText className="w-3 h-3 mr-1" />
                          Materials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Archive Access */}
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
                  <FileText className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Access Complete Event Archive</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Get full access to our event archive including presentation slides, workshop materials, and exclusive recordings from industry experts.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Request Archive Access
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                      Contact Events Team
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-6">
                    Available to Sheraa members and program participants
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

export default PastEvents;
