import React from "react";
// import EventDetailsList from "./EventDetailsList"
//EventDetailsList will be imported in the future once we build this feature out
import ItemsList from "./ItemsList"

const EventDetailsModule = () => {
  return (
    <div>
      <h2>This will list the details for all events </h2>
	  <h2>Items</h2>
	  <ItemsList /> //this is the list of all items in the database
	  				// Eventually, you will only be able to see the items for a specific event that you click on, and we will match the items' event_id to the events class
    </div>
  );
};

export default EventDetailsModule;
