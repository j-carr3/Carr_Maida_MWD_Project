import NavBar from "../Header/MuiHeaderHome.js"
import SpotifyAuth from "../Spotify/Auth.js"


export default function Home() {
    return (
      <section>
        <NavBar />
        <h1>Welcome to the EventMate Home Page</h1>
        <p>Navigate to your desired page.</p>
        <SpotifyAuth />
      </section>
    );
}
  