import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function EventDetails() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Fetch attendees from the database and set the state
      } else {
        setAttendees([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Event Details</h1>
      <p>Details of the event here</p>
      {attendees.length > 0 && (
        <div>
          <h2>Attendees</h2>
          <ul>
            {attendees.map((attendee) => (
              <li key={attendee.id}>{attendee.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
