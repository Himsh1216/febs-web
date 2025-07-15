// src/components/EventsSection.tsx
import React from 'react';
import '../assets/styles/App.css';

// This component does not accept props. Using `Record<string, never>` keeps
// the type strict without triggering the no-empty-object-type rule.
type EventsSectionProps = Record<string, never>;

const EventsSection: React.FC<EventsSectionProps> = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <p>Stay tuned for our latest events and activities.</p>
    </section>
  );
};

export default EventsSection;