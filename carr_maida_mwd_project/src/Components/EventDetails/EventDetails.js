import React from "react";
// import EventDetailsList from "./EventDetailsList"
import ItemsList from "./ItemsList"

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const EventDetailsModule = () => {
  return (
    <div>
      <h2>This will list the details for all events </h2>
	  <h2>Items</h2>
	  <ItemsList />
    </div>
  );
};

export default EventDetailsModule;
