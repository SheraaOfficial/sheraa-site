
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Speaker data structure
type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topics: string[];
  category: string;
  featured: boolean;
  image?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
};

const SEFSpeakersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample speakers data
  const speakers: Speaker[] = [
    {
      id: "1",
      name: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      role: "Chairperson",
      company: "Sheraa",
      bio: "H.E. Sheikha Bodour Bint Sultan Al Qasimi is a leading voice for entrepreneurship and innovation in the UAE. As the Chairperson of Sheraa, she has been instrumental in establishing Sharjah as a vibrant hub for entrepreneurs and startups.",
      topics: ["Leadership", "Entrepreneurship Ecosystem", "Innovation Policy"],
      category: "Government Leaders",
      featured: true,
      socialLinks: {
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "2",
      name: "Dr. Sara Ahmed",
      role: "Technology Futurist",
      company: "Future Institute",
      bio: "Dr. Sara Ahmed is a renowned futurist specializing in emerging technologies and their impact on business and society. Her research focuses on AI, quantum computing, and digital transformation.",
      topics: ["AI", "Future of Tech", "Digital Transformation"],
      category: "Technology Visionaries",
      featured: true,
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      id: "3",
      name: "Michael Chang",
      role: "Managing Partner",
      company: "Horizon Ventures",
      bio: "With over 20 years of experience in venture capital, Michael has backed some of the most successful startups in the MENA region. He specializes in early-stage investments in fintech and healthtech.",
      topics: ["Venture Capital", "Startup Funding", "Investment Strategy"],
      category: "Investors",
      featured: true,
      socialLinks: {
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "4",
      name: "Layla Mahmoud",
      role: "Founder",
      company: "EcoVenture",
      bio: "Layla Mahmoud is a pioneering entrepreneur in the sustainability space. Her company, EcoVenture, develops innovative solutions for waste reduction and circular economy implementation in urban environments.",
      topics: ["Sustainability", "Green Entrepreneurship", "Circular Economy"],
      category: "Innovators & Founders",
      featured: false,
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "5",
      name: "James Wilson",
      role: "Leadership Coach & Author",
      company: "Growth Mindset Institute",
      bio: "James Wilson is a bestselling author and executive coach who helps organizations build high-performing teams. His methodology combines principles from psychology, neuroscience, and organizational behavior.",
      topics: ["Leadership Development", "Team Building", "Organizational Culture"],
      category: "Business Leaders",
      featured: false,
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      id: "6",
      name: "Maya Truong",
      role: "Creative Entrepreneur",
      company: "Studio Narrative",
      bio: "Maya Truong has built multiple successful businesses in the creator economy. Her unique approach to combining creativity with strategic business modeling has made her a sought-after advisor for creators and brands.",
      topics: ["Creator Economy", "Digital Content", "Creative Business"],
      category: "Creative Entrepreneurs",
      featured: false,
      socialLinks: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "7",
      name: "Dr. Khalid Al Falasi",
      role: "AI Researcher & Entrepreneur",
      company: "NeuralVision",
      bio: "Dr. Khalid Al Falasi bridges the gap between academic AI research and practical business applications. His company NeuralVision develops computer vision solutions for healthcare, retail, and industrial applications.",
      topics: ["AI Applications", "Computer Vision", "Tech Entrepreneurship"],
      category: "Technology Visionaries",
      featured: true,
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "8",
      name: "Sarah Johnson",
      role: "Chief Strategy Officer",
      company: "Global Impact Fund",
      bio: "Sarah Johnson leads investment strategy for one of the largest impact investment funds in the region. She specializes in identifying ventures that deliver both financial returns and measurable social impact.",
      topics: ["Impact Investing", "Social Entrepreneurship", "SDGs"],
      category: "Investors",
      featured: false,
      socialLinks: {
        linkedin: "https://linkedin.com",
      }
    }
  ];
  
  // Get unique categories for filtering
  const categories = ['all', ...new Set(speakers.map(speaker => speaker.category))];
  
  // Filter speakers based on search and category
  const filteredSpeakers = speakers.filter(speaker => {
    const matchesSearch = !searchQuery || 
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = selectedCategory === 'all' || speaker.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Featured speakers at the top
  const featuredSpeakers = filteredSpeakers.filter(speaker => speaker.featured);
  const otherSpeakers = filteredSpeakers.filter(speaker => !speaker.featured);

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                SEF'26 Speakers
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries, innovators, and thought leaders sharing their insights at the Sharjah Entrepreneurship Festival
            </p>
          </motion.div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl shadow-sheraa-soft p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-10"
                placeholder="Search speakers, topics, companies..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-nowrap">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap ${selectedCategory === category ? '' : 'text-gray-700'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured Speakers */}
        {featuredSpeakers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-sheraa-primary mb-8">Featured Speakers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredSpeakers.map((speaker) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-purple h-48 md:h-auto flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold">
                        {speaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold text-sheraa-primary">{speaker.name}</h3>
                      <p className="text-sheraa-teal font-medium">{speaker.role}, {speaker.company}</p>
                      
                      <p className="text-gray-600 mt-4 text-sm line-clamp-4">{speaker.bio}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {speaker.topics.map((topic, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      {speaker.socialLinks && (
                        <div className="mt-5 flex space-x-3">
                          {speaker.socialLinks.linkedin && (
                            <a href={speaker.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sheraa-primary">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                              </svg>
                            </a>
                          )}
                          
                          {speaker.socialLinks.twitter && (
                            <a href={speaker.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sheraa-primary">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          )}
                          
                          {speaker.socialLinks.website && (
                            <a href={speaker.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sheraa-primary">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Speakers */}
        <div>
          <h2 className="text-2xl font-semibold text-sheraa-primary mb-8">All Speakers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-sheraa-primary/10 flex items-center justify-center text-sheraa-primary font-bold text-xl">
                      {speaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sheraa-primary">{speaker.name}</h3>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                      <p className="text-xs text-gray-500">{speaker.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{speaker.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {speaker.topics.slice(0, 2).map((topic, index) => (
                      <span 
                        key={index}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {speaker.topics.length > 2 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                        +{speaker.topics.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  {speaker.socialLinks && (
                    <div className="mt-4 flex space-x-3">
                      {speaker.socialLinks.linkedin && (
                        <a href={speaker.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sheraa-primary">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      )}
                      
                      {speaker.socialLinks.twitter && (
                        <a href={speaker.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sheraa-primary">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      
                      {speaker.socialLinks.website && (
                        <a href={speaker.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sheraa-primary">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredSpeakers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No speakers found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Related Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
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

export default SEFSpeakersPage;
