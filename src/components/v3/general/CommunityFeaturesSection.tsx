
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Handshake, 
  BookOpen, 
  Mail,
  Activity,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

const CommunityFeaturesSection: React.FC = () => {
  const stats = [
    { value: "5,000+", label: "Active Members", icon: Users, color: "#A0826D" },
    { value: "200+", label: "Weekly Discussions", icon: MessageSquare, color: "#F59E0B" },
    { value: "50+", label: "Monthly Events", icon: Calendar, color: "#059669" },
    { value: "15+", label: "Industry Mentors", icon: Handshake, color: "#DC2626" },
  ];

  const engagementOptions = [
    {
      title: "Discussion Forums",
      description: "Ask questions, share ideas, get feedback",
      icon: MessageSquare,
      color: "#A0826D",
      action: "Join Discussions"
    },
    {
      title: "Local Events",
      description: "Workshops, networking, guest speakers",
      icon: Calendar,
      color: "#F59E0B",
      action: "View Events"
    },
    {
      title: "Mentorship Circle",
      description: "Connect with experienced entrepreneurs",
      icon: Handshake,
      color: "#059669",
      action: "Find Mentors"
    },
    {
      title: "Resource Library",
      description: "Templates, guides, tools, and more",
      icon: BookOpen,
      color: "#DC2626",
      action: "Browse Resources"
    }
  ];

  const recentActivity = [
    { user: "Sarah M.", action: "shared a business plan template", time: "2 hours ago", type: "share" },
    { user: "Ahmed K.", action: "asked about market research", time: "4 hours ago", type: "question" },
    { user: "Fatima A.", action: "joined the EdTech discussion group", time: "6 hours ago", type: "join" },
    { user: "Omar H.", action: "completed 'Business Basics' course", time: "8 hours ago", type: "achievement" },
    { user: "Layla S.", action: "attended 'Pitch Perfect' workshop", time: "1 day ago", type: "event" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Join Sharjah's Entrepreneurship Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with fellow entrepreneurs, share experiences, and grow together 
            in a supportive ecosystem designed for success.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Community Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#374151] mb-6">
                Community at a Glance
              </h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <stat.icon
                            className="w-6 h-6"
                            style={{ color: stat.color }}
                          />
                        </div>
                        <div className="text-2xl font-bold text-[#374151] mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Live Activity Feed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Activity className="w-5 h-5 text-[#A0826D] mr-2" />
                    <h4 className="text-lg font-semibold text-[#374151]">Live Activity</h4>
                    <Badge className="ml-auto bg-green-100 text-green-700">Live</Badge>
                  </div>
                  
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#A0826D]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-[#A0826D]">
                            {activity.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">{activity.user}</span>{" "}
                            {activity.action}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Side - Engagement Options */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-[#374151] mb-6"
            >
              Ways to Get Involved
            </motion.h3>

            {engagementOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${option.color}20` }}
                      >
                        <option.icon
                          className="w-6 h-6"
                          style={{ color: option.color }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-[#374151] group-hover:text-[#A0826D] transition-colors mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{option.description}</p>
                        
                        <Button
                          size="sm"
                          className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white group-hover:shadow-lg transition-all duration-300"
                        >
                          {option.action}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-[#A0826D]/20 shadow-lg bg-gradient-to-br from-[#A0826D]/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#A0826D]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#A0826D]" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#374151] mb-2">
                        Monthly Newsletter
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Stay updated with ecosystem news, upcoming events, and success stories
                      </p>
                      
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0826D]/50"
                        />
                        <Button
                          size="sm"
                          className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeaturesSection;
