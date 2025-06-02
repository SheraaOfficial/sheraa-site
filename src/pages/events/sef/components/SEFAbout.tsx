
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Mic } from 'lucide-react';

const SEFAbout: React.FC = () => {
  const eventDetails = [
    {
      icon: Calendar,
      label: "When",
      value: "January 31 - February 1, 2026",
      description: "Two days of innovation and inspiration"
    },
    {
      icon: MapPin,
      label: "Where", 
      value: "SRTIP, Sharjah",
      description: "Sharjah Research, Technology and Innovation Park"
    },
    {
      icon: Users,
      label: "Attendees",
      value: "14,000+ Expected",
      description: "Entrepreneurs, investors, and innovators"
    },
    {
      icon: Mic,
      label: "Speakers",
      value: "300+ Global Leaders",
      description: "Industry experts and thought leaders"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            About SEF 2026
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SEF is more than just a festival; it's the region's largest gathering of entrepreneurial minds, hosted annually by Sheraa. 
            Under the theme "Where We Belong", SEF unites visionaries, investors, innovators, and aspiring changemakers from across the globe. 
            For two electrifying days at SRTIP, experience a convergence of ideas, opportunities, and community spirit designed to fuel 
            the next wave of impactful entrepreneurship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 flex items-center justify-center mb-6">
                    <detail.icon className="w-8 h-8 text-sheraa-sef-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                    {detail.label}
                  </h3>
                  <div className="text-2xl font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent mb-2">
                    {detail.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {detail.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-accent/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What Makes SEF Special?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-sheraa-sef-primary">Global Platform</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                SEF serves as a critical platform within the Sheraa ecosystem, providing unparalleled visibility for startups, 
                direct access to investors, and a celebration of the collaborative energy driving Sharjah's innovation landscape.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-sheraa-sef-primary">Regional Impact</h4>
              <p className="text-gray-600 dark:text-gray-300">
                As the region's premier entrepreneurship festival, SEF has become the go-to event for anyone serious about 
                innovation, startups, and the future of business in the Middle East and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-sheraa-sef-primary">Diverse Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From world-class speakers and dynamic zones to hands-on workshops and networking opportunities, 
                SEF offers something for every stage of the entrepreneurial journey.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-sheraa-sef-primary">Community Spirit</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Experience the vibrant atmosphere with live performances, local artisan showcases at SEF Souq, 
                and diverse culinary experiences at SEF Eats, creating lasting memories and connections.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFAbout;
