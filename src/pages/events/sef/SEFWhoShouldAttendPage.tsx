
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AttendeeGroup = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
};

const SEFWhoShouldAttendPage: React.FC = () => {
  // Attendee groups data
  const attendeeGroups: AttendeeGroup[] = [
    {
      id: "founders",
      title: "Startup Founders",
      description: "Entrepreneurs at all stages, from ideation to scaling, looking to grow their ventures, connect with investors, and learn from industry experts.",
      benefits: [
        "Connect with investors and potential funding sources",
        "Learn from successful founders who've been in your shoes",
        "Gain visibility for your startup through exhibition opportunities",
        "Access specialized workshops focused on startup growth challenges",
        "Join a community of like-minded entrepreneurs for support and collaboration"
      ],
      quote: {
        text: "SEF gave me the connections I needed to raise our seed round and introduced me to mentors who have been invaluable to our growth journey.",
        author: "Ahmed Al Zarooni",
        role: "Founder & CEO, FinEdge"
      }
    },
    {
      id: "investors",
      title: "Investors",
      description: "Angels, VCs, corporate investors, and family offices seeking promising investment opportunities and insights on emerging market trends.",
      benefits: [
        "Discover high-potential startups across diverse sectors",
        "Connect with fellow investors for co-investment opportunities",
        "Gain insights on emerging market trends and opportunities",
        "Participate in exclusive investor-focused sessions and roundtables",
        "Access the Investors Lounge for curated matchmaking with startups"
      ],
      quote: {
        text: "The quality of startups at SEF is consistently impressive. I've made two investments from connections at last year's event, both performing exceptionally well.",
        author: "Sarah Khan",
        role: "Managing Partner, Horizon Ventures"
      }
    },
    {
      id: "corporate",
      title: "Corporate Innovators",
      description: "Innovation leaders, R&D professionals, and corporate strategists looking to stay ahead of disruption and connect with potential startup partners.",
      benefits: [
        "Scout innovative solutions to your organization's challenges",
        "Discover potential startup partners for corporate innovation initiatives",
        "Learn about emerging technologies reshaping your industry",
        "Network with other corporate innovation leaders",
        "Participate in corporate innovation workshops and masterclasses"
      ],
      quote: {
        text: "SEF has become our go-to event for identifying potential startup partners. The quality of conversations and innovations on display is unmatched in the region.",
        author: "Fatima Al Suwaidi",
        role: "Chief Innovation Officer, Global Enterprises"
      }
    },
    {
      id: "students",
      title: "Students & Young Entrepreneurs",
      description: "University students and young professionals interested in entrepreneurship, gaining practical skills, and exploring startup opportunities.",
      benefits: [
        "Get inspired by successful entrepreneurs and change-makers",
        "Develop practical entrepreneurial skills through dedicated workshops",
        "Connect with mentors who can guide your entrepreneurial journey",
        "Explore internship and job opportunities with innovative companies",
        "Showcase your ideas through student-focused competitions and exhibitions"
      ],
      quote: {
        text: "My first SEF experience as a student completely changed my career trajectory. The workshops, connections, and inspiration led me to start my own venture rather than pursuing a traditional job path.",
        author: "Layla Mahmoud",
        role: "Student-Entrepreneur, American University of Sharjah"
      }
    },
    {
      id: "government",
      title: "Government & Policy Makers",
      description: "Public sector leaders and policy makers working on economic development, innovation ecosystems, and entrepreneurship support initiatives.",
      benefits: [
        "Connect with the innovation ecosystem you aim to support",
        "Discover best practices in entrepreneurship policy and support programs",
        "Engage with entrepreneurs to understand their needs and challenges",
        "Network with international ecosystem builders for knowledge exchange",
        "Showcase your initiatives and collect feedback from stakeholders"
      ],
      quote: {
        text: "SEF provides us with direct insights into the entrepreneurial ecosystem, helping shape more effective policies and support programs for startups in our region.",
        author: "Mohammed Al Najjar",
        role: "Director of Economic Development, Government Entity"
      }
    },
    {
      id: "ecosystem",
      title: "Ecosystem Enablers",
      description: "Accelerators, incubators, co-working spaces, university programs, and other organizations supporting entrepreneurial growth.",
      benefits: [
        "Connect with potential startups for your programs",
        "Network with complementary ecosystem players for potential collaborations",
        "Gain visibility for your support programs and offerings",
        "Learn about international best practices in startup support",
        "Engage with policy makers and corporate partners interested in ecosystem building"
      ],
      quote: {
        text: "As ecosystem builders, SEF gives us the perfect platform to connect with startups, partners, and supporters all in one place, accelerating our impact.",
        author: "Rania El-Sherbini",
        role: "CEO, Startup Hub"
      }
    },
    {
      id: "creatives",
      title: "Creatives & Content Creators",
      description: "Artists, designers, content creators, and creative entrepreneurs looking to build sustainable businesses in the creative economy.",
      benefits: [
        "Connect with platforms, brands, and funding sources for creative ventures",
        "Learn about monetization strategies for creative content",
        "Network with fellow creators for potential collaborations",
        "Gain insights on the business side of creative entrepreneurship",
        "Showcase your work in the Creative Zone"
      ],
      quote: {
        text: "SEF helped me transform my creative passion into a sustainable business. The connections and business knowledge I gained were game-changing for my career.",
        author: "Omar Farooq",
        role: "Founder, Creative Studio"
      }
    },
    {
      id: "tech",
      title: "Tech Professionals",
      description: "Developers, engineers, product managers, and tech specialists interested in startup opportunities, innovation trends, and networking.",
      benefits: [
        "Discover potential startup opportunities matching your technical expertise",
        "Stay current on emerging tech trends across industries",
        "Connect with tech-focused founders and innovation leaders",
        "Participate in technical workshops and coding challenges",
        "Network with potential collaborators and employers"
      ],
      quote: {
        text: "As a software engineer, SEF opened my eyes to how my skills could be applied to solving real-world problems through entrepreneurship. I joined a startup I met at the event and haven't looked back.",
        author: "Priya Sharma",
        role: "CTO, TechSolutions"
      }
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
              The Sharjah Entrepreneurship Festival brings together a diverse ecosystem of changemakers, each finding unique value and opportunities
            </p>
          </motion.div>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-3xl shadow-sheraa-soft p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-6">SEF is for Everyone Who...</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-sheraa-teal">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">Is passionate about entrepreneurship, innovation, and driving positive change</p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-sheraa-teal">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">Wants to connect with a vibrant community of like-minded change-makers</p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-sheraa-teal">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">Seeks inspiration, knowledge, and practical tools to build or grow ventures</p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-sheraa-teal">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">Is looking to invest in, partner with, or support innovative startups</p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-sheraa-teal">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">Wants to stay ahead of industry trends and emerging technologies</p>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/events/sef/register">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-sheraa-primary/5 rounded-2xl p-6 border border-sheraa-primary/20">
              <h3 className="text-xl font-semibold text-sheraa-primary mb-4">2025 Attendee Breakdown</h3>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">Entrepreneurs & Startup Teams</span>
                    <span className="text-sheraa-primary font-medium">42%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sheraa-primary rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">Students & Young Professionals</span>
                    <span className="text-sheraa-primary font-medium">28%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sheraa-primary rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">Corporate Leaders & Innovators</span>
                    <span className="text-sheraa-primary font-medium">15%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sheraa-primary rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">Investors</span>
                    <span className="text-sheraa-primary font-medium">8%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sheraa-primary rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">Ecosystem Partners & Government</span>
                    <span className="text-sheraa-primary font-medium">7%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sheraa-primary rounded-full" style={{ width: "7%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Total Attendance:</span>
                  <span className="font-semibold text-gray-800">14,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Attendee Groups */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Find Your Place at SEF</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SEF offers tailored experiences and benefits for different members of the entrepreneurial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attendeeGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sheraa-soft overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-sheraa-primary mb-3">{group.title}</h3>
                  <p className="text-gray-600 mb-6">{group.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {group.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-sheraa-teal">
                            <Check className="h-4 w-4" />
                          </div>
                          <p className="text-gray-700 text-sm">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {group.quote && (
                    <div className="bg-gradient-purple/5 rounded-lg p-4 border border-purple-100">
                      <p className="italic text-gray-700 text-sm mb-3">"{group.quote.text}"</p>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sheraa-primary/20 flex items-center justify-center text-sheraa-primary font-bold text-sm">
                          {group.quote.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-800">{group.quote.author}</p>
                          <p className="text-xs text-gray-500">{group.quote.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Companies Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Who You'll Meet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SEF'26 brings together top organizations, startups, and individuals from across the entrepreneurial ecosystem
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sheraa-soft overflow-hidden border border-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-sheraa-primary mb-4">Companies & Investors</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Global Tech Companies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Regional Enterprise Leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Venture Capital Firms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Angel Investor Networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Corporate Innovation Teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Family Offices</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-sheraa-primary mb-4">Startups & Innovators</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Tech Startups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Social Enterprises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Creative Entrepreneurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Student Founders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Product Innovators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Industry Disruptors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-sheraa-primary mb-4">Ecosystem & Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Accelerators & Incubators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Government Representatives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">University Programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Service Providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Mentors & Coaches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sheraa-teal" />
                    <span className="text-gray-700">Media & Press</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mb-16">
          <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-4">
                Join the SEF'26 Community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a founder, investor, corporate innovator, student, or ecosystem builder - SEF'26 has something valuable for you. Secure your spot at the region's premier entrepreneurship festival.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/events/sef/register">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link to="/events/sef/agenda">
                    Explore the Agenda
                  </Link>
                </Button>
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
            
            <Link to="/events/sef/faq" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">FAQs</h4>
              <p className="text-gray-600 mt-2 text-sm">Find answers to commonly asked questions about the festival.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SEFWhoShouldAttendPage;
