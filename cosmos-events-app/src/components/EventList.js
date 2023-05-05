import React, { useState } from 'react';

function EventList() {
  // Array of events
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', location: 'Location 1', time: 'Time 1' },
    { id: 2, name: 'Event 2', location: 'Location 2', time: 'Time 2' },
    { id: 3, name: 'Event 3', location: 'Location 3', time: 'Time 3' },
  ]);

  // Filters
  const [locationFilter, setLocationFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  // Filtered events
  const filteredEvents = events.filter(event => {
    const locationMatch = event.location.toLowerCase().includes(locationFilter.toLowerCase());
    const timeMatch = event.time.toLowerCase().includes(timeFilter.toLowerCase());
    return locationMatch && timeMatch;
  });

  return (
    <div>
      <h1>Events</h1>
      <form>
        <label>
          Location:
          <input type="text" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="text" value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} />
        </label>
        <button type="submit">Filter</button>
      </form>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.location}</p>
            <p>{event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
