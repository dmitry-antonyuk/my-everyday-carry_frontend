import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import About from "./page/About/About"
import Home from "./page/Home/Home"
import Content from "./components/Content/Content"
// import './styles/main.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "contact-us",
        element: <div>
            <Content/>
        </div>,
    },
    {
        path: "doctors",
        element: <div>
           <h1>Our doctors list</h1>
            <ul>
                <li>Petro</li>
                <li>Ivan</li>
            </ul>
        </div>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);