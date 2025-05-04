import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import NewsSection from "../pages/NewsSection";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "news/:id",
                Component: NewsSection,
                loader: ()=> fetch('/news.json'),
            }
        ]
    },
    {
        path: "/*",
        element: <div className="text-center mt-5"><h1 className="text-3xl font-bold">404 Not Found</h1></div>
    }
])

export default router; 