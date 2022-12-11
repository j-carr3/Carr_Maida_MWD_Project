import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { getAllPlaylists } from '../../Services/SpotifyService';
import Parse from "parse";
import { getAllEvents } from '../../Services/EventService';

function AddSong () {
    const { eventId } = useParams();
    const [playlistId, setPlaylistId] = useState("")
    const [token, setToken] = useState("");
    const [load, setLoad] = useState(true);
    const [hostUser, setHostUser] = useState("");
    const [initTrack, setInitTrack] = useState({
        track_name: "",
        track_artist: ""
    })
    

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
        e.preventDefault();
        console.log("here");
        console.log(initTrack.track_name);
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


        for (var item in data.tracks.items) {
            if (data.tracks.items[item].album.artists[0].name === initTrack.track_artist) {
                const headersCust = {
                    Authorization: `Bearer ${token}`
                }
                const params = {
                    uris: [data.tracks.items[item].uri]
                }
                const {data2} =  await axios.post(`	https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                    params,{
                    headers: headersCust
                })
                alert("Added track: " + data.tracks.items[item].uri)

                break;
            }

        }


    }

    useEffect(() => {
        if (load) {
        getAllEvents().then((result) => {
            let resultEvent = {}
            resultEvent = result.find((result) => result.id === eventId);
            
            setHostUser(resultEvent.get("host").id);
            console.log(resultEvent.get("host").id);
            setLoad(false);

        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
        });
        }
        setLoad(false);
    }, [hostUser, eventId, load]);


    return (
        <div>
        {token && (Parse.User.current().id === hostUser) ?
            <div>
            <h2>Add songs to your playlist</h2>
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
    
            : <>  {!token && (Parse.User.current().id === hostUser) ?                
                <div>
                <h3>Host: Please go to the home page and re-login with your spotify to use this feature.</h3>
                </div>

                : null
            }
        </>
        }
      
        </div>
    );

  
}

export default AddSong;

