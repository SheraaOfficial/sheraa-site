
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Rss } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ParallaxSection } from "./ParallaxProvider";

const PodcastSection = () => {
  const isMobile = useIsMobile();

  return (
    <ParallaxSection
      direction="up"
      scrollMultiplier={0.05}
      spring={!isMobile}
    >
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sheraa-dark mb-2">
              Sheraa <span className="text-sheraa-primary">Podcasts</span>
            </h2>
            {!isMobile && (
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Explore thought-provoking conversations with regional leaders and innovators.
              </p>
            )}
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* Yalsat Nwakhtha Podcast */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 hover:border-sheraa-primary/20 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden bg-sheraa-primary/5 flex-shrink-0">
                    <img 
                      src="/podcast-cover.jpg" 
                      alt="Yalsat Nwakhtha Podcast" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/200x200/sheraa-primary/white?text=PODCAST";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-sheraa-primary bg-sheraa-primary/5 px-2 py-1 rounded-full">
                      NEW
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mt-2 mb-1 text-sheraa-dark truncate">
                      "Yalsat Nwakhtha"
                    </h3>
                    {!isMobile && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        Join H.E. Sheikha Lubna Al Qasimi in an inspiring conversation.
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                      >
                        <Headphones className="w-4 h-4 mr-2" />
                        Listen
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
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 hover:border-sheraa-orange/20 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden bg-sheraa-orange/5 flex-shrink-0">
                    <img 
                      src="/sef-podcast-cover.jpg" 
                      alt="SEF Backstage Podcast"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/200x200/sheraa-orange/white?text=SEF";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-sheraa-orange bg-sheraa-orange/5 px-2 py-1 rounded-full">
                      SOON
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mt-2 mb-1 text-sheraa-dark truncate">
                      SEF Backstage
                    </h3>
                    {!isMobile && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        Behind-the-scenes insights from the Sharjah Entrepreneurship Festival.
                      </p>
                    )}
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-sheraa-orange text-sheraa-orange hover:bg-sheraa-orange/5"
                    >
                      <Rss className="w-4 h-4 mr-2" />
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              Available on Buzzsprout
            </p>
            <div className="flex flex-wrap gap-1 justify-center text-xs">
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">StartUp Stories</span>
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">Tech Talks MENA</span>
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">Innovation Hub</span>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default PodcastSection;
