
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { PerfumeSubmenu } from '../components/PerfumeSubmenu';

const AboutPerfumePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <PerfumeSubmenu activeItem="about" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-amber-900 dark:text-amber-200">About Sharjah's Signature</h1>
            
            <div className="prose prose-lg dark:prose-invert prose-amber max-w-none">
              <p className="lead text-xl text-amber-800 dark:text-amber-300">
                Our journey to create Sharjah's Signature Scent began with a vision to capture the essence
                of this remarkable emirate in a fragrance that honors its rich history, cultural significance,
                and architectural beauty.
              </p>
              
              <div className="my-12 bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/cdccb5a2-e570-4ae8-b40d-1d2c8422af61.png"
                  alt="Sharjah Perfume Box"
                  className="w-full h-[300px] object-cover object-center"
                />
              </div>
              
              <h2>A Tribute to Sharjah's Heritage</h2>
              <p>
                Created in partnership with master perfumers and local artisans, our signature scent is a 
                homage to Sharjah's position as the cultural capital of the UAE. Each note has been carefully
                selected to evoke the sensory experience of walking through Sharjah's historic districts,
                majestic museums, and serene waterfront.
              </p>
              
              <h2>Meticulous Craftsmanship</h2>
              <p>
                Every bottle of Sharjah's Signature Scent represents hundreds of hours of craftsmanship.
                From the initial concept sketches to the final packaging design, our team has ensured that
                every element reflects the sophistication and attention to detail that Sharjah is known for.
              </p>
              
              <div className="my-12 bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png"
                  alt="Sharjah Perfume Bottle"
                  className="w-full h-[300px] object-cover object-center"
                />
              </div>
              
              <h2>Exclusive Limited Edition</h2>
              <p>
                As part of our commitment to luxury and exclusivity, Sharjah's Signature Scent is produced
                in limited quantities. Each bottle is individually numbered, making it not just a fragrance,
                but a collectible piece of Sharjah's creative legacy.
              </p>
              
              <h2>Our Founders' Vision</h2>
              <p>
                The creation of this signature perfume stems from a deep love for Sharjah and a desire to
                share its essence with the world. Our founders, with backgrounds in both traditional Arabic
                perfumery and modern fragrance development, have combined their expertise to create a scent
                that bridges heritage and innovation.
              </p>
              
              <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
                <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">
                  Our Commitment to Quality
                </h3>
                <p className="mb-0 text-amber-800 dark:text-amber-300">
                  We use only the finest ingredients sourced from around the world, with a focus on
                  sustainable practices and ethical sourcing. Our perfume is free from parabens and
                  unnecessary additives, ensuring a pure fragrance experience that lasts throughout the day.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                to="/perfume" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-200 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Sharjah's Signature
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPerfumePage;
