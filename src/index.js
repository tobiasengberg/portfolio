import React from "react";
import Home from "./site/home";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Game1} from "./projects/games/1/game1";
import {Game2} from "./projects/games/2/game2";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/game/1",
        element: <Game1 />,
    },
    {
        path: "/game/2",
        element: <Game2 />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);