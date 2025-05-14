
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';

const SEFHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1A1F2C]" />
        <div className="absolute top-20 left-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full filter blur-[100px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-orange-500/20 rounded-full filter blur-[120px] opacity-60" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        {/* Animated particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md mb-6">
            <Sparkles className="text-[#9b87f5]">
              <span>JANUARY 31 - FEBRUARY 1, 2026</span>
            </Sparkles>
          </div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block text-white">Sharjah</span>
            <span className="block text-white">Entrepreneurship</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#F97316]">
              Festival
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The region's largest gathering of entrepreneurial minds bringing together
            14,000+ founders, investors, innovators, and changemakers.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <GradientButton asChild variant="shimmer" size="xl" className="shadow-lg hover:shadow-[0_5px_30px_rgba(155,135,245,0.4)]">
              <Link to="/events/sef/register">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </GradientButton>
            
            <Button asChild size="xl" variant="outline" className="bg-white/10 text-white border-white/30 
                hover:bg-white/20 backdrop-blur-xl hover:border-white/50">
              <Link to="/events/sef/agenda">Explore Agenda</Link>
            </Button>
          </motion.div>
          
          {/* Key Event Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { icon: Calendar, label: "January 31 - February 1, 2026", value: "2 Days" },
              { icon: MapPin, label: "SRTIP, Sharjah, UAE", value: "Venue" },
              { icon: Users, label: "From across the globe", value: "14,000+ Attendees" },
              { icon: Users, label: "Thought Leaders & Innovators", value: "300+ Speakers" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20
                  hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-white/20 p-3 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <span className="text-white font-bold text-xl mb-1">{item.value}</span>
                <span className="text-white/70 text-sm text-center">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <motion.div 
          className="w-1 h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default SEFHero;
