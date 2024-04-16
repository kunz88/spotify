// adesso creiamo il router per instradare le nostre pagine renderizzandole all'interno della SPA

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SideList from "../components/SideList/SideList";
import DetailsComponent from "../components/DetailsPage/DetailsComponent";
import AuthComponent from "../components/Authentication/AuthComponent/AuthComponent";
import SignUp from "../components/Authentication/Signup/SignUp";
import Login from "../components/Authentication/Login/Login";




// CREAIAMO UN ROUTER CON TUTTE LE ROTTE DA INSTRADARE

export const router = createBrowserRouter([
    {
        path: '/', // possiamo avere route innestate
        element: <App />,
        children: [
            {
                path: '',
                element: <SideList/>
            },
            {
                path: 'details/:id',
                element: <DetailsComponent/>
            },



        ]
    },
    {
        path: '/auth',
        element: <AuthComponent/>,
        children: [
            {
                path: '/auth/signup',
                element: <SignUp/>
            },
            {
                path: '/auth/login',
                element: <Login/>
            },



        ]
    }
])