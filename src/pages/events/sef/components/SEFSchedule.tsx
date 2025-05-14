
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Example schedule data
const scheduleData = {
  day1: [
    {
      time: "09:00 - 10:00",
      title: "Opening Ceremony",
      location: "Main Stage",
      category: "Keynote"
    },
    {
      time: "10:15 - 11:15",
      title: "Future of Entrepreneurship in MENA",
      location: "Main Stage",
      category: "Panel"
    },
    {
      time: "11:30 - 12:30",
      title: "Startup Pitch Competition - Round 1",
      location: "Impact Stage",
      category: "Competition"
    },
    {
      time: "13:00 - 14:00",
      title: "Networking Lunch",
      location: "Festival Hall",
      category: "Networking"
    },
  ],
  day2: [
    {
      time: "09:30 - 10:30",
      title: "Venture Capital Landscape in 2026",
      location: "Future Stage",
      category: "Panel"
    },
    {
      time: "11:00 - 12:00",
      title: "Building Sustainable Businesses",
      location: "Impact Stage",
      category: "Workshop"
    },
    {
      time: "13:30 - 14:30",
      title: "Startup Pitch Competition - Finals",
      location: "Main Stage",
      category: "Competition"
    },
    {
      time: "17:00 - 18:00",
      title: "Closing Ceremony & Awards",
      location: "Main Stage",
      category: "Ceremony"
    },
  ]
};

const categoryColors: Record<string, string> = {
  "Keynote": "bg-purple-100 text-[#9b87f5]",
  "Panel": "bg-blue-100 text-blue-600",
  "Workshop": "bg-green-100 text-green-600",
  "Competition": "bg-orange-100 text-orange-600",
  "Networking": "bg-pink-100 text-pink-600",
  "Ceremony": "bg-yellow-100 text-yellow-600"
};

const SEFSchedule = () => {
  const [activeTab, setActiveTab] = useState("day1");
  
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm text-[#9b87f5] mb-4">
            <Calendar className="h-4 w-4" />
            January 31 - February 1, 2026
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Event Schedule
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Two days packed with inspiring keynotes, practical workshops, engaging panels,
            and valuable networking opportunities.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="day1" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="day1" className="text-base py-3">Day 1 (Jan 31)</TabsTrigger>
              <TabsTrigger value="day2" className="text-base py-3">Day 2 (Feb 1)</TabsTrigger>
            </TabsList>
            
            {["day1", "day2"].map((day) => (
              <TabsContent key={day} value={day}>
                <div className="space-y-4">
                  {scheduleData[day as keyof typeof scheduleData].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                          <span className="text-sm font-medium text-gray-500 block md:hidden">{item.time}</span>
                          <h3 className="font-bold text-xl text-[#1A1F2C]">{item.title}</h3>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm text-gray-600">{item.location}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}>
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="hidden md:block text-right">
                          <span className="text-base font-medium text-[#9b87f5]">{item.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg" className="group">
              <Link to="/events/sef/agenda">
                View Full Schedule 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEFSchedule;
