import Header from "../Header/Header.js"
import SpotifyAuth from "../Spotify/Auth.js"


export default function Home() {
    return (
      <section>
        <Header />
        <h1>Welcome to the Home component</h1>
        <p>This is the home component</p>
        <p>To use the full functionality of our app, please login to Spotify</p>
        <SpotifyAuth />
      </section>
    );
}
  