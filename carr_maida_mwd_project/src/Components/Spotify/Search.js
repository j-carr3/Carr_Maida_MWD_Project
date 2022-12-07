import {useState, useEffect} from 'react';
import axios from 'axios';


function SpotifySearch() {

    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
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

    const searchTracks = async (e) => {
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

        setTracks(data.tracks.items)
    }

//<form onSubmit={searchSongs}>
//    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
 //   <button type={"submit"}>Search</button>
//</form>

const renderTracks = () => {
    return tracks.map(track => (
        <div key={track.id}>
            {track.album.images.length ? <img width={"25%%"} src={track.album.images[0].url} alt=""/> : <div>No Image</div>}
            {track.name}
            {track.artists.name}
        </div>
    ))
}


return (
    <div>
    {token ?
        <form onSubmit={searchTracks}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>

        : <h2>Please login</h2>
    }

    {renderTracks()}
    </div>
);

}

export default SpotifySearch;