import React from "react";
import EventsList from "./EventsList.js";
import NavBar from "../Header/MuiHeader.js"
import Box from '@mui/material/Box';

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
// We still need to add the ability for users to add to event list and then go to 
// the event details for that specific event. 
const EventsComponent = () => {
  return (
    <div>
      <Box m={2} pt={3}>
      <link href="../Styles/fonts.css" type="text/css" rel="stylesheet" />
      <NavBar />
      <EventsList />
      </Box>
    </div>
  );
};

export default EventsComponent;
