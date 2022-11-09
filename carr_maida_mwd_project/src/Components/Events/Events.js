import React from "react";
import EventsList from "./EventsList.js";
import { Link } from "react-router-dom";
import Header from "../Header/Header.js"



/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventsComponent = () => {
  return (
    <div>
      <Header />
      <h2> This is the Events List Component </h2>
      <EventsList />
      <p> View event details</p>
      <nav>
      <ul>
        <li>
            <Link to="/eventDetails">Event Details</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default EventsComponent;
