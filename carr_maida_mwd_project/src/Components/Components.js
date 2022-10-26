import Home from "./Home/Home";
import Header from "./Header/Header";
import Events from "./Events/Events";
import CreateEvent from "./CreateEvent/CreateEvent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  );
}
