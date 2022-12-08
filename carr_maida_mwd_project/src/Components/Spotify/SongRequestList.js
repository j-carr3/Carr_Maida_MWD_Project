import React, { useEffect, useState } from "react";
import { getSongRequests } from "../../Services/SpotifyService";
import { useParams } from "react-router-dom";

function SongRequestData() {
	const { eventId } = useParams();
	const [songRequests, setSongRequests] = useState([]);

	useEffect(() => {
		getSongRequests().then((result) => {
			setSongRequests(result);
		});
	}, []);

	//display all the items for now
	//in the future, we will display only the ones for the current event	
	return (
		<div>
			<h5>Requested songs for: {eventId}</h5>
		
			
			{songRequests.length > 0 && (
				<ol>
					{songRequests.map((request) => (
						<li key={request.objectId}>
							Song Name: {request.get("song_title")} | Artist: {request.get("song_artist")} 
						</li>
					))}
				</ol>
			)}
		</div>
	);
}

export default SongRequestData;
