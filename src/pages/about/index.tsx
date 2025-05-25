
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, Building2, Target, Heart, Award, MapPin, 
  Phone, Globe, Sparkles, Crown, Star, ArrowRight,
  Calendar, Mail, ExternalLink
} from "lucide-react";

const AboutPage: React.FC = () => {
  const impactStats = [
    { number: "180+", label: "Startups Supported", icon: Building2 },
    { number: "$248M+", label: "Revenue Generated", icon: Target },
    { number: "$171M+", label: "Capital Raised", icon: Award },
    { number: "1,900+", label: "Jobs Created", icon: Users },
    { number: "52%", label: "Women-Led Startups", icon: Crown },
    { number: "18,000+", label: "Youth Upskilled", icon: Star },
    { number: "140+", label: "Ecosystem Partners", icon: Globe },
    { number: "71%", label: "Startup Survival Rate", icon: Heart }
  ];

  const leadership = [
    {
      name: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      title: "Chairperson",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary leader driving Sharjah's entrepreneurship ecosystem"
    },
    {
      name: "Najla Al Midfa",
      title: "Vice-Chairperson", 
      image: "/placeholder.svg?height=300&width=300",
      description: "Strategic guidance for ecosystem development"
    },
    {
      name: "Sara Al Nuaimi",
      title: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Operational excellence in entrepreneur support"
    }
  ];

  const hubs = [
    {
      name: "Sheraa HQ (SRTIP)",
      address: "Sharjah Research Technology and Innovation Park",
      phone: "+971 6 509 4000",
      description: "Our headquarters connecting startups with cutting-edge research and technology facilities",
      features: ["Research Access", "Technology Labs", "Innovation Hub", "Co-working Spaces"]
    },
    {
      name: "AUS Hub",
      address: "Ground Floor, Library Building, American University of Sharjah",
      phone: "+971 6 509 4000",
      description: "Engaging students and faculty to foster early-stage innovation",
      features: ["Student Programs", "Academic Integration", "Workshop Spaces", "Mentorship"]
    },
    {
      name: "UOS Hub",
      address: "W3 Building, University of Sharjah",
      phone: "+971 6 509 4010",
      description: "Connecting with key academic institutions to broaden our reach",
      features: ["Youth Engagement", "Skill Development", "Network Access", "Resources"]
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Sparkles className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Our Story & Mission
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Empowering Entrepreneurs, Building Sharjah's Future
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity 
              with individual expression and creativity. This synergy fuels our mission to cultivate a world-class 
              entrepreneurship ecosystem in Sharjah.
            </p>
          </motion.div>

          {/* Our Approach Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-sheraa-primary/10 text-sheraa-primary border-sheraa-primary/20">
                  Our Philosophy
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Founder-First, Community-Driven
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Founder-First Philosophy</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We believe entrepreneurs are the driving force of progress. Our approach ensures 
                        programs and resources are tailored to the real needs of those building businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sheraa-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-sheraa-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We foster an inclusive, collaborative community where founders, mentors, investors, 
                        and leaders connect, share knowledge, and support one another's growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=500&width=500" 
                    alt="Sheraa Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-sheraa-primary to-sheraa-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">2016</div>
                    <div className="text-sm">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impact Stats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact That Speaks Volumes</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Guided by visionary leaders committed to empowering entrepreneurs and strengthening Sharjah's ecosystem.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-sheraa-primary font-medium mb-3">{leader.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{leader.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Hubs Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hubs: At the Heart of Innovation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sheraa operates from strategic locations within Sharjah's vibrant academic and research landscape.
              </p>
            </div>
            
            <div className="space-y-8">
              {hubs.map((hub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-sheraa-primary" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">{hub.name}</h3>
                              <div className="flex items-center gap-2 text-sheraa-primary">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">Strategic Location</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{hub.description}</p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-sheraa-primary" />
                              <span className="text-sm">{hub.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-sheraa-primary" />
                              <span className="text-sm">{hub.phone}</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                            Get Directions
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                        
                        <div className="lg:w-80">
                          <div className="grid grid-cols-2 gap-3">
                            {hub.features.map((feature, idx) => (
                              <div key={idx} className="bg-sheraa-primary/5 rounded-lg p-3 text-center">
                                <span className="text-sm font-medium text-sheraa-primary">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-12">
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Be part of Sharjah's entrepreneurial transformation. Whether as a founder, partner, or supporter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    <Link to="/programs">Explore Our Programs</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/community/partnerships">Partner With Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
