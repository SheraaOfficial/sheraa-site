
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BeamsBackground } from '@/components/ui/beams-background';

interface AboutPageProps {
  section?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ section }) => {
  // Determine which section to display
  const renderSection = () => {
    switch (section) {
      case 'approach':
        return <ApproachSection />;
      case 'vision':
        return <VisionSection />;
      case 'hubs':
        return <HubsSection />;
      case 'leadership':
        return <LeadershipSection />;
      case 'board':
        return <BoardSection />;
      default:
        return <DefaultAboutSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <BeamsBackground intensity="subtle" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {getPageTitle(section)}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  {getPageSubtitle(section)}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

const getPageTitle = (section?: string): string => {
  switch (section) {
    case 'approach':
      return 'Our Approach';
    case 'vision':
      return 'Our Vision';
    case 'hubs':
      return 'Our Hubs';
    case 'leadership':
      return 'Our Leadership';
    case 'board':
      return 'Board of Advisors';
    default:
      return 'About Sheraa';
  }
};

const getPageSubtitle = (section?: string): string => {
  switch (section) {
    case 'approach':
      return 'Founder-First, Community-Driven: How we support entrepreneurs and innovators at every stage.';
    case 'vision':
      return 'Establishing Sharjah as a leading global hub for entrepreneurship and innovation.';
    case 'hubs':
      return 'Strategically located at the heart of innovation within Sharjah\'s academic and research landscape.';
    case 'leadership':
      return 'Meet the visionary team guiding Sheraa\'s mission and impact.';
    case 'board':
      return 'Distinguished leaders providing strategic guidance and expertise.';
    default:
      return 'Empowering entrepreneurs, building Sharjah\'s future.';
  }
};

// Placeholder sections - these would be completed with actual content
const DefaultAboutSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Empowering Entrepreneurs, Building Sharjah's Future</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Sheraa (Sharjah Entrepreneurship Center), we are deeply inspired by Sharjah's unique ability to blend collective 
          strength and unity with individual expression and creativity. This synergy fuels our mission: to cultivate a world-class 
          entrepreneurship ecosystem in Sharjah, nurturing the next generation of innovators and supporting impactful ventures at 
          every stage of their journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Link to="/about/approach" className="block group">
            <div className="bg-sheraa-light rounded-xl p-6 h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-sheraa-dark">Our Approach</h3>
              <p className="text-gray-600 mb-4">Founder-First, Community-Driven: Our philosophy guides everything we do, ensuring programs and resources are tailored to real founder needs.</p>
              <div className="inline-flex items-center text-sheraa-primary group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link to="/about/vision" className="block group">
            <div className="bg-sheraa-light rounded-xl p-6 h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-sheraa-dark">Our Vision</h3>
              <p className="text-gray-600 mb-4">To establish Sharjah as a leading global hub for entrepreneurship and innovation, recognized for its supportive ecosystem.</p>
              <div className="inline-flex items-center text-sheraa-primary group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-sheraa-primary/10 rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4 text-sheraa-primary">Our Impact Since 2016</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-dark mb-1">180+</div>
              <div className="text-sm text-gray-600">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-dark mb-1">$248M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-dark mb-1">1,900+</div>
              <div className="text-sm text-gray-600">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sheraa-dark mb-1">71%</div>
              <div className="text-sm text-gray-600">Startup Survival Rate</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button asChild variant="gradient" size="lg">
              <Link to="/about/impact" className="flex items-center gap-2">
                Full Impact Report
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ApproachSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Approach: Founder-First, Community-Driven</h2>
      <p className="text-lg mb-6">Content for the Approach section will be implemented.</p>
    </div>
  </section>
);

const VisionSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Vision</h2>
      <p className="text-lg mb-6">Content for the Vision section will be implemented.</p>
    </div>
  </section>
);

const HubsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Hubs</h2>
      <p className="text-lg mb-6">Content for the Hubs section will be implemented.</p>
    </div>
  </section>
);

const LeadershipSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Leadership</h2>
      <p className="text-lg mb-6">Content for the Leadership section will be implemented.</p>
    </div>
  </section>
);

const BoardSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Board of Advisors</h2>
      <p className="text-lg mb-6">Content for the Board of Advisors section will be implemented.</p>
    </div>
  </section>
);

export default AboutPage;
