import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import About from "./components/page/About/About"
import Clocksss from "./components/page/Clocksss/Clocksss";
import Hook from "./components/Hook/Hook"


import "./components/Hook/Hook.css"

import "./index.css"
import "./components/Hook/Hook.css"




const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <br/>
                <Link to="Clocksss">Clocksss</Link>
                <br/>
                <Link to="Hook">Hook</Link>
                <br/>
                <Link to="about">About Us</Link>
                <br/>
                <Link to="contact-us">Contact Us</Link>
                <br/>
                <Link to="doctors">Our doctors</Link>
                
            </div>
        ),
    },


    {
        path: "Hook",
        element: <Hook/>,
    },


    {
        path: "Clocksss",
        element: <Clocksss/>,
    },

    {
        path: "about",
        element: <About/>,
    },

    {
        path: "contact-us",
        element: <div>

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