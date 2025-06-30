
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Users, Globe, Trophy, 
  Sparkles, Star, ChevronLeft, ChevronRight,
  Building, Mic, Network
} from 'lucide-react';

const SEFTimelineGallery: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2017,
      title: "SEF Begins",
      description: "The inaugural Sharjah Entrepreneurship Festival launches, setting the foundation for the region's premier entrepreneurship gathering.",
      stats: { attendees: "2,500+", speakers: "50+", countries: "15+" },
      highlights: ["First SEF event", "Regional focus", "Foundation year"],
      image: "/placeholder.svg",
      color: "from-blue-500 to-purple-600"
    },
    {
      year: 2018,
      title: "Expanding Horizons",
      description: "SEF grows internationally with increased speaker lineup and expanded program offerings.",
      stats: { attendees: "4,000+", speakers: "80+", countries: "20+" },
      highlights: ["International expansion", "More diverse speakers", "Enhanced programming"],
      image: "/placeholder.svg",
      color: "from-purple-500 to-pink-600"
    },
    {
      year: 2019,
      title: "Innovation Focus",
      description: "Introduction of specialized zones and tech-focused tracks, attracting global innovators.",
      stats: { attendees: "6,500+", speakers: "120+", countries: "25+" },
      highlights: ["Specialized zones introduced", "Tech focus", "Global innovators"],
      image: "/placeholder.svg",
      color: "from-pink-500 to-red-600"
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "Adapting to global challenges with hybrid format while maintaining community engagement.",
      stats: { attendees: "8,000+", speakers: "150+", countries: "30+" },
      highlights: ["Hybrid format", "Digital innovation", "Global reach"],
      image: "/placeholder.svg",
      color: "from-red-500 to-orange-600"
    },
    {
      year: 2021,
      title: "Resilience & Growth",
      description: "Record-breaking attendance as the ecosystem rebounds stronger with innovative solutions.",
      stats: { attendees: "10,000+", speakers: "200+", countries: "35+" },
      highlights: ["Record attendance", "Ecosystem resilience", "Innovation solutions"],
      image: "/placeholder.svg",
      color: "from-orange-500 to-yellow-600"
    },
    {
      year: 2022,
      title: "Global Recognition",
      description: "SEF gains international recognition as a leading entrepreneurship platform in MENA.",
      stats: { attendees: "12,000+", speakers: "250+", countries: "40+" },
      highlights: ["Global recognition", "MENA leadership", "Platform expansion"],
      image: "/placeholder.svg",
      color: "from-yellow-500 to-green-600"
    },
    {
      year: 2023,
      title: "Sustainability Focus",
      description: "Emphasis on sustainable entrepreneurship and green innovation takes center stage.",
      stats: { attendees: "13,500+", speakers: "280+", countries: "42+" },
      highlights: ["Sustainability focus", "Green innovation", "Environmental entrepreneurship"],
      image: "/placeholder.svg",
      color: "from-green-500 to-teal-600"
    },
    {
      year: 2024,
      title: "AI & Future Tech",
      description: "Current year focusing on artificial intelligence, future technologies, and next-generation entrepreneurship.",
      stats: { attendees: "14,000+", speakers: "300+", countries: "45+" },
      highlights: ["AI focus", "Future tech", "Next-gen entrepreneurship"],
      image: "/placeholder.svg",
      color: "from-teal-500 to-blue-600"
    },
    {
      year: 2025,
      title: "The Future Awaits",
      description: "Looking ahead to SEF 2026 with expanded vision and global impact.",
      stats: { attendees: "15,000+", speakers: "350+", countries: "50+" },
      highlights: ["Future vision", "Global impact", "Expanded reach"],
      image: "/placeholder.svg",
      color: "from-sheraa-sef-primary to-sheraa-sef-accent",
      isFuture: true
    }
  ];

  const currentData = timelineData.find(item => item.year === activeYear);
  const currentIndex = timelineData.findIndex(item => item.year === activeYear);

  const navigateYear = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setActiveYear(timelineData[currentIndex - 1].year);
    } else if (direction === 'next' && currentIndex < timelineData.length - 1) {
      setActiveYear(timelineData[currentIndex + 1].year);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sheraa-sef-primary/5 to-sheraa-sef-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-sef-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-sef-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Calendar className="w-5 h-5 text-sheraa-sef-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              SEF Journey Through Time
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            8 Years of Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the evolution of SEF from its humble beginnings to becoming the region's largest entrepreneurship festival.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl p-4 border border-sheraa-sef-primary/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateYear('prev')}
              disabled={currentIndex === 0}
              className="p-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2 overflow-x-auto max-w-md">
              {timelineData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeYear === item.year
                      ? 'bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateYear('next')}
              disabled={currentIndex === timelineData.length - 1}
              className="p-2"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Timeline Display */}
        {currentData && (
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className={`h-2 bg-gradient-to-r ${currentData.color}`} />
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-12 bg-white dark:bg-sheraa-dark">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentData.color} flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white">{currentData.year}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{currentData.title}</h3>
                        {currentData.isFuture && (
                          <Badge className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {currentData.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-2">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-sheraa-sef-primary">{currentData.stats.attendees}</div>
                        <div className="text-sm text-gray-500">Attendees</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-2">
                          <Mic className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-sheraa-sef-primary">{currentData.stats.speakers}</div>
                        <div className="text-sm text-gray-500">Speakers</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-2">
                          <Globe className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-sheraa-sef-primary">{currentData.stats.countries}</div>
                        <div className="text-sm text-gray-500">Countries</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentData.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="border-sheraa-sef-primary/30 text-sheraa-sef-primary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-sheraa-sef-primary/10 to-sheraa-sef-accent/10" />
                    <div className="relative z-10 text-center p-8">
                      <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-r ${currentData.color} flex items-center justify-center mb-6`}>
                        <Calendar className="w-16 h-16 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">SEF {currentData.year}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {currentData.isFuture ? 'Future Vision' : 'Historic Milestone'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Growth Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-sef-primary/5 to-sheraa-sef-accent/5 border-sheraa-sef-primary/20">
            <CardContent className="p-12">
              <Trophy className="w-16 h-16 mx-auto text-sheraa-sef-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">8 Years of Extraordinary Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                From 2,500 attendees in 2017 to over 14,000 in 2024, SEF has consistently grown to become 
                the region's most influential entrepreneurship platform, connecting innovators from across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="px-6 py-2 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white">
                  500% Growth in Attendance
                </Badge>
                <Badge variant="outline" className="px-6 py-2 border-sheraa-sef-primary/30 text-sheraa-sef-primary">
                  300% Increase in Global Reach
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFTimelineGallery;
