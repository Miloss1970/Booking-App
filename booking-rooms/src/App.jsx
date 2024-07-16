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
import SidebarWrapper from "./components/wrapper/SideBarWrapper";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <SidebarWrapper>
              <Home />
            </SidebarWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking"
          element={
            <SidebarWrapper>
              <Booking />
            </SidebarWrapper>
          }
        />
        <Route
          path="/user"
          element={
            <SidebarWrapper>
              <User />
            </SidebarWrapper>
          }
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
