import React, { useEffect, useState } from "react";
import { createSong } from "../../Services/SpotifyService";
import SongRequestForm from "./SongRequestForm";
import { useNavigate, useParams } from "react-router-dom";
import { getAllEvents } from "../../Services/EventService.js";

const SongRequestCreation = () => {
	const navigate = useNavigate();
    const { eventId } = useParams();
	const [add, setAdd] = useState(false);
	const [load, setLoad] = useState(true);
	
    const [newSongRequest, setNewSongRequest] = useState({
		song_title: "",
		song_artist: "",
        event_id: ""
	});

    useEffect(() => {
		if (newSongRequest && load) {

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
		console.log("submitted: ", e.target);
		setAdd(true);
	};

	return (
		<div>
			<SongRequestForm
				song={newSongRequest}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>
		</div>
	);
};

export default SongRequestCreation;

