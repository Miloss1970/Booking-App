import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booking from "./page/booking/Booking.jsx";
import SidebarWrapper from "./components/wrapper/SideBarWrapper.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import User from "./page/user/User.jsx";
import Login from "./page/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SidebarWrapper>
        <App />
      </SidebarWrapper>
    ),
  },

  {
    path: "/booking",
    element: (
      <SidebarWrapper>
        <Booking />
      </SidebarWrapper>
    ),
  },
  {
    path: "/user",
    element: (
      <SidebarWrapper>
        <User />
      </SidebarWrapper>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
