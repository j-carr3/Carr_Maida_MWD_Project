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

<<<<<<< HEAD
//Added a Protected Route for all pages beyond the auth page so the user can only get to these pages if they are registered and logged in

//It is important that we added this Protected Route to all of the different pages because even though the user automatticaly starts on the authorization page, they make be able to add something to the link to try to get to a different page even though they are not registered
=======
//Protected Routes are added on all pages past the authorization page

//Even though users automatically start on the auth page, they should not be able to access any other pages even with the correct link when the page is protected

>>>>>>> 417950e3a79b808acd81fb56c73c07c48176923c
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute path="/" element={Home} />} /> 
		<Route path="/auth" element={<AuthModule />} />
		<Route path="/auth/register" element={<AuthRegister />} />
		<Route path="/auth/login" element={<AuthLogin />} />
       	<Route path="/events" element={<ProtectedRoute path="/" element={Events} />} />
        <Route path="/createEvent" element={<ProtectedRoute path="/" element={CreateEvent} />} />
        <Route path="/eventDetails" element={<ProtectedRoute path="/" element={EventDetails} />} />
		<Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD

// in the future we could add a protected route to certain event pages based on if you are invited to them or not so that users cannot access event pages to the events they are not apart of
=======
//In the future, we could add Protected Routes to specific event pages, where the user can only access events if they are invited to that event
>>>>>>> 417950e3a79b808acd81fb56c73c07c48176923c
