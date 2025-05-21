
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, Zap, BookOpen, Users, Calendar, PenTool, MessageSquare, Star, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FounderPortal: React.FC = () => {
  const [membershipType, setMembershipType] = useState<string>("founder");
  
  // Define membership tiers based on the community chart
  const membershipTiers = [
    {
      id: "founder",
      name: "Founder",
      description: "For early-stage founders building their startup",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
      borderColor: "border-yellow-500",
      benefits: [
        "Access to Co-working Space",
        "Free Legal & Banking Services",
        "Mentorship Sessions",
        "Community Events Access",
        "Networking Opportunities",
        "Resource Library",
        "Exclusive Workshop Series"
      ]
    },
    {
      id: "investor",
      name: "Applying Investor",
      description: "For investors looking to connect with Sheraa startups",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      benefits: [
        "Curated Deal Flow",
        "Investor Events",
        "Startup Pitch Sessions",
        "Due Diligence Support",
        "Co-investment Opportunities",
        "Portfolio Company Updates",
        "Investor Network"
      ]
    },
    {
      id: "management",
      name: "Management-in-Training",
      description: "For corporate professionals and aspiring entrepreneurs",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      benefits: [
        "Innovation Workshops",
        "Corporate Innovation Programs",
        "Leadership Development",
        "Startup Collaboration",
        "Mentorship Opportunities",
        "Industry Insights Access",
        "Networking Events"
      ]
    },
    {
      id: "explorer",
      name: "Explorer",
      description: "For community members exploring entrepreneurship",
      color: "bg-green-500",
      textColor: "text-green-500",
      borderColor: "border-green-500",
      benefits: [
        "Entrepreneurship Workshops",
        "Idea Validation Sessions",
        "Community Events",
        "Learning Resources",
        "Network Building",
        "Inspiration Sessions",
        "Startup Showcases"
      ]
    },
    {
      id: "database",
      name: "Database",
      description: "For service providers and ecosystem partners",
      color: "bg-purple-500",
      textColor: "text-purple-500", 
      borderColor: "border-purple-500",
      benefits: [
        "Partner Directory Listing",
        "Service Promotion Opportunities",
        "Ecosystem Events",
        "Startup Connection",
        "Industry Updates",
        "Collaboration Opportunities",
        "Service Showcases"
      ]
    }
  ];
  
  // Find the active membership
  const activeMembership = membershipTiers.find(tier => tier.id === membershipType) || membershipTiers[0];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative bg-gradient-to-b from-sheraa-primary/5 to-transparent dark:from-sheraa-primary/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sheraa-primary/5 rounded-full filter blur-3xl opacity-70 dark:bg-sheraa-primary/10" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-400/5 rounded-full filter blur-3xl opacity-60 dark:bg-purple-400/10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 px-3 py-1.5 text-sm border-sheraa-primary/30 text-sheraa-primary">
                Exclusively for Sheraa Community Members
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sheraa-dark dark:text-white">
                Sheraa Founder Portal
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Your gateway to exclusive resources, connections, and opportunities as part of the Sheraa entrepreneurial ecosystem. Unlock the full potential of your membership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Selection */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-sheraa-dark dark:text-white">
              Choose Your Membership Path
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {membershipTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setMembershipType(tier.id)}
                  className={`p-5 rounded-xl transition-all ${
                    membershipType === tier.id 
                      ? `${tier.color} text-white shadow-lg scale-105` 
                      : `bg-white dark:bg-gray-800 hover:shadow-md border ${tier.borderColor} text-gray-800 dark:text-white`
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-1 ${membershipType === tier.id ? 'text-white' : tier.textColor}`}>
                    {tier.name}
                  </h3>
                  {membershipType === tier.id && (
                    <p className="text-xs text-white/90 mt-1">
                      {tier.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <span className={`inline-block w-12 h-12 rounded-full ${activeMembership.color} text-white flex items-center justify-center text-xl font-bold mb-4`}>
                    {activeMembership.name[0]}
                  </span>
                  <h3 className="text-2xl font-bold text-sheraa-dark dark:text-white">{activeMembership.name} Benefits</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{activeMembership.description}</p>
                </div>
                
                <Button 
                  asChild 
                  className={`bg-${activeMembership.id === 'founder' ? 'yellow' : activeMembership.id === 'investor' ? 'orange' : activeMembership.id === 'management' ? 'blue' : activeMembership.id === 'explorer' ? 'green' : 'purple'}-500 hover:bg-${activeMembership.id === 'founder' ? 'yellow' : activeMembership.id === 'investor' ? 'orange' : activeMembership.id === 'management' ? 'blue' : activeMembership.id === 'explorer' ? 'green' : 'purple'}-600`}
                  style={{ 
                    backgroundColor: activeMembership.id === 'founder' ? '#EAB308' : 
                                    activeMembership.id === 'investor' ? '#F97316' : 
                                    activeMembership.id === 'management' ? '#3B82F6' : 
                                    activeMembership.id === 'explorer' ? '#22C55E' : 
                                    '#8B5CF6' 
                  }}
                >
                  <Link to="/community/join">Apply for Membership</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeMembership.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${activeMembership.color} text-white flex items-center justify-center text-xs`}>
                      ✓
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
                {activeMembership.benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${activeMembership.color} text-white flex items-center justify-center text-xs`}>
                      ✓
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-sheraa-dark dark:text-white">Exclusive Resources & Tools</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Access a wide range of curated resources designed to accelerate your entrepreneurial journey.
            </p>
          </div>
          
          <Tabs defaultValue="resources" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: "Startup Playbook",
                    description: "Step-by-step guides for every stage of your startup journey",
                    action: "Download PDF"
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Legal Templates",
                    description: "Essential legal documents for startups, reviewed by experts",
                    action: "Browse Templates"
                  },
                  {
                    icon: <PenTool className="w-6 h-6" />,
                    title: "Pitch Deck Builder",
                    description: "Create compelling investor presentations with our templates",
                    action: "Start Building"
                  },
                  {
                    icon: <Download className="w-6 h-6" />,
                    title: "Financial Models",
                    description: "Ready-to-use financial projection templates for startups",
                    action: "Download Excel"
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Market Research",
                    description: "Industry reports and market insights for informed decisions",
                    action: "View Library"
                  },
                  {
                    icon: <Star className="w-6 h-6" />,
                    title: "Founder Master Class",
                    description: "On-demand video lessons from successful entrepreneurs",
                    action: "Watch Now"
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="bg-sheraa-primary/10 dark:bg-sheraa-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-sheraa-primary mb-3">
                          {resource.icon}
                        </div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full flex gap-2 items-center justify-center">
                          <Download className="w-4 h-4" />
                          {resource.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="connections">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Mentor Network",
                    description: "Connect with industry experts and experienced entrepreneurs",
                    action: "Book a Session"
                  },
                  {
                    icon: <Star className="w-6 h-6" />,
                    title: "Investor Directory",
                    description: "Browse profiles of investors interested in Sheraa startups",
                    action: "View Investors"
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Founder Community",
                    description: "Join discussions with fellow founders in our private forum",
                    action: "Join Discussion"
                  }
                ].map((connection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="bg-sheraa-primary/10 dark:bg-sheraa-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-sheraa-primary mb-3">
                          {connection.icon}
                        </div>
                        <CardTitle>{connection.title}</CardTitle>
                        <CardDescription>{connection.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          {connection.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    date: "June 15, 2025",
                    title: "Funding Masterclass",
                    description: "Learn how to approach investors and secure funding",
                    location: "Sheraa HQ, SRTIP",
                    tags: ["Workshop", "Funding"]
                  },
                  {
                    date: "June 22, 2025",
                    title: "Founder Mixer",
                    description: "Networking event for Sheraa community members",
                    location: "AUS Hub",
                    tags: ["Networking", "Community"]
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{event.title}</CardTitle>
                          <div className="bg-sheraa-primary/10 dark:bg-sheraa-primary/20 px-3 py-1 rounded-full text-sheraa-primary text-sm font-medium">
                            {event.date}
                          </div>
                        </div>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex gap-2">
                            {event.tags.map((tag, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-100 dark:bg-gray-800">{tag}</Badge>
                            ))}
                          </div>
                          <Button className="mt-2 bg-sheraa-primary hover:bg-sheraa-primary/90">
                            RSVP Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/events">View All Events</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Investment Tracker",
                    description: "Track your fundraising progress and investor conversations"
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Growth Calculator",
                    description: "Project your startup's growth with customizable metrics"
                  },
                  {
                    icon: <PenTool className="w-6 h-6" />,
                    title: "Business Model Canvas",
                    description: "Interactive tool to develop your business model"
                  }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="bg-sheraa-primary/10 dark:bg-sheraa-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-sheraa-primary mb-3">
                          {tool.icon}
                        </div>
                        <CardTitle>{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          Launch Tool
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 bg-sheraa-primary/10 dark:bg-sheraa-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sheraa-dark dark:text-white">
                Join the Sheraa Founder Community
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Connect with like-minded entrepreneurs, access exclusive resources, and accelerate your startup journey with Sheraa's community support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/community/join">Apply for Membership</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FounderPortal;
