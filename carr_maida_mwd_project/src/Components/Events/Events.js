import React from "react";
import EventsList from "./EventsList.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventsComponent = () => {
  return (
    <div>
      <h2> This is the Events List Component </h2>
      <EventsList />
    </div>
  );
};

export default EventsComponent;
