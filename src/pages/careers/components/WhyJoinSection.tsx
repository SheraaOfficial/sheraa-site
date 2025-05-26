
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, Users, Globe, Heart, Rocket, Zap,
  Building, BookOpen, Trophy, Coffee
} from 'lucide-react';

const WhyJoinSection: React.FC = () => {
  const benefits = [
    {
      title: "Direct Impact",
      description: "Your work directly influences thousands of entrepreneurs and creates lasting change in the MENA region's startup ecosystem.",
      icon: Target,
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "Global Network",
      description: "Connect with international entrepreneurs, investors, and industry leaders from over 45 countries through our programs.",
      icon: Globe,
      color: "text-green-600 bg-green-50 border-green-200"
    },
    {
      title: "Collaborative Culture",
      description: "Work in a supportive, inclusive environment where diverse minds come together to solve complex challenges.",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      title: "Mission-Driven Work",
      description: "Be part of something bigger - building Sharjah's position as a leading global hub for entrepreneurship and innovation.",
      icon: Heart,
      color: "text-red-600 bg-red-50 border-red-200"
    },
    {
      title: "Career Growth",
      description: "Accelerate your professional development with access to mentorship, training, and leadership opportunities.",
      icon: Rocket,
      color: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      title: "Innovation Focus",
      description: "Work at the forefront of emerging technologies, sustainable solutions, and creative industries.",
      icon: Zap,
      color: "text-yellow-600 bg-yellow-50 border-yellow-200"
    },
    {
      title: "Modern Workspace",
      description: "Enjoy state-of-the-art facilities across our three strategic locations in Sharjah's innovation districts.",
      icon: Building,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200"
    },
    {
      title: "Learning Opportunities",
      description: "Access conferences, workshops, and continuous learning programs to stay ahead of industry trends.",
      icon: BookOpen,
      color: "text-teal-600 bg-teal-50 border-teal-200"
    },
    {
      title: "Recognition & Rewards",
      description: "Competitive compensation, comprehensive benefits, and recognition for outstanding contributions.",
      icon: Trophy,
      color: "text-pink-600 bg-pink-50 border-pink-200"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible policies, wellness programs, and a culture that respects your personal time and wellbeing.",
      icon: Coffee,
      color: "text-brown-600 bg-amber-50 border-amber-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Sheraa?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover what makes Sheraa more than just a workplace - it's a community of innovators, 
            changemakers, and visionaries building the future together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-sheraa-dark/80 border border-gray-200 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl border-2 ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
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

export default WhyJoinSection;
