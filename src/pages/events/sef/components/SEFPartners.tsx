
import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for partner logos
const partnerCategories = [
  {
    name: "Strategic Partners",
    logos: Array(5).fill(null).map((_, i) => `https://picsum.photos/seed/partner${i+1}/200`)
  },
  {
    name: "Gold Sponsors",
    logos: Array(4).fill(null).map((_, i) => `https://picsum.photos/seed/gold${i+1}/200`)
  },
  {
    name: "Knowledge Partners",
    logos: Array(3).fill(null).map((_, i) => `https://picsum.photos/seed/knowledge${i+1}/200`)
  }
];

const SEFPartners = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#292D3E] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#9b87f5]/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#F97316]/20 rounded-full filter blur-[120px]" />
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white mb-4">
            Our Supporters
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partners & Sponsors
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            SEF'26 is made possible through the collaboration of forward-thinking organizations 
            committed to fostering innovation and entrepreneurship.
          </p>
        </motion.div>
        
        {partnerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <h3 className="text-xl font-semibold text-white text-center mb-8">{category.name}</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {category.logos.map((logo, logoIndex) => (
                <motion.div
                  key={logoIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: logoIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-[180px] h-[100px] flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
                >
                  <div className="w-full h-full bg-white/80 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Partner Logo</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-xl p-6 max-w-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-3">Become a Partner</h3>
            <p className="text-white/80 mb-5">
              Showcase your brand to 14,000+ attendees and align with the future of entrepreneurship and innovation.
            </p>
            <button className="bg-white text-[#1A1F2C] px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
              Partnership Opportunities
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFPartners;
