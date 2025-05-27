
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Users, 
  Target, 
  Award, 
  Linkedin, 
  Mail, 
  ArrowLeft,
  Quote,
  BookOpen,
  Globe,
  Lightbulb,
  TrendingUp,
  Heart,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutLeadershipPage: React.FC = () => {
  const leaders = [
    {
      name: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      title: "Chairperson",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      bio: "H.E. Sheikha Bodour is a visionary leader committed to empowering entrepreneurs and strengthening Sharjah's innovation ecosystem. As a UNESCO Goodwill Ambassador and President of the International Publishers Association, she brings global perspective to Sheraa's mission.",
      achievements: ["UNESCO Goodwill Ambassador", "President of IPA", "Founder of Kalimat Group", "Women in Publishing Champion"],
      quote: "We believe in the power of entrepreneurship to transform communities and create lasting positive impact.",
      specialties: ["Publishing", "Cultural Development", "Women's Empowerment", "International Relations"],
      linkedin: "#",
      email: "#"
    },
    {
      name: "Najla Al Midfa",
      title: "Vice-Chairperson",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      bio: "Najla brings extensive experience in strategic leadership and economic development to guide Sheraa's mission. Her expertise in fostering innovation ecosystems has been instrumental in shaping Sharjah's entrepreneurial landscape.",
      achievements: ["Economic Development Expert", "Strategic Planning Specialist", "Innovation Advocate", "Ecosystem Builder"],
      quote: "Strategic vision combined with operational excellence creates the foundation for sustainable entrepreneurial growth.",
      specialties: ["Economic Development", "Strategic Planning", "Innovation Policy", "Ecosystem Development"],
      linkedin: "#",
      email: "#"
    },
    {
      name: "Sara Al Nuaimi",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop",
      bio: "Sara leads the operational excellence of Sheraa, ensuring effective execution of programs and strategic initiatives. Under her leadership, Sheraa has supported over 180 startups and created more than 1,900 jobs.",
      achievements: ["Program Excellence Leader", "Startup Ecosystem Expert", "Operations Strategist", "Community Builder"],
      quote: "Every entrepreneur has the potential to create extraordinary impact when given the right support and resources.",
      specialties: ["Program Management", "Startup Development", "Community Building", "Operations Excellence"],
      linkedin: "#",
      email: "#"
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Lightbulb,
      title: "Visionary Thinking",
      description: "We envision a future where Sharjah is recognized globally as a leading entrepreneurship hub."
    },
    {
      icon: Heart,
      title: "Founder-First Approach",
      description: "Every decision we make prioritizes the needs and success of the entrepreneurs we serve."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices while staying rooted in local culture and values."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "We focus on building long-term value and sustainable impact for our ecosystem."
    }
  ];

  const boardAdvisors = [
    { name: "Dr. Ahmed Al Falasi", role: "Technology Innovation Advisor" },
    { name: "Fatima Al Shamsi", role: "Women Entrepreneurship Advocate" },
    { name: "Mohammed Al Qasimi", role: "Investment Strategy Advisor" },
    { name: "Dr. Layla Hassan", role: "Education & Research Liaison" },
    { name: "Omar Al Midfa", role: "Government Relations Advisor" }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-sheraa-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-8 text-sheraa-primary hover:bg-sheraa-primary/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to About</span>
            </Link>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-6 h-6 text-sheraa-primary" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">Leadership Team</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-secondary bg-clip-text text-transparent">
                Visionary Leadership
              </span>
              <br />
              <span className="text-gray-800">
                Driving Innovation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Meet the exceptional leaders who guide Sheraa's mission to empower entrepreneurs 
              and build a thriving innovation ecosystem that puts Sharjah on the global map.
            </motion.p>
          </motion.div>

          {/* Leadership Principles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Philosophy</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built on a foundation of visionary thinking, collaborative leadership, and unwavering commitment to our entrepreneurs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipPrinciples.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="h-full text-center p-6 border border-sheraa-primary/10 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold mb-2">{principle.title}</h3>
                        <p className="text-sm text-gray-600">{principle.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Enhanced Leadership Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Executive Leadership</h2>
              <p className="text-lg text-gray-600">Meet the visionaries steering Sheraa towards excellence</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="group"
                >
                  <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                    <CardContent className="p-8">
                      {/* Profile Header */}
                      <div className="text-center mb-8">
                        <div className="relative mb-6">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-sheraa-primary/20 group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-sheraa-primary to-sheraa-teal rounded-full flex items-center justify-center">
                            <Crown className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                        <Badge variant="secondary" className="bg-sheraa-primary/10 text-sheraa-primary mb-4">
                          {leader.title}
                        </Badge>
                      </div>

                      {/* Quote */}
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-sheraa-primary">
                        <Quote className="w-5 h-5 text-sheraa-primary mb-2" />
                        <p className="text-sm italic text-gray-700">"{leader.quote}"</p>
                      </div>
                      
                      {/* Bio */}
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {leader.bio}
                      </p>
                      
                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-sheraa-primary" />
                          Core Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.specialties.map((specialty, i) => (
                            <span key={i} className="text-xs bg-sheraa-teal/10 text-sheraa-teal px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-sheraa-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-1.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Contact */}
                      <div className="flex gap-3 pt-6 border-t border-gray-100">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={leader.linkedin} className="flex items-center justify-center gap-2">
                            <Linkedin className="w-4 h-4" />
                            <span className="hidden sm:inline">LinkedIn</span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={leader.email} className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">Contact</span>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Board of Advisors */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Board of Advisors</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic guidance from 17+ distinguished leaders across government, industry, academia, and entrepreneurship.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boardAdvisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 flex items-center justify-center text-sheraa-primary font-bold">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{advisor.name}</h4>
                          <p className="text-xs text-gray-600">{advisor.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-none max-w-5xl mx-auto">
              <CardContent className="p-12">
                <BookOpen className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-4xl font-bold mb-8">Leading with Purpose</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      We believe in empowering the next generation of entrepreneurs through 
                      collaborative leadership, strategic vision, and unwavering commitment to innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      Under our leadership, Sheraa has supported 180+ startups, generated $248M+ in revenue, 
                      and created 1,900+ jobs, establishing Sharjah as a global entrepreneurship destination.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <Button 
                    asChild 
                    size="lg" 
                    variant="secondary" 
                    className="bg-white text-sheraa-primary hover:bg-white/90"
                  >
                    <Link to="/community/partnerships" className="flex items-center gap-2">
                      Join Our Mission
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
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

export default AboutLeadershipPage;
