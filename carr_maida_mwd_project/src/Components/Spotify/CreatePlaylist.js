import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { createNewPlaylist } from "../../Services/SpotifyService.js";
import { getAllEvents } from "../../Services/EventService.js";
import Parse from 'parse';

function NewPlaylist () {
    const [token, setToken] = useState("")
    //const [playlist, setPlaylist] = useState([])
    const [name, setName] = useState("")
    const [user, setUser] = useState("")
    const { eventId } = useParams();
    const [load, setLoad] = useState(true);
    const [add, setAdd] = useState(false);
    const [hostUser, setHostUser] = useState("");

    const [newPlaylist, setNewPlaylist] = useState({
		playlist_name: "",
		playlist_id: "",
		playlist_event: ""
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
        getAllEvents().then((result) => {
			let resultEvent = {}
		    resultEvent = result.find((resultPlaylist) => resultPlaylist.id === eventId);

            setNewPlaylist({
                ...newPlaylist,
                playlist_event: resultEvent
            });
			setLoad(false);

	    }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
          });
		}
    }, [newPlaylist, eventId, load]);

    const createPlaylist = async (e) => {
        const headersCust = {
            Authorization: `Bearer ${token}`
        }
        const params = {
            name: name,
            public: true,
            //description: `Playlist for ${Parse.User.current().name}'s event`
        }
        e.preventDefault();
        console.log({token})
        const {data} =  await axios.post(`https://api.spotify.com/v1/users/${user}/playlists`,
            params,{
            headers: headersCust
        })

        console.log(name)
        console.log(data.id)

        setNewPlaylist({
            ...newPlaylist,
            playlist_name: name,
            playlist_id: data.id
        })

        setAdd(true);
		setLoad(true);

        console.log(newPlaylist)

    }

    useEffect(() => {
		if (newPlaylist && add) {
			createNewPlaylist(newPlaylist).then((playlistCreated) => {
				if (playlistCreated) {

					// alert(
					// 	`${itemCreated.get("item_name")} created!`
					// );
				}
				setAdd(false);
			});
		}
	}, [newPlaylist, add]);

    const getUser = async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUser(data.id)
    }

    useEffect(() => {
        if (load) {
        getAllEvents().then((result) => {
            let resultEvent = {}
            resultEvent = result.find((result) => result.id === eventId);
            
            setHostUser(resultEvent.get("host").id);
            console.log(resultEvent.get("host").id)
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
            <h2>Create a playlist for your event!</h2>
            <form playlist = {newPlaylist} onSubmit={createPlaylist} onChange={getUser}>
                <label>Playlist Name: </label>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <button type={"submit"}>Submit</button>
        </form>
            </div>
    
            :   <div>
                    <h2>Only the host can create a playlist for this event</h2>
                    <h3>If you are the host: please go to the home page and re-login with your spotify to use this feature.</h3>
                </div>
        }
      
        </div>
    );

}

export default NewPlaylist;