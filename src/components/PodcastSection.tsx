
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Play, Mic, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PodcastSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sheraa-dark mb-4">
            Sheraa <span className="text-sheraa-primary">Podcasts</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tune in to our thought-provoking podcast series featuring inspiring conversations with regional leaders, 
            entrepreneurs, and changemakers who are shaping the future of entrepreneurship.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Yalsat Nwakhtha Podcast Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary to-sheraa-teal rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300" />
            <div className="relative p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5">
                    <div className="relative aspect-square md:h-full">
                      <img 
                        src="/podcast-cover.jpg" 
                        alt="Yalsat Nwakhtha Podcast" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <span className="text-white font-semibold">Episode 1: H.E. Sheikha Lubna</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-5 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-sheraa-primary/10 px-3 py-1 rounded-full text-sheraa-primary text-xs font-medium">
                        NEW EPISODE
                      </span>
                      <Headphones className="w-4 h-4 text-sheraa-primary" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-sheraa-dark">
                      "Yalsat Nwakhtha" Podcast
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      Join us with the UAE's first female minister, a leader who has inspired generations 
                      with her efforts to break barriers and bring about change.
                    </p>
                    
                    <div className="space-y-3 mb-5">
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-primary font-bold">•</span>
                        <p className="text-sm text-gray-700">How is a journey that makes a difference built?</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-primary font-bold">•</span>
                        <p className="text-sm text-gray-700">Is courage something leaders are born with, or is it gained through experience?</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-primary font-bold">•</span>
                        <p className="text-sm text-gray-700">Which book inspired Sheikha Lubna?</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-xs md:text-sm"
                      >
                        <Play className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Listen Now
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5 text-xs md:text-sm"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* SEF Backstage Podcast Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sheraa-orange to-sheraa-coral rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300" />
            <div className="relative p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5">
                    <div className="relative aspect-square md:h-full bg-gradient-to-br from-sheraa-orange/20 to-sheraa-coral/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Mic className="w-16 h-16 text-sheraa-orange/50" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="w-8 h-8 mx-auto text-sheraa-orange" />
                          <span className="block mt-2 text-sheraa-orange font-bold">Coming Soon</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <span className="text-white font-semibold">In collaboration with Podster</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-5 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-sheraa-orange/10 px-3 py-1 rounded-full text-sheraa-orange text-xs font-medium">
                        COMING SOON
                      </span>
                      <Headphones className="w-4 h-4 text-sheraa-orange" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-sheraa-dark">
                      SEF BACKSTAGE PODCAST
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      Go behind the scenes of the Sharjah Entrepreneurship Festival with exclusive interviews,
                      insights, and stories from the region's most innovative minds and inspiring leaders.
                    </p>
                    
                    <div className="space-y-3 mb-5">
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-orange font-bold">•</span>
                        <p className="text-sm text-gray-700">Exclusive backstage conversations with keynote speakers</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-orange font-bold">•</span>
                        <p className="text-sm text-gray-700">Behind-the-scenes insights from festival organizers</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sheraa-orange font-bold">•</span>
                        <p className="text-sm text-gray-700">In-depth discussions on emerging entrepreneurship trends</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="border-sheraa-orange text-sheraa-orange hover:bg-sheraa-orange/5 text-xs md:text-sm"
                    >
                      Get Notified
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <Link to="/resources/podcasts" className="inline-flex items-center text-sheraa-primary hover:text-sheraa-primary/80 font-medium transition-colors">
            View All Episodes
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
