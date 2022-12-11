import React from "react";
// import EventDetailsList from "./EventDetailsList"
//EventDetailsList will be imported in the future once we build this feature out
import ItemCreation from "./NewItem.js"
import SongRequestCreation from "../Spotify/NewSongRequest";
import NewPlaylist from "../Spotify/CreatePlaylist.js"
import { useParams } from 'react-router-dom';
import NavBar from "../Header/MuiHeader.js";
import AddSong from "../Spotify/AddSongs.js";

/*
 this is the list of all items in the database
 Eventually, you will only be able to see the items for a specific event that you click on, and we will match the items' event_id to the events class
*/
 const EventDetailsModule = () => {

  const { eventId } = useParams();

  return (
    <div>
      <NavBar />
      <h4>Event Details for: {eventId}  </h4>
    <ItemCreation />
    <SongRequestCreation />
    <NewPlaylist />
    <AddSong />
    </div>
  );
};

export default EventDetailsModule;
