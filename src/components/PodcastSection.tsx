
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Rss } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PodcastSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sheraa-dark mb-4">
            Sheraa <span className="text-sheraa-primary">Podcasts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore thought-provoking conversations with regional leaders and innovators shaping the future of entrepreneurship.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yalsat Nwakhtha Podcast */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sheraa-primary/20 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-sheraa-primary/5 flex-shrink-0">
                  <img 
                    src="/podcast-cover.jpg" 
                    alt="Yalsat Nwakhtha Podcast" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-sheraa-primary bg-sheraa-primary/5 px-3 py-1 rounded-full">
                    NEW EPISODE
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-sheraa-dark">
                    "Yalsat Nwakhtha" Podcast
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Join H.E. Sheikha Lubna Al Qasimi in an inspiring conversation about leadership, courage, and creating lasting change.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                    >
                      <Headphones className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <Rss className="w-4 h-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SEF Backstage Podcast */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sheraa-orange/20 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-sheraa-orange/5 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="/sef-podcast-cover.jpg" 
                    alt="SEF Backstage Podcast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-sheraa-orange bg-sheraa-orange/5 px-3 py-1 rounded-full">
                    COMING SOON
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-sheraa-dark">
                    SEF Backstage Podcast
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Behind-the-scenes insights and exclusive interviews from the Sharjah Entrepreneurship Festival, in collaboration with Podster.
                  </p>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-sheraa-orange text-sheraa-orange hover:bg-sheraa-orange/5"
                  >
                    <Rss className="w-4 h-4 mr-2" />
                    Get Notified
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              Listen to our podcasts on Buzzsprout, alongside other inspiring entrepreneurship and innovation-focused shows.
            </p>
            <div className="flex flex-wrap gap-2 justify-center text-xs">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">StartUp Stories</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">Tech Talks MENA</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">Innovation Hub</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">Entrepreneur's Journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
