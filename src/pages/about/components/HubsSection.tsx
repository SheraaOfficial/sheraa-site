
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Phone } from 'lucide-react';

const HubsSection = () => {
  const hubs = [
    {
      name: "Sheraa HQ (SRTIP)",
      description: "Located within the Sharjah Research Technology and Innovation Park (SRTIP), our headquarters connects startups with cutting-edge research, technology facilities, and a dynamic innovation ecosystem.",
      address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/1AHDVr9SdAtyf9Qu9",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "AUS Hub",
      description: "Situated on the ground floor of the Library Building at the American University of Sharjah (AUS), this hub engages students and faculty, fostering early-stage innovation.",
      address: "Ground Floor, Library Building, American University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/9j1RwPzUGGmhpC9y5",
      mapPDF: "/lovable-uploads/aus-map.pdf",
      image: "https://images.unsplash.com/photo-1599403802665-144cfeddbb6a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "UOS Hub",
      description: "Located in the W3 Building at the University of Sharjah (UOS), this hub connects with another key academic institution, broadening our reach to young talent.",
      address: "W3 Building, University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4010",
      directions: "https://maps.app.goo.gl/7dtcpM2HwNzVH3Dx5",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Hubs</h2>
            <p className="text-lg text-gray-700">
              Sheraa operates from strategic locations within Sharjah's vibrant academic and research 
              landscape, ensuring accessibility and fostering collaboration.
            </p>
          </motion.div>

          <div className="space-y-8">
            {hubs.map((hub, index) => (
              <motion.div 
                key={hub.name} 
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-full md:w-1/3 h-[200px] overflow-hidden rounded-xl">
                  <img 
                    src={hub.image} 
                    alt={hub.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy" 
                  />
                </div>
                <Card className="w-full md:w-2/3 border-sheraa-primary/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-sheraa-dark">{hub.name}</h3>
                    <p className="text-gray-600 mb-4">{hub.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-sheraa-primary shrink-0 mt-1" />
                        <span className="text-sm">{hub.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-sheraa-primary shrink-0" />
                        <span className="text-sm">{hub.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={hub.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                      
                      {hub.mapPDF && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={hub.mapPDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            Download Map <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HubsSection;
