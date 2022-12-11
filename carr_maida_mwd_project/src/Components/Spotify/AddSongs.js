import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { getAllPlaylists } from '../../Services/SpotifyService';

function AddSong () {
    const { eventId } = useParams();
    const [playlistId, setPlaylistId] = useState("")
    const [token, setToken] = useState("");
    const [load, setLoad] = useState(true);
    const [initTrack, setInitTrack] = useState({
        track_name: "",
        track_artist: ""
    })
    const [track, setTrack] = useState({
        track_name: "",
        track_artist: "",
        track_uri: ""
    });

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    useEffect(() => {
        if (load) {
        getAllPlaylists().then((result) => {
            let resultPlaylist = {}
            resultPlaylist = result.find((resultPlaylist) => resultPlaylist.get("playlist_event").id === eventId);
            
            setPlaylistId(resultPlaylist.get("playlist_id"));
            setLoad(false);

        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
        });
        }
    }, [playlistId, eventId, load]);

    const searchTracks = async (e) => {
        console.log("here")
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: initTrack.track_name,
                type: "track",
                limit: 20
            }
        })
        e.preventDefault();
        for (var item in data.tracks) {
            if (item.album.artists.name === initTrack.track_artist) {
                setTrack({
                    ...track,
                    track_name: initTrack.track_name, 
                    track_artist: initTrack.track_artist,
                    track_uri: item.uri
                });
                break;
            }
        }

        addSong(track);

    }

    const addSong = async(track) => {
        try  {
            const headersCust = {
                Authorization: `Bearer ${token}`
            }
            const params = {
                playlist_id: playlistId,
                uris: track.track_uri
            }
            const {data} =  await axios.post(`	https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                params,{
                headers: headersCust
            })
            alert("Added track: " + track.track_uri)
}

        catch {
            alert('Error: Could not find song');
        }

    }


    return (
        <div>
            <h2>Add songs to your playlist</h2>
        {token ?
            <div>
            <form onSubmit={searchTracks}>
            <label>Song Name: </label>
            <input type="text" onChange={e => setInitTrack({
                ...initTrack,
                track_name: e.target.value,
            })}/>
            <div></div>
            <label>Song Artist: </label> 
            <input type="text" onChange={e => setInitTrack({
                ...initTrack,
                track_artist: e.target.value,
            })}/>
            <button type={"submit"}>Add Song to Playlist</button>
        </form>
            </div>
    
            : <h2>Please login</h2>
        }
      
        </div>
    );

}

export default AddSong;

