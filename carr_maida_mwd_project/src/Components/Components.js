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
        <Route path="/" element={<ProtectedRoute path="/" element={Home} />} />
        <Route path="/events" element={Events} />
		<Route path="/auth" element={<AuthModule />} />
		<Route path="/auth/register" element={<AuthRegister />} />
		<Route path="/auth/login" element={AuthLogin />} />
		<Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
