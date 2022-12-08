import Parse from "parse";
//import { getById } from "../Components/CreateEvent/EventService.js";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ OPERATION - Read all items
export const getSongRequests = () => {
	const Song = Parse.Object.extend("songs");
	const query = new Parse.Query(Song);

	return query.find().then((result) => {
		return result;
	});
}

// READ OPERATION - Read item based on ID
export const getSongRequestById = (id) => {
	const Song = Parse.Object.extend("songs");
	const query = new Parse.Query(Song);

	return query.find(id).then((result) => {
		return result;
	});
}

export const createSong = (newSongRequest) => {
	const Song = Parse.Object.extend("songs");
	const song = new Song();
	
	song.set("song_title", newSongRequest.song_title);
	song.set("song_artist", newSongRequest.song_artist);
	song.set("event_id", newSongRequest.event_id);

  return song.save()
  .then((songResult) => {
    // Execute any logic that should take place after the object is saved.
    alert('New item created with objectId: ' + songResult.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  });
};
