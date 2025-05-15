
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles } from '@/components/ui/sparkles';

// Mock data for speakers
const speakers = [
  {
    name: "Dr. Sara Johnson",
    role: "CEO, Future Tech Ventures",
    image: "https://picsum.photos/seed/speaker1/400",
    category: "Business"
  },
  {
    name: "Ahmed Al-Mansouri",
    role: "Serial Entrepreneur & Investor",
    image: "https://picsum.photos/seed/speaker2/400",
    category: "Investment"
  },
  {
    name: "Dr. Maya Wong",
    role: "Director of Innovation, Global AI Institute",
    image: "https://picsum.photos/seed/speaker3/400",
    category: "Technology"
  },
  {
    name: "James Wilson",
    role: "Sustainability Pioneer",
    image: "https://picsum.photos/seed/speaker4/400",
    category: "Sustainability"
  },
  {
    name: "Layla Qureshi",
    role: "Founder, EdTech Revolution",
    image: "https://picsum.photos/seed/speaker5/400",
    category: "Education"
  },
  {
    name: "Carlos Mendez",
    role: "Creative Director, Design Forward",
    image: "https://picsum.photos/seed/speaker6/400",
    category: "Creative"
  },
];

const categories = ["All", "Business", "Technology", "Investment", "Sustainability", "Education", "Creative"];

const SEFSpeakersSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const filteredSpeakers = activeCategory === "All" 
    ? speakers 
    : speakers.filter(speaker => speaker.category === activeCategory);
  
  return (
    <section className="py-20 px-4 dark:bg-[#1A1F2C] bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <Sparkles>
              <span className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium border border-white/20 dark:text-[#9b87f5] text-indigo-600">
                VISIONARY VOICES
              </span>
            </Sparkles>
          </div>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl uppercase font-extrabold tracking-tighter dark:text-white text-indigo-900 mt-4 mb-6"
          >
            WORLD-CLASS SPEAKERS
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto dark:text-white/70 text-gray-600"
          >
            Learn from global leaders, industry pioneers, and inspirational changemakers 
            sharing their insights across technology, entrepreneurship, and innovation.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-[#9b87f5] text-white shadow-lg' 
                  : 'dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10 border-gray-200 group transition-all duration-500 hover:shadow-2xl transform hover:translate-y-[-5px]">
                <div className="h-[320px] relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#9b87f5] rounded-full text-xs font-medium text-white mb-3">
                      {speaker.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{speaker.name}</h3>
                    <p className="text-white/70">{speaker.role}</p>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                  >
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50">
                      View Profile
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white group uppercase font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/events/sef/speakers">
              View All Speakers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SEFSpeakersSection;
