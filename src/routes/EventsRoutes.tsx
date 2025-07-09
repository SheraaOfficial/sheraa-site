import React from 'react';
import { Route } from 'react-router-dom';
import EventsPage from "@/pages/events/index";
import UpcomingEventsPage from "@/pages/events/UpcomingEventsPage";
import PastEventsPage from "@/pages/events/PastEventsPage";
import SEFLandingPage from "@/pages/events/sef-landing";
import SEFAgendaPage from "@/pages/events/sef/SEFAgendaPage";
import SEFSpeakersPage from "@/pages/events/sef/SEFSpeakersPage";
import SEFExperiencePage from "@/pages/events/sef/SEFExperiencePage";
import SEFRegisterPage from "@/pages/events/sef/SEFRegisterPage";
import SEFBePartPage from "@/pages/events/sef/SEFBePartPage";
import SEFWhoShouldAttendPage from "@/pages/events/sef/SEFWhoShouldAttendPage";
import SEFFAQPage from "@/pages/events/sef/SEFFAQPage";

export const EventsRoutes = () => (
  <>
    <Route path="/events" element={<EventsPage />} />
    <Route path="/events/upcoming" element={<UpcomingEventsPage />} />
    <Route path="/events/past" element={<PastEventsPage />} />
    <Route path="/events/sef-landing" element={<SEFLandingPage />} />
    <Route path="/events/sef" element={<SEFLandingPage />} />
    <Route path="/events/sef/agenda" element={<SEFAgendaPage />} />
    <Route path="/events/sef/speakers" element={<SEFSpeakersPage />} />
    <Route path="/events/sef/experience" element={<SEFExperiencePage />} />
    <Route path="/events/sef/register" element={<SEFRegisterPage />} />
    <Route path="/events/sef/be-part" element={<SEFBePartPage />} />
    <Route path="/events/sef/who-should-attend" element={<SEFWhoShouldAttendPage />} />
    <Route path="/events/sef/faq" element={<SEFFAQPage />} />
  </>
);