import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Users, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  const ctaOptions = [
    {
      icon: Rocket,
      title: 'Launch Your Startup',
      description: 'Join our S3 Incubator program',
      action: 'Apply Now',
      path: '/programs/s3',
      primary: true
    },
    {
      icon: Calendar,
      title: 'Join an Event',
      description: 'Discover upcoming workshops',
      action: 'View Events',
      path: '/events',
      primary: false
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Become a Sheraa member',
      action: 'Learn More',
      path: '/community/membership',
      primary: false
    },
    {
      icon: MessageCircle,
      title: 'Get in Touch',
      description: 'Speak with our team',
      action: 'Contact Us',
      path: '/contact',
      primary: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sheraa-primary to-sheraa-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                option.primary 
                  ? 'md:col-span-2 lg:col-span-2' 
                  : ''
              }`}
            >
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                option.primary ? 'lg:p-8' : ''
              }`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-white/20 p-3 rounded-lg mb-4">
                    <option.icon className={`h-6 w-6 text-white ${option.primary ? 'lg:h-8 lg:w-8' : ''}`} />
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${option.primary ? 'lg:text-xl' : ''}`}>
                    {option.title}
                  </h3>
                  <p className={`text-white/80 mb-6 flex-1 ${option.primary ? 'lg:text-lg' : 'text-sm'}`}>
                    {option.description}
                  </p>
                  <Button
                    size={option.primary ? 'lg' : 'default'}
                    variant="secondary"
                    className={`bg-white text-sheraa-primary hover:bg-gray-100 font-semibold ${
                      option.primary ? 'w-full' : ''
                    }`}
                    asChild
                  >
                    <Link to={option.path} className="flex items-center space-x-2">
                      <span>{option.action}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-4">
            Questions about getting started? We're here to help.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-sheraa-primary"
            asChild
          >
            <Link to="/contact">
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;