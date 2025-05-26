
import React from 'react';
import { EventCard } from './EventCard';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  type: string;
  featured: boolean;
  registrationOpen: boolean;
}

interface EventsListProps {
  events: Event[];
  typeColors: Record<string, string>;
}

export const EventsList: React.FC<EventsListProps> = ({ events, typeColors }) => {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          index={index}
          typeColors={typeColors}
        />
      ))}
    </div>
  );
};
