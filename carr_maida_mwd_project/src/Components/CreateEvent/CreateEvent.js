import React from "react";
import EventList from "./CreateEventList"

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventModule = () => {
  return (
    <div>
      <h2>Create a new event! </h2>
      <EventList />
    </div>
  );
};

export default EventModule;
