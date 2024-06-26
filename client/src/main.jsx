import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScrollProvider } from "./context/noScroll";

import App from "./App";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Classes from "./pages/Classes";
import Bestiary from "./pages/Bestiary";
import Spells from "./pages/Spells";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rules",
        element: <Rules />,
        loader: () => fetch("https://www.dnd5eapi.co/api/rules"),
      },
      {
        path: "/classes",
        element: <Classes />,
        loader: (() => fetch('https://www.dnd5eapi.co/api/classes'))
      },
      {
        path: "/bestiary",
        element: <Bestiary />,
        loader: () =>
          fetch(
            "https://api.open5e.com/v1/monsters/?document__slug=wotc-srd&limit=500"
          ),
      },
      {
        path: "/spells",
        element: <Spells />,
        loader: () => fetch("https://www.dnd5eapi.co/api/spells"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  </React.StrictMode>
);
