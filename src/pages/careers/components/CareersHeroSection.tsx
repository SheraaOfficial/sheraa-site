
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, Users, Target, ArrowRight, 
  Building, MapPin, Heart, Sparkles
} from 'lucide-react';

const CareersHeroSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-secondary/5 dark:from-sheraa-dark/50 dark:to-sheraa-dark/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8"
          >
            <Sparkles className="w-5 h-5 text-sheraa-primary animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
              Shape the Future of Entrepreneurship
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
              Build Tomorrow's
            </span>
            <br />
            Innovation Hub
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join a team that's not just building careers, but 
            <span className="font-semibold text-sheraa-primary"> empowering the next generation</span> of entrepreneurs. 
            Every role here directly impacts thousands of changemakers across the region.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300 group">
              <a href="#openings" className="flex items-center gap-2">
                Explore Open Roles
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
              <Heart className="w-4 h-4 mr-2" />
              Why Join Sheraa?
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "180+", label: "Startups Supported", icon: Rocket },
            { number: "1,900+", label: "Jobs Created", icon: Users },
            { number: "$248M+", label: "Revenue Generated", icon: Target },
            { number: "3", label: "Office Locations", icon: Building }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-primary/10 hover:border-sheraa-primary/20 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-sheraa-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-2">
                {stat.number}
              </div>
              <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SRTIP Headquarters",
              "American University of Sharjah",
              "University of Sharjah"
            ].map((location, idx) => (
              <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                {location}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHeroSection;
