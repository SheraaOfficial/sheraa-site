import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEFSection from '@/components/SEFSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface EventsPageProps {
  section?: string;
}

const EventsPage: React.FC<EventsPageProps> = ({ section }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-2">Events & Media</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover Sheraa's vibrant ecosystem through our signature events, workshops, and media coverage. 
            From our flagship Sharjah Entrepreneurship Festival to specialized workshops and community meetups.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <Link to="/events/sef-landing">
                <Calendar className="mr-2 h-4 w-4" />
                Featured Event: SEF'26
              </Link>
            </Button>
            <Button variant="outline">
              <Link to="/events/calendar" className="flex items-center">
                Upcoming Events
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Featured SEF Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-sheraa-primary mb-8">Featured Event</h2>
          <SEFSection />
        </div>
        
        {/* Other event categories would go here */}
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
