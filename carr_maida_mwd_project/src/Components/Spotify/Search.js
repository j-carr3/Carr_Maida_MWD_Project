import {useState, useEffect} from 'react';
import axios from 'axios';


function SpotifySearch() {

    const [searchKey, setSearchKey] = useState("")
    const [songs, setSongs] = useState([])
    const [token, setToken] = useState("")

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

    const searchSongs = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setSongs(data.songs.items)
    }

//<form onSubmit={searchSongs}>
//    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
 //   <button type={"submit"}>Search</button>
//</form>

const renderSongs = () => {
    return songs.map(song => (
        <div key={song.id}>
            {song.images.length ? <img width={"100%"} src={song.images[0].url} alt=""/> : <div>No Image</div>}
            {song.name}
        </div>
    ))
}


return (
    <div>
    {token ?
        <form onSubmit={searchSongs}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>

        : <h2>Please login</h2>
    }

    {renderSongs()}
    </div>
);

}

export default SpotifySearch;