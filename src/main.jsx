import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { isUserLoggedIn } from "./services/AuthService.js";
import App from "./App.jsx";
import Book from "./pages/Book.jsx";
import CreateFlight from "./pages/CreateFlight.jsx";
import Flight from "./pages/Flight.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./index.css";

function AuthenticatedRoute({ children }) {
  const isAuth = isUserLoggedIn();

  if (isAuth) {
    return children;
  }

  return <Navigate to="/" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/registration", element: <Register /> },
      {
        path: "/home",
        element: (
          <AuthenticatedRoute>
            <Home />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/book",
        element: (
          <AuthenticatedRoute>
            <Book />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/flight",
        element: (
          <AuthenticatedRoute>
            <Flight />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/create-flight",
        element: (
          <AuthenticatedRoute>
            <CreateFlight />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/update-flight/:id",
        element: (
          <AuthenticatedRoute>
            <CreateFlight />
          </AuthenticatedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
