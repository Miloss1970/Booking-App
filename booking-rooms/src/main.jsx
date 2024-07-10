import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rooms from "./page/rooms/Rooms.jsx";
import Booking from "./page/booking/Booking.jsx";
import SidebarWrapper from "./components/wrapper/SideBarWrapper.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

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
    path: "/rooms",
    element: (
      <SidebarWrapper>
        <Rooms />
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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
