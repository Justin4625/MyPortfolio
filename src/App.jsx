import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([{
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/projecten",
            element: <Projects />
        },
        {
            path: "/ervaring",
            element: <Experience />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        { basename: "/MyPortfolio" }
    ]
}]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
