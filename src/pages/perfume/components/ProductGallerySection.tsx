
import React from 'react';
import { motion } from 'framer-motion';

const ProductGallerySection: React.FC = () => {
  const images = [
    { 
      src: '/lovable-uploads/detail1.jpg', 
      title: 'Handcrafted Excellence',
      description: 'Each bottle is individually crafted using time-honored techniques passed down through generations of perfumers.'
    },
    { 
      src: '/lovable-uploads/detail2.jpg', 
      title: 'Premium Ingredients',
      description: 'Sourced from the finest suppliers worldwide, our ingredients capture the essence of luxury and sophistication.'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F3EE]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-[#165A5A] text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Artisan Craftsmanship
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-lg border-4 border-[#C8A165]/30 shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop&crop=center`;
                  }}
                />
                
                {/* SGMB Logo Overlay */}
                <div className="absolute top-4 right-4 bg-[#C8A165] text-white px-3 py-1 rounded text-sm font-semibold shadow-lg">
                  SGMB
                </div>
                
                {/* Arabesque Border Overlay */}
                <div className="absolute inset-0 border-2 border-[#C8A165]/50 m-2 rounded pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-serif text-[#165A5A] mt-4 text-center">
                {image.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
