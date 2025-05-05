
import React from 'react';
import { GradientButton } from '@/components/ui/gradient-button';

export const ContactPartnershipBox: React.FC = () => {
  return (
    <div className="text-center max-w-2xl mx-auto p-8 bg-sheraa-light rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold mb-4 text-sheraa-dark">Let's Discuss Your Partnership</h3>
      <p className="text-gray-600 mb-6">
        Interested in exploring how we can collaborate? Our partnerships team is ready to discuss 
        tailored opportunities that align with your organization's goals and our mission.
      </p>
      <GradientButton size="lg">Contact Our Partnerships Team</GradientButton>
    </div>
  );
};
