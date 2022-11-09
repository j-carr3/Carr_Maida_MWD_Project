import React from "react";
import EventList from "./CreateEventList"
import Header from "../Header/Header.js"

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventModule = () => {
  return (
    <div>
      <Header />
      <h2>Create a new event! </h2>
      <EventList />
    </div>
  );
};

export default EventModule;
