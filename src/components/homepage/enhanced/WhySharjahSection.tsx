import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Building2, 
  Lightbulb, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  Heart,
  Star
} from 'lucide-react';

const WhySharjahSection: React.FC = () => {
  const advantages = [
    {
      icon: Globe,
      title: 'Strategic Location',
      description: 'Gateway between East and West, connecting global markets',
      stats: '3-hour flight to 2 billion consumers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building2,
      title: 'Business-Friendly Environment',
      description: 'Streamlined setup, competitive costs, and supportive regulations',
      stats: '100% foreign ownership allowed',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Ecosystem',
      description: 'SRTIP, universities, and research centers driving innovation',
      stats: '140+ ecosystem partners',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      title: 'Talented Workforce',
      description: 'Access to skilled professionals from top regional universities',
      stats: '18,000+ youth upskilled',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Award,
      title: 'Government Support',
      description: 'Strong government backing and strategic development initiatives',
      stats: 'Ranked 7th in MENA ecosystem',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Heart,
      title: 'Quality of Life',
      description: 'Cultural richness, safety, and exceptional living standards',
      stats: 'UAE\'s Cultural Capital',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const achievements = [
    {
      title: "Most Diversified Economy in GCC",
      description: "Balanced across manufacturing, services, and technology"
    },
    {
      title: "UNESCO Creative Cities Network",
      description: "Recognized for creativity and cultural innovation"
    },
    {
      title: "Major Trade & Innovation Hub",
      description: "Connecting global markets with local expertise"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-sheraa-primary mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Why Sharjah?
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover why Sharjah has become the emirate of choice for entrepreneurs, 
            offering unique advantages that make it the perfect launchpad for your startup journey.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-sheraa-primary">7th</div>
              <div className="text-sm text-gray-600">MENA Startup Ecosystem</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sheraa-primary">60k+</div>
              <div className="text-sm text-gray-600">SMEs Operating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sheraa-primary">$171M+</div>
              <div className="text-sm text-gray-600">Capital Raised</div>
            </div>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`p-3 rounded-lg ${advantage.bgColor} w-fit mb-4`}>
                <advantage.icon className={`h-6 w-6 ${advantage.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600 mb-3">{advantage.description}</p>
              <div className={`text-sm font-semibold ${advantage.color}`}>
                {advantage.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-accent/10 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sharjah's Global Recognition
            </h3>
            <p className="text-gray-600">
              A track record of excellence in entrepreneurship and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-sheraa-primary" />
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "Sharjah's unique ability to blend collective strength and unity with individual 
              expression and creativity has created the perfect environment for entrepreneurs to thrive. 
              Our startup ecosystem continues to grow stronger each year."
            </blockquote>
            <div className="font-semibold text-gray-900">
              Sheraa Leadership Team
            </div>
            <div className="text-sm text-gray-600 mt-1">
              On Sharjah's Entrepreneurial Ecosystem
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySharjahSection;