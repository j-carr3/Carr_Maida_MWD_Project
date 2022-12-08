import React from "react";
// import EventDetailsList from "./EventDetailsList"
//EventDetailsList will be imported in the future once we build this feature out
import ItemsList from "./ItemsList"
import ItemCreation from "./NewItem.js"
import Header from "../Header/Header.js"
import SpotifySearch from "../Spotify/Search.js"
import NewPlaylist from "../Spotify/CreatePlaylist.js"

import { useParams } from 'react-router-dom';

/*
 this is the list of all items in the database
 Eventually, you will only be able to see the items for a specific event that you click on, and we will match the items' event_id to the events class
*/
 const EventDetailsModule = () => {

  const { eventId } = useParams();

  return (
    <div>
      <Header />
      <h4>This will list the details for event: {eventId}  </h4>
    <ItemCreation />
	  <ItemsList /> 
    <NewPlaylist />
    <SpotifySearch />
    </div>
  );
};

export default EventDetailsModule;
