import Home from "./Home/Home";
import Events from "./Events/Events";
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import CreateEvent from "./CreateEvent/CreateEvent";
import EventDetails from "./EventDetails/EventDetails"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

//Protected Routes are added on all pages past the authorization page

//Even though users automatically start on the auth page, they should not be able to access any other pages even with the correct link when the page is protected

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute path="/" element={Home} />} />
		    <Route path="/auth" element={<AuthModule />} />
		    <Route path="/auth/register" element={<AuthRegister />} />
		    <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/eventDetails" element={<EventDetails />} />
		    <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

//In the future, we could add Protected Routes to specific event pages, where the user can only access events if they are invited to that event
