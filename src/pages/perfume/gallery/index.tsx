
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { PerfumeSubmenu } from '../components/PerfumeSubmenu';

const PerfumeGalleryPage: React.FC = () => {
  // Gallery images
  const galleryImages = [
    {
      src: "/lovable-uploads/8d102701-b92b-44de-89f9-acdda63b6884.png",
      alt: "Sharjah Perfume Box",
      caption: "Elegant packaging inspired by Sharjah's heritage"
    },
    {
      src: "/lovable-uploads/cdccb5a2-e570-4ae8-b40d-1d2c8422af61.png",
      alt: "Sharjah Perfume Box Detail",
      caption: "Intricate embossing showcases traditional craftsmanship"
    },
    {
      src: "/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png",
      alt: "Sharjah Perfume Bottle",
      caption: "The signature bottle features iconic Sharjah landmarks"
    },
    {
      src: "/lovable-uploads/35a850c6-6901-4128-a54d-839726da459c.png",
      alt: "Sharjah Perfume Box Open",
      caption: "Luxury presentation with custom fitted interior"
    }
  ];
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <PerfumeSubmenu activeItem="gallery" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-amber-900 dark:text-amber-200">Gallery</h1>
            
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-amber-800 dark:text-amber-300">
              Explore the artistry and craftsmanship behind Sharjah's Signature Scent through our curated gallery of images.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-zinc-800"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="p-4">
                    <p className="text-center text-gray-700 dark:text-gray-300">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 bg-amber-100 dark:bg-amber-900/20 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-amber-900 dark:text-amber-200">Behind the Scenes</h2>
              <p className="text-center text-amber-800 dark:text-amber-300">
                Each bottle of Sharjah's Signature Scent is meticulously crafted and inspected to ensure the highest quality.
                Our commitment to excellence is reflected in every detail, from the precisely carved bottle cap to the
                embossed packaging that tells the story of Sharjah's architectural heritage.
              </p>
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

export default PerfumeGalleryPage;
