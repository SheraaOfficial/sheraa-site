
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mic, Users, Lightbulb, Trophy, 
  Network, Globe, Building, Heart 
} from 'lucide-react';

const SEFFeatures: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: "World-Class Speakers",
      description: "Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights across technology, finance, sustainability, and creative industries.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Network,
      title: "High-Impact Networking",
      description: "Connect with potential co-founders, mentors, partners, and investors through curated meetings and dedicated networking spaces.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Startup Opportunities",
      description: "Showcase your venture, compete for significant funding in the Pitch Competition, and gain recognition through the SEFFY Awards.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Actionable Learning",
      description: "Participate in 60+ hands-on workshops and masterclasses at the SEF Academy, designed for entrepreneurs at all stages.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Dynamic Zones",
      description: "Explore diverse zones catering to every interest: Startup Town, Investors Lounge, Creative Zone, Sustainability Hub, and more.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Join attendees from 45+ countries in a truly international celebration of entrepreneurship and innovation.",
      color: "from-indigo-500 to-indigo-600"
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
            Key Features & Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover what makes SEF the region's most impactful entrepreneurship event, offering 
            unparalleled opportunities for learning, networking, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEFFeatures;
