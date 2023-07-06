import React from "react";
import Home from "./site/home";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import {Game1} from "./projects/1/game1";
import {Game2} from "./projects/2/game2";
import "./index.css";
import {Design1} from "./projects/3/design1";
import {Api1} from "./projects/4/api1";

const router = createHashRouter([
    {
        path: "#/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "#/project-1",
        element: <Game1 />,
    },
    {
        path: "#/project-2",
        element: <Game2 />,
    },
    {
        path: "#/project-3",
        element: <Design1 />,
    },
    {
        path: "#/project-4",
        element: <Api1 />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);