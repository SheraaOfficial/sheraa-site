
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { EventsHeader } from './components/EventsHeader';
import { EventsList } from './components/EventsList';
import { pastEvents, typeColors } from './data/eventsData';

const PastEventsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sheraa-light/20">
        <div className="container mx-auto px-4 py-12">
          <EventsHeader 
            title="Past Events"
            subtitle="Explore the highlights and achievements from our previous events that have shaped Sharjah's entrepreneurial landscape."
          />
          
          <EventsList events={pastEvents} typeColors={typeColors} />
        </div>
      </div>
    </MainLayout>
  );
};

export default PastEventsPage;
