import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ProjectDetails from "../Components/ProjectsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [{
            index: true,
            element: <Home></Home>
        },
        {
            path: "/project/:id",
            element: <ProjectDetails></ProjectDetails>
        }
        ]
    },
]);