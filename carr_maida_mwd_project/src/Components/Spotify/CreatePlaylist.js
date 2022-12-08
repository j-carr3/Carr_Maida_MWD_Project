import {useState, useEffect} from 'react';
import axios from 'axios';
import Parse from "parse";

function NewPlaylist () {
    const [token, setToken] = useState("")
    const [playlist, setPlaylist] = useState([])
    const [name, setName] = useState("")
    const [user, setUser] = useState("")

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

    const createPlaylist = async (e) => {
        e.preventDefault();
        let data = {}
        data =  await axios.post(`https://api.spotify.com/v1/users/${user}/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            //params: {
           //     user_id: user
           // },
            data:{
                name: "Party Planner Playlist",
                public: true,
                //description: `Playlist for ${Parse.User.current().name}'s event`
            }
        })
        console.log(data)
        setPlaylist(data)

    }

    
    const getUser = async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUser(data.id)
    }


    const renderPlaylist = () => {
        return (
            playlist
        )
    }
    
    
    return (
        <div>
        {token ?
            <div>
            <form onSubmit={createPlaylist} onChange={getUser}>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <button type={"submit"}>Submit</button>
        </form>
            </div>
    
            : <h2>Please login</h2>
        }
        {renderPlaylist()}
        </div>
    );

}

export default NewPlaylist;