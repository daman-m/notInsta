import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import NewUser from "./NewUser";
import UserLogin from "./UserLogin";
import Layout from "../comps/layout";
import Comments from "../comps/posts/comments/Comments"
import Profile from "../comps/profile";
import Users from "../comps/users";
import ErrorPage from "./ErrorPage";


const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all other requests
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(3000, function () {
  console.log('Server started on port 3000');
});


// EXPORTING ROUTES


export const ROOT ="/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const USERDASH = "/protected/mypage";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const ERROR = "*";







// CREATING THE BROWSER ROUTER

//These are the actual route elements that the browser router will use, each element consists of a path and element. The path is the string from above, while the element is the appropriate React component.

export const router = createBrowserRouter([
    {path: ROOT, element: <Home />},
    {path: LOGIN, element: <UserLogin /> },
    {path: REGISTER, element: <NewUser />},
    {path: PROTECTED, element: <Layout />, children:[
        {path: USERDASH, element: <MyPage />},
        {path: USERS, element: <Users/> },
        {path: PROFILE, element: <Profile />},
        {path: COMMENTS, element: <Comments/>},
        {path: ERROR, element: <ErrorPage/>}



    ]}

]);

