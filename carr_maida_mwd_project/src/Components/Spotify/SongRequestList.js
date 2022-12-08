import React, { useEffect, useState } from "react";
import { getSongRequests } from "../../Services/SpotifyService";
import { useParams } from "react-router-dom";

function SongRequestData() {
	const { eventId } = useParams();
	const [songRequests, setSongRequests] = useState([]);
	const [load, setLoad] = useState(true);

	useEffect(() => {
		if(load){
		getSongRequests().then((result) => {
			let requestList = result.filter((resultSongs) => resultSongs.get("event_id").id === eventId)
			setSongRequests(requestList);
			setLoad(false);

			});
		}
	}, [eventId, load]);
	
	return (
		<div>		
			{songRequests.length > 0 && (
				<h5>Requested Songs: </h5>
			)}	
			{songRequests.length > 0 && (
				<ol>
					{songRequests.map((request) => (
						<li key={request.id}>
							Song Name: {request.get("song_title")} | Artist: {request.get("song_artist")} 
						</li>
					))}
				</ol>
			)}
		</div>
	);
}

export default SongRequestData;
