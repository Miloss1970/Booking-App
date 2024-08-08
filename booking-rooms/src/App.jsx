import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Booking from "./page/booking/Booking";
import User from "./page/user/User";
import AppLayout from "./page/applayout/AppLayout";
import ProtectedRoute from "./utills/protectedRoute/ProtectedRoute";
import DetailBooking from "./page/detailBooking/DetailBooking";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/detailsBooking/:id" element={<DetailBooking />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
