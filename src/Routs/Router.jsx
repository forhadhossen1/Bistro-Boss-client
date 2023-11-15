import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/Menu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivetRouts from "./PrivetRouts";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/Home/UserHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path : '/secret',
                element : <PrivetRouts> <Secret></Secret></PrivetRouts>
            }
        ]
    },
    {
        path : '/login',
        element: <Login></Login>
    },
    {
        path : '/signUp',
        element:<SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : 'cart',
                element: <Cart></Cart>
            },
            {
                path : 'userHome',
                element: <UserHome></UserHome>
            }
        ]
    }
]);

export default router