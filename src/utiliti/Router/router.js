import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Orders from "../../components/Orders/Orders";


export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home /></PrivateRoute>
            },
            {
                path:'/home',
                element:<PrivateRoute><Home /></PrivateRoute>
            },
            {
                path:"/orders",
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    }
])