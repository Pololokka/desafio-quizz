import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QuizzProvider } from "./Contexts/Quizz.jsx";

import Home from "./Pages/Home/Index.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Quizz from "./Pages/Quizz/Index.jsx";
import Results from "./Pages/Results/Index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quizz",
        element: <Quizz />,
      },
      {
        path: "/resultados",
        element: <Results />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizzProvider>
    <RouterProvider router={router} />
  </QuizzProvider>
);
