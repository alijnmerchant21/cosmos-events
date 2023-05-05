# Cosmos Events

Cosmos Events is a web application that hosts all events happening in Cosmos

## Problem Statement

Currently, there are many awesome events happening in Cosmos. However, none of them are listed a central place for people to know about.

Some good cosmonauts try to maintain their version of Event list in form of excel sheets or google docs, but that is a poor way of management.

## Proposed Solution

Create a Web App that list all events, gives users option to add their favourite events to the event list. They can view all events, Know who is attending a particular and subscribe to events to know when it is happening next!

## Sequence

1. User visits cosmos.events (Place Holder)
2. User is prompted with two options
    a. Browse all events
    b. Submit an event
After both options, user is prompted to Login / Continue as Guest

### User selects browse all events

1. User is presented with a list of all events

    a. Filter events based on **Location** and **When**
    **Location:** List all cities where events are currently happening
        **When:** Today, This Week, This Month, Next 3 Months

2. User selects a particular event

    a. List all details about the event
    b. List any side event during that event
    c. List everyone attending that event (Only available to logged in users)
    d. List similar event you might be interested in

3. User is prompted to "Attend the event"
4. User needs to Log In
5. Once he logs in, he can see everyone attending that event

### User selects submit events

1. User is forced to Log in to continue
2. Prompt user to fill a form (As Organizer or Guest)

    a. Name of Organizer or Contact Person
    b. Best email to reach
    c. Event Name
    d. Event Description
    e. Event website + Social
    f. Event Location
    g. Event Date
    h. Tags (Eg: Developer, Hackathon, etc)

3. Events are added to Event list by admins

### Other Features

1. Subscribe to events

## To Do

- [ ] Create a simple react / JS based web application
- [ ] Create an events page
  - [ ] Filter events based on Location and When
  - [ ] User selects a particular event
    - [ ] List all details about the event
    - [ ] List any side event during that event
    - [ ] List everyone attending that event (Only available to logged in users)
    - [ ] List similar event you might be interested in
  - [ ] User is prompted to "Attend the event"
- [ ] Create a form to submit events
- [ ] Create Log in Page

### For any questions / queries write to

[Ali M](http://twitter.com/ali_the_curios/)
