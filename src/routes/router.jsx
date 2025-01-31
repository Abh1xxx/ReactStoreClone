import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Userlayout from "../Layouts/Userlayout";
import ProductDetails from "../Pages/ProductDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Userlayout />,
        children:[
            {
                path: "",
                element: <App />,
            },
            {
                path: "/productdetails/:id",
                // :id is a dynamic parameter to fetch details of a specific product
                element: <ProductDetails/>,
            },
        ],
    },
    {
        path: "/p",
        element: <App />,
    },
    {
        path: "/a",
        element: <ProductDetails/>,
    },
]);