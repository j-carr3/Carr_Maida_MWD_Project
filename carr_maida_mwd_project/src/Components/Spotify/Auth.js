import {useEffect, useState} from 'react';

function SpotifyAuth() {
    const CLIENT_ID = "bec2b3f498794c18bf7c265c3f9a13d5"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPES = ["playlist-modify-public", "playlist-modify-private"]

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

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div>
                {!token ?
                    <div>
                    <p>To use the full functionality of our app, please login to Spotify</p>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    </div>
                    : <button onClick={logout}>Logout</button>
                    }
        </div>
    );
}

export default SpotifyAuth;