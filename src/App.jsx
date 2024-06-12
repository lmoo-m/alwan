import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/layanan",
            element: <Layanan />,
        },
        {
            path: "/kontak",
            element: <Kontak />,
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
