
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { GradientButton } from '@/components/ui/gradient-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PartnershipTypeTab } from './components/PartnershipTypeTab';
import { PartnerSection } from './components/PartnerSection';
import { ContactPartnershipBox } from './components/ContactPartnershipBox';
import { partnershipTypes } from './data/partnershipData';

const PartnershipsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="gradient-warm" animation="shimmer" className="mb-3">Collaborate with Sheraa</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark">Partnership Opportunities</h2>
          <p className="text-gray-600">
            Sheraa thrives on collaboration. We partner with diverse organizations to build a robust and dynamic 
            entrepreneurial ecosystem in Sharjah. Explore how partnering with us can benefit your organization.
          </p>
        </motion.div>

        <Tabs defaultValue="corporate" className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {partnershipTypes.map((type) => (
              <TabsTrigger 
                key={type.id} 
                value={type.id} 
                className="px-6 data-[state=active]:bg-sheraa-primary data-[state=active]:text-white"
              >
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {partnershipTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <PartnershipTypeTab partnershipType={type} />
            </TabsContent>
          ))}
        </Tabs>

        <ContactPartnershipBox />
        <PartnerSection />
      </div>
    </div>
  );
};

export default PartnershipsSection;
