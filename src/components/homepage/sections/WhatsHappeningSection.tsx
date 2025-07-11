import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Award, TrendingUp } from 'lucide-react';

interface HappeningItem {
  id: string;
  type: 'event' | 'news' | 'success' | 'opportunity';
  title: string;
  subtitle: string;
  date: string;
  participants?: string;
  link: string;
  isLive?: boolean;
  isFeatured?: boolean;
}

const happeningItems: HappeningItem[] = [
  {
    id: 'sef-2026',
    type: 'event',
    title: 'Sharjah Entrepreneurship Festival 2026',
    subtitle: 'Region\'s largest startup gathering',
    date: 'Jan 31 - Feb 1, 2026',
    participants: '14,000+ expected',
    link: '/events/sef-2026',
    isFeatured: true
  },
  {
    id: 's3-cohort',
    type: 'opportunity',
    title: 'S3 Incubator Cohort 12 Applications',
    subtitle: 'Open now for tech-enabled startups',
    date: 'Deadline: Feb 15, 2025',
    participants: '15 spots available',
    link: '/programs/s3-incubator/apply',
    isLive: true
  },
  {
    id: 'startup-exit',
    type: 'success',
    title: 'Sheraa Alumni Candam Technologies Acquired',
    subtitle: 'Successful exit to BEEAH Group',
    date: 'January 2025',
    link: '/news/candam-acquisition',
    isFeatured: true
  },
  {
    id: 'access-sharjah',
    type: 'opportunity',
    title: 'Access Sharjah Challenge 2025',
    subtitle: 'Global competition for growth-stage startups',
    date: 'Applications open March 2025',
    participants: 'AED 250K+ in grants',
    link: '/programs/access-sharjah-challenge'
  },
  {
    id: 'ramadan-majlis',
    type: 'event',
    title: 'Ramadan Majlis: Future of Innovation',
    subtitle: 'Government leaders & entrepreneurs gathering',
    date: 'March 2025',
    participants: '200+ leaders expected',
    link: '/events/ramadan-majlis'
  },
  {
    id: 'dojo-plus',
    type: 'news',
    title: 'Startup Dojo+ Accelerator Launches',
    subtitle: '4-week intensive for student entrepreneurs',
    date: 'February 2025',
    participants: '20 teams selected',
    link: '/news/dojo-plus-launch'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'event':
      return <Calendar className="w-5 h-5" />;
    case 'opportunity':
      return <TrendingUp className="w-5 h-5" />;
    case 'success':
      return <Award className="w-5 h-5" />;
    default:
      return <Users className="w-5 h-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'event':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'opportunity':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'success':
      return 'text-purple-600 bg-purple-50 border-purple-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

export const WhatsHappeningSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
            What's Happening?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay connected with the latest opportunities, events, and success stories 
            shaping Sharjah's entrepreneurship ecosystem.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {happeningItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                item.isFeatured 
                  ? 'bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Live Indicator */}
              {item.isLive && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                </div>
              )}

              {/* Featured Badge */}
              {item.isFeatured && !item.isLive && (
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 bg-sheraa-primary text-white text-xs font-semibold rounded-full">
                    FEATURED
                  </div>
                </div>
              )}

              {/* Type Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getTypeColor(item.type)}`}>
                {getTypeIcon(item.type)}
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.subtitle}
                </p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {item.date}
                  </div>
                  
                  {item.participants && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.participants}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto text-sheraa-primary hover:text-sheraa-primary/80 font-semibold"
                >
                  <motion.a 
                    href={item.link}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            asChild
            size="lg"
            className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-8 py-4 text-lg font-semibold"
          >
            <motion.a 
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              View All Events & News
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};