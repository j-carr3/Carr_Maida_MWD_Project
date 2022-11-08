import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
            <Link to="/CreateEvent">Create New Event</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
