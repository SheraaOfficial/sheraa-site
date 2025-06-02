
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Lightbulb, Trophy, Building, Heart, 
  Globe, Network, Coffee, ShoppingBag,
  GraduationCap, Handshake 
} from 'lucide-react';

const SEFExperienceZones: React.FC = () => {
  const zones = [
    {
      name: "Startup Town",
      description: "Pitch your ideas and connect with early-stage startups. A vibrant space for entrepreneurs to showcase innovations.",
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600",
      features: ["Startup Showcase", "Pitch Competitions", "Networking Hub"]
    },
    {
      name: "Investors Lounge",
      description: "Network with VCs, angels, and corporate investors. Connect with funding opportunities and strategic partnerships.",
      icon: Trophy,
      color: "from-green-500 to-green-600", 
      features: ["320+ Investor Meetings", "Funding Opportunities", "Strategic Partnerships"]
    },
    {
      name: "Made in Sharjah",
      description: "Discover local talent and innovative solutions born in the emirate. Celebrate homegrown entrepreneurship.",
      icon: Building,
      color: "from-purple-500 to-purple-600",
      features: ["Local Startups", "Innovation Showcase", "Cultural Heritage"]
    },
    {
      name: "Creative Zone",
      description: "Explore arts, media, and creative entrepreneurship. Where creativity meets business innovation.",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      features: ["Creative Industries", "Media Innovation", "Artistic Collaboration"]
    },
    {
      name: "Sustainability & Wellness Zone",
      description: "Focus on clean tech, sustainable innovation, and wellness solutions for a better tomorrow.",
      icon: Globe,
      color: "from-emerald-500 to-emerald-600",
      features: ["Clean Tech", "Sustainable Solutions", "Wellness Innovation"]
    },
    {
      name: "SEF Academy",
      description: "Participate in 60+ hands-on workshops and masterclasses designed for entrepreneurs at all stages.",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
      features: ["60+ Workshops", "Masterclasses", "Skill Building"]
    },
    {
      name: "SEF Souq",
      description: "Explore local artisan showcases and discover unique products from regional creators and innovators.",
      icon: ShoppingBag,
      color: "from-orange-500 to-orange-600",
      features: ["Artisan Showcase", "Local Products", "Cultural Exchange"]
    },
    {
      name: "SEF Eats",
      description: "Diverse culinary experiences featuring local and international flavors in a networking-friendly environment.",
      icon: Coffee,
      color: "from-yellow-500 to-yellow-600",
      features: ["Culinary Diversity", "Networking Space", "Cultural Flavors"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            Dynamic Experience Zones
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SEF features diverse zones catering to every interest and industry, providing targeted experiences 
            for different aspects of entrepreneurship and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-sheraa-dark transform-gpu border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${zone.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <zone.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {zone.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {zone.description}
                  </p>
                  
                  <div className="space-y-2">
                    {zone.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sheraa-sef-primary rounded-full" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Immersive Experience Awaits</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Each zone is carefully curated to provide maximum value, networking opportunities, and learning experiences. 
              Move freely between zones to create your personalized SEF journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">10+ Unique Zones</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">250+ Activities</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Unlimited Networking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFExperienceZones;
