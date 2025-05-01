import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Layout, MapPin, Calendar, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Zone = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  activities: string[];
  color: string;
};

const SEFExperiencePage: React.FC = () => {
  // Experience zones
  const zones: Zone[] = [
    {
      id: "startup-town",
      name: "Startup Town",
      description: "The heartbeat of SEF where promising startups showcase their innovative solutions and connect with investors, partners, and customers.",
      icon: Users,
      activities: [
        "Startup Exhibition",
        "Investor Office Hours",
        "Pitch Competition",
        "Founder Speed Networking",
        "Demo Day Showcases"
      ],
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      id: "investors-lounge",
      name: "Investors Lounge",
      description: "A dedicated space for investors to connect with high-potential startups and fellow investment professionals in a relaxed setting.",
      icon: Award,
      activities: [
        "VC Panel Discussions",
        "Fundraising Masterclasses",
        "Investor-Founder Matchmaking",
        "Term Sheet Workshops",
        "Angel Investing 101"
      ],
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      id: "creative-zone",
      name: "Creative Zone",
      description: "Where art meets entrepreneurship - explore how creativity drives innovation across industries and powers the creator economy.",
      icon: Layout,
      activities: [
        "Creative Entrepreneur Showcases",
        "Design Thinking Workshops",
        "Content Creator Panels",
        "Art & Tech Installations",
        "Creative Economy Talks"
      ],
      color: "bg-pink-100 text-pink-700 border-pink-200"
    },
    {
      id: "impact-stage",
      name: "Impact Stage",
      description: "The main stage hosting SEF's headline keynotes and panels featuring global thought leaders and change-makers.",
      icon: Mic,
      activities: [
        "Keynote Presentations",
        "Fireside Chats with Industry Leaders",
        "Panel Discussions",
        "Award Ceremonies",
        "Opening & Closing Sessions"
      ],
      color: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      id: "sef-academy",
      name: "SEF Academy",
      description: "Hands-on learning spaces with workshops and masterclasses covering essential entrepreneurial skills and emerging trends.",
      icon: Award,
      activities: [
        "Skill-Building Workshops",
        "Expert Masterclasses",
        "Interactive Learning Sessions",
        "Mentorship Circles",
        "Startup Clinics"
      ],
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      id: "wellness-zone",
      name: "Wellness & Sustainability Zone",
      description: "A space dedicated to holistic founder well-being and sustainable business practices that contribute to a better world.",
      icon: Layout,
      activities: [
        "Mindfulness Sessions",
        "Sustainable Business Showcases",
        "Wellness Workshops",
        "Climate Action Talks",
        "ESG Panel Discussions"
      ],
      color: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      id: "made-in-sharjah",
      name: "Made in Sharjah",
      description: "Celebrating local innovation with a showcase of the most promising ventures emerging from Sharjah's dynamic ecosystem.",
      icon: MapPin,
      activities: [
        "Local Startup Showcase",
        "Sheraa Success Stories",
        "Ecosystem Partner Exhibitions",
        "University Innovation Displays",
        "Community Impact Presentations"
      ],
      color: "bg-indigo-100 text-indigo-700 border-indigo-200"
    },
    {
      id: "sef-eats",
      name: "SEF Eats",
      description: "A vibrant food marketplace featuring culinary entrepreneurs and innovative F&B concepts from across the region.",
      icon: Award,
      activities: [
        "Food Startup Showcases",
        "Culinary Demonstrations",
        "F&B Innovation Talks",
        "Sustainable Food Discussions",
        "Networking Over Meals"
      ],
      color: "bg-amber-100 text-amber-700 border-amber-200"
    },
    {
      id: "sef-souq",
      name: "SEF Souq",
      description: "A marketplace celebrating local artisans, creators, and small businesses with unique products and services.",
      icon: Layout,
      activities: [
        "Artisan Marketplace",
        "Creator Showcases",
        "Handcrafted Products",
        "Local Brand Exhibitions",
        "Product Launch Events"
      ],
      color: "bg-rose-100 text-rose-700 border-rose-200"
    },
    {
      id: "community-stage",
      name: "Community Stage",
      description: "A platform for community-driven content, performances, and interactive sessions that celebrate diversity and collaboration.",
      icon: Users,
      activities: [
        "Community Panel Discussions",
        "Cultural Performances",
        "Interactive Audience Sessions",
        "Youth-Led Initiatives",
        "Social Impact Showcases"
      ],
      color: "bg-cyan-100 text-cyan-700 border-cyan-200"
    }
  ];
  
  // Features beyond zones
  const features = [
    {
      title: "Exclusive Networking",
      description: "Connect with 14,000+ attendees including founders, investors, industry leaders, and ecosystem enablers through structured networking opportunities and spontaneous connections.",
      icon: Users
    },
    {
      title: "Investor Connect",
      description: "Facilitated meetings between startups and investors with over 320+ curated connections made at the previous festival, resulting in meaningful investment discussions.",
      icon: Award
    },
    {
      title: "Pitch Competition",
      description: "Witness startups compete for significant funding opportunities (AED 700k+ pool) by pitching innovative solutions to industry challenges before expert judges.",
      icon: Mic
    },
    {
      title: "SEFFY Awards",
      description: "Celebrating excellence across the ecosystem with recognition for standout startups, investors, mentors, and ecosystem enablers making an impact.",
      icon: Award
    },
    {
      title: "Cultural Performances",
      description: "Experience immersive cultural and artistic performances that blend creativity with entrepreneurial energy throughout the festival.",
      icon: Layout
    },
    {
      title: "Interactive Experiences",
      description: "Engage with cutting-edge technologies, interactive installations, and experiential activations that showcase innovation in action.",
      icon: Users
    }
  ];

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                The SEF Experience
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in a vibrant festival atmosphere designed to inspire, connect, and transform entrepreneurial journeys
            </p>
          </motion.div>
        </div>

        {/* Event Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/10 to-purple-100/30 rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">When</p>
                  <p className="font-medium">January 31-February 1, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Where</p>
                  <p className="font-medium">Sharjah Research, Technology and Innovation Park</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Users className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="font-medium">14,000+ participants</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Layout className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-medium">10+ zones, 250+ activities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Experience Zones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Experience Zones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse spaces designed to inspire creativity, facilitate connections, and showcase innovation across the entrepreneurial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className={`h-2 ${zone.color.split(' ')[0]}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${zone.color}`}>
                      <zone.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-sheraa-primary">{zone.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5">{zone.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">What to Expect:</h4>
                    <ul className="space-y-1">
                      {zone.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-sheraa-teal mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Other Festival Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Beyond the Zones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SEF offers a comprehensive festival experience with features designed to maximize value for all participants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-purple/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-sheraa-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-sheraa-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Festival Map */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Festival Map</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate SEF'26 with ease using our detailed venue map
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Interactive venue map will be available closer to the event date
                <br />
                <span className="text-sm">The map will show all zones, stages, and facilities at SRTIP</span>
              </p>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Download Printable Map (PDF)
              </Button>
              
              <Button variant="secondary" className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Interactive 3D Tour Coming Soon
              </Button>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mb-16">
          <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-4">
                  Ready to Experience SEF'26?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join thousands of entrepreneurs, investors, creators, and innovators for two days of inspiration, connection, and growth at the region's premier entrepreneurship festival.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/events/sef/register">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/events/sef/agenda">
                      View Full Agenda
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-first lg:order-last">
                <div className="bg-white/80 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-sheraa-primary mb-4">What Attendees Say</h3>
                  
                  <div className="italic text-gray-700 mb-4">
                    "SEF is unlike any other event in the region. The energy, connections, and insights I gained were truly transformative for my entrepreneurial journey. I left inspired and with actionable next steps."
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-sheraa-primary/20 flex items-center justify-center text-sheraa-primary font-bold">
                      SA
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">Sarah Al Amiri</p>
                      <p className="text-sm text-gray-500">Founder, TechScale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Links */}
        <div>
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
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

export default SEFExperiencePage;
