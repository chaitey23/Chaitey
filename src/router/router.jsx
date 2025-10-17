import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [{
            index: true,
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/projects",
            element: <Projects></Projects>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },




        ]
    },
]);