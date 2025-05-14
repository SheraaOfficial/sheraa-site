
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const speakers = [
  {
    name: "Sarah Al Madani",
    position: "Serial Entrepreneur & TV Personality",
    category: "Business Leader",
    image: "https://picsum.photos/seed/speaker1/300"
  },
  {
    name: "Omar Christidis",
    position: "Founder & CEO, Arabnet",
    category: "Tech Pioneer",
    image: "https://picsum.photos/seed/speaker2/300"
  },
  {
    name: "Dr. Aisha Bin Bishr",
    position: "Digital Transformation Leader",
    category: "Innovation Expert",
    image: "https://picsum.photos/seed/speaker3/300"
  },
  {
    name: "Magnus Olsson",
    position: "Co-founder, Careem",
    category: "Startup Icon",
    image: "https://picsum.photos/seed/speaker4/300"
  },
];

const SEFSpeakers = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-2/5 space-y-6">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-[#9b87f5]">
              Global Voices
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C]">World-Class Speakers</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Learn from 300+ visionary leaders, industry pioneers, successful founders, and creative minds 
              who are shaping the future of entrepreneurship, technology, and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {["Business", "Technology", "Sustainability", "Creative", "Investment", "Policy"].map((tag, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <Button asChild variant="default" className="group">
              <Link to="/events/sef/speakers">
                View All Speakers 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all"
                >
                  <div className="relative">
                    <AspectRatio ratio={1 / 1} className="bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#F97316]/40 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="text-xs text-white/80 font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                          {speaker.category}
                        </span>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-[#1A1F2C] mb-1">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFSpeakers;
