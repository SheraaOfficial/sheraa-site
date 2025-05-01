
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Agenda data structure
type AgendaItem = {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerRole: string;
  time: string;
  location: string;
  type: string;
  track: string;
};

const SEFAgendaPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  
  // Sample agenda data
  const agendaItems: AgendaItem[] = [
    {
      id: "1",
      title: "Opening Ceremony: Where We Belong",
      description: "Join us for the grand opening of SEF'26, where we set the stage for two days of inspiration, connection, and growth.",
      speaker: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      speakerRole: "Chairperson, Sheraa",
      time: "09:00 - 10:00",
      location: "Impact Stage",
      type: "Keynote",
      track: "Main Program"
    },
    {
      id: "2",
      title: "The Future of Innovation: Trends Shaping Tomorrow",
      description: "Explore the cutting-edge technologies and business models that will define the next decade of entrepreneurship.",
      speaker: "Dr. Sara Ahmed",
      speakerRole: "Technology Futurist",
      time: "10:15 - 11:15",
      location: "Founders Stage",
      type: "Panel",
      track: "Technology & Innovation"
    },
    {
      id: "3",
      title: "Funding Your Vision: Navigating Investment Landscapes",
      description: "Learn strategies for securing the capital needed to scale your startup in today's competitive funding environment.",
      speaker: "Michael Chang",
      speakerRole: "Managing Partner, Horizon Ventures",
      time: "11:30 - 12:30",
      location: "Investors Lounge",
      type: "Workshop",
      track: "Funding & Finance"
    },
    {
      id: "4",
      title: "Sustainable Business Models: Profit with Purpose",
      description: "Discover how to build businesses that deliver financial returns while creating positive environmental and social impact.",
      speaker: "Layla Mahmoud",
      speakerRole: "Founder, EcoVenture",
      time: "13:30 - 14:30",
      location: "Balance Stage",
      type: "Panel",
      track: "Sustainability"
    },
    {
      id: "5",
      title: "Masterclass: Building High-Performance Teams",
      description: "Practical strategies for recruiting, managing, and retaining top talent in competitive markets.",
      speaker: "James Wilson",
      speakerRole: "Leadership Coach & Author",
      time: "14:45 - 16:15",
      location: "SEF Academy Room 1",
      type: "Masterclass",
      track: "Leadership & Growth"
    },
    {
      id: "6",
      title: "Pitch Competition: Day 1 Semi-Finals",
      description: "Watch promising startups pitch their innovative solutions to a panel of expert judges for a chance to advance to the finals.",
      speaker: "Various Founders",
      speakerRole: "Startup Finalists",
      time: "16:30 - 18:00",
      location: "Startup Town",
      type: "Competition",
      track: "Startup Showcase"
    },
    {
      id: "7",
      title: "Creative Entrepreneurship: Building in the Creator Economy",
      description: "How to leverage creativity and content to build sustainable businesses in the digital age.",
      speaker: "Maya Truong",
      speakerRole: "Creative Entrepreneur",
      time: "10:15 - 11:15",
      location: "Creative Stage",
      type: "Keynote",
      track: "Creative Industries"
    },
    {
      id: "8",
      title: "AI for Entrepreneurs: Practical Applications",
      description: "Hands-on workshop exploring how founders can leverage artificial intelligence to solve real business problems.",
      speaker: "Dr. Khalid Al Falasi",
      speakerRole: "AI Researcher & Entrepreneur",
      time: "11:30 - 13:00",
      location: "SEF Academy Room 2",
      type: "Workshop",
      track: "Technology & Innovation"
    },
  ];
  
  // Filter items based on search and filters
  const filteredItems = agendaItems.filter(item => {
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.speaker.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTracks = selectedTracks.length === 0 || selectedTracks.includes(item.track);
    
    return matchesSearch && matchesTracks;
  });
  
  // Get unique tracks for filters
  const uniqueTracks = [...new Set(agendaItems.map(item => item.track))];
  
  const handleTrackToggle = (track: string) => {
    if (selectedTracks.includes(track)) {
      setSelectedTracks(selectedTracks.filter(t => t !== track));
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                SEF'26 Agenda
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore two days of inspiring keynotes, insightful panels, hands-on workshops, and networking opportunities
            </p>
          </motion.div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl shadow-sheraa-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-10"
                placeholder="Search sessions, speakers, topics..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 whitespace-nowrap">Filter by:</span>
              <div className="relative inline-block">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Tracks ({selectedTracks.length || 'All'})
                </Button>
                
                <div className="absolute z-10 mt-2 right-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 p-2 hidden group-hover:block">
                  {uniqueTracks.map(track => (
                    <div key={track} className="flex items-center p-2 hover:bg-gray-50 rounded">
                      <input
                        type="checkbox"
                        id={`track-${track}`}
                        checked={selectedTracks.includes(track)}
                        onChange={() => handleTrackToggle(track)}
                        className="mr-2"
                      />
                      <label htmlFor={`track-${track}`} className="text-sm cursor-pointer">{track}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Day selector */}
          <Tabs defaultValue="day1" value={selectedDay} onValueChange={setSelectedDay}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="day1" className="text-base py-3">Day 1 (Jan 31)</TabsTrigger>
              <TabsTrigger value="day2" className="text-base py-3">Day 2 (Feb 1)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Agenda Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-sheraa-primary">
              {selectedDay === 'day1' ? 'Day 1 - January 31, 2026' : 'Day 2 - February 1, 2026'}
            </h2>
            
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {/* Time and location */}
                    <div className="bg-gray-50 p-6 flex flex-col justify-center">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 mr-2 text-sheraa-teal" />
                        <span className="text-gray-700 font-medium">{item.time}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-sheraa-teal" />
                        <span className="text-gray-600">{item.location}</span>
                      </div>
                      <div className="mt-1">
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-sheraa-primary/10 text-sheraa-primary">{item.type}</span>
                      </div>
                    </div>
                    
                    {/* Session content */}
                    <div className="p-6 md:col-span-2 lg:col-span-3">
                      <h3 className="text-xl font-semibold text-sheraa-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sheraa-primary font-semibold">
                          {item.speaker.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-800">{item.speaker}</p>
                          <p className="text-sm text-gray-500">{item.speakerRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Download Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-gradient-purple/10 backdrop-blur-sm rounded-xl p-8">
          <div>
            <h3 className="text-xl font-semibold text-sheraa-primary mb-2">Want the complete agenda?</h3>
            <p className="text-gray-600">Download the full SEF'26 agenda with all sessions, speakers, and venue details.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Download Full Agenda (PDF)
            </Button>
          </div>
        </div>
        
        {/* Related Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
            </Link>
            
            <Link to="/events/sef/experience" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">SEF Experience</h4>
              <p className="text-gray-600 mt-2 text-sm">Discover the unique zones and experiences at SEF'26.</p>
            </Link>
            
            <Link to="/events/sef/register" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Register Now</h4>
              <p className="text-gray-600 mt-2 text-sm">Secure your spot at the region's premier entrepreneurship festival.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SEFAgendaPage;
