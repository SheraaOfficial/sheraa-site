
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEFExperienceZonesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Experience Zones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore diverse zones catering to every interest, from connecting with investors to 
            discovering local talent and innovating in specialized areas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Startup Town",
              description: "Connect with fellow founders, showcase your venture, and find potential collaborators."
            },
            {
              title: "Investors Lounge",
              description: "Meet with VCs, angel investors, and other funding sources in a dedicated networking space."
            },
            {
              title: "Made in Sharjah",
              description: "Discover innovative products and services created by local entrepreneurs and makers."
            },
            {
              title: "Creative Zone",
              description: "Explore the intersection of entrepreneurship, art, design, and creative industries."
            },
            {
              title: "SEF Academy",
              description: "Participate in hands-on workshops and masterclasses led by industry experts."
            },
            {
              title: "Impact Zone",
              description: "Engage with social entrepreneurs and learn how business can drive positive change."
            }
          ].map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm border border-purple-100
                hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] rounded-lg flex items-center 
                justify-center text-white mb-4">
                {index + 1}
              </div>
              
              <h3 className="font-bold text-xl text-sheraa-primary mb-2">{zone.title}</h3>
              <p className="text-gray-600">{zone.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
            <Link to="/events/sef/experience">
              Explore All Zones <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SEFExperienceZonesSection;
