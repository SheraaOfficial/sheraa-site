import React from 'react';
import { motion } from 'framer-motion';
const SEFAbout = () => {
  return <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="space-y-6">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-[#9b87f5]">
              About SEF
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C]">The Region's Largest Entrepreneurship Festival</h2>
            
            <p className="text-lg text-gray-700">
              Experience the energy of the Sharjah Entrepreneurship Festival (SEF), our annual flagship event. 
              SEF brings together thousands of entrepreneurs, investors, creators, and leaders from around the 
              globe for inspiration, connection, and growth.
            </p>
            
            <p className="text-lg text-gray-700">
              The Sharjah Entrepreneurship Festival is more than just an event; it's a catalyst for innovation, 
              collaboration, and meaningful connections that drive the entrepreneurial ecosystem forward. Each year, 
              we create a vibrant platform where ideas collide, partnerships form, and possibilities expand.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-purple-50 border border-purple-100">
                <h3 className="text-xl font-semibold text-[#9b87f5] mb-2">Vision</h3>
                <p className="text-gray-700">To establish Sharjah as a leading global hub for entrepreneurship and innovation.</p>
              </div>
              <div className="p-5 rounded-xl bg-orange-50 border border-orange-100">
                <h3 className="text-xl font-semibold text-[#F97316] mb-2">Mission</h3>
                <p className="text-gray-700">To cultivate changemakers who address pressing challenges and contribute positively to society.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9b87f5]/20 to-[#F97316]/20 transform -rotate-2" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#D6BCFA]/30 to-[#F97316]/30 transform rotate-3" />
            
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20" />
              
              {/* Replace with actual festival image */}
              <div className="w-full h-full bg-gray-800 z-0"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 text-white">
                <span className="text-sm text-white/70">SEF'25</span>
                <h3 className="text-3xl font-bold mt-1">780+ Global Speakers</h3>
                <p className="text-white/80 mt-2">10+ ZONES |  250+ ACTIVITIES</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SEFAbout;