
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BeamsBackground } from '@/components/ui/beams-background';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import StartupDirectory from './StartupDirectory';
import MembershipSection from './MembershipSection';
import PartnershipsSection from './PartnershipsSection';

interface CommunityPageProps {
  section?: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ section }) => {
  const currentSection = section || 'overview';

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <BeamsBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <Badge variant="gradient-warm" animation="shimmer" className="mb-3">
                  {currentSection === 'join' ? 'Join Our Community' : 
                   currentSection === 'startups' ? 'Discover Our Startups' : 
                   currentSection === 'partnerships' ? 'Collaborate With Us' : 
                   'Powered by Community'}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {currentSection === 'join' ? 'Join Sharjah\'s Entrepreneurial Community' : 
                   currentSection === 'startups' ? 'Innovation in Action: Our Startup Portfolio' : 
                   currentSection === 'partnerships' ? 'Shape the Future: Partnership Opportunities' : 
                   'Join Sharjah\'s Thriving Innovation Ecosystem'}
                </h1>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  {currentSection === 'join' ? 'Access essential resources, co-working spaces, and our vibrant network. Sheraa Membership offers flexible support for founders with a market-ready product.' : 
                   currentSection === 'startups' ? 'Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. Our portfolio spans key sectors generating significant economic value.' : 
                   currentSection === 'partnerships' ? 'Collaboration is key to building a world-class ecosystem. We invite corporations, government entities, investors, and experienced mentors to partner with Sheraa.' : 
                   'At Sheraa, we believe that groundbreaking innovation happens through connection and collaboration. We are the central hub uniting Sharjah\'s dynamic ecosystem of founders, mentors, investors, corporations, and government entities.'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Render the appropriate section based on the current route */}
        {currentSection === 'join' ? (
          <MembershipSection />
        ) : currentSection === 'startups' ? (
          <StartupDirectory />
        ) : currentSection === 'partnerships' ? (
          <PartnershipsSection />
        ) : (
          <>
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4 text-sheraa-dark">
                    The Power of Our Network
                  </h2>
                  <p className="text-gray-600">
                    Our ecosystem is built on the principle that collective strength fuels individual success. 
                    By joining Sheraa, you tap into a powerful network designed to accelerate growth, foster 
                    partnerships, and unlock opportunities. This interconnectedness is the foundation of how 
                    we create impact, providing startups with the validation, resources, and market access 
                    needed to thrive. With over 140 diverse partners, our reach extends across industries and borders.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <CommunityCard 
                    title="Join Our Community" 
                    description="Access essential resources, co-working spaces, and our vibrant network on your terms."
                    linkText="Explore Membership Benefits"
                    linkHref="/community/join"
                  />
                  
                  <CommunityCard 
                    title="Our Startups" 
                    description="Discover the diverse and impactful startups nurtured within the Sheraa ecosystem."
                    linkText="Meet Our Startups"
                    linkHref="/community/startups"
                  />
                  
                  <CommunityCard 
                    title="Partner with Sheraa" 
                    description="Collaborate with us to drive innovation and shape Sharjah's entrepreneurial future."
                    linkText="Explore Partnership Opportunities"
                    linkHref="/community/partnerships"
                  />
                </div>
              </div>
            </section>
            
            <MembershipSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

interface CommunityCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const CommunityCard = ({ title, description, linkText, linkHref }: CommunityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-sheraa-light rounded-xl p-6 hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-bold mb-3 text-sheraa-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={linkHref} className="text-sheraa-primary hover:underline font-medium inline-flex items-center">
        {linkText} <span className="ml-1">→</span>
      </a>
    </motion.div>
  );
};

export default CommunityPage;
