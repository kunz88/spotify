// adesso creiamo il router per instradare le nostre pagine renderizzandole all'interno della SPA

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SideList from "../components/SideList/SideList";




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



        ]
    },
]) // il nostro costruttore del router prende come argomento un array di routes 