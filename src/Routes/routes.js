import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import NewUser from "./NewUser";
import UserLogin from "./UserLogin";
import Layout from "comps/layout";


// EXPORTING ROUTES


export const ROOT ="/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const USERDASH = "/protected/mypage";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";



// CREATING THE BROWSER ROUTER

//These are the actual route elements that the browser router will use, each element consists of a path and element. The path is the string from above, while the element is the appropriate React component.

export const router = createBrowserRouter([
    {path: ROOT, element: <Home />},
    {path: LOGIN, element: <UserLogin /> },
    {path: REGISTER, element: <NewUser />},
    {path: PROTECTED, element: <Layout />, children:[
        {path: USERDASH, element: <MyPage />},
        {path: USERS, element: "users"},
        {path: PROFILE, element: "User PROFILE"},



    ]}

]);

