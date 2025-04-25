
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-16 bg-sheraa-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-6">
              Connect with fellow entrepreneurs, industry experts, and investors in Sheraa's vibrant community. Access exclusive events, networking opportunities, and resources to help your startup grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Networking Opportunities</h3>
                  <p className="text-gray-600">Connect with other founders, mentors, and investors.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Exclusive Events</h3>
                  <p className="text-gray-600">Access to workshops, talks, and community gatherings.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Resource Access</h3>
                  <p className="text-gray-600">Get support, advice, and resources for your startup.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/community/join">Become a Member</Link>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-sheraa-primary">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-6">
                Sheraa collaborates with organizations that share our vision of fostering innovation and entrepreneurship in the region.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-6 w-6 rounded-full bg-sheraa-secondary flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <p className="font-medium">Corporate Innovation Programs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-6 w-6 rounded-full bg-sheraa-secondary flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <p className="font-medium">Community Sponsorships</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-6 w-6 rounded-full bg-sheraa-secondary flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <p className="font-medium">Co-hosted Events & Workshops</p>
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light">
                <Link to="/community/partnerships">Explore Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
