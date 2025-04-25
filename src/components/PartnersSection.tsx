
import React from "react";
import { Link } from "react-router-dom";

const PartnersSection = () => {
  // Placeholder for partner logos - in a real implementation, these would be actual images
  const partners = [
    { name: "Sharjah Government", type: "government" },
    { name: "American University of Sharjah", type: "academic" },
    { name: "Sharjah Research Technology & Innovation Park", type: "innovation" },
    { name: "Khalifa Fund", type: "government" },
    { name: "Etisalat", type: "corporate" },
    { name: "Crescent Petroleum", type: "corporate" },
    { name: "Sharjah Chamber of Commerce", type: "government" },
    { name: "Sharjah Asset Management", type: "corporate" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Founding Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations across government, academia, and the private sector to create a thriving entrepreneurship ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-24 w-full bg-gray-100 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                <span className="text-lg font-medium text-gray-500">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/community/partnerships" className="text-sheraa-primary hover:text-sheraa-secondary font-medium inline-flex items-center">
            Learn more about our partners
            <svg 
              className="ml-1 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
