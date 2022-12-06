import React from "react";
import EventsList from "./EventsList.js";
import NavBar from "../Header/MuiHeader.js"



/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
// We still need to add the ability for users to add to event list and then go to 
// the event details for that specific event. 
const EventsComponent = () => {
  return (
    <div>
      <NavBar />
      <h2> This is the Events List Component </h2>
      <EventsList />
    </div>
  );
};

export default EventsComponent;
