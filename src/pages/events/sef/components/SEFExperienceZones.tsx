
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';

const zones = [
  {
    title: "Startup Town",
    description: "Connect with fellow founders, showcase your venture, and find potential collaborators.",
    image: "https://picsum.photos/seed/zone1/500",
    color: "from-purple-600/50 to-purple-400/50"
  },
  {
    title: "Investors Lounge",
    description: "Meet with VCs, angel investors, and other funding sources in a dedicated networking space.",
    image: "https://picsum.photos/seed/zone2/500",
    color: "from-blue-600/50 to-blue-400/50"
  },
  {
    title: "Made in Sharjah",
    description: "Discover innovative products and services created by local entrepreneurs and makers.",
    image: "https://picsum.photos/seed/zone3/500",
    color: "from-green-600/50 to-green-400/50"
  },
  {
    title: "Creative Zone",
    description: "Explore the intersection of entrepreneurship, art, design, and creative industries.",
    image: "https://picsum.photos/seed/zone4/500",
    color: "from-pink-600/50 to-pink-400/50"
  },
  {
    title: "SEF Academy",
    description: "Participate in hands-on workshops and masterclasses led by industry experts.",
    image: "https://picsum.photos/seed/zone5/500",
    color: "from-amber-600/50 to-amber-400/50"
  },
  {
    title: "Impact Zone",
    description: "Engage with social entrepreneurs and learn how business can drive positive change.",
    image: "https://picsum.photos/seed/zone6/500",
    color: "from-teal-600/50 to-teal-400/50"
  }
];

const SEFExperienceZones = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0 bg-gradient-to-b from-[#9b87f5]/10 to-white" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <Sparkles className="text-[#9b87f5] inline-block">
              <span className="bg-purple-100 rounded-full px-3 py-1 text-sm">Interactive Experiences</span>
            </Sparkles>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mt-4 mb-6">
            Experience Zones
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore diverse zones catering to every interest, from connecting with investors 
            to discovering local talent and innovating in specialized areas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] overflow-hidden rounded-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={zone.image} 
                  alt={zone.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${zone.color} opacity-70 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{zone.title}</h3>
                <p className="text-white/90 mb-4 line-clamp-2">{zone.description}</p>
                
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="outline" size="sm" className="bg-white/20 text-white border-white/50 hover:bg-white/30">
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="default" className="group">
            <Link to="/events/sef/experience">
              Explore All Zones 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SEFExperienceZones;
