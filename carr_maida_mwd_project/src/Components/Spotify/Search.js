import {useState} from 'react';
import axios from 'axios';
import token from "./Auth.js";

function SpotifySearch() {

    const [searchKey, setSearchKey] = useState("")
    const [songs, setSongs] = useState([])

    const searchSongs = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("http://https://api.spotify.com/v1/search", {
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

<form onSubmit={searchSongs}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form>

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