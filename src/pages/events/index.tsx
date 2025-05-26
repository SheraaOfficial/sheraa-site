
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsPage from './EventsPage';
import SEFLandingPage from './sef-landing';
import UpcomingEventsPage from './UpcomingEventsPage';
import PastEventsPage from './PastEventsPage';

const EventsPages = () => {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/upcoming" element={<UpcomingEventsPage />} />
      <Route path="/past" element={<PastEventsPage />} />
      <Route path="/sef-landing" element={<SEFLandingPage />} />
    </Routes>
  );
};

export default EventsPages;
