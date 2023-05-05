/*
Explanation:

We're using the BrowserRouter component from react-router-dom to handle client-side routing in our application. 
We define four different routes, each of which renders a different component:

The / route renders the EventList component.
The /events/:eventId route renders the EventDetails component, which displays details about a specific event.
The /login route renders the LoginForm component, which allows the user to log in to the application.
The /submit route renders the SubmitEventForm component, which allows the user to submit a new event to the application.
*/

import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Switch, Route } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import LoginForm from './components/LoginForm';
import SubmitEventForm from './components/SubmitEventForm';
//import { useHistory } from 'react-router-dom';
//import firebase from 'firebase/app';




function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;