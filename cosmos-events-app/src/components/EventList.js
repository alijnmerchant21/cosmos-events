import React, { useState } from 'react';

function EventList() {
  const [locationFilter, setLocationFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

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
      <p>List of events here</p>
    </div>
  );
}

export default EventList;
