
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { PartnershipType } from '../types/partnership';

interface PartnershipTypeTabProps {
  partnershipType: PartnershipType;
}

export const PartnershipTypeTab: React.FC<PartnershipTypeTabProps> = ({ partnershipType }) => {
  const { id, title, description, icon: Icon, benefits, examples } = partnershipType;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-1"
      >
        <Card className="bg-sheraa-light border-none h-full">
          <CardContent className="p-6 md:p-8">
            <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4 text-sheraa-primary">
              <Icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-sheraa-dark">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <div className="mt-auto">
              <h4 className="font-medium text-sheraa-dark mb-2">Examples:</h4>
              <p className="text-gray-600 text-sm italic">{examples}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Card className="h-full">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-sheraa-dark">Partnership Benefits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 p-4 bg-sheraa-light rounded-lg">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <GradientButton>Become a {title.replace(/ &.*/, '')} Partner</GradientButton>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
