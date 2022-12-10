import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function AddSong () {
    const { eventId } = useParams();
    const [playlist, setPlaylist] = useState("")
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
            resultPlaylist = result.find((resultPlaylist) => resultPlaylist.playlist_event === eventId);

            setPlaylist(resultPlaylist.playlist_id);

            setLoad(false);

        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
        });
        }
    }, [playlist, eventId, load]);

    const searchTracks = async (song_title, song_artist) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: song_title,
                type: "track",
                limit: 20
            }
        })

        for (var item in data.tracks) {
            if (item.album.artists.name === song_artist) {
                setTrack({
                    ...track,
                    track_name: song_title, 
                    track_artist: song_artist,
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
                playlist_id: playlist,
                uris: track.track_uri
            }
            e.preventDefault();
            const {data} =  await axios.post(`	https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
                params,{
                headers: headersCust
            })
    }

        catch {
            alert('Error: Could not find song' + error.message);
        }

    }

}

export default AddSong;

