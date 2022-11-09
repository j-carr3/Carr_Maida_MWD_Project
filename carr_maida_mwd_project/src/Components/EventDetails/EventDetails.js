import React from "react";
// import EventDetailsList from "./EventDetailsList"
//EventDetailsList will be imported in the future once we build this feature out
import ItemsList from "./ItemsList"
import Header from "../Header/Header.js"


/*
 this is the list of all items in the database
 Eventually, you will only be able to see the items for a specific event that you click on, and we will match the items' event_id to the events class
*/
 const EventDetailsModule = () => {
  return (
    <div>
      <Header />
      <h2>This will list the details for all events </h2>
	  <h2>Items</h2>
	  <ItemsList /> 
    </div>
  );
};

export default EventDetailsModule;
