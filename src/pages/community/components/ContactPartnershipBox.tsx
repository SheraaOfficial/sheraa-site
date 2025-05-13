
import React from 'react';
import { GradientButton } from '@/components/ui/gradient-button';

export const ContactPartnershipBox: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default navigation
    // Here you would implement the contact functionality
    // For example opening a modal or scrolling to a contact form
    console.log("Contact partnerships team clicked");
  };

  return (
    <div className="text-center max-w-2xl mx-auto p-8 bg-sheraa-light rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold mb-4 text-sheraa-dark">Let's Discuss Your Partnership</h3>
      <p className="text-gray-600 mb-6">
        Interested in exploring how we can collaborate? Our partnerships team is ready to discuss 
        tailored opportunities that align with your organization's goals and our mission.
      </p>
      <GradientButton size="lg" onClick={handleContactClick}>
        Contact Our Partnerships Team
      </GradientButton>
    </div>
  );
};
