import { lazy } from "react";


//---------------------------
// imports
//---------------------------
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const BrowseEmployee = lazy(() => import("@pages/BrowseEmployee"));
const SingleEmployers = lazy(() => import("@pages/SingleEmployers"));
const BrowseCandidate = lazy(() => import("@pages/BrowseCandidate"));



//---------------------------
// exports
//---------------------------
export const routes_here = [
    {
        path: "/",
        element: <Home />,
        isPrivate: false,
    },
    {
        path: "/login",
        element: <Login />,
        isPrivate: false,
    },
    ,
    {
        path: "/browseemployyee",
        element: <BrowseEmployee />,
        isPrivate: false,
    },
    ,
    {
        path: "/SingleEmployers",
        element: <SingleEmployers />,
        isPrivate: false,
    },
    {
        path: "/BrowseCandidate",
        element: <BrowseCandidate />,
        isPrivate: false,
    },
    //routes in objects
];