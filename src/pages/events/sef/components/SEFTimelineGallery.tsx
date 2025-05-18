
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

interface TimelineYear {
  year: string;
  theme: string;
  description: string;
  mediaItems: any[];
  color: string;
}

// Define the gallery items for each year
const timelineYears: TimelineYear[] = [
  {
    year: '2018',
    theme: 'Where We Belong',
    description: "The inaugural festival connected entrepreneurs, investors, and creatives, launching the region's premier entrepreneurship celebration.",
    color: 'from-purple-500/80 to-pink-500/80',
    mediaItems: [
      {
        id: 1,
        type: "image",
        title: "Opening Keynote",
        desc: "Sheikh Sultan bin Muhammad Al Qasimi opening SEF 2018",
        url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 2,
        type: "image",
        title: "Innovation Zone",
        desc: "Startup showcases at the Innovation Zone",
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 3,
        type: "image",
        title: "Networking Event",
        desc: "Evening networking reception for founders and investors",
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 4,
        type: "video",
        title: "Panel Discussion",
        desc: "Tech leaders discussing regional entrepreneurship trends",
        url: "https://cdn.pixabay.com/video/2023/11/18/15-45-43-53_large.mp4",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      }
    ]
  },
  {
    year: '2019',
    theme: 'Reimagining Realities',
    description: "Over 4,000 attendees explored how entrepreneurs are reshaping industries from tech to sustainability.",
    color: 'from-blue-500/80 to-teal-500/80',
    mediaItems: [
      {
        id: 5,
        type: "image",
        title: "Startup Competition",
        desc: "Finalist pitches at the SEF 2019 Startup Competition",
        url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 6,
        type: "video",
        title: "Tech Workshop",
        desc: "Hands-on coding workshop for young entrepreneurs",
        url: "https://cdn.pixabay.com/video/2023/11/12/19-19-25-477_large.mp4",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 7,
        type: "image",
        title: "VIP Lounge",
        desc: "Executive networking at the VIP Investors Lounge",
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 8,
        type: "image",
        title: "Evening Gala",
        desc: "Celebration dinner with keynote speakers",
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      }
    ]
  },
  {
    year: '2021',
    theme: 'Momentum',
    description: "SEF returned with 8,000+ visitors as the world reopened post-pandemic, focusing on resilience and innovation.",
    color: 'from-amber-500/80 to-orange-500/80',
    mediaItems: [
      {
        id: 9,
        type: "video",
        title: "Opening Ceremony",
        desc: "Spectacular opening ceremony of SEF 2021",
        url: "https://cdn.pixabay.com/video/2023/05/22/07-30-04-93_large.mp4",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 10,
        type: "image",
        title: "Sustainability Panel",
        desc: "Leaders discussing sustainable entrepreneurship",
        url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 11,
        type: "image",
        title: "Startup Showcase",
        desc: "Innovative startups demonstrating their solutions",
        url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 12,
        type: "image",
        title: "Mentor Sessions",
        desc: "One-on-one mentoring with industry experts",
        url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1074&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      }
    ]
  },
  {
    year: '2023',
    theme: 'Where We Belong',
    description: "Our largest edition attracted 14,000+ attendees with 300+ global speakers across 10 vibrant zones.",
    color: 'from-emerald-500/80 to-cyan-500/80',
    mediaItems: [
      {
        id: 13,
        type: "image",
        title: "Main Stage Keynote",
        desc: "Packed audience for the headline keynote speech",
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 14,
        type: "video",
        title: "Tech Demo",
        desc: "Latest technology showcases at the innovation zone",
        url: "https://cdn.pixabay.com/video/2024/01/26/19-44-21-781_large.mp4",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 15,
        type: "image",
        title: "Startup Awards",
        desc: "Winners of the 2023 Startup Competition",
        url: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=1171&auto=format&fit=crop",
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      },
      {
        id: 16,
        type: "image",
        title: "International Delegation",
        desc: "Global entrepreneurs attending SEF 2023",
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1074&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      }
    ]
  }
];

const SEFTimelineGallery: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<TimelineYear>(timelineYears[timelineYears.length - 1]);
  
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#9b87f5] dark:bg-purple-900/30 text-sm font-medium mb-2"
          >
            Journey Through Time
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SEF Through The Years
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore highlights from previous editions of the Sharjah Entrepreneurship Festival
          </motion.p>
        </div>
        
        {/* Year selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {timelineYears.map((year) => (
            <motion.button
              key={year.year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedYear.year === year.year 
                  ? `bg-gradient-to-r ${year.color} text-white shadow-md` 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year.year}
            </motion.button>
          ))}
        </div>
        
        {/* Year description */}
        <motion.div 
          key={selectedYear.year}
          className="mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
            {selectedYear.theme}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedYear.description}
          </p>
        </motion.div>
        
        {/* Gallery */}
        <motion.div
          key={`gallery-${selectedYear.year}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InteractiveBentoGallery 
            mediaItems={selectedYear.mediaItems}
            title={`SEF ${selectedYear.year} Gallery`}
            description="Drag items to rearrange and click to view"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SEFTimelineGallery;
