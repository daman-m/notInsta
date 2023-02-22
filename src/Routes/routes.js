import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

export const ROOT ="/"

export const router = createBrowserRouter([
    {path: ROOT, element:<Home/>}
]);

