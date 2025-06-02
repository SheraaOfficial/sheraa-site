
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEFSpeakersSection: React.FC = () => {
  const speakerCategories = [
    {
      category: "Government & Policy",
      description: "Ministers, officials, and policy makers shaping the future",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Business Leaders",
      description: "CEOs, founders, and industry titans driving innovation",
      icon: Mic,
      color: "from-green-500 to-green-600"
    },
    {
      category: "Creative Icons",
      description: "Artists, cultural leaders, and creative entrepreneurs",
      icon: Globe,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const featuredHighlights = [
    "H.E. Sheikha Hoor Al Qasimi - Art & Social Impact Leadership",
    "Global Humanitarian Leaders - Making Impact at Scale", 
    "Technology Pioneers - Shaping the Digital Future",
    "Creative Industry Icons - Where Art Meets Business",
    "Investment Leaders - Funding the Next Generation",
    "Sustainability Champions - Building a Better Tomorrow"
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
            World-Class Speakers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights across 
            technology, finance, sustainability, and creative industries from 45+ countries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {speakerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
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
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-br from-sheraa-sef-primary/10 to-sheraa-sef-accent/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Speaker Highlights
              </h3>
              <div className="space-y-3">
                {featuredHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-sheraa-sef-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-sheraa-dark rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-sheraa-sef-primary mb-2">300+</div>
                <div className="text-lg font-semibold mb-4">Global Speakers</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-sheraa-sef-accent">45+</div>
                    <div className="text-gray-600 dark:text-gray-400">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sheraa-sef-accent">50+</div>
                    <div className="text-gray-600 dark:text-gray-400">Sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Speaker Lineup Coming Soon</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We're curating an exceptional lineup of speakers who are shaping the future of entrepreneurship, 
              technology, and innovation. Full speaker announcement coming soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-sheraa-sef-primary hover:bg-gray-50">
                <Link to="/events/sef/speakers">
                  View Full Speaker Lineup
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Speaker
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFSpeakersSection;
