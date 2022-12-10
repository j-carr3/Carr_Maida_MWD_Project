import React, { useEffect, useState } from "react";
import { createSong, getSongRequests, removeSongRequest } from "../../Services/SpotifyService";
import SongRequestForm from "./SongRequestForm";
import { useNavigate, useParams } from "react-router-dom";
import { getAllEvents } from "../../Services/EventService.js";

const SongRequestCreation = () => {
	const navigate = useNavigate();
    const { eventId } = useParams();
	const [add, setAdd] = useState(false);
	const [load, setLoad] = useState(true);
	const [ songRequests, setSongRequests ] = useState([]);
	const [remove, setRemove] = useState("");

	
    const [newSongRequest, setNewSongRequest] = useState({
		song_title: "",
		song_artist: "",
        event_id: ""
	});

    useEffect(() => {
		if (load) {
			getSongRequests().then((result) => {
				let requestList = result.filter((resultSongs) => resultSongs.get("event_id").id === eventId)
				setSongRequests(requestList);
				setLoad(false);
	
				});

        	getAllEvents().then((result) => {
				let resultEvent = {}
		    	resultEvent = result.find((resultItem) => resultItem.id === eventId);

            	setNewSongRequest({
                	...newSongRequest,
                	event_id: resultEvent
            });
			setLoad(false);

	    }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Frick: ' + error.message);
          });
		}
    }, [newSongRequest, eventId, load]);

	useEffect(() => {
		if (remove.length > 0) {
				//Filter the old lessons list to take out selected lesson
				const newSongRequests = songRequests.filter((item) => item.id !== remove);
				setSongRequests(newSongRequests);
		  
				removeSongRequest(remove).then(() => {
				  console.log("Removed song request with ID: ", remove);
				});
				// Reset remove state variable
				setRemove("");
		}
	}, [songRequests, remove]);

	useEffect(() => {
		if (newSongRequest && add) {
			createSong(newSongRequest).then((songRequestCreated) => {
				if (songRequestCreated) {
					alert(
						`${songRequestCreated.get("song_title")} created!`
					);
				}
				setAdd(false);
				setLoad(true);
			});
		}
	}, [navigate, newSongRequest, add, load]);

	const onChangeHandler = (e) => {
		e.preventDefault();
		const { name, value: newValue } = e.target;

		setNewSongRequest({
			...newSongRequest,
			[name]: newValue
		});
	};

	const onSubmitHandler = (e) => {
        console.log(newSongRequest);
		e.preventDefault();
		setAdd(true);
	};

	return (
		<div>
			<div>		
			{songRequests.length > 0 && (
				<h5>Requested Songs: </h5>
			)}	
			{songRequests.length > 0 && (
				<ol>
					{songRequests.map((request) => (
						<li key={request.id}>
							Song Name: {request.get("song_title")} | Artist: {request.get("song_artist")} 
							<button
						onClick={(e) => {
						  // Set remove variable and trigger re-render
						  setRemove(request.id);
						}}
					  >
						Delete
					  </button>
						</li>
					))}
				</ol>
			)}
		</div>
			<SongRequestForm
				song={newSongRequest}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>
		</div>
	);
};

export default SongRequestCreation;

