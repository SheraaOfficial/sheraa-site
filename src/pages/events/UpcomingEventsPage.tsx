
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { EventsHeader } from './components/EventsHeader';
import { EventsList } from './components/EventsList';
import { upcomingEvents, typeColors } from './data/eventsData';

const UpcomingEventsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-teal/10">
        <div className="container mx-auto px-4 py-12">
          <EventsHeader 
            title="Upcoming Events"
            subtitle="Join us for inspiring events that connect entrepreneurs, foster innovation, and drive the startup ecosystem forward in Sharjah and beyond."
          />
          
          <EventsList events={upcomingEvents} typeColors={typeColors} />
        </div>
      </div>
    </MainLayout>
  );
};

export default UpcomingEventsPage;
