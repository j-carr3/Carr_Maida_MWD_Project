import React from "react";
//import EventCreation from "./NewEvent"
import EventCreation from "./NewEvent.js";
//import Header from "../Header/Header.js"
//import ResponsiveAppBar from "../Header/MuiHeader2.js"
import NavBar from "../Header/MuiHeader2.js";


/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventModule = () => {
  return (
    <div>
      <NavBar />
      <h2>Create a new event! </h2>
      <EventCreation/>
    </div>
  );
};

export default EventModule;
