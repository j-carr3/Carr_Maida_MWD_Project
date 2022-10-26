import React from "react";
import EventsList from "./EventsList.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventsComponent = () => {
  return (
    <div>
      <EventsList />
    </div>
  );
};

export default EventsComponent;
