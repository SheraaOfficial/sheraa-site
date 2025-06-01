
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, Users, Handshake, Award, Building, 
  TrendingUp, Star, Camera, Video, Globe, ArrowRight,
  CheckCircle, Zap, Target, DollarSign, Network
} from "lucide-react";

const DealDockPage: React.FC = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "30+ Startups Pitching",
      description: "Selected high-potential startups presenting to investors"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Regional Investment Leaders",
      description: "VCs from Wamda Capital, Oraseya Capital, Beco Capital, Shorooq Partners"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "1:1 Connect Sessions",
      description: "Direct investor-startup matching and meetings"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Live Portfolio Reviews",
      description: "Real-time feedback and evaluation sessions"
    }
  ];

  const agenda = [
    {
      time: "9:00 AM",
      title: "Registration & Welcome Coffee",
      type: "networking",
      description: "Meet fellow entrepreneurs and investors"
    },
    {
      time: "9:30 AM",
      title: "Opening Keynote",
      type: "keynote",
      speaker: "H.E. Sheikha Bodour Al Qasimi",
      description: "Vision for Sharjah's startup ecosystem"
    },
    {
      time: "10:00 AM",
      title: "Fireside Chat with Sonia Weymuller",
      type: "fireside",
      speaker: "Sonia Weymuller (VentureSouq)",
      description: "Insights on regional venture capital trends"
    },
    {
      time: "10:45 AM",
      title: "Startup Pitch Session 1",
      type: "pitch",
      description: "10 startups present to investor panel"
    },
    {
      time: "12:00 PM",
      title: "MoU Signing Ceremony",
      type: "ceremony",
      description: "Sheraa x Continuous VC Partnership"
    },
    {
      time: "12:30 PM",
      title: "Networking Lunch",
      type: "networking",
      description: "Connect with investors and fellow founders"
    },
    {
      time: "1:30 PM",
      title: "Startup Pitch Session 2",
      type: "pitch",
      description: "10 more startups pitch to investors"
    },
    {
      time: "2:45 PM",
      title: "1:1 Investor Meetings",
      type: "meetings",
      description: "Private sessions between startups and VCs"
    },
    {
      time: "4:00 PM",
      title: "Group Photo & Closing",
      type: "ceremony",
      description: "Official group photo with leadership"
    }
  ];

  const investorPartners = [
    "Wamda Capital", "VentureSouq", "Oraseya Capital", "Beco Capital", 
    "Shorooq Partners", "Continuous VC", "MEVP", "Global Ventures"
  ];

  return (
    <MainLayout 
      seoTitle="Deal Dock - Investor-Startup Connect Event"
      seoDescription="Connect with top Middle East VCs and angel investors at Sheraa's Deal Dock event. Live pitches, 1:1 meetings, and networking opportunities."
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 mb-6">
                <Zap className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">LIVE EVENT</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deal Dock
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Where Startups Meet Capital. Connect with the region's top VCs and angel investors 
                in an exclusive investor-startup matching event.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Register for Next Event
                </Button>
                <Button size="lg" variant="outline">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Live Stream
                </Button>
              </div>

              {/* Live Status Banner */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-bold"
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                LIVE NOW: Investor Meetings & Portfolio Reviews
              </motion.div>
            </motion.div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600">
                        {highlight.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="py-16 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Agenda</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A full day of connections, insights, and opportunities to accelerate your startup journey.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {agenda.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                        {item.time}
                      </span>
                    </div>
                  </div>
                  
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <Badge variant={item.type === 'pitch' ? 'default' : 'secondary'}>
                          {item.type}
                        </Badge>
                      </div>
                      {item.speaker && (
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                          {item.speaker}
                        </p>
                      )}
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Investor Partners</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Connect with leading VCs and angel investors actively seeking investment opportunities in the region.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {investorPartners.map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-sm">{investor}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Connect with Investors?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join the next Deal Dock event and pitch your startup to regional investment leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Apply for Next Event
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Investor
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DealDockPage;
