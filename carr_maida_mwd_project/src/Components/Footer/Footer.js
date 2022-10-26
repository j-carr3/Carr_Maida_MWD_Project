import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
