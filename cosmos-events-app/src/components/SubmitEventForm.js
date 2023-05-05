import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { db } from '../firebase';
import { initializeApp } from "firebase/compat/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseConfig } from '../config';
export const db = firebaseApp.firestore()

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp ({})

//import firebase from 'firebase/app';
//import * as firebase from 'firebase/app';
//import 'firebase/firestore';

// Export the Firestore database
// export const db = firebase.firestore();

function SubmitEventForm() {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventTime, setEventTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('events').add({
      name: eventName,
      location: eventLocation,
      time: eventTime,
    })
    .then(() => {
      navigate.push('/');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  };

  return (
    <div>
      <h2>Submit an Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label>
          Event Location:
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Event Time:
          <input type="text" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitEventForm;
