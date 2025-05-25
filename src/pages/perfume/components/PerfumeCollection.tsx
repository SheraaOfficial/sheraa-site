
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/design-system/Section';
import { HeadingXL, BodyBase } from '@/components/ui/design-system/Typography';
import { AccessibleCard } from '@/components/ui/design-system/AccessibleCard';
import { StaggerContainer, StaggerChild } from '@/components/ui/design-system/MotionProvider';

const perfumes = [
  {
    id: 1,
    name: "Heritage Essence",
    description: "Rich oud and amber notes inspired by Sharjah's historic souks",
    price: "AED 299",
    image: "/lovable-uploads/sheraa-logo.png",
    category: "Traditional",
    inStock: true
  },
  {
    id: 2,
    name: "Innovation Spirit",
    description: "Fresh citrus and marine accords reflecting modern Sharjah",
    price: "AED 249",
    image: "/lovable-uploads/sheraa-logo.png", 
    category: "Contemporary",
    inStock: true
  },
  {
    id: 3,
    name: "Desert Rose",
    description: "Floral bouquet with hints of rose and jasmine",
    price: "AED 329",
    image: "/lovable-uploads/sheraa-logo.png",
    category: "Floral",
    inStock: false
  },
  {
    id: 4,
    name: "Entrepreneur's Journey",
    description: "Bold woody fragrance for ambitious leaders",
    price: "AED 399",
    image: "/lovable-uploads/sheraa-logo.png",
    category: "Premium",
    inStock: true
  }
];

export const PerfumeCollection: React.FC = () => {
  return (
    <Section spacing="xl" id="collection">
      <div className="text-center mb-16">
        <HeadingXL className="mb-6 text-gradient-sheraa">
          Our Signature Collection
        </HeadingXL>
        <BodyBase className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Each fragrance in our collection embodies the spirit of Sharjah - 
          from traditional heritage to innovative entrepreneurship.
        </BodyBase>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {perfumes.map((perfume) => (
          <StaggerChild key={perfume.id}>
            <AccessibleCard 
              interactive 
              className="group overflow-hidden"
              ariaLabel={`View ${perfume.name} perfume details`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={perfume.image} 
                  alt={perfume.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {!perfume.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sheraa-primary/90 text-white text-xs rounded-full">
                    {perfume.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="typography-heading-md mb-3">{perfume.name}</h3>
                <p className="typography-body-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {perfume.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="typography-heading-md text-sheraa-primary">
                    {perfume.price}
                  </span>
                  
                  <Button 
                    size="sm" 
                    disabled={!perfume.inStock}
                    className="button-primary"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {perfume.inStock ? 'Add to Cart' : 'Sold Out'}
                  </Button>
                </div>
              </div>
            </AccessibleCard>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </Section>
  );
};
