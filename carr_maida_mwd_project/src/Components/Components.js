import Home from "./Home/Home";
import Header from "./Header/Header";
import Events from "./Events/Events";
import CreateEvent from "./CreateEvent/CreateEvent";
import EventDetails from "./EventDetails/EventDetails"
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
        <Route path="/" element={<ProtectedRoute path="/" element={Home} />} />
        <Route path="/events" element={Events} />
		    <Route path="/auth" element={<AuthModule />} />
		    <Route path="/auth/register" element={<AuthRegister />} />
		    <Route path="/auth/login" element={AuthLogin />} />
		    <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
