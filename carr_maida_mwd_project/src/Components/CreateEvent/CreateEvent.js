import React from "react";
import EventCreation from "./NewEvent.js";
import NavBar from "../Header/MuiHeader2.js";
import Box from '@mui/material/Box';

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventModule = () => {
  return (
    <div>
      <Box m={2} pt={3}>
      <link href="../Styles/fonts.css" type="text/css" rel="stylesheet" />
      <NavBar />
      <br/>
      <h1 class="font">Create a new event! </h1>
      <EventCreation/>
      </Box>
    </div>
  );
};

export default EventModule;
