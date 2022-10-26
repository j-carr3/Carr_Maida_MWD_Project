import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
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
  </footer>
);

export default Footer;
