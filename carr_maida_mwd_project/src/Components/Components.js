import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Events from "./Events/Events";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/events" element={Events} />
      </Routes>
      <Footer />
    </Router>
  );
}
