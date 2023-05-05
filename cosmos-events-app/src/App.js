import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import LoginForm from './components/LoginForm';
import SubmitEventForm from './components/SubmitEventForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <EventList />
        </Route>
        <Route exact path="/events/:eventId">
          <EventDetails />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/submit">
          <SubmitEventForm />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
