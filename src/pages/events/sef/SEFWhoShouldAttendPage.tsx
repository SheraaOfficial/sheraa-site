
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Globe, GraduationCap, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AttendeeGroup = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  color: string;
};

const SEFWhoShouldAttendPage: React.FC = () => {
  // Define attendee groups
  const attendeeGroups: AttendeeGroup[] = [
    {
      id: "founders",
      title: "Startup Founders & Entrepreneurs",
      description: "From aspiring founders with a nascent idea to seasoned entrepreneurs scaling their ventures, SEF provides inspiration, practical knowledge, and vital connections.",
      icon: Lightbulb,
      benefits: [
        "Connect with investors and potential funding sources",
        "Learn from successful founders' experiences and mistakes",
        "Discover resources and support available in Sharjah's ecosystem",
        "Meet potential co-founders, team members, and advisors",
        "Showcase your startup to a diverse audience"
      ],
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      id: "investors",
      title: "Investors & VCs",
      description: "Angel investors, venture capitalists, family offices, and corporate investors seeking promising opportunities in the region's most innovative startups.",
      icon: Briefcase,
      benefits: [
        "Discover emerging startups across diverse sectors",
        "Connect with fellow investors for co-investment opportunities",
        "Gain insights into regional market trends and opportunities",
        "Meet face-to-face with startup founders through curated matchmaking",
        "Participate as judges or mentors in pitch competitions"
      ],
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      id: "corporate",
      title: "Corporate Innovation Teams",
      description: "Innovation leaders, R&D teams, and corporate strategists looking to engage with startups, discover new technologies, and foster a culture of innovation.",
      icon: Globe,
      benefits: [
        "Scout potential startup partners and acquisition targets",
        "Understand disruptive trends affecting your industry",
        "Learn innovation methodologies from agile startups",
        "Build relationships for potential pilot programs and POCs",
        "Connect with other corporations focused on innovation"
      ],
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      id: "students",
      title: "Students & Young Talents",
      description: "University students, recent graduates, and young professionals interested in entrepreneurship and building skills for the innovation economy.",
      icon: GraduationCap,
      benefits: [
        "Explore entrepreneurship as a career path",
        "Connect with mentors and role models",
        "Discover internship and job opportunities at startups",
        "Participate in hands-on workshops and skill-building sessions",
        "Network with other ambitious young innovators"
      ],
      color: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      id: "ecosystem",
      title: "Ecosystem Enablers",
      description: "Accelerators, incubators, government entities, academic institutions, and service providers that support entrepreneurial growth.",
      icon: Handshake,
      benefits: [
        "Connect with startups that can benefit from your services",
        "Network with complementary ecosystem players",
        "Share knowledge and best practices",
        "Discover partnership opportunities",
        "Increase visibility within the regional innovation community"
      ],
      color: "bg-pink-100 text-pink-700 border-pink-200"
    },
    {
      id: "community",
      title: "Creative & Tech Community",
      description: "Designers, developers, creators, and tech enthusiasts looking to connect with like-minded individuals and explore the intersection of creativity and entrepreneurship.",
      icon: Users,
      benefits: [
        "Connect with founders looking for technical and creative talent",
        "Discover the latest tools and technologies",
        "Participate in creative and technical workshops",
        "Find collaborators for side projects and new ventures",
        "Get inspired by innovative applications of technology and design"
      ],
      color: "bg-indigo-100 text-indigo-700 border-indigo-200"
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
                Who Should Attend SEF'26
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a founder, investor, student, or ecosystem supporter, SEF'26 offers value for everyone in the entrepreneurial community
            </p>
          </motion.div>
        </div>

        {/* Attendee Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {attendeeGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className={`h-2 ${group.color.split(' ')[0]}`}></div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${group.color}`}>
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-sheraa-primary">{group.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-5">{group.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Why Attend:</h4>
                  <ul className="space-y-2">
                    {group.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-sheraa-teal mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">What Attendees Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from past attendees about their experience at the Sharjah Entrepreneurship Festival
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="mb-4 text-sheraa-primary">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13,9.13V13.5H5A9,9,0,0,1,14,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H14V9.13Z" fill="currentColor" />
                  <path d="M19.13,9.13V13.5H15A9,9,0,0,1,24,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H24V9.13Z" fill="currentColor" />
                </svg>
              </div>
              <p className="italic text-gray-700 mb-6">
                "As a first-time founder, SEF provided me with invaluable connections and insights. The energy was incredible, and I left with specific action steps to grow my business. One conversation during the networking session led to our first major customer!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center text-sheraa-primary font-bold">AS</div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Ahmed Saleh</p>
                  <p className="text-sm text-gray-500">Founder & CEO, EcoTech Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="mb-4 text-sheraa-primary">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13,9.13V13.5H5A9,9,0,0,1,14,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H14V9.13Z" fill="currentColor" />
                  <path d="M19.13,9.13V13.5H15A9,9,0,0,1,24,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H24V9.13Z" fill="currentColor" />
                </svg>
              </div>
              <p className="italic text-gray-700 mb-6">
                "The quality of startups and founders at SEF is impressive. As an investor, I appreciate the curation and organization that allows for meaningful connections. I've made two investments from connections initiated at last year's festival."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center text-sheraa-primary font-bold">LK</div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Layla Khan</p>
                  <p className="text-sm text-gray-500">Partner, Gulf Ventures Capital</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="mb-4 text-sheraa-primary">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13,9.13V13.5H5A9,9,0,0,1,14,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H14V9.13Z" fill="currentColor" />
                  <path d="M19.13,9.13V13.5H15A9,9,0,0,1,24,4.5V5a8.5,8.5,0,0,0-8.5,8.5V18H24V9.13Z" fill="currentColor" />
                </svg>
              </div>
              <p className="italic text-gray-700 mb-6">
                "As a student interested in entrepreneurship, SEF opened my eyes to the possibilities. The workshops were practical, and I was able to connect with mentors who continue to guide me. Six months later, I'm working on my first startup!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center text-sheraa-primary font-bold">MN</div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Mariam Nasser</p>
                  <p className="text-sm text-gray-500">Student, American University of Sharjah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Statistics */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">SEF Audience Breakdown</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse community of innovators, investors, and industry leaders
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full text-blue-700 mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">42%</h3>
                <p className="text-gray-600">Founders & Entrepreneurs</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full text-purple-700 mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">18%</h3>
                <p className="text-gray-600">Investors & Corporate Executives</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full text-green-700 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">25%</h3>
                <p className="text-gray-600">Students & Young Professionals</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full text-orange-700 mb-4">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">15%</h3>
                <p className="text-gray-600">Ecosystem Enablers & Support</p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-gray-600 mb-6 sm:mb-0">
                  <p className="font-medium text-sheraa-primary">SEF'25 Demographics:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="text-sheraa-teal">•</span>
                      <span>50+ Countries Represented</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sheraa-teal">•</span>
                      <span>52% Women Attendees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sheraa-teal">•</span>
                      <span>300+ Startups Represented</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center sm:text-right">
                  <p className="text-gray-500 mb-3">Register now to be part of SEF'26</p>
                  <Button asChild size="lg">
                    <Link to="/events/sef/register">
                      Secure Your Spot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mb-16">
          <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-4">
                  Join us at SEF'26
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whatever your role in the entrepreneurial ecosystem, SEF'26 offers unique value and opportunities designed for your specific needs and interests.
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
                  <h3 className="text-xl font-semibold text-sheraa-primary mb-4">Group Registration</h3>
                  
                  <p className="text-gray-600 mb-4">
                    Attending with a team? We offer special rates for groups of 5+ people from the same organization, including:
                  </p>
                  
                  <ul className="space-y-2 mb-5">
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-sheraa-teal mt-1">•</span>
                      <span>Discounted ticket pricing</span>
                    </li>
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-sheraa-teal mt-1">•</span>
                      <span>Reserved seating at keynote sessions</span>
                    </li>
                    <li className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-sheraa-teal mt-1">•</span>
                      <span>Dedicated group networking opportunities</span>
                    </li>
                  </ul>
                  
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/events/sef/register?group=true">
                      Request Group Registration
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Links */}
        <div>
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
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

export default SEFWhoShouldAttendPage;
